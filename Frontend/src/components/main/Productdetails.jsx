import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";


const Productdetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,flexDirection:{xs:'column',sm:"row"}}}>
      <Box sx={{ display: "flex"  }}>
        <img
          width={"350px"}
          height={"370px"}
          src="src\images\t-shirts-react-ecomerce-dev-ali-youtube-channel\cards holder.webp"
          alt=""
        />
      </Box>

      <Box sx={{ textAlign:{xs:'center',sx:"left"}}}>
        <Typography variant="h5">Blue</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $15
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt
          fugit doecto!
        </Typography>

        <Stack direction={"row"}  mt={"20px"} sx={{gap: 2,justifyContent:{xs:"center",sm:"left"}}}>
          {[
            
          "src/images/t-shirts-react-ecomerce-dev-ali-youtube-channel/1.png" ,
           
            "src/images/t-shirts-react-ecomerce-dev-ali-youtube-channel/1.png",
          ].map((item,index) => {
            return  <img key={index}  style={{borderRadius:3}} width={90} height={100} src={item} alt="" />;
          })}
        </Stack>

        <Button sx={{mt:4,mb:{xs:2,sx:0}}} variant="contained">
        <AddShoppingCartOutlinedIcon sx={{mr:1}} />
            Buy Now
           
            </Button>
      </Box>
    </Box>
  );
};

export default Productdetails;
