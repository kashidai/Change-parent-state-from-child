import React from 'react';
import PropTypes from 'prop-types';
import Child from "../parent-child/Child"

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoge: 'hogehoge'
    };
  }

  hogeFunc() {
    this.setState({ hoge: 'change it!' });
console.log(this.state.hoge);
  }
  render() {
    return (
      <div>
        <Child dataHoge={() => { this.hogeFunc(); }} />
      </div>
    );
  }
}

export default Parent;
