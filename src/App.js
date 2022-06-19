import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/navbar/NavbarTop';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';


import { auth, db } from './firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

import './App.css';
import MyAccount from './components/MyAccount/MyAccount';
import CreateAccount from './components/CreateAccount/CreateAccount';

import DisplayCard from './components/DisplayCard/DisplayCard';
import ViewPosts from './components/ViewPosts/ViewPosts';
import TestCard from './TestCard';
import MyPosts from './components/MyAccount/MyPosts/MyPosts';
import SavedPosts from './components/MyAccount/SavesPosts/SavedPosts';
import ViewListing from './components/ViewListing/ViewListing';
import TestForum from './TestForum';
import Info from './components/MyAccount/MyInformation/Info';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [currentPost, setCurrentPost] = useState("");
  const postCollectionRef = collection(db, "posts");
  
  var currentPostId;
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  var isUserNull = auth.currentUser;
  if(isAuth === null) {
    setIsAuth(false);
  } 
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = 'login';
    })
  }
  
  
  //Testing load to a specific POST,

  //Commented out because Firebase Quota writes.
  // useEffect(() => {
  //   const getPostData = async () => {
  //     const data = await getDocs(postCollectionRef);
  //     setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }
  //   getPostData();
  // }, []);
  const viewPost = (id) => {
    currentPostId = id;
    console.log(currentPostId);
    window.location.pathname="viewlisting";
  }
  useEffect(() => {
    const getPostData = async () => {
      const data = await getDocs(postCollectionRef);
      //Appending the data to the posts state
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }
  //We should also read in the liked posts for the user!
  getPostData();
  }, [])

  return (
    <Router>
      <NavbarTop auth={auth} setIsAuth={setIsAuth} isAuth={isAuth} isUserNull={isUserNull} signUserOut={signUserOut}/>
      {/**
       * We can load the posts here, this can be done so the user's can
       * simply see the posts that already exists, regardles of being logged in.
       * Also change the Project Logo.
       */}
      <Routes>
        <Route path="/" element={<Header posts={posts}/>}/>
        <Route path="Login" element={<Login setIsAuth={setIsAuth} isUserNull={isUserNull}/>}/>
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="viewposts" element={<ViewPosts viewPost={viewPost}/>} />
        <Route path="myaccount" element={<MyAccount auth={auth}/>} />
        <Route path="myaccount/myposts" element={<MyPosts />} />
        {/* <Route path="viewlisting" element={<ViewListing post={posts} id={currentPostId}/>} /> */}
        {
          posts.map((post) => {
            return(
              <Route path={post.id} element={<ViewListing post={post}/>} />
            )
          })
        }
      
        {/* <Route path="myaccount" element={<SavedPosts />} /> */}
        <Route path="test" element={<TestForum />} />
      </Routes>
     
    </Router>
  );
}

export default App;
