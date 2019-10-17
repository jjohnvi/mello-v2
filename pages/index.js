import Link from "next/link";
import Home from "./home";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageCont>
        <LeftSide>
          <LoginCont>
            <Link href="/home">
              <LoginContTitleCont>
                <LoginContTitle>Login</LoginContTitle>
              </LoginContTitleCont>
            </Link>
            <LoginInput placeholder="Username..."></LoginInput>
            <LoginInput placeholder="Password..." type="password"></LoginInput>
            <LoginContButtonsCont>
              <LoginContButtons>Login</LoginContButtons>
              <LoginContButtons>Register</LoginContButtons>
            </LoginContButtonsCont>
          </LoginCont>
        </LeftSide>
        <RightSide>Welcome to Mello.</RightSide>
      </PageCont>
    </>
  );
};

export default Index;

const PageCont = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const LeftSide = styled.div`
  width: 45%;
  height: 95%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RightSide = styled.div`
  width: 45%;
  height: 95%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #757575;
  letter-spacing: 1px;
`;

const LoginCont = styled.div`
  width: 75%;
  height: 60%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginContTitleCont = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LoginContTitle = styled.div`
  border-radius: 5px;
  padding: 1rem;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: none;
  margin: 1rem;
  margin-right: 0;
`;

const LoginInput = styled.input`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  color: #757575;
  border: none;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12); */
  border-bottom: solid 2px #0070f3;
  margin: 1rem;
  outline: none;
`;

const LoginContButtonsCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
`;

const LoginContButtons = styled.button`
  width: 5vw;
  border-radius: 5px;
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: none;
  margin: 1rem;
  margin-right: 0;
  outline: none;
`;
