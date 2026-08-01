import React, { useEffect, useState } from "react";
import "./App.css"
const App = () => {
  let [data, setData] = useState([]);
  let [control, setControl] = useState(0);
  let [searchB, setB] = useState("");

  useEffect(() => {
    console.log("fetching data...");
    data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
    console.log("data fetched");
  }, []);
  let newdata = [];
  if (control == 0) {
    newdata = data.filter((dtp) => {
      return dtp.completed == true;
    });
  } else {
    newdata = data.filter((dtp) => {
      return dtp.userId == control;
    });
  }
  if (searchB) {
    newdata = data.filter((dtp) => {
      return dtp.title == searchB;
    });
  }

  function refresh(id) {
    setData(data.filter((dt) => dt.id != id));
  }

  return (
    <>
      <nav>
        <ul>
          <li
            onClick={() => {
              setControl(1);
            }}
          >
            user1
          </li>
          <li
            onClick={() => {
              setControl(2);
            }}
          >
            user2
          </li>
          <li
            onClick={() => {
              setControl(3);
            }}
          >
            user3
          </li>
        </ul>
      </nav>
      <input
        onChange={(e) => {
          setB(e.target.value);
        }}
        value={searchB}
      ></input>
      <div className="cpData">
        {newdata.map((val, idx) => {
          return (
            <div className="box" key={`dt-${idx}`}>
              <h4>id : {val.id}</h4>
              <h3>title : {val.title}</h3>
              <button
                onClick={() => {
                  refresh(val.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <h1>TOP 10 :</h1>
      <div className="topTen">
        {data.slice(0, 10).map((val, idx) => {
          return (
            <div className="subTopTenBox" key={`top=${idx}`}>
              <h3>id : {val.userId}</h3>
              <h3>name : {val.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
