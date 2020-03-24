import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function SecondBackward() {

    let [x, setx] = useState();
    let [fx,setfx]=useState();
    let [h,seth]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const SecondBackward= () => {
      
        const fminus1 = (fx, value) => parse(fx).evaluate({ x:ximinus1}) 
        const fminus2 = (fx, value) => parse(fx).evaluate({ x:ximinus2})
        const fminus3 = (fx, value) => parse(fx).evaluate({ x:ximinus3})
        const f = (fx, value) => parse(fx).evaluate({ x:x}) 
        const fpass1 = (fx, value) => parse(fx).evaluate({ x:xipass1}) 
        const fpass2 = (fx, value) => parse(fx).evaluate({ x:xipass2}) 
        const fpass3 = (fx, value) => parse(fx).evaluate({ x:xipass3}) 
        var e=2.71828;   
        const difffx=(1/9)*(e^(-2.5/3))+2;
        var ximinus1=x-h;
        var ximinus2=x-h-h;
        var ximinus3=x-h-h-h;
        var xi=x;
        var xipass1=x+h;
        var xipass2=x+h+h;
        var xipass3=x+h+h;
        var fximinus1,fximinus2,fximinus3,fxi,fxipass1,fxipass2,fxipass3;
        fximinus1=fminus1(fx,ximinus1);
        fximinus2=fminus2(fx,ximinus2);
        fximinus3=fminus3(fx,ximinus3);
        fxi=f(fx,xi);
        fxipass1=fpass1(fx,xipass1);
        fxipass2=fpass2(fx,xipass2);
        fxipass3=fpass3(fx,xipass3);
        var backward=(2*fxi-5*fximinus1+4*fximinus2-fximinus3)/(h^2);
          
        const eror = Math.abs(((difffx-backward)/difffx)*100);
          queue_data.push({
              fximinus1:fximinus1.toFixed(6),
              fximinus2:fximinus2.toFixed(6),
              fximinus3:fximinus3.toFixed(6),
              fxi:fxi.toFixed(6),
              fxipass1:fxipass1.toFixed(6),
              fxipass2:fxipass2.toFixed(6),
              fxipass3:fxipass3.toFixed(6),
              backward: backward.toFixed(6),
              error: eror.toFixed(6)+"%"
          });

      

          
        

        setdatashow(queue_data)
      }

      function set() {
        setx(-2.5);
        setfx('e^(x/3)+x^2');
        seth(0.1);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Second Backward-Divide-Difference O(h^2)</h1>     

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

                    <button onClick={SecondBackward}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="backward" dataIndex="backward" key="backward" />
                        <Column title="fximinus1" dataIndex="fximinus1" key="fximinus1" />
                        <Column title="fximinus2" dataIndex="fximinus2" key="fximinus2" />
                        <Column title="fximinus3" dataIndex="fximinus3" key="fximinus3" />
                        <Column title="fxi" dataIndex="fxi" key="fxi" />
                        <Column title="fxipass1" dataIndex="fxipass1" key="fxipass1" />
                        <Column title="fxipass2" dataIndex="fxipass2" key="fxipass2" />
                        <Column title="fxipass3" dataIndex="fxipass3" key="fxipass3" />
                        <Column title="True Error" dataIndex="error" key="error" />
                      </Table>

                    </div>

                    

                </div>

        )
    
}
export default SecondBackward;