const { default: styled } = require("styled-components");

const OrderHeaderBase = styled.div.withConfig({
  displayName: "OrderHeaderBase",
})`
  width: 100%;
  height: 10vh;
  padding: 1rem;  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

export {
  OrderHeaderBase,
};