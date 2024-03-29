import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "black",
          fontWeight: 300,
          marginBottom: 15,
        }}
      >
        Main Page
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: 300,
        }}
      >
        About
      </Link>
    </Nav>
  );
};

const Nav = styled.div`
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;

  @media screen and (max-width: 1090px) {
    left: initial;
    top: initial;
    bottom: 0;
    width: 100%;
  }
`;

export default Navigation;
