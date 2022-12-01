import axios from "axios";


const API_URL = "";

const register = (email, password)=>{

return axios.post(API_URL,{
    email,
    password
});



};

const login = (email, password)=>{
    return axios.post(API_URL,{
        email,
        password,
    })
    .then((response)=>{
        if(response.data.accessToken){
            
            localStorage.setItem("user", JSON.stringify(response.data.accessToken));

            return response.data.token;
        }
    })
    ;
};

const logout=()=>{
    localStorage.removeItem("user");
}

const authService={
    register,
    login,
    logout
}

export default authService;
