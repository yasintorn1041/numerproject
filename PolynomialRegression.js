import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function PolynomialRegression() {
    let [x1, setx1] = useState();
    let [x2,setx2]=useState();
    let [x3, setx3] = useState();
    let [x4,setx4]=useState();
    let [x5, setx5] = useState();
    let [x6,setx6]=useState();
    let [x7, setx7] = useState();
    let [x8,setx8]=useState();
    let [x9, setx9] = useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx3,setfx3]=useState();
    let [fx4,setfx4]=useState();
    let [fx5,setfx5]=useState();
    let [fx6,setfx6]=useState();
    let [fx7,setfx7]=useState();
    let [fx8,setfx8]=useState();
    let [fx9,setfx9]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const PolynomialRegression = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        var n=9,x=65;
        var sumxi=x1+x2+x3+x4+x5+x6+x7+x8+x9;
        var sumxipow2=Math.pow(x1,2)+Math.pow(x2,2)+Math.pow(x3,2)+Math.pow(x4,2)+Math.pow(x5,2)+Math.pow(x6,2)+Math.pow(x7,2)+Math.pow(x8,2)+Math.pow(x9,2);
        var sumxipow3=Math.pow(x1,3)+Math.pow(x2,3)+Math.pow(x3,3)+Math.pow(x4,3)+Math.pow(x5,3)+Math.pow(x6,3)+Math.pow(x7,3)+Math.pow(x8,3)+Math.pow(x9,3);
        var sumxipow4=Math.pow(x1,4)+Math.pow(x2,4)+Math.pow(x3,4)+Math.pow(x4,4)+Math.pow(x5,4)+Math.pow(x6,4)+Math.pow(x7,4)+Math.pow(x8,4)+Math.pow(x9,4);
        //var sumxisumxi=Math.pow(sumxi,2);
        var sumyi=fx1+fx2+fx3+fx4+fx5+fx6+fx7+fx8+fx9;
        var sumxiyi=(x1*fx1)+(x2*fx2)+(x3*fx3)+(x4*fx4)+(x5*fx5)+(x6*fx6)+(x7*fx7)+(x8*fx8)+(x9*fx9);
        var sumxipow2yi=(Math.pow(x1,2)*fx1)+(Math.pow(x2,2)*fx2)+(Math.pow(x3,2)*fx3)+(Math.pow(x4,2)*fx4)+(Math.pow(x5,2)*fx5)+(Math.pow(x6,2)*fx6)+(Math.pow(x7,2)*fx7)+(Math.pow(x8,2)*fx8)+(Math.pow(x9,2)*fx9);
        var a0=((sumyi*sumxipow2)-(sumxiyi*sumxi))/((n*sumxipow2)-sumxipow4);
        var a1=((n*sumxiyi)-(sumxi*sumyi))/((n*sumxipow2)-sumxi);
        var a2=((sumyi*sumxipow2)-(sumxiyi*sumxi))/((n*sumxipow2)-sumxipow3);
        var fx=a0+(a1*x)+(a2*x*x);
          queue_data.push({
            sumxi:sumxi.toFixed(1),
            sumxipow2:sumxipow2.toFixed(1),
            sumxipow3:sumxipow3.toFixed(1),
            sumxipow4:sumxipow4.toFixed(1),
            sumyi:sumyi.toFixed(1),
            sumxiyi:sumxiyi.toFixed(1),
            sumxipow2yi:sumxipow2yi.toFixed(1),
            a0:a0.toFixed(6),
            a1:a1.toFixed(6),
            a2:a2.toFixed(6),
            fx: fx.toFixed(6)
            
          });
        setdatashow(queue_data)
      }

      function set() {
        setx1(10);
        setx2(15);
        setx3(20);
        setx4(30);
        setx5(40);
        setx6(50);
        setx7(60);
        setx8(70);
        setx9(80);
        setfx1(5);
        setfx2(9);
        setfx3(15);
        setfx4(18);
        setfx5(22);
        setfx6(30);
        setfx7(35);
        setfx8(38);
        setfx9(43);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Polynomial Regression Method</h1>     

                    </div>

                    <div className = "text-topic">
                    
                    
                    <div className="number-inputs">

                    <h2>Write xi</h2>

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
                        <input

                             placeholder="input x5" 
                             value={x5}
                            onChange={event => setx5(event.target.value)} 

                        />
                        <input

                            placeholder="input x6" 
                            value={x6}
                            onChange={event => setx6(event.target.value)} 

                         />
                        <input

                            placeholder="input x7" 
                            value={x7}
                            onChange={event => setx7(event.target.value)} 

                        />
                        <input

                            placeholder="input x8" 
                            value={x8}
                            onChange={event => setx8(event.target.value)} 

                        />
                        <input

                            placeholder="input x9" 
                            value={x9}
                            onChange={event => setx9(event.target.value)} 

                        />
<h2> Write function fx(i)</h2>

                            
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
                                <input
                                    type="number"
                                    value={fx3}
                                    onChange={e => setfx3(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx4}
                                    onChange={e => setfx4(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx5}
                                    onChange={e => setfx5(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx6}
                                    onChange={e => setfx6(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx7}
                                    onChange={e => setfx7(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx8}
                                    onChange={e => setfx8(+e.target.value)}
                                    placeholder="0"
                                />
                                <input
                                    type="number"
                                    value={fx9}
                                    onChange={e => setfx9(+e.target.value)}
                                    placeholder="0"
                                />
                        </div>

                    </div>

                    <button onClick={PolynomialRegression}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" margin-align="center"/>
                        <Column title="sumxi" dataIndex="sumxi" key="sumxi" margin-align="center"/>
                        <Column title="sumyi" dataIndex="sumyi" key="sumyi" margin-align="center"/>
                        <Column title="sumxipow2" dataIndex="sumxipow2" key="sumxipow2" margin-align="center"/>
                        <Column title="sumxipow3" dataIndex="sumxipow3" key="sumxipow3" margin-align="center"/>
                        <Column title="sumxipow4" dataIndex="sumxipow4" key="sumxipow4" margin-align="center"/>
                        <Column title="sumxiyi" dataIndex="sumxiyi" key="sumxiyi" margin-align="center"/>
                        <Column title="sumxipow2yi" dataIndex="sumxipow2yi" key="sumxipow2yi" margin-align="center"/>
                        <Column title="a0" dataIndex="a0" key="a0" margin-align="center"/>
                        <Column title="a1" dataIndex="a1" key="a1" margin-align="center"/>
                        <Column title="a2" dataIndex="a2" key="a2" margin-align="center"/>
                      </Table>

                    </div>

                   

                </div>

        )
    
}
export default PolynomialRegression;