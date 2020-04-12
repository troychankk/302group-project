import React, { Component } from 'react';
//import logo from './logo.svg';//
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './Nav';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'//
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Product from "./components/product"
import View from "./components/view"
import Search from "./components/search";
import Create from "./components/create";
import Delete from "./components/delete";
import Update from "./components/update";



class App extends Component {
  abc(){
    return (
      <div>
      <Nav/>
      
      </div>
    )
  }
  

  
    render() {
      return(
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
                  <div className="container">
                    <Link className="navbar-brand" to={"/View"}>Online Retailer</Link>

                    <div className="navbar-expand-sm">
                      <ul className="navbar-nav ml-auto" navbar-nav mr-auto mt-2 mt-lg-0>
                      <li className="nav-item">
                          <Link className="nav-link" to={"/Product"}>Product</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Search"}>Search</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Create"}>Create</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Delete"}>Delete</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Update"}>Update</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="auth-wrapper">
                  <div className="auth-inner">
                      <Switch>
                        <Route exact path='/' component={View} />
                        <Route exact path='/View' component={View} />
                        <Route exact path='/Product' component={Product} />
                        <Route path ='/Search' component={Search} />
                        <Route path='/Create' component={Create} />
                        <Route path='/Delete' component={Delete} />
                        <Route path='/Update' component={Update} />
                      </Switch>
                  </div>
                </div>
            </div>
        </Router>
        /*
        <div className="App">
        {orders.map(this.renderOrder,this.addOrder)}
        
            customer_id:<input value={order.c_id} onChange={e => this.setState({ order: { ...order, c_id: e.target.value } })}></input><br></br>
            order_date:<input value={order.order_date} onChange={e => this.setState({ order: { ...order, order_date: e.target.value } })}></input><br></br>
            total_price:<input value={order.total_price} onChange={e => this.setState({ order: { ...order, total_price: e.target.value } })}></input><br></br>
            locker_location:<input value={order.locker_location} onChange={e => this.setState({ order: { ...order, locker_location: e.target.value } })}></input><br></br>
            locker_number:<input value={order.locker_number} onChange={e => this.setState({ order: { ...order, locker_number: e.target.value } })}></input><br></br>
            locker_password:<input value={order.locker_password} onChange={e => this.setState({ order: { ...order, locker_password: e.target.value } })}></input><br></br>
            <button onClick={this.addOrder}>Add order</button>
        </div>
        */
      )
    }
  }
  
  export default App;
