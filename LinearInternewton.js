import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function LinearInternewton() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [fx0,setfx0]= useState();
    let [fx1,setfx1]= useState();
    let [fx,setfx]  = useState();
    let [x,setx]    = useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const LinearInternewton = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
       
        
        
        var i = 0, fx,x=3.2;
        
        

          
          
        fx = fx0 + ((x-x0)*((fx1-fx0)/(x1-x0)))     
        const eror = ((-0.3202-fx)/-0.3202)*100;

          queue_data.push({
            fx:fx.toFixed(6),
            fx0:fx0.toFixed(6),
            fx1:fx1.toFixed(6),
            error:eror.toFixed(2)+"%"
          });

          
        

        setdatashow(queue_data)
      }

      function set() {
        setx(3.2);
        setfx(-0.3202);
        setx0(2);
        setx1(4);
        setfx0(0.2239);
        setfx1(-0.3971);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Linear Interpolation Method(Newton) </h1>     

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

                        <h2> x0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx1</h2>

                                
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
                                

                        </div>

                    </div>

                    <button onClick={LinearInternewton}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" />
                        <Column title="fx0" dataIndex="fx0" key="fx0" />
                        <Column title="fx1" dataIndex="fx1" key="fx1" />
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
                            <YAxis
                              type="number"
                              dataKey="fx1"
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
export default LinearInternewton;