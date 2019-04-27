import React from 'react';
import reactMixin from 'react-mixin';
import mixins from '@/mixins';
import { Button, Icon } from 'antd';
import './index.less';

@reactMixin.decorate(mixins)
class Home extends React.Component {
  componentDidMount() {
    this.props.$http.get('/pcapi/v2/dictionary/timezone').then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="Home">
        <img src={require('../../assets/images/logo.png')} alt="" />
        <p className="title">
          {' '}
Hello
          { this.props.name }
        </p>
        <Button type="primary">Hello</Button>
        <Icon type="step-backward" />
        <video src={require('../../assets/media/movie.ogg')} controls="controls">
        您的浏览器不支持 video 标签。
        </video>
      </div>
    );
  }
}

export default Home;
