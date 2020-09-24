import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { GoMarkGithub } from "react-icons/go";
import ResponsiveWrapper from "../Common/ResponsiveWrapper";

const Wrppaer = styled.div`
  h3 {
    margin: 0;
    color: #333;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 10% 0 2% 0;
  }
  form {
    width: 80%;
  }
  .sns-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .no-login {
    margin: 0 auto;
    width: 80%;
    color: #999;
  }
  .footer {
    margin: 0 auto;
    width: 80%;
    font-weight: bold;
  }
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 3.5vh;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #333;
  &:hover {
    background: #111;
  }
  .git-icon {
    margin-right: 5%;
  }
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5% 0;
  background: #f9f7f7;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  outline: none;

  &:focus {
    color: #333;
    border-bottom: 1px solid blue;
  }
  & + & {
    margin-top: 1.3rem;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  text-align: left;
  font-size: 0.9rem;
  a {
    color: #333;
    text-decoration: underline;
  }
  &hover {
    color: blue;
  }
  .p {
    margin-right: 2%;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
`;
const textMap = {
  login: "로그인",
  register: "계정 만들기",
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <ResponsiveWrapper>
      <Wrppaer>
        <h3>{text}</h3>
        <div className="sns-login">
          <StyledButton>
            <GoMarkGithub className="git-icon" />
            github으로 로그인하기
          </StyledButton>
          <p style={{ fontWeight: "bold" }}>또는</p>
        </div>
        <form>
          <StyledInput
            autoComplete="useremail"
            name="useremail"
            placeholder="이메일"
          ></StyledInput>
          <StyledInput
            autoComplete="password"
            name="password"
            placeholder="비밀번호"
            type="password"
          ></StyledInput>
          {type === "register" &&
            ((
              <StyledInput
                autoComplete="password"
                name="password"
                placeholder="비밀번호확인"
                type="password"
              ></StyledInput>
            ),
            (
              <StyledInput
                autoComplete="address"
                name="address"
                placeholder="주소"
              ></StyledInput>
            ),
            (
              <StyledInput
                autoComplete="nickname"
                name="nickname"
                placeholder="닉네임"
              ></StyledInput>
            ))}
          <ButtonWithMarginTop cyan FullWidth>
            {text}
          </ButtonWithMarginTop>
        </form>
        <Footer>
          {type === "login" ? (
            <p className="no-login">
              아직 계정이 없으신가요?{" "}
              <Link to="/signup" className="footer">
                회원가입
              </Link>
            </p>
          ) : (
            <p className="no-login">
              이미 계정이 있으신가요?{" "}
              <Link to="/signin" className="footer">
                로그인
              </Link>
            </p>
          )}
        </Footer>
      </Wrppaer>
    </ResponsiveWrapper>
  );
};

export default AuthForm;
