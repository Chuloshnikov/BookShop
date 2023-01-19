import { Drawer, List, ListItemText, ListItem, ListItemIcon, Divider, Typography } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import BasketItem from "./BasketItem";


const Basket = (props) => {
const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder
} = props;
    return (
       <Drawer
       anchor="right"
       open={cartOpen}
       onClose={closeCart}
       >
        <List sx={{width: '250px'}}>
            <ListItem>
                <ListItemIcon>
                    <ShoppingBasket/>
                </ListItemIcon>
                <ListItemText primary="Basket"/>
            </ListItem>
            <Divider/>
            { !order ? (<ListItem>Сart is empty</ListItem>
            ) : ( 
                <>
                    {order.map((item) => (
               
                    <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
                    ))}
                    <Divider/>
                   <ListItem>
                    <Typography sx={{ FontWeight:700 }}>
                    Total cost:{' '}
                    {order.reduce((acc, item) => {
                        return acc + item.price * item.quantity;
                    }, 0)}{' '}
                    UAH.
                    </Typography>
                   </ListItem>
                    </>
                )}
        </List>
        </Drawer>
    )
}

export default Basket;