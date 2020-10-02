import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../Common/Button';

const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30%;
  min-width: 500px;
  background: #f9f7f7;
  border-radius: 10px;
`;
const LocateForm = ({ history }) => {
  const onClick = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      console.log('위치에러');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const result = `${latitude},${longitude}`;
        localStorage.setItem('latlon', result);
        document.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        console.log(` 경도: ${latitude} 위도: ${longitude}`);
        history.push('/');
      });
    }
  };
  return (
    <Block>
      <Box>
        <Button fullWidth onClick={onClick}>
          현재 위치로 찾기
        </Button>
      </Box>
    </Block>
  );
};

export default withRouter(LocateForm);
