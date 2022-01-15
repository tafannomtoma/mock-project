import { Button, Card, CardActions, CardContent, CardMedia, Container, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import React, { useState } from 'react';
import "./Shop.css";

const Shop = () => {
    // const [product, setProduct] = useState([]);

    const products = [
        {
            id: 1,
            name: 'laptop',
            price: '500$',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil illum asperiores eaque sequi cumque ducimus accusamus, deleniti enim sapiente!',
            country: 'UAE',
            img:'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'
        },
        {
            id: 1,
            name: 'phone',
            price: '50$',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil illum asperiores eaque sequi cumque ducimus accusamus, deleniti enim sapiente!',
            country: 'Iran',
            img:'https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg'
        },
        {
            id: 1,
            name: 'laptop',
            price: '600$',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil illum asperiores eaque sequi cumque ducimus accusamus, deleniti enim sapiente!',
            country: 'UAE',
            img:'https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg'
        },
        {
            id: 1,
            name: 'watch',
            price: '200$',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil illum asperiores eaque sequi cumque ducimus accusamus, deleniti enim sapiente!',
            country: 'Turkey',
            img:'https://s.yimg.com/uu/api/res/1.2/H_XR71HzcWN.HZiiaAGlNQ--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-12/31dc4250-3ec5-11eb-b5ef-d588743dbedb.cf.jpg'
        },
        {
            id: 1,
            name: 'phone',
            price: '400$',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil illum asperiores eaque sequi cumque ducimus accusamus, deleniti enim sapiente!',
            country: 'UAE',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOr4AiN1C_ZGsBUxXgMW9owHGnQUJHsA02ZF63BorSdULC0MLtCsSBCh1M5mcb85H_ko&usqp=CAU'
        }
        
    ]
    
    return (
        <div >
            {/* <a href="#home">Home</a>
            <a href="#news">News</a> */}
            <div class="dropdown">
                <button class="dropbtn">Category
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <hr />
            </div>
            <Box sx={{ flexGrow: 1 }}>

                <Container>
                    
                       
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Grid item xs={4} sm={4} md={3} sx={{ mt: 5 }}
                            >
                                <Card sx={{ minWidth: 275 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                            Price: {product.price}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {product.name}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {product.details}
                                        </Typography>
                                    </CardContent>
                                    <Link to={`/purchase/${product._id}`}>
                                        <Button><i class="fas fa-arrow-right"></i></Button>
                                    </Link>



                                </Card>
                            </Grid>)

                        }

                    </Grid>
                </Container>
            </Box>
            
            
            
        </div>
    );
};

export default Shop;