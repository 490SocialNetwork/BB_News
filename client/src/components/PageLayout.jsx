import React from "react";
import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
const PageLayout = ({ admin }) => {
  return (
    <Layout>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>BasketBall News</Navbar.Brand>
          <h4 className="me-auto ">{admin ? "Admin" : "User"}</h4>
        </Container>
      </Navbar>
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  nav {
    width: 100%;
    margin-bottom: 75px;
  }
`;
