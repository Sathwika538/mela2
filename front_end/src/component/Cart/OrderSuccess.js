import React, { Fragment } from "react";
import './OrderSuccess.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';

const OrderSuccess = () => {
    return <Fragment>
    <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Your Order has been placed Successfully</Typography>
        <Link to="/orders">View Orders</Link>
    </div>
    </Fragment>
}

export default OrderSuccess;