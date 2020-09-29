import client from "./client";

//로그인
export const login = ({ email, password }) =>
  client.post("/api/auth/signin", { email, password });

//회원가입
export const register = ({ email, password, address, username }) =>
  client.post("/api/auth/signup", { email, password, address, username });

//로그인 상태 확인
export const check = () => client.get("/api/auth/check");
