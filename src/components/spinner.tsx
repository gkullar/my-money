import styled, { keyframes } from 'styled-components';

interface Props {
  color?: string;
  size?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<Props>`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};

  &:after {
    content: ' ';
    display: block;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 3px solid ${props => props.color};
    border-color: ${props => props.color} transparent ${props => props.color}
      transparent;
    animation: ${rotate} infinite 1s linear;
  }
`;

Spinner.defaultProps = {
  color: '#fff',
  size: '24px'
};

export default Spinner;
