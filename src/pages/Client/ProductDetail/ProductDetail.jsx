import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { getById } from "../../../services"
import { endpoints } from "../../../services/base"
import { useEffect } from "react"

const ProductDetail = () => {
  let {id}=useParams()

  const[products, setProducts]=useState({})
  async function getProducts(){
      await getById(endpoints.products,id).then((res)=>{
        console.log(res.data);
        setProducts(res.data)
      })
  }
  useEffect(()=>{
    getProducts()
  },[])

  return (
  <>
   <Card  key={products?.id} style={{ margin: "20px",
    objectFit:"cover",  }} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={products?.imgSrc}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {products?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {products?.costPrice}$--{products?.stockCount}-stockCount
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {products?.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link className="darkCss" to={"/products"}>Go Back</Link>
                    </Button>
                  </CardActions>
                </Card>
  </>
  )
}

export default ProductDetail