import React, { Component } from 'react'

class Profile extends Component{//here we are using fuctional component
    constructor(){
        super()
        this.state={}
    }
     handleLogout=()=>{//here whenever we click on logout button it will remove the data and it will go to the login page
         sessionStorage.removeItem('email')
         sessionStorage.removeItem('name')
         this.props.history.push('/login')
    }
    render(){
         if(sessionStorage.getItem('email')==null){//here we are jumping to login page when email is null
             this.props.history.push('/login')
         }
        return(//here we are writing the html code and some bootstrap classes
            <div className="conatainer">        
                <div className="panel panel-success" style={{marginTop:"50px"}}>
                <div className="panel-heading">
                   <h3> User Profile</h3>
                </div>
                <div className="panel-body">
                    <h3>Hi {sessionStorage.getItem("name")}</h3>
                    <h3>Your Mail Id is  {sessionStorage.getItem("email")}</h3>
                 <btn className="btn btn-danger" onClick={this.handleLogout}>LogOut</btn>
                    
                </div>
                
            </div>
            </div>

        )
    }
    }
export default Profile//here export the file to routing file