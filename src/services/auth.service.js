import axios from "axios";


const API_URL = "http://localhost:3000";

const register = (email, password)=>{

return axios.post(API_URL+"/usuarios/create-user",{
    email,
    password
});



};

const login = (email, password)=>{
    return axios.post(API_URL+"/login/usuarios",{
        email,
        password,
    })
    .then((response)=>{
        if(response.data.token){
            
            localStorage.setItem("user", JSON.stringify(response.data.token));

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
