import React, { Component } from 'react';
export default class Create extends Component {

    state = {
        orders: [],
        order:{
          o_id:'',
          c_id: '',
          product_name:'',
          order_date: '',
          total_price: '',
          locker_location: '',
          locker_number:'',
          locker_password:'',
          product_quantity:''
            }
    }


      componentDidMount(){
        this.getOrders();
      }

      getOrders = _ =>{
        fetch('http://localhost:4000/orders')
          .then(response => response.json())
          .then(response => this.setState({ orders: response.data}))
          .catch(err => console.error(err))
      }


      renderOrder = ({ order_id, customer_id, product_name, order_date, total_price, deliver_status, locker_location, locker_number, locker_password, product_quantity }) => <div key={ order_id }>

        order id: {order_id} <br></br> customer id: {customer_id} <br></br> product_name: {product_name} <br></br> order date: {order_date}<br></br> total price: {total_price} <br></br>deliver status: {deliver_status}<br></br> locker location: {locker_location}<br></br> locker number: {locker_number}<br></br> locker password: {locker_password} <br></br> product_quantity: {product_quantity} <hr></hr>
        </div>


    render() {
        const { orders, order } = this.state;
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h3>View Order</h3>
                    <br />
                    <p>All Orders</p>
                  </div>
                </div><br />
              </div>
              <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                        {orders.map(this.renderOrder,this.addOrder)}
                    </div>
                  </div>
              </div>
            </div>
          </div>

        );
    }
}
