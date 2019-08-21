import React from 'react';
import { Menu, Icon } from 'antd';
import router from 'umi/router';
import withRouter from 'umi/withRouter'

@withRouter
class Sidebar extends React.Component {
  onClick = ({item,key,keyPath,domEvent}) =>{
    switch(key) {
      case '1':
        router.push('/');
        break;
      case '2':
        router.push('/online');
        break;
      case '3':
        router.push('/work');
        break;
    }
  };

  getKeys = route => {
    switch(route){
      case '/' : return ['1'];
      case '/online' : return ['2'];
      case '/work' : return ['3'];
    }
  };

  render(){
    const { location } = this.props;
    return (
      <div>
        <Menu
          defaultSelectedKeys={['1']}
          selectedKeys={this.getKeys(location.pathname)}
          mode="inline"
          theme="dark"
          style={{height: 'calc(100vh - 60px)'}}
          onClick={this.onClick}
        >
          <Menu.Item key="1">
            <Icon type="home"/>
            <span>首 页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bar-chart"/>
            <span>设备在线时长统计</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="line-chart"/>
            <span>安检作业统计</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
};

export default Sidebar;