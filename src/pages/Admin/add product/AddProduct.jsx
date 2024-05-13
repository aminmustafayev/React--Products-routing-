
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import controller, { post } from "../../../services";
import ProductSchema from '../../../validations/product.validation'
import { Input } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { endpoints } from "../../../services/base";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";


const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    salePrice: "",
    costPrice: "",
    description: "",
    imgSrc: "",
    discountPercentage: "",
    stockCount: ""
  });
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      description: "",
      imgSrc: "",
      discountPercentage: "",
      stockCount: ""
    },
    onSubmit:(values)=> {
     
      controller.post(endpoints.products, values)
  
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      }).then(() => navigate("/admin/product"));
      
      values={
        name: "",
        salePrice: "",
        costPrice: "",
        description: "",
        imgSrc: "",
        discountPercentage: "",
        stockCount: ""
      };
    },
    validationSchema: ProductSchema,
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}
        style={{ width: "40%", margin: "180px auto" }}>
        <h1
          style={{ textAlign: "center", color: "blue", marginBottom: "15px" }}
        >
          Add Product
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder='Name'
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
          <Input
            id="salePrice"
            name="salePrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.salePrice}
            placeholder="Sales Price"

          />
          {formik.errors.salePrice && (
            <span style={{ color: "red" }}>{formik.errors.salePrice}</span>
          )}
          <Input
            id="costPrice"
            name="costPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.costPrice}
            placeholder="Cost Price"
          />
          {formik.errors.costPrice && (
            <span style={{ color: "red" }}>{formik.errors.costPrice}</span>
          )}
          <Input
            id="discountPercentage"
            name="discountPercentage"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.discountPercentage}
            placeholder="DisCount Percentage"
          />
          {formik.errors.discountPercentage && (
            <span style={{ color: "red" }}>{formik.errors.discountPercentage}</span>
          )}

          <Input
            id="imgSrc"
            name="imgSrc"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
            placeholder="Img"
          />
          {formik.errors.imgSrc && (
            <span style={{ color: "red" }}>{formik.errors.imgSrc}</span>
          )}
          <Input
            id="stockCount"
            name="stockCount"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.stockCount}
            placeholder="StockCount"
          />
          {formik.errors.stockCount && (
            <span style={{ color: "red" }}>{formik.errors.stockCount}</span>
          )}
          <TextArea
            placeholder="Description "
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default AddProduct