import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function PolynomialInternewton() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [x2, setx2] = useState();
    let [x3, setx3] = useState();
    let [x4, setx4] = useState();
    let [fx0,setfx0]=useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx3,setfx3]=useState();
    let [fx4,setfx4]=useState();
    let [x,setx]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const PolynomialInternewton= () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        var fx,x=42000; 
        var firstx1x0=((fx1-fx0)/(x1-x0));
        var firstx2x1=(fx2-fx1)/(x2-x1);
        var firstx3x2=(fx3-fx2)/(x3-x2);
        var firstx4x3=(fx4-fx3)/(x4-x3);
        var secondx1x0=(firstx2x1-firstx1x0)/(x2-x0);
        var secondx2x1=(firstx3x2-firstx2x1)/(x3-x1);
        var secondx3x2=(firstx4x3-firstx3x2)/(x4-x2);
        var thirdx1x0=(secondx2x1-secondx1x0)/(x3-x0);
        var thirdx2x1=(secondx3x2-secondx2x1)/(x4-x1);
        var fourthx1x0=(thirdx2x1-thirdx1x0)/(x4-x0);
          fx = fx0+((x-x0)*firstx1x0)+((x-x0)*(x-x1)*secondx1x0)+((x-x0)*(x-x1)*(x-x2)*thirdx1x0)+((x-x0)*(x-x1)*(x-x2)*(x-x3)*fourthx1x0);
          queue_data.push({
            firstx1x0:firstx1x0.toFixed(6),
            secondx1x0:secondx1x0.toFixed(6),
            thirdx1x0:thirdx1x0.toFixed(6),
            fourthx1x0:fourthx1x0.toFixed(6),
            fx: fx.toFixed(6)        
          });
        setdatashow(queue_data)
      }

      function set() {
        setx0(0);
        setx1(20000);
        setx2(40000);
        setx3(60000);
        setx4(80000);
        setfx0(9.81);
        setfx1(9.7487);
        setfx2(9.6879);
        setfx3(9.6879);
        setfx4(9.5682);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Polynomial Interpolation Method(Newton) </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write xi</h2>

                        <input

                            placeholder="input x0" 
                            value={x0}
                            onChange={event => setx0(event.target.value)} 

                        />
                        <input

                            placeholder="input x1" 
                            value={x1}
                            onChange={event => setx1(event.target.value)} 

                        />
                        <input
                            placeholder="input x2" 
                            value={x2}
                            onChange={event => setx2(event.target.value)} 
                        />
                        <input

                            placeholder="input x3" 
                            value={x3}
                            onChange={event => setx3(event.target.value)} 
                        />
                        <input
                            placeholder="input x4" 
                            value={x4}
                            onChange={event => setx4(event.target.value)} 
                            />

                        <h2> Write fxi</h2>

                            
                                <input
                                    type="number"
                                    value={fx0}
                                    onChange={e => setfx0(+e.target.value)}
                                    placeholder="fx0"
                                />

                                <input
                                    type="number"
                                    value={fx1}
                                    onChange={e => setfx1(+e.target.value)}
                                    placeholder="fx1"
                                />
                                <input
                                    type="number"
                                    value={fx2}
                                    onChange={e => setfx2(+e.target.value)}
                                    placeholder="fx2"
                                />
                                <input
                                    type="number"
                                    value={fx3}
                                    onChange={e => setfx3(+e.target.value)}
                                    placeholder="fx3"
                                />
                                <input
                                    type="number"
                                    value={fx4}
                                    onChange={e => setfx4(+e.target.value)}
                                    placeholder="fx4"
                                />

                        </div>

                    </div>

                    <button onClick={PolynomialInternewton}>Calculate</button>
                    <button onClick={set}>Set value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Function(x)" dataIndex="fx" key="fx" />
                        <Column title="First" dataIndex="firstx1x0" key="firstx1x0" />
                        <Column title="Second" dataIndex="secondx1x0" key="secondx1x0" />
                        <Column title="Third" dataIndex="thirdx1x0" key="thirdx1x0" />
                        <Column title="Fourth" dataIndex="fourthx1x0" key="fourthx1x0" />
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
export default PolynomialInternewton;