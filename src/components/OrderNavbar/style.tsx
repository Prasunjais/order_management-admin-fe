const { default: styled } = require("styled-components");

const NavBarBase = styled.div.withConfig({
  displayName: "NavBarBase",
})`
  width: 100%;
  height: 100vh;
  background-color: #0b7b97;
  padding: 1rem;  
`;

const NavItem = styled.div.withConfig({
  displayName: "NavItem",
})`
  font-weight: 600;
  padding: 1rem;
  width: 80%;
  font-size: 1.2vw;
  text-align: left;
  word-wrap: break-word;
  color: white;
  ${({ active }: { active: boolean }) => active && `
    background-color: white;
    color: black;
    border-radius: 15px;
  `}
  &:hover {
    background-color: white;
    color: black;
    border-radius: 15px;
  }
`;

export {
  NavBarBase,
  NavItem,
};