import React from 'react';
import { CardMedia, Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{
                height: "100%"
            }}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{height: '140px'}}
                />
                    <CardContent>
                        <Typography
                        variant="h6"
                        component="h3"
                        >{name}</Typography>
                        <Typography variant="body1">Price: {price} UAH.</Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                    variant='contained'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </Button>
                    </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;