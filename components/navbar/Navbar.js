import Link from "next/link";
import styled from "styled-components";

const NavCont = styled.div`
  width: 100%;
  height: 64px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.98);
  color: #0070f3;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Navbar = () => {
  return (
    <NavCont className="navbar">
      <Title>NEXT.js</Title>
    </NavCont>
  );
};

export default Navbar;
