import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component{// here we are using class component
    constructor(){
        super()
        this.state={

        }
    }
    conditionalHeader=()=>{//whenever we login the page the name will store in sessionStorage .if name is there and it will return the name  navabar right side
        if(sessionStorage.getItem('name')!==null){
            return(
              <li>
                  <a>
                  Hi {sessionStorage.getItem('name')}
                  </a>
              </li>
          )
            }
        }
        render(){
            return(//here we are writing the some html code and some bootstrap classes
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <Link class="navbar-brand" to="/"></Link>
                  </div>
                  <ul class="nav navbar-nav">
                    <li><Link to=""><span class="glyphicon glyphicon-home"></span> Home</Link></li>
                    <li><Link to="/"><span class="glyphicon glyphicon-open"></span> Register</Link></li>
                    <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    <li><Link to="/profile"><span class="glyphicon glyphicon-user"></span> Profile</Link></li>
                   
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    
                         {this.conditionalHeader()}  {/*here we are calling the conditionalHeader*/}
                   
                      </ul>
                </div>
              </nav>
         )
        

        }
    }
export default Header;//here we export the file to routing file