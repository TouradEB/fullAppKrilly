import React , {useState} from 'react'

export  function useForm(initialFValues , validateOnChange=false , validate) {

        const [values , SetValues]= useState(initialFValues) ;
         const [errors , SetErrors]= useState({}) ;
        const handleInputChange = e =>{
            const {name , value} = e.target
            SetValues({
             ...values ,
             [name]:value
            })
             if (validateOnChange)
            validate({ [name]: value })
         }

         const resetForm = () =>{
          SetValues(initialFValues) ;
          SetErrors({})
         }

  return {
    values , 
    SetValues , 
    errors , 
    SetErrors ,
    handleInputChange ,
    resetForm
  }
}



export  function Form(props) {
  const {children , ...other} = props ;
  return (
   <form autoComplete='off' {...other}>
{props.children}
   </form>
  )
}


