import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routes from './routes';
import configureStore from './store/configureStore';
import 'antd/dist/antd.min.css';
import 'minireset.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          {/*
          getUserConfirmation={(message, callback) => {
            callback(window.confirm(message));
          }}
          */}
          {/*
          是否使用h5 history，切换页面是否刷新跳转
          forceRefresh={!('pushState' in window.history)}
          */}
          <Router basename="/fmy">
            {renderRoutes(routes)}
          </Router>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
