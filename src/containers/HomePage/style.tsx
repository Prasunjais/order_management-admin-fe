import bgImg from '../../assests/images/hp-shape-xl.svg';
const { default: styled } = require("styled-components");

const HpContainer = styled.div.withConfig({
  displayName: "HomePageContainer",
})`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 12rem;
  background-position-y: -10rem;
  background-size: 150% 150%;
  margin-left: 2vw;
  height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
`;

export {
  HpContainer
};