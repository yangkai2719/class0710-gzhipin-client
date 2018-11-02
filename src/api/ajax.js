import axios from 'axios';
// import {stringify} from 'qs';

export default function ajax(url, data, type = 'GET') {
 let querystring='';
 
 
 
  if (data) {
    // url += '?';
    Object.keys(data).forEach(key => {
      const value = data[key];
      querystring += key + '=' + value + '&'
    })
    querystring = querystring.substring(0, querystring.length-1);
  }
  
  
  if (typr.toUpperCase() === 'GET') {
    url+='?'+querystring;
    
    return axios.get(url);
  } else {
    // console.log(data);
  
    return axios.post(url, querystring, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      
    });
  }
}