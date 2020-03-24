import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Bisection() {

    let [xl, setxl] = useState();
    let [xr, setxr] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const bisection = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const eror = (xm, prexm) => Math.abs((xm - prexm) / xm)
        
        var i = 1, xm = 0, prexm,prexl=1.5
        
        while (true) {

          prexm = xm
          xm = (xl + xr) / 2
          prexl=xl;
          if (f(fx, xm) * f(fx, xl) > 0) {
            xl = xm
          }
          else {
            xr = xm
          }

          queue_data.push({
            i: i,
            xm: xm.toFixed(6),
            xl:prexl.toFixed(6),
            xr:xr.toFixed(6),
            fxm: f(fx, xm).toFixed(6),
            error: eror(xm, prexm).toFixed(6)
          });

            if(eror(xm, prexm) <= 0.000001){

              break;

            }

          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setxl(1.5);
        setxr(2.0);
        setfx('x^4-13');
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Bisection Method </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write Function</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />

                        <h2> xl &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xr </h2>

                            
                                <input
                                    type="number"
                                    value={xl}
                                    onChange={e => setxl(+e.target.value)}
                                    placeholder="0"
                                />

                                <input
                                    type="number"
                                    value={xr}
                                    onChange={e => setxr(+e.target.value)}
                                    placeholder="0"
                                />


                        </div>

                    </div>

                    <button onClick={bisection}>Calculate</button>
                    <button onClick={set}>Set value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Iterations" dataIndex="i" key="i" />
                        <Column title="xl" dataIndex="xl" key="xl" />
                        <Column title="xr" dataIndex="xr" key="xr" />
                        <Column title="xm" dataIndex="xm" key="xm" />
                        <Column title="Fn(xm)" dataIndex="fxm" key="fxm" />
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

                            <XAxis dataKey="xm" />
                            <YAxis
                              type="number"
                              dataKey="fxm"
                              domain={["auto", "auto"]}
                              allowDataOverflow="true"
                            />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="fxm" stroke="#82ca9d" strokeWidth={4} />
                            

                    </LineChart>

                </div>

        )
    
}
export default Bisection;