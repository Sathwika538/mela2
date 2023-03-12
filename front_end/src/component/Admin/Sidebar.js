import React, { Fragment } from "react";
import './Sidebar.css';
import logo from '../../images/logo.gif';
import {Link} from 'react-router-dom';
import { TreeView,TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AddIcon from '@material-ui/icons/Add';
import ImportExportIcon from '@material-ui/icons/ListAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import RateReviewIcon from '@material-ui/icons/RateReview';

const Sidebar = ()=>{
    return <div className="sidebar">
    <Link to="/">
        <img src={logo} alt="Ecommerce" className="logo"/>
    </Link>
    <Link to="/admin/dashboard">
        <p>
            <DashboardIcon /> Dashboard
        </p>
    </Link>
    <Link to="/admin/products">
        <p>
        <PostAddIcon /> All Products
        </p>
    </Link>
    <Link to="/admin/product">
        <p>
        <PostAddIcon /> Create Product
        </p>
    </Link>
    <Link to="/admin/orders">
     <p>
        <ListAltIcon /> Orders
     </p>
    </Link>
    <Link to="/admin/users">
        <p>
            <PeopleIcon /> Users
        </p>
    </Link>
    <Link to="/admin/reviews">
        <p>
            <RateReviewIcon /> Reviews
        </p>
    </Link>
    </div>
}

export default Sidebar;