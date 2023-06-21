// import React from "react";
// import {
//   Box,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import {
//   SettingsOutlined,
//   ChevronLeft,
//   ChevronRightOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   Groups2Outlined,
//   ReceiptLongOutlined,
//   PublicOutlined,
//   PointOfSaleOutlined,
//   TodayOutlined,
//   CalendarMonthOutlined,
//   AdminPanelSettingsOutlined,
//   TrendingUpOutlined,
//   PieChartOutlined,
// } from "@mui/icons-material";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import FlexBetween from "./FlexBetween";
// import profileImage from "../assets/profile.jpeg";

// const navItems = [
//   {
//     text: "Dashboard",
//     icon: <HomeOutlined />,
//   },
//   {
//     text: "Client Facing",
//     icon: null,
//   },
//   {
//     text: "annocements",
//     icon: <ShoppingCartOutlined />,
//   },
//   {
//     text: "Utilisateur",
//     icon: <Groups2Outlined />,
//   },
//   // {
//   //   text: "Transactions",
//   //   icon: <ReceiptLongOutlined />,
//   // },
//   {
//     text: "Category",
//     icon: <PublicOutlined />,
//   },
//   {
//     text: "Graphe",
//     icon: null,
//   },
 
//   // {
//   //   text: "Overview",
//   //   icon: <PointOfSaleOutlined />,
//   // },
//   // {
//   //   text: "Daily",
//   //   icon: <TodayOutlined />,
//   // },
//   // {
//   //   text: "Monthly",
//   //   icon: <CalendarMonthOutlined />,
//   // },
//   {
//     text: "Breakdown",
//     icon: <PieChartOutlined />,
//   },
//   {
//     text: "Management",
//     icon: null,
//   },
//   {
//     text: "Admin",
//     icon: <AdminPanelSettingsOutlined />,
//   },
//   // {
//   //   text: "Performance",
//   //   icon: <TrendingUpOutlined />,
//   // },
// ];

// const Sidebar = ({
//     // user,
//     drawerWidth,
//     isSidebarOpen,
//     setIsSidebarOpen,
//     isNonMobile,
//   }) => {
//     const { pathname } = useLocation();
//     const [active, setActive] = useState("");
//     const navigate = useNavigate();
//     const theme = useTheme();

//     useEffect(() => {
//     setActive(pathname.substring(1));
//     }, [pathname]);

//   return (
//    <Box component="nav">
//         {isSidebarOpen && (
//         <Drawer
//           open={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
//           variant="persistent"
//           anchor="left"
//           sx={{
//             width: drawerWidth,
//             "& .MuiDrawer-paper": {
//               // color: theme.palette.secondary[200],
//               backgroundColor: '#F5F5F5',
//               boxSixing: "border-box",
//               borderWidth: isNonMobile ? 0 : "2px",
//               width: drawerWidth,
//             },
            
//           }}
//         >
//             <Box width="100%" >
//                 <Box m="1.5rem 2rem 2rem 3rem">
//                 <FlexBetween>
//                    {/* color={theme.palette.secondary.main} */}
//                     <Box display="flex" alignItems="center" gap="0.5rem" >
//                     <Typography variant="h4" fontWeight="bold" color='#FF385C'             >
//                         KRILY
//                     </Typography>
//                     </Box>
//                     {!isNonMobile && (
//                     <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//                         <ChevronLeft />
//                     </IconButton>
//                     )}
//                   </FlexBetween>
//                   </Box>
//                   <List>
//                   {navItems.map(({ text, icon }) => {
//                         if(!icon){
//                             return(
//                                 <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"  }}>
//                                 {text}
//                                </Typography>
//                             )
//                         }
//                           const lcText = text.toLowerCase();
//                           return (
//                             <ListItem key={text} disablePadding>
//                                 <ListItemButton
//                                     onClick={() => {
//                                         navigate(`/${lcText}`);
//                                         setActive(lcText);
//                                     }}     
//                                     sx={{
//                                         backgroundColor:
//                                         active === lcText
//                                         ? '#FF385C'
//                                         : "transparent",
//                                         color:
//                                         active === lcText
//                                         ? '#FFFFFF'
//                                         : '#90A4AE',
//                                      }} 
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         ml: "2rem",
//                                         color:
//                                         active === lcText
//                                             ? '#FFFFFF'
//                                             : '#90A4AE',
//                                     }}
//                                 >
//                                     {icon}
//                                 </ListItemIcon>
//                                 <ListItemText primary={text} />
//                                   {active === lcText && (
//                                     <ChevronRightOutlined sx={{ ml: "auto" }} />
//                                   )}
//                                </ListItemButton>
//                             </ListItem>
//                           )
//                     })}
//                   </List>
//             </Box>
//             <Box position="absolute" bottom="2rem">
//             <Divider />
//             <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
//               <Box
//                 component="img"
//                 alt="profile"
//                 src={profileImage}
//                 height="40px"
//                 width="40px"
//                 borderRadius="50%"
//                 sx={{ objectFit: "cover" }}
//               />
//               <Box textAlign="left">
//                 <Typography
//                   fontWeight="bold"
//                   fontSize="0.9rem"
//                   // sx={{ color: theme.palette.secondary[100] }}
//                 >
//                   {/* =============================================================================  */}
//                   {/* {user.name} */}
//                 </Typography>
//                 <Typography
//                   fontSize="0.8rem"
//                   // sx={{ color: theme.palette.secondary[200] }}
//                 >
//                   {/* ==================================================================================== */}
//                   {/* {user.occupation} */}
//                 </Typography>
//               </Box>
//               <SettingsOutlined
//                 sx={{
//                   // color: theme.palette.secondary[300],
//                   fontSize: "25px ",
//                 }}
//               />
//             </FlexBetween>
//           </Box>
//         </Drawer>
//       )}
//     </Box>
//   )
// }

// export default Sidebar

import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/profile.jpeg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "annocements",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Utilisateur",
    icon: <Groups2Outlined />,
  },
  {
    text: "Category",
    icon: <PublicOutlined />,
  },
  {
    text: "Graphe",
    icon: null,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
];

const Sidebar = ({
  // user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
          }}
        >
          <Box width={drawerWidth}>
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold" color="#FF385C">
                    KRILY
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{
                        m: "2.25rem 0 1rem 3rem",
                        color: active === text.toLowerCase() ? "#FFFFFF" : "#90A4AE",
                      }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      "&:hover": {
                        backgroundColor: "#FF385C",
                        color: "#FFFFFF",
                        "& $ListItemIcon": {
                          color: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "#FF385C" : "transparent",
                        color: active === lcText ? "#FFFFFF" : "#90A4AE",
                        "&:hover": {
                          backgroundColor: "#FF385C",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: active === lcText ? "#FFFFFF" : "#90A4AE",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.9rem">
                  {/* {user.name} */}
                </Typography>
                <Typography fontSize="0.8rem">
                  {/* {user.occupation} */}
                </Typography>
              </Box>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;


