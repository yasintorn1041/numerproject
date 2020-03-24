import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function MultipleLinearRegression() {
    let [x1i1, setx1i1] = useState();
    let [x1i2,setx1i2]=useState();
    let [x1i3, setx1i3] = useState();
    let [x1i4,setx1i4]=useState();
    let [x1i5, setx1i5] = useState();
    let [x1i6,setx1i6]=useState();
    let [x1i7, setx1i7] = useState();
    let [x2i1,setx2i1]=useState();
    let [x2i2,setx2i2]=useState();
    let [x2i3,setx2i3]=useState();
    let [x2i4,setx2i4]=useState();
    let [x2i5,setx2i5]=useState();
    let [x2i6,setx2i6]=useState();
    let [x2i7,setx2i7]=useState();
    let [x3i1,setx3i1]=useState();
    let [x3i2,setx3i2]=useState();
    let [x3i3,setx3i3]=useState();
    let [x3i4,setx3i4]=useState();
    let [x3i5,setx3i5]=useState();
    let [x3i6,setx3i6]=useState();
    let [x3i7,setx3i7]=useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx3,setfx3]=useState();
    let [fx4,setfx4]=useState();
    let [fx5,setfx5]=useState();
    let [fx6,setfx6]=useState();
    let [fx7,setfx7]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const MultipleLinearRegression = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        var n=7,x1=1,x2=2,x3=3;
        var sumx1i=x1i1+x1i2+x1i3+x1i4+x1i5+x1i6+x1i7;
        var sumx2i=x2i1+x2i2+x2i3+x2i4+x2i5+x2i6+x2i7;
        var sumx3i=x3i1+x3i2+x3i3+x3i4+x3i5+x3i6+x3i7;
        var sumx1ix1i=(x1i1*x1i1)+(x1i2*x1i2)+(x1i3*x1i3)+(x1i4*x1i4)+(x1i5*x1i5)+(x1i6*x1i6)+(x1i7*x1i7);
        var sumx1ix2i=(x1i1*x2i1)+(x1i2*x2i2)+(x1i3*x2i3)+(x1i4*x2i4)+(x1i5*x2i5)+(x1i6*x2i6)+(x1i7*x2i7);
        var sumx1ix3i=(x1i1*x3i1)+(x1i2*x3i2)+(x1i3*x3i3)+(x1i4*x3i4)+(x1i5*x3i5)+(x1i6*x3i6)+(x1i7*x3i7);
        var sumx2ix2i=(x2i1*x2i1)+(x2i2*x2i2)+(x2i3*x2i3)+(x2i4*x2i4)+(x2i5*x2i5)+(x2i6*x2i6)+(x2i7*x2i7);
        var sumx2ix3i=(x2i1*x3i1)+(x2i2*x3i2)+(x2i3*x3i3)+(x2i4*x3i4)+(x2i5*x3i5)+(x2i6*x3i6)+(x2i7*x3i7);
        var sumx3ix3i=(x3i1*x3i1)+(x3i2*x3i2)+(x3i3*x3i3)+(x3i4*x3i4)+(x3i5*x3i5)+(x3i6*x3i6)+(x3i7*x3i7);
        var sumx1iyi=(x1i1*fx1)+(x1i2*fx2)+(x1i3*fx3)+(x1i4*fx4)+(x1i5*fx5)+(x1i6*fx6)+(x1i7*fx7);
        var sumx2iyi=(x2i1*fx1)+(x2i2*fx2)+(x2i3*fx3)+(x2i4*fx4)+(x2i5*fx5)+(x2i6*fx6)+(x2i7*fx7);
        var sumx3iyi=(x3i1*fx1)+(x3i2*fx2)+(x3i3*fx3)+(x3i4*fx4)+(x3i5*fx5)+(x3i6*fx6)+(x3i7*fx7);
        var sumyi=fx1+fx2+fx3+fx4+fx5+fx6+fx7;
        
        var a0=(sumx2i*sumx1ix3i)+sumx1iyi
        var a1=(sumx1iyi*sumyi)+sumx1ix1i
        var a2=(sumx2iyi*sumyi)+sumx1ix2i
        var a3=(sumx3iyi*sumyi)+sumx1ix3i;
        var fx=a0+(a1*x1)+(a2*x2)+(a3*x3);
          queue_data.push({
            sumx1i:sumx1i.toFixed(1),
            sumx2i:sumx2i.toFixed(1),
            sumx3i:sumx3i.toFixed(1),
            sumx1ix1i:sumx1ix1i.toFixed(1),
            sumx1ix2i:sumx1ix2i.toFixed(1),
            sumx1ix3i:sumx1ix3i.toFixed(1),
            sumx2ix2i:sumx2ix2i.toFixed(1),
            sumx2ix3i:sumx2ix3i.toFixed(1),
            sumx3ix3i:sumx3ix3i.toFixed(1),
            sumx1iyi:sumx1iyi.toFixed(1),
            sumx2iyi:sumx2iyi.toFixed(1),
            sumx3iyi:sumx3iyi.toFixed(1),
            sumyi:sumyi.toFixed(1),  
            a0:a0.toFixed(6),
            a1:a1.toFixed(6),
            a2:a2.toFixed(6),
            a3:a3.toFixed(6),
            fx: fx.toFixed(6)
            
          });
        setdatashow(queue_data)
      }

      function set() {
        setx1i1(1);
        setx1i2(0);
        setx1i3(2);
        setx1i4(3);
        setx1i5(4);
        setx1i6(2);
        setx1i7(1);
        setx2i1(0);
        setx2i2(1);
        setx2i3(4);
        setx2i4(2);
        setx2i5(1);
        setx2i6(3);
        setx2i7(6);
        setx3i1(1);
        setx3i2(3);
        setx3i3(1);
        setx3i4(2);
        setx3i5(5);
        setx3i6(3);
        setx3i7(4);
        setfx1(4);
        setfx2(-5);
        setfx3(-6);
        setfx4(0);
        setfx5(-1);
        setfx6(-7);
        setfx7(-20);
        
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Multiple Linear Regression Method</h1>     

                    </div>

                    <div className = "text-topic">
                    
                    
                    <div className="number-inputs">

                    <h2>Write x1i</h2>

                        <input

                            placeholder="input x1i1" 
                            value={x1i1}
                            onChange={event => setx1i1(event.target.value)} 

                        />
                        <input

                            placeholder="input x1i2" 
                            value={x1i2}
                            onChange={event => setx1i2(event.target.value)} 

                        />
                        <input

                            placeholder="input x1i3" 
                            value={x1i3}
                            onChange={event => setx1i3(event.target.value)} 

                        />
                        <input

                            placeholder="input x1i4" 
                            value={x1i4}
                            onChange={event => setx1i4(event.target.value)} 

                        />
                        <input

                             placeholder="input x1i5" 
                             value={x1i5}
                            onChange={event => setx1i5(event.target.value)} 

                        />
                        <input

                            placeholder="input x1i6" 
                            value={x1i6}
                            onChange={event => setx1i6(event.target.value)} 

                         />
                        <input

                            placeholder="input x1i7" 
                            value={x1i7}
                            onChange={event => setx1i7(event.target.value)} 

                        />
                    <h2>Write x2i</h2>
                    <input

                            placeholder="input x2i1" 
                            value={x2i1}
                            onChange={event => setx2i1(event.target.value)} 

                            />
                    <input

                            placeholder="input x2i2" 
                            value={x2i2}
                            onChange={event => setx2i2(event.target.value)} 

                            />

                    <input

                            placeholder="input x2i3" 
                            value={x2i3}
                            onChange={event => setx2i3(event.target.value)} 

                            />
                    <input

                            placeholder="input x2i4" 
                            value={x2i4}
                            onChange={event => setx2i4(event.target.value)} 

                            />
                    <input

                            placeholder="input x2i5" 
                            value={x2i5}
                            onChange={event => setx2i5(event.target.value)} 

                            />
                    <input

                            placeholder="input x2i6" 
                            value={x2i6}
                            onChange={event => setx2i6(event.target.value)} 

                            />
                    <input

                            placeholder="input x2i7" 
                            value={x2i7}
                            onChange={event => setx2i7(event.target.value)} 

                            />
                    <h2>Write x3i</h2>
                    <input

                            placeholder="input x3i1" 
                            value={x3i1}
                            onChange={event => setx3i1(event.target.value)} 

                            />
                     <input

                                placeholder="input x3i2" 
                                value={x3i2}
                                onChange={event => setx3i2(event.target.value)} 

                                />
                    <input

                            placeholder="input x3i3" 
                            value={x3i3}
                            onChange={event => setx3i3(event.target.value)} 

                            />
                    <input

                            placeholder="input x3i4" 
                            value={x3i4}
                            onChange={event => setx3i4(event.target.value)} 

                            />
                    <input

                            placeholder="input x3i5" 
                            value={x3i5}
                            onChange={event => setx3i5(event.target.value)} 

                            />
                    <input

                            placeholder="input x3i6" 
                            value={x3i6}
                            onChange={event => setx3i6(event.target.value)} 

                            />
                    <input

                            placeholder="input x3i7" 
                            value={x3i7}
                            onChange={event => setx3i7(event.target.value)} 

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
                        </div>

                    </div>

                    <button onClick={MultipleLinearRegression}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" margin-align="center"/>
                        <Column title="sumx1i" dataIndex="sumx1i" key="sumx1i" margin-align="center"/>
                        <Column title="sumx2i" dataIndex="sumx2i" key="sumx2i" margin-align="center"/>
                        <Column title="sumx3i" dataIndex="sumx3i" key="sumx3i" margin-align="center"/>
                        <Column title="sumyi" dataIndex="sumyi" key="sumyi" margin-align="center"/>
                        <Column title="sumx1ix1i" dataIndex="sumx1ix1i" key="sumx1ix1i" margin-align="center"/>
                        <Column title="sumx1ix2i" dataIndex="sumx1ix2i" key="sumx1ix2i" margin-align="center"/>
                        <Column title="sumx1ix3i" dataIndex="sumx1ix3i" key="sumx1ix3i" margin-align="center"/>
                        <Column title="sumx2ix2i" dataIndex="sumx2ix2i" key="sumx2ix2i" margin-align="center"/>
                        <Column title="sumx2ix3i" dataIndex="sumx2ix3i" key="sumx2ix3i" margin-align="center"/>
                        <Column title="sumx3ix3i" dataIndex="sumx3ix3i" key="sumx3ix3i" margin-align="center"/>
                        <Column title="sumx1iyi" dataIndex="sumx1iyi" key="sumx1iyi" margin-align="center"/>
                        <Column title="sumx2iyi" dataIndex="sumx2iyi" key="sumx2iyi" margin-align="center"/>
                        <Column title="sumx3iyi" dataIndex="sumx3iyi" key="sumx3iyi" margin-align="center"/>
                        <Column title="a0" dataIndex="a0" key="a0" margin-align="center"/>
                        <Column title="a1" dataIndex="a1" key="a1" margin-align="center"/>
                        <Column title="a2" dataIndex="a2" key="a2" margin-align="center"/>
                        <Column title="a3" dataIndex="a3" key="a3" margin-align="center"/>
                      </Table>

                    </div>

                   

                </div>

        )
    
}
export default MultipleLinearRegression;