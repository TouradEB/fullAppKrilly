import React, { useState, useEffect } from "react";
import {
  Box,
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  // Toolbar,
  // Typography,
  useTheme,
  Grid,
  TextField,
  // IconButton,
} from "@mui/material";
import { useGetPublicationQuery } from "../../state/api";
import Header from "../../components/Header";
import useTable from "../../components/useTable";
import Formulair from "../../pages/Formulair.jsx";
import Popup from "../../components/Popup.jsx";
// import ButtonF from "../../components/controlsFrom/Button.jsx";
// import InputF from "../../components/controlsFrom/InputF.jsx";
import SearchIcon from "@mui/icons-material/Search";
// import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ActionButton from "../../components/controlsFrom/ActionButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Notification from "../../components/controlsFrom/Notification";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmDialogP from "../../components/ConfirmDialog";

const headCells = [
  { id: "titre", label: "titre" },
  { id: "adress", label: "adress" },
  { id: "price", label: "price" },
  { id: "categorie", label: "categorie" },
  { id: "status", label: "status" },
  { id: "manage", label: "manage", disableSorting: true },
];

const commonCellStyle = {
  background: "#5E5DF0",
  borderRadius: "999px",
  boxShadow: "#5E5DF0 0 10px 20px -10px",
  boxSizing: "border-box",
  color: "#FFFFFF",
  cursor: "pointer",
  fontFamily:
    "Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji, 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji', EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', sans-serif",
  fontSize: "1rem",
  fontWeight: 700,
  lineHeight: "1.5",
  opacity: 1,
  outline: "0 solid transparent",
  padding: "0.5rem 1rem",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  width: "fit-content",
  wordBreak: "break-word",
  border: 0,
  "@media (max-width: 600px)": {
    fontSize: "14px",
    padding: "6px 14px",
  },
};


const accepterCellStyle = {
  ...commonCellStyle,
  background: "#f44336",
  "@media (max-width: 600px)": {
    fontSize: "10px",
    padding: "6px 14px",
  },
};

const refuserCellStyle = {
  ...commonCellStyle,
  background: "#4caf50",
  "@media (max-width: 600px)": {
    fontSize: "10px",
    padding: "6px 14px",
  },
};




const Annonce = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetPublicationQuery();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [records, setRecords] = useState([]);
  const [recordForEdit, setRecourdForEdit] = useState(null);
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });
  const [ConfirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

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
            const titre = x.titre.toLowerCase();
            return titre.includes(target.value.toLowerCase());
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

  const onDelete = (id) => {
    navigate(`/place/${id}`);
  };

  const changeToRefuser = async (id) => {
    try {
      await axios.put(
        `http://localhost:4000/client/annocements/${id}/changeToRefuser`
      );
      setConfirmDialog({
        ...ConfirmDialog,
        isOpen: false,
      });
      setNotify({
        isOpen: true,
        message: 'Status changed to "Refuser" successfully',
        type: 'success',
      });
    } catch (error) {
      // Handle any errors that occurred during the status change request
    }
  };

  const changeToAccepter = async (id) => {
    try {
      await axios.put(
        `http://localhost:4000/client/annocements/${id}/changeToAccepter`
      );
      setConfirmDialog({
        ...ConfirmDialog,
        isOpen: false,
      });
      setNotify({
        isOpen: true,
        message: 'Status changed to "Accepter" successfully',
        type: 'success',
      });
    } catch (error) {
      // Handle any errors that occurred during the status change request
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Utilisateur" subtitle="List of Customers" />

      <Paper sx={{ padding: theme.spacing(2) }}>
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

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Search.."
              fullWidth
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
         
        </Grid>
      </Paper>

      <Box mt={3} height="75vh" overflow="auto">
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.titre}</TableCell>
                <TableCell>{item.adress}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.categoryName}</TableCell>
                {/* <TableCell>{item.status}</TableCell> */}
               






<TableCell>
  {item.status === "accepter" ? (
    <TableCell
      sx={{
        ...refuserCellStyle,
        "@media (max-width: 600px)": {
          fontSize: "9px",
          padding: "6px 14px",
        },
      }}
    >
      {item.status}
    </TableCell>
  ) : item.status === "refuser" ? (
    <TableCell
      sx={{
        ...accepterCellStyle,
        "@media (max-width: 600px)": {
          fontSize: "10px",
          padding: "6px 14px",
        },
      }}
    >
      {item.status}
    </TableCell>
  ) : (
    <TableCell
      sx={{
        ...commonCellStyle,
        "@media (max-width: 600px)": {
          fontSize: "10px",
          padding: "6px 14px",
        },
      }}
    >
      {item.status}
    </TableCell>
  )}
</TableCell>



   

                <TableCell>
                  <ActionButton
                    color="success"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'approve this record?',
                        subTitle: "this anonce will be approve",
                        onConfirm: () => { changeToAccepter(item._id) }
                      });
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ActionButton>

                  <ActionButton
                    color="warning"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'are you sure to desactive this record?',
                        subTitle: "this anonce will be approve",
                        onConfirm: () => { changeToRefuser(item._id) }
                      });
                    }}
                  >
                    <DoDisturbOnIcon fontSize="small" />
                  </ActionButton>

                  <ActionButton
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Are you going to check Post',
                        subTitle: "verification des immobilier",
                        onConfirm: () => { onDelete(item._id) }
                      });
                    }}
                  >
                    <VisibilityIcon fontSize="small" />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination
          rowsPerPageOptions={[5, 10, 25]}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Box>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialogP
        ConfirmDialog={ConfirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Box>
  );
};

export default Annonce;



