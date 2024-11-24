import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  Stack,
  useTheme,
  Typography,
  Container,
} from "@mui/material";
import {
  BoyRounded,
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: 1,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      }}
      
    >
      <Container>
        <Stack alignItems={"center"} direction={"row"}>
          {/* left-Box */}
          <Typography
            variant="body1"
            color={"white"}
            sx={{
              mr: 2,
              p: "4px 15px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
              "&:hover": {
                color: "red",
                bgcolor: "white",
                transition: "0.4s",
              },
            }}
          >
            Hot
          </Typography>

          <Typography sx={{ fontSize: "15px" }} variant="body2" color={"white"}>
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />

          {/* Icon-Dark and Light */}
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
              >
                <LightModeOutlined sx={{ fontSize: "18px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "18px" }} />
              </IconButton>
            )}
          </div>

          {/* Menu EN & AR */}
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: "-moz-initialr", p: 0, m: 0 }}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
              </ListItemButton>
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
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* Icons */}
          <InstagramIcon
            sx={{
              fontSize: "19px",
              margin: "0px 5px",
              cursor: "pointer",
              color: "white",
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "19px",
              margin: "0px 5px",
              cursor: "pointer",
              color: "white",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "19px",
              margin: "0px 5px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
