import styled from '@emotion/styled';
import { FC } from 'react';

const GlowingButton = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    border-radius: 10px;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  }
`;

export type WonderfulButtonProps = {
  label: string;
  onClick?: () => void;
};

export type WonderfulButtonType = FC<WonderfulButtonProps>;

const WonderfulButton: WonderfulButtonType = ({ label, onClick }) => {
  return (
    <GlowingButton onClick={onClick}>
      {label}
    </GlowingButton>
  );
};

export default WonderfulButton;
