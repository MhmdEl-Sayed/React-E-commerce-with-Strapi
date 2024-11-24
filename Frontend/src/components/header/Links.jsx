import { Expand, ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

const Links = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          ":hover .show": {
            display: "block",
          },
          display: "flex",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
 {/* // =====================
// Home List
// ===================== */}
        <Box
          className="show"
          sx={{
            position: "absolute",
            top: "100%",
            left: "50% ",
            transform: "translateX(-50%)",
            minWidth: "180px",
            display: "none",
            zIndex:2 
          }}
        >
          <Paper sx={{ mt: 2,}}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pt: 0.4, pb: 0.4 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "500",
                        },
                      }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ position: "relative" }} disablePadding>
                  <ListItemButton
                    sx={{
                      ":hover .shows": {
                        display: "block",
                      },
                      pt: 0.4,
                      pb: 0.4,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: "500",
                        },
                      }}
                      primary="products"
                    />

                    <ExpandMore sx={{ mr: "-10px" }} />
                    {/* // =====================
   // Product - List
  // ===================== */}
                    <nav aria-label="secondary mailbox folders">
                      <Paper
                        className="shows"
                        sx={{
                          position: "absolute",
                          top: "0",
                          left: "100%",
                          minWidth: "180px",
                          display: "none",
                          ml: "1px",
                        }}
                      >
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton sx={{ pt: 0.4, pb: 0.4 }}>
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  },
                                }}
                                primary="Add Product"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ pt: 0.4, pb: 0.4 }}
                              component="a"
                              href="#simple-list"
                            >
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  },
                                }}
                                primary="Edit Product"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Paper>
                    </nav>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton sx={{ pt: 0.4, pb: 0.4 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: "500",
                        },
                      }}
                      primary="orders"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton sx={{ pt: 0.4, pb: 0.4 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: "500",
                        },
                      }}
                      primary="profile"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      
      </Box>
    
    </>
  );
};


export default Links;



