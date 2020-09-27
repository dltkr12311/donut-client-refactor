import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TechBox from './TechBox';

const Block = styled.div`
  width: 300px;
  @media screen and (max-width: 950px) {
    width: 100%;
    margin-top: 1rem;
  }
  #profile-box {
    @media screen and (max-width: 950px) {
      margin: 0;
    }
    border-radius: 8px;
    margin: 0 10px;
    padding: 20px;
    background: #ff8c94;
    top: 3rem;
    position: -webkit-sticky;
    position: sticky;
    border: 2px solid rgba(0, 0, 0, 0.4);
  }
  .profile-title {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }
  #item-box {
    background: ${palette.activity};
    padding: 0.8rem;
    border-radius: 8px;
    box-shadow: 0px 2px 4px black;
  }
  .item:not(:last-child) {
    margin-bottom: 1rem;
  }
  .item-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  .line {
    height: 2px;
    background: rgba(0, 0, 0, 0.3);
    margin: 0 10px 20px 10px;
  }
`;
const Profile = () => {
  return (
    <Block>
      <div id="profile-box">
        <div className="profile-title">
          <img
            src="https://i.ibb.co/TR5KgmM/donut-logo.png"
            width="40px"
            alt="donut-logo"
          />
          작성자 정보
        </div>
        <div id="item-box">
          <div className="item">
            <span className="item-title">닉네임</span>
            <span>DB:username</span>
          </div>
          <div className="item">
            <span className="item-title">위치</span>
            <span>DB:address</span>
          </div>
          <div className="line" />
          <div className="item">
            <div style={{ marginBottom: '1rem' }} className="item-title">
              관심 기술
            </div>
            <TechBox color="#f38181">Git</TechBox>
            <TechBox color="#f38181">JavaScript</TechBox>
            <TechBox color="#f38181">Git</TechBox>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Profile;
