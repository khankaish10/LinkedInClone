import React, { useEffect } from 'react';
import './App.css';
import { selectUser } from './features/UserSlice'
import Header from './component/header/Header';
import SideBar from './component/appbody/sidebar/SideBar';
import Feed from './component/appbody/feed/Feed';
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux'
import { logout, login } from './features/UserSlice'

import { auth } from './firebase'
import Widget from './component/appbody/widget/Widget';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL

        }))
      } else {
        // user is logged out 
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {  !user ? (
        <Login />
      ) : (
        <div className='app_body' >
          <SideBar />
          <Feed />
          <Widget />
        </div>
      )}

    </div>
  );
}

export default App;
