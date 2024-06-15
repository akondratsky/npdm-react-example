import { Global, css } from '@emotion/react';
import WonderfulButton from './components/WonderfulButton';
import WonderfulCheckbox from './components/WonderfulCheckbox';

export const TestApp = () => {
  return (
    <>
      <Global styles={css`
        html, body > div {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          gap: 64px;
        }
      `} />
      <WonderfulButton label='WONDERFUL BUTTON' />
      <WonderfulCheckbox label='WONDERFUL CHECKBOX' />
    </>
  );
};
