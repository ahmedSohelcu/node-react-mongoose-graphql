/*
import axios from 'axios'
   let BaseApi = axios.create({
   //baseURL :"http://www.roktojoddha.com/dashboard/api/"   
   baseURL :"http://localhost:8000/api",
});

let Api = function () {
   let token = localStorage.getItem("authToken");

   if (token){
      BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }
   return BaseApi;
};
export default Api;
*/

/*
New added headers
*/
import axios from 'axios'

   let BaseApi = axios.create({
   //baseURL :"http://www.roktojoddha.com/dashboard/api/"   
   baseURL :"http://localhost:8000/api",
   headers: {
    //"Content-type": "application/json"
   }
});

let Api = function () {
   let token = localStorage.getItem("token");

   if (token){
      BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }
   return BaseApi;
};

export default Api;