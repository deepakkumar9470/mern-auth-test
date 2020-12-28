import axios from 'axios';

// Header for the client & server
const config = {
    headers : {
        "Content-Type" : "application/json"
    }
}


// Login the User in
export const login = (data, callback) =>{
    const {email, password, token} = data;
    // Request body
    const body = JSON.stringify({email, password, token});
    
    // Posting data from server through axios

    axios.post('/api/auth', body , config)
    .then(res=>{
        if(res.data.success){
            localStorage.setItem('token', res.data.token);
               }
        if(typeof callback === "function"){
                callback(res);
            }
     })
     .catch(err=>console.log(err))
}

// Register the new User 
export const register = (user, callback) =>{
    const {email, password, token} = user;
    // Request body
    const body = JSON.stringify({email, password, token});
    
    // Posting data from server through axios

    axios.post('/api/users', body , config)
    .then(res=>{
        if(res.data.success){
            localStorage.setItem('token', res.data.token);
               }
        if(typeof callback === "function"){
                callback(res);
            }
     })
     .catch(err=>console.log(err))
}

