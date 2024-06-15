import styled from '@emotion/styled';
import { useState } from 'react';
import { WonderfulCheckboxType } from '../spec';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
  color: #fff;
`;

const CheckboxBase = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  position: relative;
  background-color: transparent;
  &:checked {
    border-color: #00ff00;
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    background-color: #00ff00;
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 2px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease-in-out;
  }
  &:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }
`;


const WonderfulCheckbox: WonderfulCheckboxType = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <Container>
      <CheckboxBase type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <Label onClick={handleCheckboxChange}>
        {label}
      </Label>
    </Container>
  );
};

export default WonderfulCheckbox;
