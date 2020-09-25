import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import Modal from '../Modal/Modal';

const Content = styled.div`
  padding: 3rem 4rem;
  background: #f4f2ed;
  border-radius: 9px;
  flex-grow: 2;

  h2 {
    font-size: 1.3rem;
    margin-right: 2rem;
  }
  span {
    margin-right: 2rem;
  }
`;

const StyledButton = styled(Button)`
  width: 10%;
  min-width: 80px;
  background: #838383;
  box-shadow: 0px 2px 4px black;

  &:hover {
    background: #cbaf87;
  }
`;

const Item = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px black;
  margin-bottom: ${(props) => (props.last ? 0 : '2rem')};
  .dbvalue {
    display: flex;
    align-items: center;
  }
  h2 {
    font-weight: bold;
  }
  p {
  }
`;

const MyProfile = () => {
  const [nameModal, setNameModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);

  const onCancel = () => {
    setNameModal(false);
    setPasswordModal(false);
    setLeaveModal(false);
  };
  const onConfirm = () => {
    setNameModal(false);
    setPasswordModal(false);
    setLeaveModal(false);
  };
  return (
    <Content>
      <Item>
        <div className="dbvalue">
          <h2>유저명</h2>
          <p>DB: 유저명</p>
        </div>
        <StyledButton onClick={() => setNameModal(true)}>변경</StyledButton>
        <Modal
          visible={nameModal}
          usernameChanger
          title="🔧 유저명 변경"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </Item>
      <Item>
        <div className="dbvalue">
          <h2>E-mail</h2>
          <p>DB:email</p>
        </div>
      </Item>
      <Item>
        <h2>패스워드</h2>
        <StyledButton onClick={() => setPasswordModal(true)}>변경</StyledButton>
        <Modal
          visible={passwordModal}
          passwordChanger
          title="🔧 패스워드 변경"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </Item>
      <Item last>
        <h2>회원탈퇴</h2>
        <StyledButton onClick={() => setLeaveModal(true)}>탈퇴</StyledButton>
        <Modal
          visible={leaveModal}
          title="👨‍🔧 회원탈퇴"
          description="탈퇴한 계정은 복구가 불가능합니다. 그래도 정말 탈퇴하시겠습니까?"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </Item>
    </Content>
  );
};

export default MyProfile;
