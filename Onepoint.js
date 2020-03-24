import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Onepoint() {

    let [x, setx] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const onepoint = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        
        var e=2.71828;
        var i = 1, prex;
       
        while (true) {

          prex = x

          x = f(fx,x)
          const eror =(Math.abs(x-prex)/x)*100; 
          queue_data.push({
            i: i,
            x: prex.toFixed(6),
            fx: x.toFixed(6),
            error: eror.toFixed(6)
          });

            if(eror <= 0.000001){
              

              break;

            }

          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setx(1);

        setfx('e^(-x)');
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> OnePoint Iterations Method </h1>     

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

                    <button onClick={onepoint}>Calculate</button>
                    <button onClick={set}>Set value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Iterations" dataIndex="i" key="i" />
                        <Column title="X" dataIndex="x" key="x" />
                        <Column title="X+1" dataIndex="fx" key="fx" />
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
export default Onepoint;
