import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
    return (
      <MainHeader>
        <NavLink to="/">
          {/* <img src="./images/logo.png" alt="my logo img" /> */}
          <h2>ABHINANDAN SHOP</h2>
        </NavLink>
        <Nav />
      </MainHeader>
    );
  };
  
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: #fff;
    box-shadow: 7px 4px 10px rgb(175, 175, 175);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
    h2{
      font-size: 3rem;
      font-weight: 700;
      color: #8e8eb3;
    }
    .logo {
      height: 5rem;
    }
  `;
  export default Header;