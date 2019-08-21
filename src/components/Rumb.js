import React from 'react';
import Link from 'umi/link';
import { Breadcrumb, Icon } from 'antd';
import S from './index.css';
import withRouter from 'umi/withRouter'

@withRouter
class Rumb extends React.Component {
  state = {
    date : this.getNowDate('ss')
  };

  componentDidMount(){
    this.timer = setInterval(()=>this.tick(),1000)
  };

  componentWillUnmount(){
    clearInterval(this.timer);
  };

  tick = () =>{
    this.setState({
      date : this.getNowDate('ss')
    })
  };

  getPath = route =>{
    switch(route){
      case '/':
        return [{icon: 'home', path: false, route: '/', name: '首页'}];
      case '/online':
        return [{icon: 'home', path: true, route: '/', name: '首页'},{icon: 'bar-chart', path: false, route: '/online', name: '设备在线时长统计'}];
      case '/work':
        return [{icon: 'home', path: true, route: '/', name: '首页'},{icon: 'line-chart', path: false, route: '/work', name: '安检作业统计'}];
    }
  };

  getItem = paths =>{
    return paths.map((item,key) =>{
      return (
        <Breadcrumb.Item key={key}>
          <Icon type={item.icon} style={{fontSize: 18, marginLeft: 10}}/>
          {item.path 
            ? (<Link to="/" style={{marginLeft: 10}}>{item.name}</Link>) 
            : (<span style={{marginLeft: 10, cursor: 'default'}}>{item.name}</span>)}
        </Breadcrumb.Item>
      )
    })
  };

  getNowDate(type){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hh = now.getHours()
    let mm = now.getMinutes()
    let ss = now.getSeconds()

    month = month < 10 ? '0'+ month : month
    day = day < 10 ? '0'+ day : day
    hh = hh < 10 ? '0'+ hh : hh
    mm = mm < 10 ? '0'+ mm : mm
    ss = ss < 10 ? '0'+ ss : ss

    if(type == 'day'){
      return year +'-'+ month +'-'+ day
    } else {
      return year +'-'+ month +'-'+ day + ' '+ hh + ':' + mm + ':' + ss
    }
  };

  render(){
    const { location } = this.props;
    const currentRoute = location.pathname;
    const paths = this.getPath(currentRoute);

    return (
      <div className={S.rumbbox}>
        <Breadcrumb className={S.rumb}>
          {this.getItem(paths)}
        </Breadcrumb>
        <div className={S.timebox}>
          <Icon type="clock-circle" style={{fontSize: 18, lineHeight: '64px'}}/>
          <div className={S.timedate}>
            {this.state.date}
          </div>
        </div>
      </div>
    )
  };
};

export default Rumb;