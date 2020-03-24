import React from 'react';
import logo from './math.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';

import Home from './Home'
import Bisection from './Bisection'
import FalsePos from './FalsePos'
import Onepoint from './Onepoint'
import Newton from './Newton'
import Secant from './Secant'
import CramerRule from './CramerRule'
import GaussElimination from './GaussElimination'
import GaussJordan from './GaussJordan'
import LUde from './LUde'
import JacobiIteration from './JacobiIteration'
import Gaussseidal from './Gaussseidal'
import Conjugate from './Conjugate'
import LinearInternewton from './LinearInternewton'
import QuadraticInternewton from './QuadraticInternewton'
import PolynomialInternewton from './PolynomialInternewton'
import LinearInterlagrange from './LinearInterlagrange'
import QuadraticInterlagrange from './QuadraticInterlagrange'
import PolynomialInterlagrange from './PolynomialInterlagrange'
import LinearRegression from './LinearRegression'
import PolynomialRegression from './PolynomialRegression'
import MultipleLinearRegression from './MultipleLinearRegression'
import Trapezoidal from './Trapezoidal'
import CompositeTrapzoidal from './CompositeTrapzoidal'
import Simpson from './Simpson'
import CompositeSimpson from './CompositeSimpson'
import FirstForward from './FirstForward'
import FirstBackward from './FirstBackward'
import FirstCentral from './FirstCentral'
import SecondForward from './SecondForward'
import SecondBackward from './SecondBackward'
import SecondCentral from './SecondCentral'
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
const menu1 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
                <NavLink exact to ="/" activeClassName="active">Home Page </NavLink>
            </Menu.Item>
            
            <Menu.Item>
                <NavLink to ="/Bisection" activeClassName="active">Bisection Method </NavLink>
                
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/FalsePos" activeClassName="active">FalsePosition Method</NavLink>  
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Onepoint" activeClassName="active">One Point Interaction</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Newton" activeClassName="active">Newton Raphson Method</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Secant" activeClassName="active">Secant Method</NavLink>
            </Menu.Item>
            
      </Menu>

  </div>

);
const menu2 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
            <NavLink to ="/CramerRule" activeClassName="active">Cramer Rule</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/GaussElimination" activeClassName="active">Gauss Elimination Method</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/GaussJordan" activeClassName="active">Gauss-Jordan Method</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/LUde" activeClassName="active">LU Decompositon Method</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/JacobiIteration" activeClassName="active">Jacobi Iteration Method</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/Gaussseidal" activeClassName="active">Gauss-Seidel Iteration Method</NavLink>
                
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/Conjugate" activeClassName="active">Conjugate Gradient Method</NavLink>
                
            </Menu.Item>
      </Menu>

  </div>


);
const menu3 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
                <NavLink exact to ="/LinearInternewton" activeClassName="active">Linear Interpolation(Newton) </NavLink>
            </Menu.Item>
            
            <Menu.Item>
                <NavLink to ="/QuadraticInternewton" activeClassName="active">Quadratic Interpolation(Newton) </NavLink>
                
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/PolynomialInternewton" activeClassName="active">Polynomial Interpolation(Newton) </NavLink>  
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/LinearInterlagrange" activeClassName="active">Linear Interpolation(Lagrange)</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/QuadraticInterlagrange" activeClassName="active">Quadratic Interpolation(Lagrange)</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/PolynomialInterlagrange" activeClassName="active">Polynomial Interpolation(Lagrange)</NavLink>
            </Menu.Item>
            
      </Menu>

  </div>

);
const menu4 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
                <NavLink exact to ="/LinearRegression" activeClassName="active">Linear Regression </NavLink>
            </Menu.Item>
            
            <Menu.Item>
                <NavLink to ="/PolynomialRegression" activeClassName="active">Polynomial Regression </NavLink>
                
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/MultipleLinearRegression" activeClassName="active">Multiple Linear Regression </NavLink>  
            </Menu.Item>

            
            
      </Menu>

  </div>

);
const menu5 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
                <NavLink exact to ="/Trapezoidal" activeClassName="active">Trapezoidal Rule </NavLink>
            </Menu.Item>
            
            <Menu.Item>
                <NavLink to ="/CompositeTrapzoidal" activeClassName="active">Composite Trapezoidal Rule  </NavLink>
                
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Simpson" activeClassName="active">Simpson's Rule  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/CompositeSimpson" activeClassName="active">Composite Simpson's Rule  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/FirstForward" activeClassName="active">First Forward divided-difference O(h) </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/FirstBackward" activeClassName="active">First Backward divided-difference O(h)  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/FirstCentral" activeClassName="active">First Central divided-difference O(h^2)  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/SecondForward" activeClassName="active">Second Forward divided-difference O(h^2)  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/SecondBackward" activeClassName="active">Second Backward divided-difference O(h^2)  </NavLink>  
            </Menu.Item>
            <Menu.Item>
                <NavLink to ="/SecondCentral" activeClassName="active">Second Central divided-difference O(h^4)  </NavLink>  
            </Menu.Item>
      </Menu>

  </div>

);
function App() {
  return (


    <div className="App">

      <div className="nav">

          <Dropdown overlay={menu1} placement="bottomLeft">

             <button>Root of Equations</button>

          </Dropdown>

        <h>&nbsp;&nbsp;</h>
        

          <Dropdown overlay={menu2} placement="bottomLeft">

            <button>Linear</button>

          </Dropdown>

        
        <h>&nbsp;&nbsp;</h>
          
          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Interpolation And Extrapolation</button>

          </Dropdown>
        <h>&nbsp;&nbsp;</h>
          
          <Dropdown overlay={menu4} placement="bottomLeft">

            <button>Least-Squares Regression</button>

          </Dropdown>
        <h>&nbsp;&nbsp;</h>
          
          <Dropdown overlay={menu5} placement="bottomLeft">

            <button>Numerical Integration And Differentiation</button>

          </Dropdown>
        </div>

            
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/Bisection" component = {Bisection}/>
              <Route path="/FalsePos" component={FalsePos} />
              <Route path="/Onepoint" component={Onepoint} />
              <Route path="/Newton" component={Newton} />
              <Route path="/Secant" component={Secant} />

              <Route path="/CramerRule" component={CramerRule} />
              <Route path="/GaussElimination" component={GaussElimination} />
              <Route path="/GaussJordan" component={GaussJordan} />
              <Route path="/LUde" component={LUde} />
              <Route path="/JacobiIteration" component={JacobiIteration} />
              <Route path="/Gaussseidal" component={Gaussseidal} />
              <Route path="/Conjugate" component={Conjugate} />
              <Route path="/LinearInternewton" component={LinearInternewton} />
              <Route path="/QuadraticInternewton" component={QuadraticInternewton} />
              <Route path="/PolynomialInternewton" component={PolynomialInternewton} />
              <Route path="/LinearInterlagrange" component={LinearInterlagrange} />
              <Route path="/QuadraticInterlagrange" component={QuadraticInterlagrange} />
              <Route path="/PolynomialInterlagrange" component={PolynomialInterlagrange} />
              <Route path="/LinearRegression" component={LinearRegression} />
              <Route path="/PolynomialRegression" component={PolynomialRegression} />
              <Route path="/MultipleLinearRegression" component={MultipleLinearRegression} />
              <Route path="/Trapezoidal" component={Trapezoidal} />
              <Route path="/CompositeTrapzoidal" component={CompositeTrapzoidal} />
              <Route path="/Simpson" component={Simpson} />
              <Route path="/CompositeSimpson" component={CompositeSimpson} />
              <Route path="/FirstForward" component={FirstForward} />
              <Route path="/FirstBackward" component={FirstBackward} />
              <Route path="/FirstCentral" component={FirstCentral} />
              <Route path="/SecondForward" component={SecondForward} />
              <Route path="/SecondBackward" component={SecondBackward} />
              <Route path="/SecondCentral" component={SecondCentral} />
            </Switch>
        

      </div>

    )
}

export default App;
