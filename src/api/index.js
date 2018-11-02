import ajax from './ajax';


export const reqLogin=data=>ajax('http://localhost:4000/login',data,'POST');

export const reqRegister=data=>ajax('http://localhost:4000/register',data,'POST');

export const reqUpdateUserInfo=data=>ajax('/update',data,'POST');