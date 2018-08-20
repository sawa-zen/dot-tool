import * as React from 'react';
import styled from 'styled-components';

const Button = (props) => (
  <Wrapper
    className={props.className}
    onClick={props.onClick}
  >
    {props.label}
  </Wrapper>
);
Button.defaultProps = {
  className: '',
  label: 'ボタン',
  onClick: () => {},
};

const Wrapper = styled.div`
  height: 48px;
  border: 2px solid white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  user-select: none;
`;

export default Button;
