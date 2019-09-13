import styled from 'styled-components';

const Button = styled.button`
  background: #1e7889;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #28a2b9;
  padding: 5px 10px;
  transition: background 0.3s linear;

  &:hover {
    cursor: pointer;
    background: #28a2b9;
  }
`;

export default Button;
