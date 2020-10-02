import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { GoMarkGithub } from "react-icons/go";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #333;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 10% 0 2% 0;
  }
  form {
    width: 80%;
  }

  .sns-login {
    width: 80%;
    text-align: center;
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
const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
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
    border-bottom: 3px solid #6c5b7b;
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
const StyledLi = styled.div`
  display: block;
  text-align: center;

  background-color: skyblue;
  border-radius: 5px;
  &:hover {
    background-color: deepskyblue;
  }
  & > a {
    padding: 1rem;
    display: block;
    color: #fff;
    font-size: bold;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  register: "계정 만들기",
};

/* 검증로그인 만들기 */
const AuthForm = ({ type, form, onChange, onSubmit, onClick, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <div className="sns-login">
        {type === "login" && (
          <>
            <StyledButton fullWidth>
              <GoMarkGithub className="git-icon" />
              github으로 로그인하기
            </StyledButton>
            <p style={{ fontWeight: "bold" }}>또는</p>
          </>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          type="email"
          onChange={onChange}
          value={form.email || ""}
        ></StyledInput>
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password || ""}
        ></StyledInput>
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="passwordConfirm"
              name="passwordConfirm"
              placeholder="비밀번호확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            ></StyledInput>
            <StyledInput
              autoComplete="username"
              name="username"
              placeholder="이름"
              onChange={onChange}
              value={form.username}
            ></StyledInput>
            <StyledLi>
              <Link to="" onClick={onClick}>
                현재위치설정
              </Link>{" "}
            </StyledLi>
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>
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
    </AuthFormBlock>
  );
};

export default AuthForm;
