import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import image1 from "../Images/b negative decline.png";
import image2 from "../Images/b 0 maturity.png";
import image3 from "../Images/b positive growth.png";


const Advanced = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for input values
  const [a, setA] = useState(1000);
  const [b, setb] = useState(500);
  const [c, setC] = useState(20);
  const [h, setH] = useState(5);
  const [i, setI] = useState(0.05);
  const [n, setN] = useState(3);
  const [B, setB] = useState(0.75);
  const [o, setO] = useState(20);
  const [ga, setGa] = useState(0.5);
  const [th, setTh] = useState(0.01);
  const [ps, setPs] = useState(25);
  const [al, setAl] = useState(0.02);
  const [L, setL] = useState(14600);
  const [Tf, setTf] = useState();
  const [d, setd] = useState();
  const [f1, setf1] = useState();
  const [f2, setf2] = useState();
  const [w, setw] = useState();
  const [tv, settv] = useState();
  const [Cd, setCd] = useState();
  const [Cx, setCx] = useState();
  const [Afe, setAfe] = useState();
  const [g, setg] = useState();
  const [Ee, setEe] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.wolframcloud.com/obj/yashdakshita123/EquationAPI3?a=${a}&b=${b}&c=${c}&h=${h}&i=${i}&n=${n}&B=${B}&o=${o}&ga=${ga}&th=${th}&ps=${ps}&al=${al}&L=${L}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        const rawData = await response.text();
        console.log('Raw API Response:', rawData);
  
        // Parse the Mathematica expression into a JavaScript object
        const parsedData = parseMathematicaExpression(rawData);
        console.log('Parsed Data:', parsedData);
        setApiData(parsedData);
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const parseMathematicaExpression = (expression) => {
      const regex = /{([^,]+), {P -> ([^,]+), T -> ([^}]+)}}/;
      const match = expression.match(regex);
  
      if (match) {
        const [, overallValue, pValue, tValue] = match;
        return {
          overallValue: parseFloat(overallValue),
          P: parseFloat(pValue),
          T: parseFloat(tValue),
        };
      } else {
        return {};
      }
    };
  
    fetchData();
  }, [a, b, c, h, i, n, B, o, ga, th, ps, al, L]);

  const getImage = () => {
    if (b < 0) {
      return image1;
    } else if (b === 0) {
      return image2;
    } else {
      return image3;
    }
  };

  const getImageName = () => {
    if (b < 0) {
      return " Decline Phase";
    } else if (b === 0) {
      return " Maturity Phase";
    } else {
      return " Growth Phase";
    }
  };


  return (
    <>
      <Navbar />

{/* inventory eqn 1 */}


      <div className="m-5">
              <h1>Inventory Optimizer</h1>
        
        {/* Input fields for parameters */}
        <div className="row my-3">
        <div className="col-3 d-flex">
        Initial demand : <input className="form-control" type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value))}/>
        </div>
        <div className="col-3 d-flex">
        Demand slope : <input className="form-control" type="number" value={b} onChange={(e) => setb(parseFloat(e.target.value))}/>
        </div>
        <div className="col-3 d-flex">
        Purchase cost : <input className="form-control" type="number" value={c} onChange={(e) => setC(parseFloat(e.target.value))} />
        </div>
        <div className="col-3 d-flex">
        Cost of purchsing : <input type="number" value={h} className="form-control" onChange={(e) => setH(parseFloat(e.target.value))} />
        </div>
        </div>
        <div className="row my-3">
        
        <div className="col-3 d-flex">
        Return rate on investment : <input type="number" value={i} className="form-control" onChange={(e) => setI(parseFloat(e.target.value))} />
        </div>
        <div className="col-3 d-flex">
        Number of installments: <input type="number" value={n} className="form-control" onChange={(e) => setN(parseFloat(e.target.value))} />
        </div>
        <div className="col-3 d-flex">
          Screening cost:
          <input type="number" value={ga} className="form-control" onChange={(e) => setGa(parseFloat(e.target.value))} />
        </div>
        <div className="col-3 d-flex">
          Odering Cost:
          <input type="number" value={o} className="form-control" onChange={(e) => setO(parseFloat(e.target.value))} />
        </div>

        </div>
        <div className="row my-3">
        
        
        
        </div>
        <div className="row my-3">
          <div className="col-3 d-flex">
            Rate of deterioration:
            <input type="number" value={th} className="form-control" onChange={(e) => setTh(parseFloat(e.target.value))} />
          </div>
          <div className="col-3 d-flex">
          Salvage price of Items:
            <input type="number" value={ps} className="form-control" onChange={(e) => setPs(parseFloat(e.target.value))} />
          </div>
          <div className="col-3 d-flex">
            Fraction of defected items:
            <input type="number" value={al} className="form-control" onChange={(e) => setAl(parseFloat(e.target.value))} />
          </div>
          <div className="col-3 d-flex">
            Screening rate:
            <input type="number" value={L} className="form-control" onChange={(e) => setL(parseFloat(e.target.value))} />
          </div>
        </div>

        <div className="row my-3">
        <div className="col-3 d-flex">
          Fraction of downpayment:
          <input type="number" value={B} className="form-control" onChange={(e) => setB(parseFloat(e.target.value))} />
        </div>
        </div>
        
      <div className="card shadow p-3">
      <h3>RESULT</h3>
      {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <p>Expected Profit: {apiData ? apiData.overallValue : 'No data'}</p>
            <p>Expected Selling Price: {apiData ? apiData.P : 'No data'}</p>
            <p>Expected Cycle Length: {apiData ? apiData.T : 'No data'}</p>
          </div>
        )}
      </div>
      

        <div className="row pt-5">
          <div className="col-12 d-flex justify-content-center">
            <img src={getImage()} width={'600px'} height={'auto'} alt={getImageName()} />
          </div>
          <div className="text-center mt-3">
            {getImageName()}
          </div>
          
        </div>
      </div>
      

      <Footer/>
    </>
  );
};

export default Advanced;