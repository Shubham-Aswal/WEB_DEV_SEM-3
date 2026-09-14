import express from "express";
import bcryptjs from "bcryptjs";
import { User } from "./models/user.models.js";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();
import cookieParser from "cookie-parser";
import Order from "./models/order.models.js";
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// this file contains content of class 13 and 14

mongoose.connect("mongodb://localhost:27017/vedamTest").then(() => {
  console.log("connected to db....");
});

app.post("/signup", async (req, res) => {
  let { name, email, passWord, role } = req.body;
  let findData = await User.findOne({ email });
  console.log(findData, "hjehehe");

  if (findData) {
    return res.send("user jinda haii....");
  } else {
    let updateddP = await bcryptjs.hash(passWord, 10);
    console.log(updateddP, "dekhoooooo");

    let UserInfo = new User({
      name,
      email,
      password: updateddP,
      role: role || "user",
    });
    await UserInfo.save();
    return res.send("user creaated");
  }
});
const auth = async (req, res, next) => {
  let token = req.headers.authorization || req.cookies?.accessToken;
  console.log(token);
  if (!token) {
    return res.send("invalid access...");
  }
  let data = jwt.verify(token, "abcdefgh");
  console.log(data);
  let user = await User.findOne({ email: data.email }).select("-password");
  req.user = user;
  next();
};
function roleCheck(Role) {
  return (req, res, next) => {
    let role = req.user?.role;
    console.log(role);
    if (Role != role) {
      return res.status(403).send("unauthorized user .. ");
    }
    next();
  };
}

app.post("/login", async (req, res) => {
  let { email, passWord } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    res.send("user already exist");
  }
  try {
    let checkPassword = bcryptjs.compare(passWord, user.password);
    if (!checkPassword) {
      res.send("invalid password");
    }
  } catch {
    res.send("password not valid");
  }
  let wbToken = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    "abcdefgh",
  );
  let options = {
    httpOnly: true,
  };
  res.cookie("accessToken", wbToken, options);
  res
    .status(200)
    .json({ msg: "user loggedin successfully", data: { wbToken } });
});

app.get("/api", auth, roleCheck("admin"), (req, res) => {
  res.send("api access granted");
});

app.get("/me", auth, async (req, res) => {
  let data = req.user;
  res.send(data);
});

// t 1
app.put("/me", auth, async (req, res) => {
  const { newName } = req.body;
  console.log("data forward ", req.user);
  const user = await User.findByIdAndUpdate(req.user._id, {
    name: newName,
  }).select("-password");
  console.log(user);
  if (!user) {
    res.send("unable to update user name");
  }

  res.send(user);
});
//  t 2
app.patch("/users/:id/role", auth, roleCheck("admin"), async (req, res) => {
  let { id } = req.params;
  let { newRole } = req.body;
  let user = await User.findByIdAndUpdate(id, { role: newRole }, { new: true });
  if (!user) {
    return res.status(404).send("invalid user");
  }
  res.send("role updated successfully");
});
//  t 3
app.post("/orders", auth, async (req, res) => {
  let { productname, amount } = req.body;
  let order = await Order.create({
    productName: productname,
    amount,
    userId: req.user?._id || undefined,
  });
  if (!order) {
    return res.status(422).json({ msg: "unable to create order" });
  }
  return res.status(200).json(order);
});

// t 4
app.get("/my-orders", auth, async (req, res) => {
  let data = await Order.find({ userId: req.user._id });
  if (!data) {
    return res.status(422).json({ msg: "unable to fetch orders" });
  }
  return res.status(200).json({ data: data });
});

// t 5
// app.get('/users/:id', auth, async (req,res) =>                                               
//  {id} = req.params *  // in this api the id was not being captured from the url so we use params to capture it
// let user = await User.findById(req.params.id); return* res.json(user); });  // here the error is that the resonse is not beinig returned since we ddint use the send method we need to return the response
// app.put('/role', auth, async (req,res) => 
// { let {role} = req.body; await User.findbyIdandUpdate(req.user._id,{role});* res.send('updated'); }); // the actual user data is not being updated here rather the data present in the request object is being update
//  app.get('/my-orders', auth, async (req,res) => 
// { let orders = await Order.find({userId : req.user_id}); res.json(orders); }); // here the parameter required to find the perticular objects is missing

app.listen(3000, () => {
  console.log("server......");
});
