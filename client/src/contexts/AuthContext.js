import React, { Component , createContext} from 'react';

export const ReactAuthContext = createContext();

class AuthContext extends Component {
  state = {
      isAuthenticated : false,
      curUser : null,
      curEmail : null,
  }
 
  // For Login
  login = res =>{
   if(res.data.success){
       this.setState ({
        isAuthenticated : true,
        curUser : res.data.user.name,
        curEmail : res.data.user.email,  
       })
   } 
  }

  // For Logout
  logout = () =>{
    localStorage.removeItem('token');
    this.setState ({
        isAuthenticated : false,
        curEmail : null,
        curUser :null,  
       });
       window.location.reload();
   }
    render() {
        return (
            <ReactAuthContext.Provider value ={{
                ...this.state,
                logout : this.logout,
                login : this.login
               }}>
                   {this.props.children}
            </ReactAuthContext.Provider>
        )
    }
}

export default AuthContext;
