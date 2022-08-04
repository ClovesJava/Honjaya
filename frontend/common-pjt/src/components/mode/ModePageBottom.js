import React, {useState} from 'react'
import styled from 'styled-components'
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdCheckBoxOutlineBlank,
  MdCheckBox
} from 'react-icons/md'
import {Link} from 'react-router-dom' 

const BottomBox = styled.div`
  /* position: relative; */
  /* outline: 0.2rem solid #333333; */
  width: 90%;
  height: 50%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 3px solid; */
`
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  width: 50vw;
  /* outline: 2px solid; */
`

const PersonnelBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 0.2rem solid #333333;
  border-radius: 2rem;
  height: 70%;
  width: 50%;
  /* @media (max-width: 1650px ) { 
    width: 30rem;
    
  } */
`

const Title = styled.div`
  position: absolute;
  font-family: "Jua";
  font-size: 2rem;
  color: #333333;
  top: -1rem;
  z-index: 1;
  padding: 0 1rem;
  background-color: #fffdde;
`

const PersonnelRadio = styled.input`
  cursor: pointer;
  visibility: hidden;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10rem;
  font-size: 1.5rem;
  margin: 0 1rem;
  font-family: "Jua";
  cursor: pointer;
  /* outline: 2px solid; */
`

const RadioIconOff = styled(MdRadioButtonUnchecked)`
  width: 3rem;
  height: 3rem;
`

const RadioIconOn = styled(MdRadioButtonChecked)`
  width: 3rem;
  height: 3rem;
  color: #00C3A9;
`
const CheckIconOff = styled(MdCheckBoxOutlineBlank)`
  width: 2.5rem;
  height: 2.5rem;
`
const CheckIconOn = styled(MdCheckBox)`
  width: 2.5rem;
  height: 2.5rem;
  color: #FFC9D0;
`

const StartDiv = styled.div`
  display: flex;
  align-items: center;
  /* width: 3rem; */
  /* height: 5rem; */
  /* outline: 2px solid; */
`

const Start = styled.button`
  display: flex;
  border: none;
  border-radius: 0.2rem;
  color: white;
  font-family: Jua;
  font-size: 3rem;
  padding: 0.5rem 2rem;
  /* margin: 1rem 0; */
  background: #ff728e;

  cursor: pointer;


  // 모드 하나라도 선택 안했을 시 시작하기 버튼 disabled
  &:disabled {
    background: #8a3849;
    color: #c2c2c2;
    cursor: not-allowed;
  }
`


const ModePageBottom = () => {

  // 인원 선택 (라디오 버튼)
  const [personnel, setPersonnel] = useState('1:1')
  
  // 성별 선택 (체크 박스)
  const [oppGen, setOppGen] = useState(false)

  const handleClickRadioButton = (e) => {
    setPersonnel(e.target.value);
  }
  const handleClickCheckBox = (e) => {
    setOppGen(!oppGen)
  }

  console.log(personnel)
  console.log(oppGen)

  return(
    <BottomBox>
      <LeftBox>
        <PersonnelBox>
          <Title>인원선택</Title>

          <Label>
            {personnel === "1:1" ? ( 
              <RadioIconOn></RadioIconOn>
            ) : (
              <RadioIconOff></RadioIconOff>
            )} 1:1
            <PersonnelRadio 
              type="radio"
              value="1:1"
              checked={personnel === "1:1"}
              onChange={handleClickRadioButton}/>
          </Label>

          <Label>
            {personnel === "4" ? ( 
              <RadioIconOn></RadioIconOn>
            ) : (
              <RadioIconOff></RadioIconOff>
            )} 4인
            <PersonnelRadio 
              type="radio"
              value="4"
              checked={personnel === "4"}
              onChange={handleClickRadioButton}/>
          </Label>
 
        </PersonnelBox>

        <Label
          onClick={handleClickCheckBox}>
          {oppGen === true ? (
            <CheckIconOn></CheckIconOn>
          ) : (
            <CheckIconOff></CheckIconOff>
          )} 이성만
        </Label>
        
      </LeftBox>
      
      {/* 모드 하나라도 선택 안했을 시 [시작하기 버튼 비활성화 기능] 추가 필요 */}
      <StartDiv>
        <Link to="/waiting" style={{ textDecoration: 'none' }}>
          <Start>
            시작하기
          </Start>
        </Link>
      </StartDiv>
    </BottomBox>
  )
}

export default ModePageBottom