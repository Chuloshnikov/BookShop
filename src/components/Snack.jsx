import { Alert, Snackbar } from "@mui/material";

const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={3000}
        >
            <Alert
            severity="success"
            >Product added to cart!</Alert>
        </Snackbar>

    )
}

export default Snack;