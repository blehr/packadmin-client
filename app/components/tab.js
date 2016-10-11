import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';


class Tab extends Component {
  render() {
    const { router } = this.context;
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props;
    const isActive = router.isActive(to, onlyActiveOnIndex);
    const LinkComponent = index ? IndexLink : Link;
    const className = isActive ? 'active' : '';

    return (
      <li className={className} >
        <LinkComponent to={to} {...props} >{children}</LinkComponent>
      </li>
    );
  }
}

Tab.propTypes = {
  index: PropTypes.bool,
  to: PropTypes.string,
  onlyActiveOnIndex: PropTypes.bool,
  children: PropTypes.node,
};

Tab.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Tab;
