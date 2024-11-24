import {
  alpha,
  Container,
  InputBase,
  ListItem,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import '../header/Header2.css';
// For Search////**** */
const Search = styled("div")(({ theme }) => ({
  flexGrow:0.4,
  position: "relative",
  border: "1px solid #777",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "280px",
    ml:0,
    height: "50px",
    color: "#777",
    '&:hover': {
      border:" 1px solid #333", 
      
    },
    
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// For Badge////**** */
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];

const Header2 = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // @ts-ignore
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartIcon />
        <Typography sx={{ fontSize: "15px" }}>E-Commerce</Typography>
      </Stack>

    
      {isDesktop ? (
        <Search
          className="search"
          sx={{
            borderRadius: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ color: theme.palette.text.primary }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.mycolor.main,
                display: "flex",
                alignItems: "center",
                height: "100%",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText secondary={options[selectedIndex]} />
                <ExpandMoreIcon />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
      ) : null}
  

      <Stack  flexDirection={"row"} alignItems={"center"}>
        <IconButton sx={{marginRight:"7px"}} aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton sx={{marginLeft:"7px"}}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Stack>

    </Container>
  );
};
export default Header2;
