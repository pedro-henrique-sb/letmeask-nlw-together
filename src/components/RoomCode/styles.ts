import styled from 'styled-components';

export const RoomCodeStyled = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.secondary};
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  .alternative-text {
    display: none;
  }

`;
