import React, { Component } from 'react';
// is this needed any more with webpack 4?
const asyncComponent = importComponent => {
  return class extends Component {
    state = {component: null};

    componentDidMount() {
      importComponent()
      .then(cmp => {
        this.setState({component: cmp.default});
      })
      .catch(err => console.log(err));
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;