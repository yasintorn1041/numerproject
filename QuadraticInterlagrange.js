import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function QuadraticInterLagrange() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [x2,setx2]=useState();
    let [fx0,setfx0]=useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx,setfx]=useState();
    let [x,setx]=useState();
    let [l0,setl0]=useState();
    let [l1,setl1]=useState();
    let [l2,setl2]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const QuadraticInterLagrange = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        
        
        var fx;
            l0=((x2-x)*(x1-x))/((x2-x0)*(x1-x0));
            l1=((x2-x)*(x0-x))/((x2-x1)*(x0-x1));
            l2=((x1-x)*(x0-x))/((x1-x2)*(x0-x2));
            fx = (l0*fx0)+(l1*fx1)+(l2*fx2);
            const eror = ((300-fx)/300)*100;
          queue_data.push({
            l0:l0.toFixed(6),
            l1:l1.toFixed(6),
            l2:l2.toFixed(6),
            fx: fx.toFixed(6),
            error: eror.toFixed(6)+"%"
          });



          

        setdatashow(queue_data)
      }

      function set() {
        setx(250);
        setfx(300);
        setx0(-100);
        setx1(100);
        setx2(400);
        setfx0(215);
        setfx1(206);
        setfx2(249);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Quadratic Interpolation Method(Lagrange) </h1>     

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

                    <button onClick={QuadraticInterLagrange}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" />
                        <Column title="L0(x)" dataIndex="l0" key="l0" />
                        <Column title="L1(x)" dataIndex="l1" key="l1" />
                        <Column title="L2(x)" dataIndex="l2" key="l2" />
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
export default QuadraticInterLagrange;