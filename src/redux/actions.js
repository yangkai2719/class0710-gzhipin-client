
import {reqLogin,reqRegister,reqUpdateUserInfo} from '../api';

import {ERR_MSG,AUTH_SUCCESS,UPDATE_USER,RESET_USER} from '../action-types';




export  const  authSuccess=user =>({type:AUTH_SUCCESS,data:user});

export  const  errMsg=msg =>({type:ERR_MSG,data:msg});

export  const  updateUser=user =>({type:UPDATE_USER,data:user});

export  const  resetUser=msg =>({type:RESET_USER,data:msg});



export const register = data => {
  
  const {username,password,rePassword,type}=data;
  if (!username) {
      return errMsg({username,password,msg:'请输入用户名'});
  }else if (!password) {
    return errMsg({username,password,msg:'请输入密码'});
  }else if (password !==rePassword) {
    return errMsg({username,password,msg:'两次密码输入不一致,请重新输入'});
  }else if (!type) {
    return errMsg({username,password,msg:'请选择账号类型'});
  }
  
  
  return dispatch => {
    const {username,password,rePassword,type}=data;
    if (!username) {
      return dispatch(errMsg({username,password,msg:'请输入用户名'}));
    }else if (!password) {
      return dispatch(errMsg({username,password,msg:'请输入密码'}));
    }else if (password !==rePassword) {
      return dispatch(errMsg({username,password,msg:'两次密码输入不一致,请重新输入'}));
    }else if (!type) {
      return dispatch(errMsg({username, password, msg: '请选择账号类型'}));
    }
  reqRegister(data)
    .then(res => {
    const result=res.data;
    if (result.code===0) {
        dispatch(authSuccess(result.data));
    } else {
       console.log(result.msg);
        
        dispatch(errMsg({msg:result.msg,username:data.username,type:data.type}));
        
    }
    })
    .catch(err => {
      dispatch(errMsg("网络不稳定,请重新试试~"));
    })
    
    
    
  }
}




export const updateUserInfo = data => {
  
  const {header,post,company,salary,info}=data;
  if (!header) {
    return resetUser({msg:'请选择头像'});
  }else if (!post) {
    return resetUser({msg:'请输入招聘职位'});
  }else if (!company) {
    return resetUser({msg:'请输入公司名称'});
  }else if (!salary) {
    return resetUser({msg:'请输入薪资范围'});
  }else if (!info) {
    return resetUser({msg:'请输入公司简介'});
  }
  
  
  return dispatch => {
   
    reqUpdateUserInfo(data)
      .then(res => {
        const result=res.data;
        if (result.code===0) {
          dispatch(updateUser(result.data));
        } else {
          
          
          dispatch(resetUser({msg:result.msg}));
          
        }
      })
      .catch(err => {
        dispatch(resetUser({msg:"网络不稳定,请重新试试~"}));
      })
  }
}
