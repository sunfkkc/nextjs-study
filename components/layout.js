import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
export default Layout;

const Block = styled.div`
  width: 200px;
  height: 200px;
  background: red;
`;
