const { default: styled, css } = require("styled-components");

const BaseWrap = styled.div.withConfig({
  displayName: "BaseWrap",
})`
  background: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  *:focus-visible {
    outline: #0a759e auto 1px;
  }
`;

module.exports = {
  BaseWrap,
};
