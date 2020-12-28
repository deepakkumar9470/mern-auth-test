import React, { Component } from 'react'
import {Alert} from 'react-bootstrap';
import {ReactAuthContext} from '../../contexts/AuthContext';
import  {login} from '../../actions/auth';
import AppNavBar from '../NavBar/NavBar'
class Login extends Component {
  static contextType = ReactAuthContext;
  state = {
    variant : null,
    msg : null,
    token : localStorage.getItem('token')
  }

 onChange = (e)=>{
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
  const {email, password, token} = this.state;
  const data = {email, password, token};



//Login user

login(data,res=>{
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
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">

            {
              this.state.msg ? (
                <Alert variant={this.state.variant}>{this.state.msg}</Alert>
              ) : null
            }
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              
              <form className="form-signin" id="login-form" onSubmit={this.onSubmit}>
                <div className="form-label-group">
                  <input type="email" name="login_name" onChange={this.onChange} id="email" className="form-control" placeholder="Enter email address" autoFocus/>
                  <label htmlFor="inputEmail">Email address</label>
                </div>
      
                <div className="form-label-group">
                  <input type="password" name="login_pass" onChange={this.onChange} id="password" className="form-control" placeholder="Password" />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

                <hr className="my-4"/>
                <a className="d-block text-center mt-2 small" href="/">Forget Password</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )
  }
}

export default Login
