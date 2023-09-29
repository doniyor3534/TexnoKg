import React, { useEffect, useState } from 'react';
import {  useFormik } from 'formik';
// import * as Yup from 'yup';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import { toast } from 'react-toastify';
import { modalchange } from '../../redux/homeRedux';
import { useDispatch } from 'react-redux';




export default function LoginLogout() {

  const dispatch = useDispatch()

  // //////////////////////////////////////Get Auth/////////////////////////////////
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'doniyor3534')
        onSnapshot(contactsRef, (snapshot) => {
          const contactdata = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactdata)
          return contactdata
        })


      } catch (error) {
        console.log(error);
      }
    }
    getContacts()
  }, [])
  console.log(contacts);
  ////////////////////////////////////GEt Auth///////////////////////////////////
  // ////////////////////////////////////Add Auth///////////////////////////////////
  const Addcontact = async (value) => {
    try {
      const ContactRef = collection(db, 'doniyor3534')
      await addDoc(ContactRef, value)
    } catch (error) {
      console.log(error);
    }
    toast("Add Contact saccessfuly",{
      position:'top-center',
      theme:'colored',
      type:'success'
    });
  }
  // ////////////////////////////////////Add Auth///////////////////////////////////

  const [login, setlogin] = useState(true)
  const loginfunlogin = () => {
    setlogin(true)
  }
  const loginfunsigin = () => {
    setlogin(false)
  }
  //  ///////////formik login
const formiklogin = useFormik({
  initialValues:{
    username:'',
    email:'',
    password:'',
   },
   onSubmit:values=>{
    loginrender(formiklogin.values);
   },
   validate:values=>{
      let errors ={}
   
      ///////////username
      if(!values.username){
        errors.username = 'Required'
      }
      ///////////tel
      if(!values.password){
        errors.password = 'Required'
      }
      
      return errors;
   }
})
 // /////////////useformik
   // /////////////useformik sigin
   const formikSigIn = useFormik({
    initialValues:{
      email:'',
      username:'',
     password:'',
    },
    onSubmit:values=>{
      Addcontact(formikSigIn.values)
      dispatch(modalchange())
    },
    validate:values=>{
       let errors ={}
       ///////////username
       if(!values.username){
         errors.username = 'Required'
       }
       // ////////email
       if(!values.email){
         errors.email = 'Required'
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
       }
       ///////////password
       if(!values.password){
         errors.password = 'Required'
       }
       
       return errors;
    }
 })

//  ////////////////////////////////login render
   const loginrender=(value)=>{
    console.log(value);
       const username = contacts.find(x=>x.username===value.username)
       const password = contacts.find(x=>x.password===value.password)
       if(username && password){
         dispatch(modalchange())
        toast("Yes Username and password saccessfuly",{
          position:'top-center',
          theme:'colored',
          type:'success'
        });
       }
   }
//  ////////////////////////////////login render
  return (
    <div className='p-3 '>
      <div className="btngroup flex gap-2 my-3">
        <button onClick={loginfunlogin} className={`${login ? 'border-b-0 ' : 'text-grey0 rounded-b-md'} rounded-t-md text-2xl border border-grey0`}>Login</button>
        <button onClick={loginfunsigin} className={`${login ? 'text-grey0 rounded-b-md' : 'border-b-0'}  rounded-t-md text-2xl border border-grey0`}>Signup</button>
      </div>
      {login ?
        <>
          <form onSubmit={formiklogin.handleSubmit} className='flex flex-col gap-2' >
            <label className='flex flex-col' htmlFor="username">Username
            <input name='username' onChange={formiklogin.handleChange} value={formiklogin.values.username}   className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="string" id='username' placeholder='username..' />
            </label>
            <label className='flex flex-col' htmlFor="password">Password
            <input name='password' onChange={formiklogin.handleChange} value={formiklogin.values.password}   className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="password" id='password' placeholder='password..' />
            </label>
            <button type='submit' className='bg-yellow my-3' >Submit</button>
            <span className='text-grey1 italic text-start'>parolni unutdingizmi ?</span>
          </form>
        </>
        :
        <>
          <form onSubmit={formikSigIn.handleSubmit} className='flex flex-col gap-2' >
            <label className='flex flex-col' htmlFor="username">Username
            <input name='username' onChange={formikSigIn.handleChange} value={formikSigIn.values.username}   className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="text" id='username' placeholder='username..' />
             {formikSigIn.errors.name?<span className='text-red-500'>{formikSigIn.errors.username}</span>:null}
            </label>
            <label className='flex flex-col' htmlFor="email">Email
            <input name='email'  onChange={formikSigIn.handleChange} value={formikSigIn.values.email}  className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="email" id='email' placeholder='Email..' />
            {formikSigIn.errors.email?<span className='text-red-500'>{formikSigIn.errors.email}</span>:null}
            </label>
            <label className='flex flex-col' htmlFor="password">Password
            <input name='password'  onChange={formikSigIn.handleChange} value={formikSigIn.values.password}  className='border border-grey0 p-2 rounded-[5px] outline-yellow' type="password" id='password' placeholder='password..' />
            {formikSigIn.errors.tel?<span className='text-red-500'>{formikSigIn.errors.tel}</span>:null}
            </label>
            <button type='submit' className='bg-yellow my-3' >Submit</button>
            <span className='border px-3 py-1 w-[max-content] rounded '><img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" alt="" className='w-[30px]' /></span>
          </form>
        </>
      }
    </div>
  )
}

