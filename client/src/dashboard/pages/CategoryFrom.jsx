// import React, { useState, useEffect } from "react";

// import { Grid, useTheme } from "@mui/material";
// import { useForm, Form } from "../components/useForm";
// import InputF from "../components/controlsFrom/InputF";
// // import RedioGroupF from "../components/controlsFrom/RedioGroupF";
// // import SelectF from "../components/controlsFrom/selectF";
// // import CheckboxUser from "../components/controlsFrom/checkbox";
// // import PasswordF from "../components/controlsFrom/password";
// import ButtonF from "../components/controlsFrom/Button";
// import Popup from "../components/Popup";

// import { useAddCategoryMutation } from "../state/api";

// // import * as servicesFrom from "../components/controlsFrom/services/services";
// import axios from "axios";
// // const genderItems = [
// //   { id: "male", title: "Male" },
// //   { id: "female", title: "Female" },
// // ];

// const initialFValues = {
//   id: 0,
//   name: "",
//   // email: "",
//   // // password: "",
//   // phoneNumber: "",
//   // gender: "male",
//   // role: "",

//   // isAdmin: false,
// };

// export default function Formulair(props) {
//   const { recordForEdit, setOpenPopup, setNotify } = props;

//   const validate = (fieldValues = values) => {
//     let temp = { ...errors };
//     if ("name" in fieldValues)
//       temp.name = fieldValues.name ? "" : "This field is required.";

//     // if ("Password" in fieldValues)
//     //   temp.Password =
//     //     fieldValues.Password.length > 8 ? "" : "Password not valid.";

//     // if ("email" in fieldValues)
//     //   temp.email = /$^|.+@.+..+/.test(fieldValues.email)
//     //     ? ""
//     //     : "Email is not valid.";
//     // if ("phoneNumber" in fieldValues)
//     //   temp.phoneNumber =
//     //     fieldValues.phoneNumber.length > 7 ? "" : "Minimum 8 numbers required.";
//     // if ("CategoryId" in fieldValues)
//     //   temp.role = fieldValues.role.length != 0 ? "" : "This field is required.";
//     SetErrors({
//       ...temp,
//     });

//     if (fieldValues == values) return Object.values(temp).every((x) => x == "");
//   };

//   const theme = useTheme();

//   const { values, SetValues, errors, SetErrors, handleInputChange, resetForm } =
//     useForm(initialFValues, true, validate);

//   const addUserMutation = useAddCategoryMutation();
 
//   useEffect(() => {
//     if (recordForEdit != null)
//       SetValues({
//         ...recordForEdit,
//       });
//   }, [recordForEdit]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const userData = {
//         name: values.name,
//         // email: values.email,
//         // // password: values.password,
//         // phoneNumber: values.phoneNumber,
//         // role: values.role,
//       };
  
//       if (recordForEdit) {
//         // If there's a recordForEdit, it means we are updating an existing user
//         axios
//           .put(
//             `http://localhost:4000/client/category/${recordForEdit._id}`,
//             userData
//           )
//           .then((response) => {
//             // Handle successful update of user
//             // ...
//             resetForm();
//             setNotify({
//               isOpen: true,
//               message: "User added successfully!",
//               type: "success"
//             });
//             setOpenPopup(false); // Close the popup after successful update
//             // window.location.reload();
//           })
//           .catch((error) => {
//             // Handle error while updating user
//             // ...
//             window.alert("Error occurred while updating user");
//           });
//       } else {
//         // If there's no recordForEdit, it means we are adding a new user
//         axios
//           .post("http://localhost:4000/client/category/", userData)
//           .then((response) => {
//             // Handle successful addition of user
//             // ...
//             resetForm();
//             // window.alert("User added successfully!");
//             setNotify({
//               isOpen: true,
//               message: "User added successfully!",
//               type: "success"
//             });
//             setOpenPopup(false); // Close the popup after successful addition
//             // window.location.reload();
//           })
//           .catch((error) => {
//             // Handle error while adding user
//             // ...
//             window.alert("Error occurred while adding user");
//           });
//       }
//     }
//   };
  
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Grid
//         container
//         sx={{
//           "& .MuiFormControl-root": {
//             width: "80%",
//             margin: theme.spacing(1),
//           },
//         }}
//       >
//         <Grid item xs={6}>
//           <InputF
//             name="name"
//             label="name"
//             value={values.name}
//             onChange={handleInputChange}
//             error={errors.name}
//           />

       
//             <div>
//             <ButtonF type="submit" text="Submit" />

//             <ButtonF text="Reset" color="secondary" onClick={resetForm} />
//           </div>
        
//         </Grid>
    
//       </Grid>
//     </Form>
//   );
// }


// ===========================================================  17 


import React, { useState, useEffect } from "react";
import {
  Grid,
  useTheme,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useForm, Form } from "../components/useForm";
import InputF from "../components/controlsFrom/InputF";
import ButtonF from "../components/controlsFrom/Button";
import Popup from "../components/Popup";
import { useAddCategoryMutation } from "../state/api";
import axios from "axios";

const initialFValues = {
  id: 0,
  name: "",
};

export default function Formulair(props) {
  const { recordForEdit, setOpenPopup, setNotify } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    SetErrors({ ...temp });
    if (fieldValues == values)
      return Object.values(temp).every((x) => x === "");
  };

  const theme = useTheme();

  const { values, SetValues, errors, SetErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const addUserMutation = useAddCategoryMutation();

  useEffect(() => {
    if (recordForEdit !== null) {
      SetValues({ ...recordForEdit });
    }
  }, [recordForEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = {
        name: values.name,
      };

      if (recordForEdit) {
        axios
          .put(
            `http://localhost:4000/client/category/${recordForEdit._id}`,
            userData
          )
          .then((response) => {
            resetForm();
            setNotify({
              isOpen: true,
              message: "User updated successfully!",
              type: "success",
            });
            setOpenPopup(false);
          })
          .catch((error) => {
            window.alert("Error occurred while updating user");
          });
      } else {
        axios
          .post("http://localhost:4000/client/category/", userData)
          .then((response) => {
            resetForm();
            setNotify({
              isOpen: true,
              message: "User added successfully!",
              type: "success",
            });
            setOpenPopup(false);
          })
          .catch((error) => {
            window.alert("Error occurred while adding user");
          });
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputF
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={2}>
        <ButtonF type="submit" text="Submit" />
        <ButtonF
          text="Reset"
          color="secondary"
          onClick={resetForm}
          style={{ marginLeft: "10px" }}
        />
      </Box>
    </Form>
  );
}

