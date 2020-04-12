const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();


const rdb = mysql.createConnection({
    host     : 'database-3.cvy5hjvppguv.us-west-2.rds.amazonaws.com',
    user     : 'cem302302',
    password : '302302cem',
    database:'retail_db'

});

const ldb = mysql.createConnection({
    host     : 'database-3.cvy5hjvppguv.us-west-2.rds.amazonaws.com',
    user     : 'cem302302',
    password : '302302cem',
    database:'logistic_db'

});

// connect mysql db
rdb.connect(err=>{
    if(err){
        throw err;
    }
    console.log('Retail Mysql Connected...');
});

ldb.connect(err=>{
    if(err){
        throw err;
    }
    console.log('Logistic Mysql Connected...');
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('home page')
});

app.get('/logistics/orders', (req, res) => {
    const select_all_orders = 'select order_id, customer_id, b.product_name,deliver_status,locker_location,locker_number,locker_password, product_quantity from retail_db.orders as a, retail_db.products as b where(b.product_id=a.product_id)'
    ldb.query(select_all_orders, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/logistics/orders/updates', (req, res) => {
    const { o_id, deliver_status } = req.query;
    const update_order = `UPDATE orders SET deliver_status = '${deliver_status}' WHERE order_id = ${o_id}`;
    rdb.query(update_order, (err, results) =>{
        
    })
    ldb.query(update_order, (err, results) =>{
        if(err) {
            return res.send(err)
        }
        else{
            return res.send('sucessfully updated order')
        }
    })
})

app.get('/logistics/orders/search', (req, res) => {
    const { o_id } = req.query;
    const search_order = `select order_id, customer_id, b.product_name, deliver_status,locker_location,locker_number,locker_password, product_quantity from retail_db.orders as a, retail_db.products as b where(b.product_id=a.product_id) and a.order_id = ${o_id}`;
    ldb.query(search_order, (err, results) => {
      if(err) {
        return res.send(err)
      }
      else {
        return res.json({
          data: results
        })
      }
    })
})

port=5000
app.listen(port,() =>{
    console.log('Server started on '+port);
});
