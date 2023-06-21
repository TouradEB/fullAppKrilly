// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   InputAdornment,
//   Paper,
//   TableBody,
//   TableCell,
//   TableRow,
//   Toolbar,
//   useTheme,
// } from "@mui/material";
// import { useFindAllCategoryQuery } from "state/api";
// import Header from "components/Header";
// import Button from "@mui/material/Button";
// import useTable from "components/useTable";

// import CategoryFrom from "../../pages/CategoryFrom";
// import Popup from "../../components/Popup.js";
// import ButtonF from "../../components/controlsFrom/Button.js";
// import InputF from "../../components/controlsFrom/InputF.js";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

// import ActionButton from "../../components/controlsFrom/ActionButton";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const headCells = [
//   { id: "userId", label: "User Id" },
//   { id: "name", label: "Name" },
//   { id: "manage", label: "manage", disableSorting: true },
// ];

// const Category = () => {
//   const theme = useTheme();
//   const { data, isLoading } = useFindAllCategoryQuery();
//   console.log(data)
//   const [filterFn, setFilterFn] = useState({
//     fn: (items) => {
//       return items;
//     },
//   });
//   const [records, setRecords] = useState([]);
//   const [recordForEdit, setRecourdForEdit] = useState(null);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       setRecords(data);
//     }
//   }, [data]);

//   const {
//     TblContainer,
//     TblHead,
//     TblPagination,
//     recordsAfterPagingAndSorting,
//     handleChangePage,
//     handleChangeRowsPerPage,
//   } = useTable(records, headCells, filterFn);

//   const handleSearch = (e) => {
//     const target = e.target;
//     setFilterFn({
//       fn: (items) => {
//         if (target.value === "") {
//           return items;
//         } else {
//           return items.filter((x) => {
//             const name = x.name.toLowerCase(); // Replace 'fullName' with the correct property name
//             return name.includes(target.value.toLowerCase());
//           });
//         }
//       },
//     });
//   };

//   const [openPopup, setOpenPopup] = useState(false);

//   const openInPopup = (item) => {
//     setRecourdForEdit(item);
//     setOpenPopup(true);
//   };

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="Utilisateur" subtitle="List of Customers" />

//       <Paper
//         sx={{
//           pageContent: {
//             margin: theme.spacing(5),
//             padding: theme.spacing(3),
//           },
//         }}
//       >
//         <Popup
//           title="Employee From"
//           openPopup={openPopup}
//           setOpenPopup={setOpenPopup}
//         >
//           <CategoryFrom recordForEdit={recordForEdit} />
//         </Popup>
//       </Paper>

//       <Box
//         mt="40px"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: theme.palette.background.alt,
//             color: theme.palette.secondary[100],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: theme.palette.primary.light,
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: theme.palette.background.alt,
//             color: theme.palette.secondary[100],
//             borderTop: "none",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${theme.palette.secondary[200]} !important`,
//           },
//         }}
//       >
//         <Toolbar>
//           <InputF
//             label="Search.."
//             sx={{
//               backgroundColor: (theme) => theme.palette.background.alt,

//               borderRadius: "9px",
//               // gap:"3rem"
//               // p="0.1rem 1.5rem"
//             }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//             onChange={handleSearch}
//           />
//           <ButtonF
//             variant="contained"
//             color="success"
//             startIcon={<PersonAddAltOutlinedIcon />}
//             text="Add New"
//             onClick={() => setOpenPopup(true)}
//             sx={{
//               borderRadius: "0.55rem",
//               mt: "1.5rem",
//             }}
//           ></ButtonF>
//         </Toolbar>
//         <TblContainer>
//           <TblHead />
//           <TableBody>
//             {recordsAfterPagingAndSorting().map((item) => (
//               <TableRow key={item._id}>
//                 <TableCell>{item.userId}</TableCell>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>
//                   <ActionButton
//                     color="success"
//                     onClick={() => {
//                       openInPopup(item);
//                     }}
//                   >
//                     <EditIcon fontSize="small" />
//                   </ActionButton>
//                   <ActionButton color="error">
//                     <DeleteIcon fontSize="small" />
//                   </ActionButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </TblContainer>
//         <TblPagination rowsPerPageOptions={[5, 10, 25]} />
//       </Box>
//     </Box>
//   );
// };

// export default Category;

import React, { useState, useEffect } from "react";
import {
  Box,
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Grid
  // useTheme,
} from "@mui/material";
import { useFindAllCategoryQuery } from "../../state/api";
import Header from "../../components/Header";
// import Button from "@mui/material/Button";
import useTable from "../../components/useTable";

import CategoryFrom from "../../pages/CategoryFrom.jsx";
import Popup from "../../components/Popup.jsx";
import ButtonF from "../../components/controlsFrom/Button.jsx";
import InputF from "../../components/controlsFrom/InputF.jsx";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import ActionButton from "../../components/controlsFrom/ActionButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Notification from "../../components/controlsFrom/Notification";

import axios from 'axios';

import ConfirmDialogP from "../../components/ConfirmDialog"

const headCells = [
  
  { id: "name", label: "Name" },
  { id: "manage", label: "manage", disableSorting: true },
];


const Category = () => {
  // const theme = useTheme();
  const { data, isLoading } = useFindAllCategoryQuery();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [records, setRecords] = useState([]);
  const [recordForEdit, setRecourdForEdit] = useState(null);

  // =============
 const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
 const [ConfirmDialog , setConfirmDialog] = useState({isOpen:false ,title:'' ,subTitle:''})
  useEffect(() => {
    if (data && data.length > 0) {
      setRecords(data);
    }
  }, [data]);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    const target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((x) => {
            const name = x.name.toLowerCase(); // Replace 'fullName' with the correct property name
            return name.includes(target.value.toLowerCase());
          });
        }
      },
    });
  };

  const [openPopup, setOpenPopup] = useState(false);

  const openInPopup = (item) => {
    setRecourdForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = async (id) => {
   
      try {
        await axios.delete(`http://localhost:4000/client/category/${id}`);
          setConfirmDialog({
              ...ConfirmDialog,
              isOpen: false
          })
          setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
      } catch (error) {
        // Handle any errors that occurred during the delete request
      }
   
  };
  

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Utilisateur" subtitle="List of Customers" />

      <Paper
        sx={{
          pageContent: {
            // margin: theme.spacing(5),
            // padding: theme.spacing(3),
          },
        }}
      >
        <Popup
          title="Category From"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
         
          <CategoryFrom recordForEdit={recordForEdit} setOpenPopup={setOpenPopup} setNotify={setNotify} />
        </Popup>
      </Paper>

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
            // backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            // backgroundColor: theme.palette.background.alt,
            // color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {/* <Toolbar>
          <InputF
            label="Search.."
            sx={{
              // backgroundColor: (theme) => theme.palette.background.alt,

              borderRadius: "9px",
              // gap:"3rem"
              // p="0.1rem 1.5rem"
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <ButtonF
            variant="contained"
            color="success"
            startIcon={<PersonAddAltOutlinedIcon />}
            text="Add New"
            onClick={() => setOpenPopup(true)}
            sx={{
              borderRadius: "0.55rem",
              mt: "1.5rem",
            }}
          ></ButtonF>
        </Toolbar> */}


<Toolbar>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={8}>
          <InputF
            label="Search.."
            sx={{
              borderRadius: "9px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonF
            variant="contained"
            color="success"
            startIcon={<PersonAddAltOutlinedIcon />}
            text="Add New"
            onClick={() => setOpenPopup(true)}
            sx={{
              borderRadius: "0.55rem",
              mt: "1.5rem",
              width: "100%",
            }}
          ></ButtonF>
        </Grid>
      </Grid>
    </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <ActionButton
                    color="success"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                  <EditIcon fontSize="small" />
                  </ActionButton>
                  <ActionButton
                   color="error"
                   onClick={() => {
                    setConfirmDialog({
                      isOpen:true ,
                      title:'Are you sure to delete this record?' ,
                      subTitle:"you can't not undo this operation" ,
                      onConfirm: () => { onDelete(item._id) }
                    })
                  // onDelete(item._id);
                }}
                  >
                  <DeleteIcon fontSize="small"/>
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination rowsPerPageOptions={[5, 10, 25]} />
      </Box>
      <Notification
      notify={notify}
       setNotify={setNotify}
       />
      <ConfirmDialogP
        ConfirmDialog={ConfirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Box>
  );
};

export default Category;

