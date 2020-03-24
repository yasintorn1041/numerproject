import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function CompositeTrapzoidal() {

    let [a, seta] = useState();
    let [b, setb] = useState();
    let [fx,setfx]=useState();
    let [n,setn]=useState();
    
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const CompositeTrapzoidal = () => {
      
        const fa = (fx, value) => parse(fx).evaluate({ x: a })    
        const fb = (fx, value) => parse(fx).evaluate({ x: b })    
        var fxa,fxb,I;
          var h=(b-a)/n;
          fxa=fa(fx,a);
          fxb=fb(fx,b);
          //fxa = 4*a^5-3*a^4+a^3-6*a+2;
          //fxb= 4*b^5-3*b^4+b^3-6*b+2;
          I=h*(fxa+fxb);
          const eror = ((fxa-I)/fxa)*100;
          queue_data.push({
            h:h.toFixed(1),
            I:I.toFixed(1),
            fxa:fxa.toFixed(1),
            fxb:fxb.toFixed(1),
            //fx: fx.toFixed(6),
            error: eror.toFixed(6)+"%"
          });

      

          
        

        setdatashow(queue_data)
      }

      function set() {
        seta(2);
        setb(8);
        setfx('4*x^5-3*x^4+x^3-6*x+2');
        setn(4);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>CompositeTrapzoidalRule Method</h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write function</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />
                        <input

                            placeholder="input n" 
                            value={n}
                            onChange={event => setn(event.target.value)} 

                        />
<h2> input a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input b</h2>

                            
                                <input
                                    type="number"
                                    value={a}
                                    onChange={e => seta(+e.target.value)}
                                    placeholder="0"
                                />

                                <input
                                    type="number"
                                    value={b}
                                    onChange={e => setb(+e.target.value)}
                                    placeholder="0"
                                />
                               

                        </div>

                    </div>

                    <button onClick={CompositeTrapzoidal}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="functiona" dataIndex="fxa" key="fxa" />
                        <Column title="functionb" dataIndex="fxb" key="fxb" />
                        <Column title="I" dataIndex="I" key="I" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>

                    

                    

                </div>

        )
    
}
export default CompositeTrapzoidal;