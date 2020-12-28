import React, { Component , Fragment} from 'react'
import AppNavBar from '../NavBar/NavBar'
import {ReactAuthContext} from '../../contexts/AuthContext';
class Home extends Component {
    static contextType = ReactAuthContext;


    render() {
        // return (
        //     <Fragment>
        //     <AppNavBar/>
        //       <h1>This is home page</h1>
        //     </Fragment>
        // )
        if(!this.context.isAuthenticated){
            return(
                <Fragment>
                    <AppNavBar/>
                    <div className="homeCenter">
                        <h2>You are not logged in, so sign in or register new user from the above links</h2>
                    </div>
                </Fragment>
            )
        } else {
            return ( 
                <Fragment>
                    <AppNavBar/>
                    <div className="homeCenter">
                        <h2>You are logged in as {this.context.curUser}</h2>
                        <h2>Your email : {this.context.curEmail}</h2>
                    </div>
                </Fragment>
            )
        }
    }
}

export default Home
