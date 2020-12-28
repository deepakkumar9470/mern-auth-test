import React, { Component } from 'react'
import './SignUp.css';
import {Alert} from 'react-bootstrap';
import {ReactAuthContext} from '../../contexts/AuthContext';
import  {register} from '../../actions/auth';
import AppNavBar from '../NavBar/NavBar'
 class SignUp extends Component {
   static contextType = ReactAuthContext;

   state = {
     name : null,
     email : null,
     password : null,
     variant : null,
     msg : null,
     token : localStorage.getItem('token')
   }
  
   onChange = (e) =>{
      this.setState({
        [e.target.name] : e.target.value
      })
   }

   componentDidUpdate(){
     if(this.context.isAuthenticated){
       this.props.history.push('/');
     }
   }

   onSubmit = (e)=>{
      e.preventDefault()
      const { name,email, password} = this.state;
      // Creating new user
      const newUser = {
        name, email, password
      }
    //Register user

    register(newUser,res=>{
      if(res.data.success){
        this.setState({
          msg : res.data.msg,
          variant : "success"
        })
        this.context.login(res);
      }else {
        this.setState({
          msg : res.data.msg,
          variant : "danger"
        })
      }
    })

   }

  render() {
    return (
      
      <div className="container">
      <AppNavBar/>
        <div className="row">
       <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
         <div className="card-img-left d-none d-md-flex">
         
        </div>
        <div className="card-body">
        <h5 className="card-title text-center">SignUp</h5>
        <form className="register" id="register" onSubmit={this.onSubmit}>

             {
               this.state.msg ? (
                 <Alert variant={this.state.variant}>{this.state.msg}</Alert>
               ) : null
             }
          
          <div className="form-label-group">
            <input type="text" name="name" id="name" onChange={this.onChange} className="form-control" placeholder="Enter your name" autoFocus/>
            <label htmlFor="inputUserame">Name</label>
          </div>

          <div className="form-label-group">
            <input type="email" name="email" id="email" onChange={this.onChange} className="form-control" placeholder="Enter Email address"/>
            <label htmlFor="inputEmail">Email</label>
          </div>
          
          <hr/>

          <div className="form-label-group">
            <input type="password" name="password" id="password" onChange={this.onChange} className="form-control" placeholder="Enter password"/>
            <label htmlFor="inputPassword">Password</label>
          </div>
         

          <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
          <a className="d-block text-center mt-2 small" href="/login">Sign In</a>
          <hr className="my-4"/>
          
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default SignUp
