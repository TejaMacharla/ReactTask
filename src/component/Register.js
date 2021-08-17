import React,{Component} from 'react';//here we are importing the react,link,axios
import {Link} from 'react-router-dom';
import axios from 'axios';
const registerUrl="http://localhost:9999/registration"//here we are assigning the api
const intialstate ={
    first_name:'',
     last_name:'',
      gender:'',
       email:'',
        password:'',
         phone_number:'',
          nationality:'',
          description:''
}
class Register extends Component {//this is the fuctional component 
        state=intialstate;
        handleChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})
        }
        validate=()=>{// here we are writing the validation logics
            let firstError="";
            let lastError="";
             let emailError="";
             let pwd=this.state.password
             let cpwd=this.state.cpassword
            let cpwdError="";
            let gdrError="";
            let ntltError=""
            let pwdError="";
            let phnError="";
            
            if(!this.state.first_name){//here we are writing the logics
                firstError='First Name can not be blank'
            }
            if(!this.state.last_name){
                lastError='last Name can not be blank'
            }
            if(!this.state.phone_number){
                phnError='Please Enter Your Phone Number'
            }
            if(!this.state.email.includes('@')){
                emailError='Invalid Email'
            }
            if(!this.state.gender){
                gdrError='please give gender';
            }
            if(!this.state.password){
                pwdError='Please Enter Your Password'
            }
            if(pwd!==cpwd){
                cpwdError="Confirm password does not match"
              }
              if(!this.state.nationality){
                  ntltError="Select Your Nationality"
              }
            if(emailError || firstError ||pwdError|| cpwdError||gdrError||ntltError||lastError||phnError){
                this.setState({emailError,firstError,cpwdError,gdrError,ntltError,pwdError,lastError,phnError})
                return false
            }
            return true
         }
         handleSubmit=event=>{//here whenever we click the submit button it comes here and check tha all values are present or not if the values are not present it show the errors
            // console.log(this.state)
            event.preventDefault();
            
             const isValid=this.validate();
             if(isValid){
                 console.log(this.state)
                 //clear form
             this.setState(intialstate)
             let first_name=this.state.first_name
        
            axios.post(registerUrl,{//here we are assigning the value to the fields
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                gender:this.state.gender,
                email:this.state.email,
                password:this.state.password,
                phone_number:parseInt(this.state.phone_number),
                nationality:this.state.nationality,
                description:this.state.description,

            },)
              .then(this.props.history.push('/login'))//here we are jumping from registration page to login page
              
             
             
             }  
         }
    render(){
        if(sessionStorage.getItem('email')!==null){
            this.props.history.push('/profile')
        }
       // console.log(this.state)
        return(//here we are writing html code and some bootstrap classes
            <div className="container">
                <div className="panel panel-info" style={{marginTop:"50px"}}>
                    <div className="panel-heading">
                        Register Here....!
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input name="first_name" value={this.state.first_name} className="form-control"
                            onChange={this.handleChange}
                            />
                             <div style={{color:"red"}}>{this.state.firstError}</div>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input name="last_name" value={this.state.last_name} className="form-control"
                            onChange={this.handleChange}
                            />
                             <div style={{color:"red"}}>{this.state.lastError}</div>
                        </div>
                        <div className="form-group">
                            <label>Gender</label><br/>
                            <input type="radio" value="male" id="male" onChange={this.handleChange} name="gender" />&nbsp;&nbsp;
                            <label for="Male">Male</label>&nbsp;&nbsp;
                            <input type="radio" value="female" id="female" onChange={this.handleChange} name="gender"/>&nbsp;&nbsp;
                            <label for="Female">Female</label>
                            <div style={{color:"red"}}>{this.state.gdrError}</div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email} className="form-control"
                            onChange={this.handleChange}
                            />
                              <div style={{color:"red"}}>{this.state.emailError}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type='password' value={this.state.password} className="form-control"
                            onChange={this.handleChange}
                            />
                             <div style={{color:"red"}}>{this.state.pwdError}</div> 
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input name="cpassword" value={this.state.cpassword} type='password' className="form-control"
                            onChange={this.handleChange}
                            />

                            <div style={{color:"red"}}>{this.state.cpwdError}</div>
                        </div> 
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input name="phone_number" value={this.state.phone_number} className="form-control"
                            onChange={this.handleChange}
                            />
                            <div style={{color:"red"}}>{this.state.phnError}</div>
                        </div>
                        <div className="form-group mt-2">
                            <label>Nationality</label>
                            <select class="form-control" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
                               <option>Select Your Nationality</option>
                               <option value="Afghan">Afghan</option>
                               <option value="Armenian">Armenian</option>
                               <option value="Australian">Australian</option>
                               <option value="Indian">Indian</option>
                               <option value="Japanese">Japanese</option>
                               <option value="North Korean">North Korean</option>
                            </select>
                               <div style={{color:"red"}}>{this.state.ntltError}</div>
                        </div>
                        <div className="form-group">
                           <label>Description(optional)</label>
                            <textarea name="description" value={this.state.description} onChange={this.handleChange} type="textarea" className="form-control"></textarea>
                        </div>
                        <button className="btn btn-success" type="submit"
                        >
                            Register
                        </button>
                        <p>If you have already an account please <Link className="btn btn-info" to ="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
export default Register;//here we export the file to routing file
