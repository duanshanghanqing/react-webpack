import React from 'react';

// React.memo() 主要是用于函数式组件，作为 PureComponent 的替代方案；
export default React.memo(props => (
  <h4>{props.title}</h4>
));
