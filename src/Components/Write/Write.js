import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WriteActionButtonContainer from '../../Containers/Write/WriteActionButtonContainer';
import palette from '../../lib/styles/palette';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';

const Form = styled.form``;

const Content = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.4);
  min-height: 80vh;
  padding: 20px;
  border-radius: 8px;
  background: ${palette.activity};
  .header {
    margin-bottom: 0.5rem;
  }
  .item {
    background: ${palette.activityItem};
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .item-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .author {
    font-size: 1.4rem;
  }
  .input-title {
    font-size: 2.5rem;
  }
  #select-box {
    margin-left: 1.2rem;
    width: 170px;
    font-size: 1.5rem;
    background: ${palette.activityItem};
    font-family: 'RIDIBatang', sans-serif;
  }
  .common {
    font-family: 'RIDIBatang', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 5% 0;
    background: ${palette.activityItem};
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
    outline: none;
    padding-left: 0.5rem;
    &:focus {
      color: #333;
      border-bottom: 3px solid #6c5b7b;
    }
  }
  .area {
    resize: none;
  }
  #check-block {
    font-size: 1.2rem;
    input {
      margin-left: 1rem;
    }
  }
  #skills-wrapper {
    margin-top: 2rem;
    span {
      margin-right: 1rem;
      background: #f38181;
      padding: 5px 10px;
      border-radius: 8px;
    }
  }
`;

const Write = ({ onChangeField, name, intro, skills, participation_cretira, rule }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const onChangeName = (e) => {
    onChangeField({ key: 'name', value: e.target.value });
  };
  const onChangeIntro = (e) => {
    onChangeField({ key: 'intro', value: e.target.value });
  };
  const onChangeCriteria = (e) => {
    if (e.target.value !== 'direct') {
      setIsVisible(false);
      const selectedText = document.getElementById(e.target.value).textContent;
      onChangeField({ key: 'participation_cretira', value: selectedText });
    } else {
      setIsVisible(true);
    }
  };
  const onChangeCriteriaInput = (e) => {
    onChangeField({ key: 'participation_cretira', value: e.target.value });
  };
  const onSelectedSkills = ({ target }) => {
    if (target.checked) {
      setSelectedSkills(selectedSkills.concat(target.value));
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== target.value));
    }
  };
  const onChangeRule = (e) => {
    onChangeField({ key: 'rule', value: e.target.value });
  };

  useEffect(() => {
    onChangeField({ key: 'skills', value: selectedSkills });
  }, [onChangeField, selectedSkills]);

  return (
    <ResponsiveWrapper>
      <Form>
        <Content>
          <div className="header">
            <input
              className="common input-title"
              placeholder="활동 제목을 입력해주세요."
              onChange={onChangeName}
              value={name}
            />
          </div>
          <div className="item">
            <div className="item-title">활동 소개</div>
            <textarea className="common area" onChange={onChangeIntro} value={intro} />
          </div>
          <div className="item">
            <div className="item-title">기술 스택</div>
            <div id="check-block">
              <input value="Java" type="checkbox" onClick={onSelectedSkills} />
              Java
              <input value="JavaScript" type="checkbox" onClick={onSelectedSkills} />
              JavaScript
              <input value="React" type="checkbox" onClick={onSelectedSkills} />
              React
              <input value="Python" type="checkbox" onClick={onSelectedSkills} />
              Python
              <input value="C++" type="checkbox" onClick={onSelectedSkills} />
              C++
              <input value="Ruby" type="checkbox" onClick={onSelectedSkills} />
              Ruby
              <div id="skills-wrapper">
                {selectedSkills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">참여 조건</div>
            <select
              defaultValue={participation_cretira}
              name="criteria"
              id="select-box"
              onChange={onChangeCriteria}
            >
              <option id="lv0" value="lv0">
                === 선택 ===
              </option>
              <option id="lv1" value="lv1">
                비전공자
              </option>
              <option id="lv2" value="lv2">
                경력 1년 미만
              </option>
              <option id="lv3" value="lv3">
                경력 1년 이상
              </option>
              <option id="lv4" value="lv4">
                경력 3년 이상
              </option>
              <option id="direct" value="direct">
                직접입력
              </option>
            </select>
            {isVisible && (
              <input
                className="common"
                placeholder="참여 조건을 작성해주세요."
                value={participation_cretira}
                onChange={onChangeCriteriaInput}
              />
            )}
          </div>
          <div className="item">
            <div className="item-title">규칙</div>
            <input
              className="common"
              placeholder="적용하실 규칙을 작성해주세요."
              value={rule}
              onChange={onChangeRule}
            />
          </div>
        </Content>
        <WriteActionButtonContainer />
      </Form>
    </ResponsiveWrapper>
  );
};

export default Write;
