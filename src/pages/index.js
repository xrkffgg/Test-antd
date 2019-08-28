import React from 'react';
import S from './index.css';
import { connect, dispatch } from 'dva';
import { Breadcrumb, Row, Col, Skeleton, Switch, Card, Icon, Avatar } from 'antd';

class app extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount(){
    setTimeout(() =>{
      this.setState({loading : false});
    },2000);
    
  };

  render() {
    return ( 
      <div>
        <Row type="flex" justify="space-around" align="middle" style={{padding: `50px 0`}}>
          <Col span={10}>
            <Card
              title="时长"
              bordered={false}
              className={S.card}
              loading={this.state.loading}
              bodyStyle={{padding: '24px 36px 24px 0'}}>
              
            </Card>
          </Col>
          <Col span={10}>
            <Card
              title="工作"
              bordered={false}
              className={S.card}
              loading={this.state.loading}
              bodyStyle={{padding: '24px 36px 24px 0'}}>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(({ onlineday }) => ({
  onlineday,
}))(app);