import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function QuadraticInternewton() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [x2, setx2] = useState();
    let [fx0,setfx0]=useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx,setfx]=useState();
    let [x,setx]=useState();
    let [c0,setc0]=useState();
    let[c1,setc1]=useState();
    let[c2,setc2]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const QuadraticInternewton = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        
        
        var fx;
          c0=fx0;
          c1=(fx1-fx0)/(x1-x0);
          c2=(((fx2-fx1)/(x2-x1))-(fx1-fx0)/(x1-x0))/(x2-x0);
          fx = c0+c1*(x-x0)+c2*(x-x0)*(x-x1)
              
          

          
          const eror = ((-0.3202-fx)/-0.3202)*100;
          queue_data.push({
            c0:c0.toFixed(6),
            c1:c1.toFixed(6),
            c2:c2.toFixed(6),
            fx: fx.toFixed(6),
            error: eror.toFixed(2)+"%"
          });

            
        

        setdatashow(queue_data)
      }

      function set() {
        setx(3.2);
        setfx(-0.3202);
        setx0(2);
        setfx0(0.2239);
        setx1(3);
        setfx1(-0.2301);
        setx2(4);
        setfx2(-0.3971);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Quadratic Interpolation Method(Newton) </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write x and value of function</h2>

                        <input

                            placeholder="input x" 
                            value={x}
                            onChange={event => setx(event.target.value)} 

                        />
                        <input

                            placeholder="input value function x" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />

<h2> x0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx2</h2>
                            
                                <input
                                    type="number"
                                    value={x0}
                                    onChange={e => setx0(+e.target.value)}
                                    placeholder="0"
                                />

                                <input
                                    type="number"
                                    value={x1}
                                    onChange={e => setx1(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={x2}
                                    onChange={e => setx2(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx0}
                                    onChange={e => setfx0(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx1}
                                    onChange={e => setfx1(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx2}
                                    onChange={e => setfx2(+e.target.value)}
                                    placeholder="0"
                                />


                        </div>

                    </div>

                    <button onClick={QuadraticInternewton}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" />
                        <Column title="C0" dataIndex="c0" key="c0" />
                        <Column title="C1" dataIndex="c1" key="c1" />
                        <Column title="C2" dataIndex="c2" key="c2" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>

                    <LineChart
                        width={1900}
                        height={800}
                        data={datashow}
                        margin={{ top: 30, right: 20, left: 80, bottom: 5 }}
                        style={{ backgroundColor: "#fff" }}
                    >

                    <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="x" />
                            <YAxis
                              type="number"
                              dataKey="fx"
                              domain={["auto", "auto"]}
                              allowDataOverflow="true"
                            />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="fx" stroke="#82ca9d" strokeWidth={4} />
                            

                    </LineChart>

                </div>

        )
    
}
export default QuadraticInternewton;