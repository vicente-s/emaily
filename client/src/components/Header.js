import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still waiting";
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="key1"><Payments /></li>,
          <li key="key3" style={{ margin: '0 10px;'}}>Credits: {this.props.auth.credits}</li>,
          <li key="key2"><a href="/api/logout">Log Out</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to = {this.props.auth ? '/surveys' : '/'} className="left brand-logo" >
            Emaily
          </Link>
          <ul className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps( {auth} ) {
  return {auth};
}

export default connect(mapStateToProps)(Header);
