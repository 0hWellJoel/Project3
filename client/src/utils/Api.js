import axios from 'axios';

export default {
    signup:function(user){
        return axios.post('/api/signup',user);
    },
    login:function(user){
        return axios.post('/api/login',user)
    }
}