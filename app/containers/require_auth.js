import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.auth.authenticated) {
        this.context.router.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.authenticated) {
        this.context.router.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  return connect(mapStateToProps)(Authentication);
}
