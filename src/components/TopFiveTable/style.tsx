const { default: styled } = require("styled-components");

const EquipmentListTableWrap = styled.div.withConfig({
  displayName: "EquipmentListTableWrap",
})`
`;

const StatusDot = styled.span.withConfig({
  displayName: "statusDot",
})`
  margin: 0 1rem 0 0;
  height: 10px;
  width: 10px;
  background-color: #f8f400;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  ${({ status }: { status: string }) => status.includes('awaited') || status.includes('pending') || status.includes('inprogress') || status.includes('returned') ? `
    background-color: #F32020;
  ` : status.includes('completed') || status.includes('received') ? `background-color: #0FEB16;` : `` }
`;

export {
  EquipmentListTableWrap,
  StatusDot
};