// import { Typography, Box } from "@mui/material";
// import React from "react";

// const Header = ({ title, subtitle }) => {
//   // const theme = useTheme();
//   return (
//     <Box>
//       <Typography
//         variant="h3"
//         // color={theme.palette.secondary[100]}
//         fontWeight="bold"
//         sx={{ mb: "5px" }}
//       >
//         {title}
//       </Typography>
//       <Typography variant="h5" >
//       {/* color={theme.palette.secondary[300]} */}
//         {subtitle}
//       </Typography>
//     </Box>
//   );
// };

// export default Header;

import { Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: "2rem",
          marginBottom: "5px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "1.2rem",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
