const { default: styled } = require("styled-components");

const LoginCnt = styled.div.withConfig({
  displayName: "LoginContainer",
})`
  background-color: #0A759E;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  `;

export {
  LoginCnt,
};