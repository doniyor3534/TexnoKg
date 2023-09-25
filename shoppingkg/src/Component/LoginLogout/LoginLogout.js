import React, { useState } from 'react';
import {  useFormik } from 'formik';
import * as Yup from 'yup';



export default function LoginLogout() {

  const [login, setlogin] = useState(true)
  const loginfunlogin = () => {
    setlogin(true)
  }
  const loginfunsigin = () => {
    setlogin(false)
  }
   // /////////////useformik sigin
   const formik = useFormik({
    initialValues:{
     name:'',
     email:'',
     tel:'',
    },
    onSubmit:values=>{
      console.log('formik values',formik.values);
    },
    validate:values=>{
       let errors ={}
       ///////////name
       if(!values.name){
         errors.name = 'Required'
       }
       // ////////email
       if(!values.email){
         errors.email = 'Required'
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
       }
       ///////////tel
       if(!values.tel){
         errors.tel = 'Required'
       }
       
       return errors;
    }
 })
//  ///////////formik login
const formiklogin = useFormik({
  initialValues:{
    tel:'',
   },
   onSubmit:values=>{
     console.log('formik values',formiklogin.values);
   },
   validate:values=>{
      let errors ={}
   
      ///////////tel
      if(!values.tel){
        errors.tel = 'Required'
      }
      
      return errors;
   }
})
 // /////////////useformik
  return (
    <div className='p-3 '>
      <div className="btngroup flex gap-2 my-3">
        <button onClick={loginfunlogin} className={`${login ? 'border-b-0 ' : 'text-grey0 rounded-b-md'} rounded-t-md text-2xl border border-grey0`}>Login</button>
        <button onClick={loginfunsigin} className={`${login ? 'text-grey0 rounded-b-md' : 'border-b-0'}  rounded-t-md text-2xl border border-grey0`}>Signup</button>
      </div>
      {login ?
        <>
          <form onSubmit={formiklogin.handleSubmit} className='flex flex-col gap-2' >
            <label className='flex flex-col' htmlFor="tel">Tel
            <input onChange={formiklogin.handleChange} value={formiklogin.values.tel}   className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="tel" id='tel' placeholder='tel..' />
            </label>
            <button type='submit' className='bg-yellow my-3' >Submit</button>
          </form>
        </>
        :
        <>
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2' >
            <label className='flex flex-col' htmlFor="name">Name
            <input name='name' onChange={formik.handleChange} value={formik.values.name}   className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="text" id='name' placeholder='Name..' />
             {formik.errors.name?<span className='text-red-500'>{formik.errors.name}</span>:null}
            </label>
            <label className='flex flex-col' htmlFor="email">Email
            <input name='email'  onChange={formik.handleChange} value={formik.values.email}  className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="email" id='email' placeholder='Email..' />
            {formik.errors.email?<span className='text-red-500'>{formik.errors.email}</span>:null}
            </label>
            <label className='flex flex-col' htmlFor="tel">Tel
            <input name='tel'  onChange={formik.handleChange} value={formik.values.tel}  className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="number" id='tel' placeholder='tel..' />
            {formik.errors.tel?<span className='text-red-500'>{formik.errors.tel}</span>:null}
            </label>
            <button type='submit' className='bg-yellow my-3' >Submit</button>
          </form>
        </>
      }
    </div>
  )
}

