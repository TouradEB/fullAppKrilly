
import React, { useEffect, useState } from "react";
import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  Email,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  // useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../../components/BreakdownChart";
import StatBox from "../../components/StateBox";
import { useGetPublicationQuery } from "../../state/api";
import {useGetTotalImmobiliersQuery} from "../../state/api"
import {useGetTotalCategoryQuery} from "../../state/api"
import {useGetTotalUserQuery} from "../../state/api"

import {useGetTotalFavoriteQuery} from "../../state/api"

import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


const Dashboard = () => {
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetPublicationQuery();
  // const { data: totalImmobiliersData, isLoading: totalImmobiliersLoading, isError: totalImmobiliersError, error: totalImmobiliersErrorMessage } = useGetTotalImmobiliersQuery();

  // =======
  const { data: totalImmobiliersData, isLoading: totalImmobiliersLoading, isError: totalImmobiliersError, error: totalImmobiliersErrorMessage } = useGetTotalImmobiliersQuery();

  const { data: totalCategoryData, isLoading: totalCategoryLoading, isError: totalCategoryError, error: totalCategoryErrorMessage } = useGetTotalCategoryQuery();


  const { data: totalFavoriteData, isLoading: totalFavoriteLoading, isError: totalFavoriteError, error: totalFavoriteErrorMessage } = useGetTotalFavoriteQuery();

  // const { data: totalImmobiliersData, isLoading: totalImmobiliersLoading, isError: totalImmobiliersError, error: totalImmobiliersErrorMessage } = useGetTotalImmobiliersQuery();
  const { data: totalUserData, isLoading: totalUserLoading, isError: totalUserError, error: totalUserErrorMessage } = useGetTotalUserQuery();


  // ===============
  const [increasePercentage, setIncreasePercentage] = useState("");
  const [increasePercentageUser, setIncreasePercentageUser] = useState("");

  useEffect(() => {
    // if (totalImmobiliersError) {
    //   console.error("Error loading total immobiliers:", totalImmobiliersErrorMessage);

    // }

    if (totalImmobiliersError) {
      console.error("Error loading total immobiliers:", totalImmobiliersErrorMessage);
    } else if (totalImmobiliersData) {
      const { currentMonthCount, difference, percentageChange } = totalImmobiliersData;
      setIncreasePercentage(`${percentageChange}%`);
    }

    if (totalUserError) {
      console.error("Error loading total immobiliers:", totalUserErrorMessage);
    } else if (totalUserData) {
      const { currentMonthCount, difference, percentageChange } = totalUserData;
      setIncreasePercentageUser(`${percentageChange}%`);
    }

    if (totalCategoryError) {
      console.error("Error loading total category:", totalCategoryErrorMessage);
    }else if (totalUserData) {
      const { currentMonthCount, difference, percentageChange } = totalCategoryData;
      setIncreasePercentageUser(`${percentageChange}%`);
    }
    // if (totalUserError) {
    //   console.error("Error loading total user:", totalUserErrorMessage);
    // }
  }, [totalImmobiliersError, totalImmobiliersErrorMessage, totalImmobiliersData,
     totalCategoryError, totalCategoryErrorMessage,totalCategoryData , totalUserError, 
     totalUserErrorMessage, 
     totalFavoriteData ,
     totalFavoriteError , 
     totalFavoriteErrorMessage
    
    ]);

  // [totalImmobiliersError, totalImmobiliersErrorMessage, totalCategoryError, totalCategoryErrorMessage, totalUserError, totalUserErrorMessage]);



const totalFavorite = totalFavoriteData ? totalFavoriteData.TotalFavorite : 0;

  const totalImmobiliers = totalImmobiliersData ? totalImmobiliersData.totalImmobiliers : 0;
  const totalCategory = totalCategoryData ? totalCategoryData.totalCategory : 0;
  const totalUser = totalUserData ? totalUserData.totalUser : 0;


  




  // const [totalImmobiliers, setTotalImmobiliers] = useState(0);

  // const getTotalImmobiliers = async () => {
  //   try {
  //     // const response = await axios.get("http://localhost:4000/client/immobiliers/total"); 
  //     const response = await axios.get("immobiliers/total"); 
  //     const immobiliers = response.data;
  //     setTotalImmobiliers(immobiliers.length);
  //   } catch (error) {
  //     console.error("Error fetching immobiliers:", error);
  //     setTotalImmobiliers(0);
  //   }
  // };

  // useEffect(() => {
  //   getTotalImmobiliers();
  // }, []);
  


  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "titre",
      headerName: "Titer",
      flex: 0.5,
    },
    {
      field: "adress",
      headerName: "Adress",
      flex: 0.5,
    },
     {
      field: "updatedAt",
      headerName: "Date",
      flex: 1,
    },
  
    {
      field: "price",
      headerName: "Price",
      flex: 0.4,
    },
    {
      field: "status",
      headerName: "status",
      flex: 0.5,
    },
   
  ];


  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: '#FF385C',
              color: '#C8E6C9',
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button> */}

      <Button
        sx={{
          backgroundColor: '#FF385C',
          color: '#C8E6C9',
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          '@media screen and (max-width: 600px)': {
            fontSize: "12px",
            padding: "8px 16px",
          },
        }}
      >
        <DownloadOutlined sx={{ mr: "10px" }} />
        Download
      </Button>

        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >

  

        <StatBox
            title="Total User"
            value={totalUserData ? totalUserData.totalAllTime : 0}
            increase={totalUserData ? `${totalUserData.percentageChange.toFixed(2)}%` : ""}
            description="Since last month"
            icon={
            <GroupIcon
              sx={{ color: '#5E35B1', fontSize: "26px" }}
            />
          }
          />
        
         <StatBox
          title="Total category"
          value={totalCategoryData ? totalCategoryData.totalAllTime : 0}
          increase={totalCategoryData ? `${totalCategoryData.percentageChange}%` : ""}
          description="Since last month"
          icon={
            <CategoryIcon
              sx={{ color: '#FFEB3B', fontSize: "26px" }}
            />
          }
        />

    {/* <StatBox
            title="Total immobilier"
            value={totalImmobiliers}
            increase="+14%"
            description="Since last month"
            icon={
              <MapsHomeWorkIcon sx={{ color: '#F47560', fontSize: "26px" }} />
            }
          /> */}

          <StatBox
            title="Total immobilier"
            value={totalImmobiliersData ? totalImmobiliersData.totalAllTime : 0}
            increase={totalImmobiliersData ? `${totalImmobiliersData.percentageChange}%` : ""}
            description="Since last month"
            icon={<MapsHomeWorkIcon sx={{ color: '#F47560', fontSize: "26px" }} />}
          />



        <StatBox
          title="Total favorite"
          value={totalFavorite}
          increase=""
          description=""
          icon={
            <Email
              sx={{ color:'#E8C1A0', fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2  */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              // backgroundColor: theme.palette.background.alt,
              // color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              // backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              // backgroundColor: theme.palette.background.alt,
              // color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              // color: `${theme.palette.secondary[200]} !important`,
            },
             boxShadow: '0px 12px 24px -10px rgba(0, 0, 0, 0.75)', // Set the boxShadow property for elevation
          }}
        >
        <DataGrid
              loading={isLoading || !data}
              getRowId={(row) => row._id}
              rows={data || []}
              columns={columns}
            />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          // backgroundColor='red' 
          p="1.5rem"
          borderRadius="0.55rem"
           boxShadow= '0px 12px 24px -10px rgba(0, 0, 0, 0.75)'
        >
        <Typography variant="h6" sx={{ color: 'black' }}>
            Sales By Category
          </Typography>

          <BreakdownChart isDashboard={true} />

            <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: '#90A4AE' }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography>
        
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
