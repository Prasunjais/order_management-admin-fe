const { default: styled } = require("styled-components");

const OrderDetailsBase = styled.div.withConfig({
  displayName: "OrderDetailsWrap",
})`
  overflow: hidden;
`;

const OrderDepartmentBase = styled.div.withConfig({
  displayName: "OrderDepartmentBase"
})`
  display: grid;
  height: 100%;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5vh;
`;

const Department = styled.div.withConfig({
  displayName: "Department"
})`
  padding: 3vw;
  text-align: center;
  font-weight: 600;
  vertical-align: middle;
  font-size: 1.5vw;
  border: null;
  color: white;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${({ linearGradient }: { linearGradient: string }) => `
    background: linear-gradient(${linearGradient});
  `}
  overflow-wrap: break-word;
  &:hover {
    box-shadow: 1px 8px 20px yellow;
    transition: box-shadow .6s ease-in;
    -webkit-transition: box-shadow .6s ease-in;
  }
`;

export {
  Department,
  OrderDetailsBase,
  OrderDepartmentBase
};
