import React, { useEffect, useState } from 'react'

const App = () => {
  const [value, setV] = useState("");
  const [dataSet, setD] = useState([]);
  const [fetchD,setF] = useState([]);
  const[catt,setC] = useState([])
  const fetchData = () => {
    if (value.trim() === "") {
      alert("kuch khareed  le gareeb");
      return;
    }

    console.log("fetched");

    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setD(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{setF(data.products)})
  },[])
  function order(val){

    if(val == "asc"){
       
      
      setF([...fetchD].sort((a,b)=>{return a.price - b.price }))

    }
    else{
      setF([...fetchD].sort((a,b)=>{return   b.price -a.price  }))

    }

   

  }
  function categorizeData(val){
     return fetchD.filter((dt)=>{
      return dt.category == `${val}`
     }) || [];
  }
  

  return (
    <div className="cyber-shell">
      <style>{`
        body {
          margin: 0;
          background: #03040a;
          font-family: 'Segoe UI', sans-serif;
        }
        .cyber-shell {
          min-height: 100vh;
          padding: 24px;
          box-sizing: border-box;
          background: radial-gradient(circle at top left, #201045 0%, #06070f 45%, #010208 100%);
          color: #f5f7ff;
        }
        .cyber-panel {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          border-radius: 24px;
          background: rgba(6, 9, 22, 0.88);
          border: 1px solid #2bf7ff;
          box-shadow: 0 0 28px rgba(43, 247, 255, 0.22), inset 0 0 18px rgba(255, 0, 170, 0.12);
          backdrop-filter: blur(12px);
        }
        .cyber-title {
          margin: 0 0 8px;
          font-size: 2rem;
          color: #2bf7ff;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          text-shadow: 0 0 10px #2bf7ff;
        }
        .cyber-subtitle {
          margin: 0 0 20px;
          color: #b9b6d1;
        }
        .cyber-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .cyber-input {
          flex: 1;
          min-width: 240px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #7a3cff;
          background: #0e1122;
          color: #fff;
          outline: none;
          box-shadow: inset 0 0 8px rgba(122, 60, 255, 0.25);
        }
        .cyber-btn {
          padding: 10px 14px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #05050c;
          background: linear-gradient(90deg, #2bf7ff, #ff2ec7);
          box-shadow: 0 0 12px rgba(43, 247, 255, 0.25);
        }
        .cyber-btn.secondary {
          background: linear-gradient(90deg, #7a3cff, #2bf7ff);
        }
        .cyber-section {
          margin-top: 20px;
        }
        .cyber-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        .cyber-card {
          padding: 14px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(20, 28, 58, 0.95), rgba(7, 10, 22, 0.95));
          border: 1px solid rgba(43, 247, 255, 0.25);
          box-shadow: 0 0 12px rgba(255, 46, 199, 0.15);
        }
        .cyber-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 12px;
          margin-top: 10px;
        }
        .cyber-card h3 {
          margin: 0 0 6px;
          color: #fff;
          font-size: 1rem;
        }
        .cyber-card p {
          margin: 0;
          color: #2bf7ff;
          font-weight: 700;
        }
      `}</style>

      <div className="cyber-panel">
        <h1 className="cyber-title">Neon Search</h1>
        <p className="cyber-subtitle">Hack the feed. Find the hottest products.</p>

        <div className="cyber-controls">
          <input
            className="cyber-input"
            type="text"
            placeholder="Type a product name..."
            onChange={(e) => setV(e.target.value)}
          />
          <button className="cyber-btn" type="button" onClick={fetchData}>Search</button>
          <button className="cyber-btn secondary" type="button" onClick={() => order("asc")}>Ascending</button>
          <button className="cyber-btn secondary" type="button" onClick={() => order("dsc")}>Descending</button>
          <select >
            <option value=""></option>
            <option value="">beauty</option>
            <option value="">fragrance</option>
          
          </select>
        </div>

        <div className="cyber-section">
          <div className="cyber-grid">
            {dataSet.map((pt) => (
              <div className="cyber-card" key={pt.id}>
                <h3>{pt.title}</h3>
                <p>$ {pt.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-section">
          <div className="cyber-grid">
            {fetchD?.map((a) => (
              <div className="cyber-card" key={a.id}>
                <h3>{a.title}</h3>
                <p>$ {a.price}</p>
                <img src={a.thumbnail} alt={a.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
