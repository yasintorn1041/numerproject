import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Newton() {

    let [x, setx] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const newton = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const eror = (x, del) =>  100*(Math.abs((del / x))); 
        
        var i = 1, prex ,del

        
        while (true) {

          prex = x


          del = - (f(fx,x)/(x*2))

          x = prex + del

          queue_data.push({
            i: i,
            x: prex.toFixed(6),
            fx: f(fx,prex).toFixed(6),
            prex:x.toFixed(6),
            del:del.toFixed(6),
            error: eror(x, del).toFixed(6)
          });

          

            if(eror(x, del) <= 0.000001){

              break;

            }

          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setx(2);

        setfx('x^2-7');
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Newton Raphon Method</h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>fn</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />

                        <h2> x0 </h2>

                            
                                <input
                                    type="number"
                                    value={x}
                                    onChange={e => setx(+e.target.value)}
                                    placeholder="0"
                                />

                        </div>

                    </div>

                    <button onClick={newton}>Calculate</button>
                    <button onClick={set}>Set value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Iterations" dataIndex="i" key="i" />
                        <Column title="x" dataIndex="x" key="x" />
                        <Column title="Function(x)" dataIndex="fx" key="fx" />
                        <Column title="delxadd1" dataIndex="del" key="del" />
                        <Column title="xadd1" dataIndex="prex" key="prex" />
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
export default Newton;
