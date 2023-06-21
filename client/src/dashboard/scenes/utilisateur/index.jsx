
// =====================================

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  // Toolbar,
  Grid ,
  useTheme,
} from "@mui/material";
import { useGetUtilisateurQuery } from "../../state/api";
import Header from "../../components/Header";
import useTable from "../../components/useTable";
import Formulair from "../../pages/Formulair.jsx";
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

import { exportDataToExcel, exportDataToWord } from "../../utils/exportData.js";
import ExcelFileIcon from "../../components/controlsFrom/ExcelFileIcon";

const headCells = [
  { id: "name", label: "Username" },
  { id: "email", label: "Email Address (Personal)" },
   { id: "password", label: "password" },
  { id: "phoneNumber", label: "Numero" },
  { id: "role", label: "Role", disableSorting: true },
  { id: "manage", label: "manage", disableSorting: true },
];

const Utilisateur = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetUtilisateurQuery();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [records, setRecords] = useState([]);
  const [recordForEdit, setRecourdForEdit] = useState(null);
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
      await axios.delete(`http://localhost:4000/client/utilisateur/${id}`);
      setConfirmDialog({
        ...ConfirmDialog,
        isOpen: false
      });
      setNotify({
        isOpen: true,
        message: 'Deleted Successfully',
        type: 'error'
      });
    } catch (error) {
      // Handle any errors that occurred during the delete request
    }
  };

    const handleExportExcel = () => {
    exportDataToExcel(recordsAfterPagingAndSorting(), "utilisateur_data.xlsx");
  };

  return (
    <Container maxWidth="xl">
      <Box m="1.5rem 2.5rem">
        <Header title="Utilisateur" subtitle="List of Customers" />

        <Paper
          sx={{
            pageContent: {
              margin: theme.spacing(5),
              padding: theme.spacing(3),
            },
          }}
        >
          <Popup
            title="Employee From"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <Formulair
              recordForEdit={recordForEdit}
              setOpenPopup={setOpenPopup}
              setNotify={setNotify}
            />
          </Popup>
        </Paper>

        <Box mt="40px">
          {/* <Toolbar>
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


<Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={8} textAlign="right">
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
        />

                 <ButtonF
                variant="contained"
                color="info"
                text="Export to Excel"
                onClick={handleExportExcel}
                sx={{
                  borderRadius: "0.55rem",
                  mt: "1.5rem",
                  ml: "0.5rem",
                }}
              />
        
      </Grid>
    </Grid>
          
          <Box sx={{ overflowX: "auto" }}>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.password}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>{item.role}</TableCell>
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
                          });
                        }}
                      >
                        <DeleteIcon fontSize="small"/>
                      </ActionButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination
              rowsPerPageOptions={[5, 10, 25]}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Box>
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
    </Container>
  );
};

export default Utilisateur;

