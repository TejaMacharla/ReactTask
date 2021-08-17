import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Register from './component/Register'
import Login from './component/Login'
import Profile from './component/Profile'
const Routing=()=>{//here we are using functional component
    return(
        <BrowserRouter>
        <Header/>
         <Route exact path="/" component={Register}/>
         <Route path='/login' component={Login}/>
         <Route path='/profile' component={Profile}/>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;//here we export the file to index.js file