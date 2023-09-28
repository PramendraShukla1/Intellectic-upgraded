import React, { useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";
  import { auth,db } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from 'firebase/firestore';

const SignupMobile = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
  const [authuser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState(null);
 
    const handleOpen = () => setOpen(!open);


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setAuthUser(user);
          
        } else {
          setAuthUser(null);
      
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const fetchUserData = async () => {
      if (authuser) {
        // Get the UID of the currently logged-in user
        const currentUserUID = authuser.uid;
  
        // Query the 'users' collection where 'uid' field matches the current user's UID
        const userQuery = query(collection(db, 'users'), where("uid", "==", currentUserUID));
        const querySnapshot = await getDocs(userQuery);
  
        if (!querySnapshot.empty) {
          // Assuming there's only one matching user (based on UID), retrieve the data
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        } else {
          console.log('No user found with the UID:', currentUserUID);
        }
      }
    };
  
    useEffect(() => {
      fetchUserData();
    }, [authuser]);
  
  
    const handleSignOut = () => {
      signOut(auth) 
        .then(() => {
          setAuthUser(null);
          handleOpen();
        })
        .catch((error) => {
          console.log(error);
        });
    };


  return (
    <>

{authuser ? (
      <>
         <div className="flex w-full justify-center items-center lg:hidden">
        <Button onClick={handleOpen} variant="gradient">
        Dashboard
      </Button>
        </div>
      </>
    ) : (
      <>
       <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth onClick={()=>navigate('/login')}>
            Sign In
          </Button>
          <Button variant="gradient" size="sm" fullWidth onClick={()=>navigate('/register')}>
            Sign Up
          </Button>
        </div>
      </>
    )}


  
        

       
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Dashboard</DialogHeader>
      <DialogBody divider>
        <div className="bg-gray-200 flex items-center justify-center px-5 py-5">
          <div
            className="rounded-lg shadow-xl bg-gray-900 text-white"
            style={{ width: 450 }}
          >
            <div className="border-b border-gray-800 px-8 py-3">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em>{" "}
                <span className="text-green-400">aboutMe</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <em className="text-blue-400">function</em>() {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                {"{"}
              </p>
              {userData && (
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;Name:{" "}
                  <span className="text-yellow-300">{userData.name}</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Email:{" "}
                  <span className="text-yellow-300">{userData.email}</span>,
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Mobile:{" "}
                  <span className="text-yellow-300">{userData.mobile}</span>,
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Address:{" "}
                  <span className="text-yellow-300">{userData.address}{" "}{userData.city}{" "} &nbsp;&nbsp;&nbsp;&nbsp;{userData.state}{" "}{userData.zipcode}</span>,
                 
                </p>
                
              )}
              {/* Add more user information fields here if needed */}
              <p>&nbsp;&nbsp;{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button color="red" onClick={handleSignOut}>
          Logout
        </Button>
      </DialogFooter>
    </Dialog>
     
   



    </>
  )
}

export default SignupMobile