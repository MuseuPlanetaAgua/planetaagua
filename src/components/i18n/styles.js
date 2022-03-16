import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2px;
  button {
    padding: 2px 10px;
    background: none;
    border: 1px solid white;
    font-weight: 600;
    font-family: 'DIN-Bold';
    text-align: center;
    color: ${(props) =>
      props.propMenuColor === 1 ? 'white' : 'var(--SecondaryColor)'};

    &:hover {
      background: white;
      color: var(--SecondaryColor);
    }
  }
`;
