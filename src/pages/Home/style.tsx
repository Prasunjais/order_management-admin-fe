const { default: styled } = require("styled-components");

const HomeBase = styled.div.withConfig({
  displayName: "HomeMainDiv",
})`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

export {
  HomeBase,
};