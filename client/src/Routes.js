import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {ReactAuthContext} from './contexts/AuthContext';
import {login} from './actions/auth';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
class Routes extends Component {
   static contextType = ReactAuthContext;
   
    componentDidMount(){
        const token = localStorage.getItem('token');
        if(token && !this.context.isAuthenticated){
            const data = {token, email :null, password:null}
            login(data ,(res)=>{
                 if(res.data.success){
                     this.context.login(res);
                 }else {
                     localStorage.removeItem('token');
                     console.log(res.data.msg);
                 }
            })
        }
    }
 



    render() {
        return (
          <Router>
             <Route path="/" exact component= {Home}/>
             <Route path="/register" exact component= {SignUp}/>
             <Route path="/login" exact component= {Login}/>
         </Router>
        )
    }
}

export default Routes
