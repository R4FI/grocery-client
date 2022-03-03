import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);


    // delete
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch (url , {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
  
    }

    return (
        <div>
            <h3>Products You Ordered :{orders.length}</h3>
          {orders?.map((order)=>(

         
            <Box >
            <Paper className="griditem" sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
           
          </Grid>
          <Grid item md >
            <Typography style={{textAlign:'left'}}><h4>Product:{order?.bookname}</h4></Typography>
            <Typography style={{textAlign:'left'}}><h5>User:{order?.name}</h5></Typography>
            <Typography style={{textAlign:'left'}}><h5>Email:{order?.email}</h5> </Typography>
            <Typography style={{textAlign:'left'}}> <h5>Price: ${order?.price}</h5></Typography>
            <Typography style={{textAlign:'left'}}><h5>Number: {order?.phone}</h5></Typography>
            <Typography style={{textAlign:'left'}}><h5>Adress: {order?.Address}</h5></Typography>
            
          </Grid>
        
         
        </Grid>
        <Stack direction="row" spacing={3}>
              <Button  onClick={() => handleDeleteOrder(order._id)}>
                Delete
              </Button> <br/>
              <Button>{order.payment? 'Paid':
              
              <Link to={`/dashboard/paylink/${order._id}`}>Pay Now</Link>
              }</Button>
            </Stack>
      </Paper>
      
            </Box>
             ))}
        </div>
    );
};

export default MyOrder;