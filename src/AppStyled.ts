import styled from "styled-components";

export const Header = styled.div`
  height: 3rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 9999;
  inset: 0 auto 0 0;
  max-height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.4rem;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;

export const TextHeader = styled.div`
  font-size: 0.8rem;
  color: #f5f5f7;
  font-family: "MyriadProRegular";
  opacity: 0.7;
  cursor: pointer;
  letter-spacing: -1;
`;
