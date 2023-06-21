

import React from 'react'
import { Box, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StateBox = ({ title, value, increase, icon, description }) => {
  const increaseValue = parseFloat(increase.replace("%", ""));
  const increaseColor = increaseValue < 0 ? 'red' : '#76FF03';

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      borderRadius="0.55rem"
      sx={{
        boxShadow: '0px 12px 24px -10px rgba(0, 0, 0, 0.75)', // Set the boxShadow property for elevation
      }}
    >
      <FlexBetween>
        <Typography  variant="h6"
          sx={{
            color: '#263238',
            fontSize: '1rem', // Default font size
            "@media (max-width: 600px)": {
              fontSize: '0.8rem', // Adjust the font size for screens up to 600px width
            },
          }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography  variant="h3"
        fontWeight="600"
        sx={{
          color: '#78909C',
          fontSize: '2rem', // Default font size
          "@media (max-width: 600px)": {
            fontSize: '1.5rem', // Adjust the font size for screens up to 600px width
          },
        }}>
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
           variant="h5"
           fontStyle="italic"
           sx={{
             color: increaseColor,
             fontSize: '1rem', // Default font size
             "@media (max-width: 600px)": {
               fontSize: '0.875rem', // Adjust the font size for screens up to 600px width
             },
           }}
        >
          {increase}
        </Typography>
        <Typography sx={{ color: '#96B1C4' }}>{description}</Typography>
      </FlexBetween>
    </Box>
  );
}

export default StateBox;

// ================================ 17 

