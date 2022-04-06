const { default: styled } = require("styled-components");

const AddOrderWrap = styled.div.withConfig({
  displayName: "AddOrderWrap",
})`
  background-color: #ffff;
  overflow: hidden;
`;

export {
    AddOrderWrap
}