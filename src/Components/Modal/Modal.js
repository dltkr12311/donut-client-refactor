import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import PasswordChanger from './PasswordChanger';
import UsernameChanger from './UsernameChanger';

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Block = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-left: 0.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.3rem;
  }
  .changer {
    display: flex;
    justify-content: center;
  }
  .buttons {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;
const Modal = ({
  visible,
  usernameChanger,
  passwordChanger,
  title,
  description,
  cancelText = '취소',
  confirmText = '확인',
  onConfirm,
  onCancel,
}) => {
  return visible ? (
    <FullScreen>
      <Block>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="changer">
          {usernameChanger && <UsernameChanger />}
          {passwordChanger && <PasswordChanger />}
        </div>
        <div className="buttons">
          <Button onClick={onCancel} style={{ marginRight: '1rem' }}>
            {cancelText}
          </Button>
          {!usernameChanger && !passwordChanger && (
            <Button onClick={onConfirm}>{confirmText}</Button>
          )}
        </div>
      </Block>
    </FullScreen>
  ) : null;
};

export default Modal;
