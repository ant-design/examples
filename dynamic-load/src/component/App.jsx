import React, { Component } from 'react';
import './App.less';
import { Button } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      component: <Button onClick={this.onClick}>load DatePicker</Button>,
    };
  }

  onClick = () => {
    require.ensure([], () => {
      const DatePicker = require('antd/lib/date-picker');
      this.setState({
        component: <DatePicker />,
      });
    });
  };

  render() {
    return (<div style={{ margin: 100 }}>
      {this.state.component}
    </div>);
  }
}

export default App;

