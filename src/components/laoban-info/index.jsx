import React, {Component} from 'react';

import {NavBar,InputItem,Button,List} from 'antd-mobile';

import ProTypes from 'prop-types';

import HeaderSelector from '../header-selector';

class LbanInfo extends Component {
  static proptypes={
    user:ProTypes.object.isRequired,
    updateUserInfo:ProTypes.func.isRequired
    
  }
  
  
  
  state={
  header:'',
    info:'',
    post:'',
    salary:'',
  company:''
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
      
      
    })
    
    
  }
  setHeader=header=>{
    this.setState({
      header
      
      
    })
    
    
  }
  saveUserInfo=()=>{
    this.props.updateUserInfo(this.state);
    
  }
  
  

  
  render () {
    const {msg}=this.props.user;
    return (
      <div>
        <NavBar>老板信息完善
        </NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        {mag ? <p className="err-msg">{msg}</p>:''}
        <InputItem onChange={val=>this.handleChange('post',val)}>招聘职位:</InputItem>
        <InputItem onChange={val=>this.handleChange('post',val)}>公司名称:</InputItem>
        <InputItem onChange={val=>this.handleChange('post',val)}>职位薪资:</InputItem>
        <TextareaItem title="职位要求" rows={3} onChange={val=>this.handleChange('info',val)}/>
        <Button type="primary" onclick={this.saveUserInfo}>保 存</Button>
        
      </div>
    )
  }
}

export default LbanInfo;