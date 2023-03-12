import React, { Fragment, useEffect } from "react";
import './MyOrders.css';
import {DataGrid} from '@material-ui/data-grid';
import {useSelector,useDispatch} from 'react-redux';
import {clearErrors,myOrders} from '../actions/orderActions';
import Loader from '../component/layout/Loader/Loader';
import {Link} from 'react-router-dom';
import {useAlert} from 'react-alert';
import { Typography } from "@material-ui/core";
import MetaData from '../component/layout/MetaData';
import LaunchIcon from '@material-ui/icons/Launch';

const MyOrders = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {user,loading} = useSelector((state)=> state.user);
    const {error,orders} = useSelector((state)=>state.myOrders);
    

    const columns = [
    {field:"id",headerName:"Order ID",minWidth:300,flex:1},
    {
        field:"status",
        headerName:"Status",
        minWidth:150,
        flex:0.5,
        cellClassName: (params) => {
            return params.getValue(params.id,"status") === "Delivered" ?
             "greenColor"
            : "redColor";
        }
    },
    {
        field:"itemsQty",
        headerName:"Items Qty",
        type:"number",
        minWidth:150,
        flex:0.3,
    },
    {
        field:"amount",
        headerName:"Amount",
        type:"number",
        minWidth:270,
        flex:0.5,
    },
    {
        field:"actions",
        flex:0.3,
        headerName:"Actions",
        minWidth:150,
        sortable:false,
        renderCell:(params) => {
            return (
                <Link to={`/order/${params.getValue(params.id,"id")}`}>
                    <LaunchIcon />
                </Link>
            )
        }
    },
    ];
    const rows = [];
   
    orders && 
      orders.forEach((item)=>{
        rows.push({
            id:item._id,
            itemsQty:item.orderItems.length,
           
            status:item.orderStatus,
            amount:item.totalPrice,
        })
      })
    useEffect(()=>{
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(myOrders());
    },[dispatch,alert,error]);

    return <Fragment>
        
 
        {loading ? (
            <Loader />   
        ) : (
           
            <div className="myOrdersPage">
          <MetaData title={`${user.name} - Orders`}/>
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    getRowId={(rows) => rows.id}

                     pageSize={10}
                     rowsPerPageOptions={[5, 10, 20]}
                    disableSelectionOnClick
                    className="myOrdersTable"
                    autoHeight
                    pagination
                />

                <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
            </div>
        )
        }
    </Fragment>
}
export default MyOrders;