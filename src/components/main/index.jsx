import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {NavBar} from 'antd-mobile'


import LaobanInfo from '../../containers/laoban-info';
import DashenInfo  from '../../containers/dashen-infn';
import Personal  from '../../containers/personal';
import Laoban  from '../../containers/laoban';
import Dashen  from '../../containers/dashen';
import Message  from '../../containers/message';
import NavFooter  from '../../containers/nav-footer';


class Main extends Component {
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
      
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
      
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]
  render () {
    
    const  {navList}=this;
    
    const {pathname}=this.props.location;
   const currentNav= navList.find(nav=>pathname===nav.path)
    
    
    return (
      <div>
        {currentNav ? <Navbar>{currentNav.title}</Navbar>:''}
    
        <switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </switch>
        <NavFooter navList={navList}/>
      </div>

    )
  }
}

export default Main;