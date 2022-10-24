import React from 'react';
import { Nav } from '@alifd/next';
import { Link } from 'react-router-dom';

const { Item, SubNav } = Nav;

const BaseLayout = (props)=> {
    const { children } = props;
    return <div><Nav
    className="basic-nav"
    mode="popup"
    direction="hoz"
    type="primary"
    // header={header}
    // footer={footer}
    defaultSelectedKeys={["home"]}
    triggerType="hover"
  >
    <Item key="home"> <Link to="/">Home</Link></Item>
    <SubNav label="Component" noIcon>
      <SubNav label="Next">
        <Item key="next-design">Design</Item>
        <Item key="next-doc">Document</Item>
      </SubNav>
      <SubNav label="Meet">
        <Item key="meet-design">Design</Item>
        <Item key="meet-doc">Document</Item>
      </SubNav>
    </SubNav>
    <Item key="form">
      <Link to="/form">Form</Link>
    </Item>
    <Item key="dialog">
      <Link to="/dialog">Dialog</Link>
    </Item>
    <Item key="countdown">
      <Link to="/countdown">Countdown</Link>
    </Item>
  </Nav>
  {children}
  </div>
}

export default BaseLayout;