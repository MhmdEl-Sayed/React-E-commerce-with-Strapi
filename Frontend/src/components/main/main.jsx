import { useTheme } from "@emotion/react";
import { Box, CircularProgress, Container, IconButton, Rating, Stack } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { forwardRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import "./main.css";
import Productdetails from "./Productdetails";
import { useGetproductByNameQuery } from "../../Redux/product";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide children={undefined} direction="up" ref={ref} {...props} />;
});

const Main = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();


  const handleAlignment = (event, newAlignment) => {
    
    setChange(newAlignment)
  };

const allproduct='products?populate=*'
const women="products?populate=*&filters[productCategory][$eq]=women"
const men="products?populate=*&filters[productCategory][$eq]=men"
const[change,setChange]=useState(allproduct)

  const { data, error, isLoading } = useGetproductByNameQuery
  (change)

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }


 
   if (data) {
  return(
    <Container sx={{ mt: 3 }}>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={3}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 450, fontSize: "19px" }}
        >
          Selected Products{" "}
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
            fontSize: "15px",
          }}
          variant="body1"
        >
          All Our new arrivals in a exclusive brand selection
        </Typography>
      </Box>

      <ToggleButtonGroup
        color="error"
        value={change}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          "Mui-selected": {
            border: "1px solid rgba(233,69,96,0.5)",
            color: "#e94560",
            bgcolor: "initial",
          },
        }}
      >
        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="button"
          value={allproduct}
          aria-label="left aligned"
        >
          All Products
        </ToggleButton>

        <ToggleButton
          sx={{ mx: "16px !important", color: theme.palette.text.primary }}
          className="button"
          value={men}
          aria-label="centered"
        >
          MEN category
        </ToggleButton>

        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="button"
          value={women}
          aria-label="right aligned"
        >
          Women category
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>

    <Stack direction={"row"} sx={{gap:3,flexWrap:'wrap'}}>
     {data.data.map((item) => {
       return(
        <Card key={item}
        sx={{   maxWidth: 333,
          mt: 6,
          ":hover .MuiCardMedia-root ": {
            rotate: "1deg",
            scale: "1.1",
            transition: "0.35s",
          }, }}>
        <CardMedia
          sx={{  height: 260 }}
          // @ts-ignore
          image={`${item.productimg[0].url}`}
          title="green iguana"
        />
        <CardContent>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "450", fontSize: "18px" }}
            >
              {item.producttitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "450", fontSize: "18px" }}
            >
              ${item.productprice}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, mt: 2.5 }}
          >
          {item.productdescription}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button size="medium" onClick={handleClickOpen}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
            <Typography sx={{ fontSize: "14px", fontWeight: "450", ml: 1 }}>
              Add To Card
            </Typography>
          </Button>
          
          <Dialog
            
            sx={{
              ".MuiPaper-root": {
                minWidth: { xs: "100%", md: "800px" },
              },
            }}
            open={open}
            // @ts-ignore
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <IconButton
              onClick={handleClose}
              sx={{
                ":hover": {
                  color: "red",
                  transform: "rotate(180deg)",
                  transition: "0.3s",
                },
                position: "absolute",
                top: 0,
                right: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            <Productdetails />
          </Dialog>

          <Button size="medium">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={item.productrating}
              readOnly
            />
          </Button>
        </CardActions>
      </Card>
       )
     }
     )}
    </Stack>
  </Container>
  )
   }

};

export default Main;
