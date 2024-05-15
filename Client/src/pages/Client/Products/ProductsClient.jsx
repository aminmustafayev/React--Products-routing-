import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useState } from 'react';
import { getAll } from '../../../services/index.js'
import { endpoints } from '../../../services/base.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const ProductsClient = () => {
  const [data, setData] = useState([])
  async function getProducts() {
    await getAll(endpoints.products).then((res) => {
      console.log(data)
      setData(res.data)
    })
  }
  useEffect(() => {
    getProducts()
  }, [])



  return (
    <>
      <Grid  container style={{ width: '80%', margin: "50px  auto" }}   >
        {
          data && data.map((e) => {
            return (
              <Grid key={e.id} item xs={12} md={6} sm={12} lg={3} >
                <Card style={{minHeight:"450px", margin: "20px", objectFit:"cover",  }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={e.imgSrc}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.costPrice}$--{e.stockCount}-stockCount
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {e.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link className="darkCss" to={`/productdetail/${e.id}`}>Detail</Link>
                    </Button>
                  </CardActions>
                </Card>

              </Grid>
            )
          })
        }


      </Grid>
    </>
  )
}

export default ProductsClient