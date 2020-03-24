import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function FirstForward() {

    let [x, setx] = useState();
    let [fx,setfx]=useState();
    let [h,seth]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const FirstForward = () => {
      
        const fminus1 = (fx, value) => parse(fx).evaluate({ x:ximinus1}) 
        const f = (fx, value) => parse(fx).evaluate({ x:x}) 
        const fpass1 = (fx, value) => parse(fx).evaluate({ x:xipass1}) 
        var e=2.71828;   
        //const difffx=e^2;
        var ximinus1=x-h;
        var xi=x;
        var xipass1=x+h;
        var fximinus1,fxi,fxipass1;
        fximinus1=fminus1(fx,ximinus1);
        fxi=f(fx,xi);
        fxipass1=fpass1(fx,xipass1);
        var central=(fxipass1-fximinus1)/(2*h);
          
        const eror = Math.abs(((fxi-central)/fxi)*100);
          queue_data.push({
              fximinus1:fximinus1.toFixed(6),
              fxi:fxi.toFixed(6),
              fxipass1:fxipass1.toFixed(6),
            central: central.toFixed(6),
            error: eror.toFixed(6)+"%"
          });

      

          
        

        setdatashow(queue_data)
      }

      function set() {
        setx(2);
        setfx('e^x');
        seth(0.25);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>FirstCentral-Divide-Difference O(h)</h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write value of function</h2>
                        <input
                            placeholder="input value function x" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 
                        />

<h2> x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h</h2>

                            
                                <input
                                    type="number"
                                    value={x}
                                    onChange={e => setx(+e.target.value)}
                                    placeholder="0"
                                />

                                <input
                                    type="number"
                                    value={h}
                                    onChange={e => seth(+e.target.value)}
                                    placeholder="0"
                                />
                               


                        </div>

                    </div>

                    <button onClick={FirstForward}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="central" dataIndex="central" key="central" />
                        <Column title="fximinus1" dataIndex="fximinus1" key="fximinus1" />
                        <Column title="fxi" dataIndex="fxi" key="fxi" />
                        <Column title="fxipass1" dataIndex="fxipass1" key="fxipass1" />
                        <Column title="True Error" dataIndex="error" key="error" />
                      </Table>

                    </div>

                    

                </div>

        )
    
}
export default FirstForward;