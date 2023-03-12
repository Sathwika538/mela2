import React, {Fragment,useEffect} from "react";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector,useDispatch} from 'react-redux';
import { clearErrors,getAdminProduct,deleteProduct} from "../../actions/productAction";
import './ProductList.css';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import {Button} from '@material-ui/core';
import MetaData from "../layout/MetaData";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Sidebar from "./Sidebar";
import Loader from "../layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
const ProductList = ()=>{

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const {loading,error,products} = useSelector((state) => state.products);
    const {error:deleteError,isDeleted} = useSelector((state) => state.product);

    const deleteProductHandler = (id)=>{
        dispatch(deleteProduct(id));
    }

    const columns = [
        {field: "id",headerName:"Product ID",minWidth:200,flex:0.5},
        {
            field:"name",
            headerName:"Name",
            minWidth:350,
            flex:1,
        },
        {
            field:"stock",
            headerName:"Stock",
            type:"number",
            minWidth:270,
            flex:0.5,
        },
        {
            field:"price",
            headerName:"Price",
            type:"number",
            minWidth:270,
            flex:0.5,
        },
        {
            field:"actions",
            flex:0.3,
            headerName:"Actions",
            minWidth:150,
            type:"number",
            sortable:false,
            renderCell: (params) => {
                
                return (
                    <Fragment>
                    <Button>
                    <Link to={`/admin/product/${params.getValue(params.id,"id")}`}>
                            <EditIcon />
                        </Link>
                    </Button>
                        <Button onClick={() => deleteProductHandler(params.getValue(params.id,"id"))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                )
            }
        }
    ];
    const rows = [];
    products && 
      products.forEach((item)=>{
        rows.push({
            id:item._id,
            stock:item.Stock,
            price:item.price,
            name:item.name,
        })
      })

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(deleteError){
            alert.error(deleteError);
            dispatch(clearErrors());
        }
        if(isDeleted){
            alert.success("Deleted Product Successfully");
            navigate('/admin/dashboard');
            dispatch({type:DELETE_PRODUCT_RESET});
        }
    
        dispatch(getAdminProduct());
    },[dispatch,alert,error,deleteError,navigate,isDeleted]);
    return <Fragment>
         {loading ? (
            <Loader />   
        ) : (
    <Fragment>
        <MetaData title={`ALL PRODUCTS - Admin`} />
        <div className = "dashboard">
            <Sidebar />
            <div className="productListContainer">
                <h1 id="productListHeading">ALL PRODUCTS</h1>

                <DataGrid 
                    rows={rows}
                    columns={columns}
                    getRowId={(rows) => rows.id}
                    pageSize={10}
                     rowsPerPageOptions={[5, 10, 20]}
                    disableSelectionOnClick
                    className="productListTable"
                    autoHeight
                    pagination
                />
            </div>
        </div>
    </Fragment>
        )
       
} </Fragment>
}

export default ProductList;