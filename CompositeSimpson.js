import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';


const { Column } = Table;
const { Option } = Select;
const { parse,create,all } = require("mathjs");
const math = create(all);
const inte = require('mathjs-simple-integral-master');
math.import(inte)

function CompositeSimpson() {

    let [a, seta] = useState();
    let [b, setb] = useState();
    let [fx,setfx]=useState();
    let [n,setn]=useState();
    
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const CompositeSimpson = () => {
      
        const fa = (fx, value) => parse(fx).evaluate({ x: a })    
        const fb = (fx, value) => parse(fx).evaluate({ x: b })
        //const inte =  math.integral(fx,'x');
       // const fnsring = inte.toString(); 
        var fxa,fxb,I,fx1,ans,a1,a2;
       // var I2=""
          var h=(b-a)/n;
          var x1=a+h;
          const f1 = (fx, value) => parse(fx).evaluate({ x: x1 }) 
          fxa=fa(fx,a);
          fxb=fb(fx,b);
          fx1=f1(fx,x1);
          //fxa = 4*a^5-3*a^4+a^3-6*a+2;
          //fxb= 4*b^5-3*b^4+b^3-6*b+2;
          I=(h/3)*(fxa+4*fx1+fxb+2*fx1);
         // I2=fnsring
          //a1=fa(I2,a);
          //a2=fb(I2,b);
         // ans=a2-a1;
          const eror = ((fx1-I)/fx1)*100;
          queue_data.push({
            h:h.toFixed(1),
            I:I.toFixed(1),
            fxa:fxa.toFixed(1),
            fxb:fxb.toFixed(1),
            fx1:fx1.toFixed(6),
            //ans:ans.toFixed(6),
            //fx: fx.toFixed(6),
            error: eror.toFixed(6)+"%"
          });

      

          
        

        setdatashow(queue_data)
      }

      function set() {
        seta(-1);
        setb(2);
        setfx('x^7+2*x^3-1');
        setn(4);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Composite Simpson's Rule Method</h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>Write function and n</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />
                        <input

                            placeholder="input function" 
                            value={n}
                            onChange={event => setn(event.target.value)} 
                        />         
<h2> input a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input b</h2>

                            
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

                    <button onClick={CompositeSimpson}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="functiona" dataIndex="fxa" key="fxa" />
                        <Column title="functionx1" dataIndex="fx1" key="fx1" />
                        <Column title="functionb" dataIndex="fxb" key="fxb" />
                        <Column title="I" dataIndex="I" key="I" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>
                </div>

        )
    
}
export default CompositeSimpson;