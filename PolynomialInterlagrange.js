import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function PolynomialInterLagrange() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [x2,setx2]=useState();
    let [x3, setx3] = useState();
    let [x4, setx4] = useState();
    let [x5,setx5]=useState();
    let [fx0,setfx0]=useState();
    let [fx1,setfx1]=useState();
    let [fx2,setfx2]=useState();
    let [fx3,setfx3]=useState();
    let [fx4,setfx4]=useState();
    let [fx5,setfx5]=useState();
    let [fx,setfx]=useState();
    let [x,setx]=useState();
    const queue_data = []

    const [datashow, setdatashow] = useState();

    const PolynomialInterLagrange = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        var x=250;
        var l0=((x-x1)*(x-x2)*(x-x3)*(x-x4)*(x-x5))/((x0-x1)*(x0-x2)*(x0-x3)*(x0-x4)*(x0-x5));
        var l1=((x-x0)*(x-x2)*(x-x3)*(x-x4)*(x-x5))/((x1-x0)*(x1-x2)*(x1-x3)*(x1-x4)*(x1-x5));
        var l2=((x-x0)*(x-x1)*(x-x3)*(x-x4)*(x-x5))/((x2-x0)*(x2-x1)*(x2-x3)*(x2-x4)*(x2-x5));
        var l3=((x-x0)*(x-x1)*(x-x2)*(x-x4)*(x-x5))/((x3-x0)*(x3-x1)*(x3-x2)*(x3-x4)*(x3-x5));
        var l4=((x-x0)*(x-x1)*(x-x2)*(x-x3)*(x-x5))/((x4-x0)*(x4-x1)*(x4-x2)*(x4-x3)*(x4-x5));
        var l5=((x-x0)*(x-x1)*(x-x2)*(x-x3)*(x-x4))/((x5-x0)*(x5-x1)*(x5-x2)*(x5-x3)*(x5-x4));
        var fx;
            fx = (l0*fx0)+(l1*fx1)+(l2*fx2)+(l3*fx3)+(l4*fx4)+(l5*fx5);     
          queue_data.push({
            l0:l0.toFixed(6),
            l1:l1.toFixed(6),
            l2:l2.toFixed(6),
            l3:l3.toFixed(6),
            l4:l4.toFixed(6),
            l5:l5.toFixed(6),
            fx: fx.toFixed(6)    
          });



          

        setdatashow(queue_data)
      }

      function set() {
        setx0(-100);
        setx1(0);
        setx2(100);
        setx3(200);
        setx4(300);
        setx5(400);
        setfx0(215);
        setfx1(202);
        setfx2(206);
        setfx3(215);
        setfx4(228);
        setfx5(249);
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1>Polynomial Interpolation Method(Lagrange) </h1>     

                    </div>

                    <div className = "text-topic">
                    
                    
                    <div className="number-inputs">

                    <h2>Write xi</h2>

                        <input

                            placeholder="input x0" 
                            value={x0}
                            onChange={event => setx0(event.target.value)} 

                        />
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
<h2> fx0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fx5</h2>

                            
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


                        </div>

                    </div>

                    <button onClick={PolynomialInterLagrange}>Calculate</button>
                    <button onClick={set}>Set Value</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="function" dataIndex="fx" key="fx" />
                        <Column title="l0" dataIndex="l0" key="l0" />
                        <Column title="l1" dataIndex="l1" key="l1" />
                        <Column title="l2" dataIndex="l2" key="l2" />
                        <Column title="l3" dataIndex="l3" key="l3" />
                        <Column title="l4" dataIndex="l4" key="l4" />
                        <Column title="l5" dataIndex="l5" key="l5" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default PolynomialInterLagrange;