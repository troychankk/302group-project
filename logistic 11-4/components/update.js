import React, { Component } from 'react';
export default class Update extends Component {
 
    state = {
        orders: [],
        order:{
            c_id: '',
            product_quantity:'',
            order_date: '',
            total_price: '',
            locker_location: '',
            locker_number:'',
            locker_password:'',
            deliver_status:''
            }  
    }    

        searchOrder = _ =>{
        const { order } = this.state;
        fetch(`http://localhost:5000/logistics/orders/search?o_id=${order.o_id}`)
        .then(response => response.json())
        .then(response => this.setState({ orders: response.data}))
        .catch(err => console.error(err))
      }

        updateOrder = _ =>{
        const { order } = this.state;
        fetch(`http://localhost:5000/logistics/orders/updates?o_id=${order.o_id}&deliver_status=${order.deliver_status}`)
        .then(this.searchOrder)
        .catch(err => console.error(err))
        }

        componentDidMount(){
          this.getOrders();
        }
      
        getOrders = _ =>{
          fetch('http://localhost:5000/logistics/orders')
            .then(response => response.json())
            .then(response => this.setState({ orders: response.data}))
            .catch(err => console.error(err))
        }

        renderOrder = ({ order_id, customer_id, product_name, deliver_status, locker_location, locker_number, locker_password, product_quantity }) => <div key={ order_id }> 
        
        order id: {order_id} <br></br> customer id: {customer_id} <br></br>customer id: {customer_id} <br></br> product_name: {product_name} <br></br> deliver status: {deliver_status}<br></br> locker location: {locker_location}<br></br> locker number: {locker_number}<br></br> locker password: {locker_password} <br></br> product_quantity: {product_quantity} <hr></hr>
        </div>
  

    render() {
      const { orders, order } = this.state;
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Update Order</h3>
                    <br />
                    <div className="form-group">
                        <label>update ID</label>
                        <input 
                            className="form-control" 
                            placeholder="Enter Order ID"
                            value={order.o_id}
                            onChange={e => this.setState({ order: { ...order, o_id: e.target.value } })}></input>
                    </div>

                    <button type="button" className="btn btn-secondary" onClick={this.searchOrder}>Search</button><br></br>
                    <button type="button" className="btn btn-secondary" onClick={this.updateOrder}>Update</button><br></br>  
                    update deliver status: <input value={order.deliver_status} onChange={e => this.setState({ order: { ...order, deliver_status: e.target.value } })} ></input> <hr></hr>
                  </div>

                </div>
              </div>
              <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                        {orders.map(this.renderOrder)}
                    </div>
                  </div>
              </div>
            </div>
          </div>
  
        );
    }
}