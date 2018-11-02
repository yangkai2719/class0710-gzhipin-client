import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from  'antd-mobile';
import ProTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import Logo from '../logo';
import {reqRegister} from '../../api';

const Item = List.Item;


class Register extends Component {
  static  propTypes={
    user:PropTypes.object_id.isRequired,
    register:ProTypes.func.isRequired
  }
  
  
  state={
    username:'',
    password:'',
    rePassword:'',
    type:'laoban'
  }
 /* setUsername= val => {
  this.setState({
  username:val
  })
  }
  setPassword= val => {
    this.setState({
      Password:val
    })
  }*/
  
  handleChange=(name,val) => {
    
    this.setState({
      
      [name]:val
    })
  }
  
  register =async () => {
    const {username, rePassword, password, type} = this.state;
    this.props.register({username, rePassword, password, type});
  
  }
  
  goLogin = () =>{
  
  this.props.history.replace('/login');
  }
  
  
  render() {
    const {type} =this.state;
    const {msg}=this.props.user;
    
    if (redirctTo) {
        // this.props.history.replace(redirctTo);
        return <Register to={redirectTo}/>
    }
    
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        
        <Logo />
        <WingBlank>
          {msg?<p className='err-mag'>{msg}</p>:''}
          <form>
            <List>
              <WhiteSpace/>
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
              <WhiteSpace/>
              <InputItem
                placeholder="请输入密码"
                         type="password"
                onChange={val => this.handleChange('password',val)}
              >密码:</InputItem>
              <WhiteSpace/>
              <InputItem placeholder="请输入确认密码"
                         type="password"
                         onChange={val => this.handleChange('repassword',val)}>确认密码:</InputItem>
              <WhiteSpace/>
              <Item>
                用户类型:&nbsp;&nbsp;
                <Radio className="my-radio"
                       checked={type==='dashen'}
                       onClick={() => this.handleChange('type','dashen')}
                >大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio className="my-radio"
                       checked={type==='laoban'}
                       onClick={() => this.handleChange('type','laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace/>
              <Button typr="primary">注 册</Button>
              <WhiteSpace/>
              <Button onClick={this.goLogin}>已有账号</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;