import styled from 'styled-components'
import logoImg from '../assets/logo.png'
import React, { Component } from 'react'
import {
  MdLogout,
  MdVideocam,
  MdVideocamOff,
  MdCheckCircleOutline,
} from 'react-icons/md'
import timerImg from '../assets/timer.png'
import { HashLoader } from 'react-spinners'
import { connect } from 'react-redux'
import Webcam from 'react-webcam'
import { exitMatching, matchDataGet } from './mode/mode-slice'
import backImg from '../assets/base.PNG'

const Background = styled.div`
  background-image: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fffdde;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  position: absolute;
  top: 1%;
  left: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const Logo = styled.img.attrs({ src: `${logoImg}` })`
  height: 100%;
  margin: 0 2rem;
`

const LeaveBox = styled.div`
  position: relative;
  margin-bottom: 1rem;

  &:hover .leaveTip {
    visibility: visible;
  }
`

const Leave = styled(MdLogout)`
  height: 100%;
  width: 2.3rem;
  margin: 0 2rem;
  color: #333333;
  cursor: pointer;
`

const LeaveText = styled.p`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  font-family: Minseo;
  opacity: 80%;
  position: absolute;
  z-index: 2;
  top: 60%;
  left: 50%;
  margin-left: -1.8rem;
`

const SpinnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
`
const TimerBox = styled.div`
  background-color: #f6a9a9;
  padding: 0.5rem 1rem;
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  margin: 1rem;
`
const Timer = styled.p`
  font-size: 2rem;
  font-family: Minseo;
  font-weight: bold;
  margin: 0 0.5rem;
`

const TimerImg = styled.img.attrs({ src: `${timerImg}` })`
  height: 2rem;
`

const StatusText = styled.p`
  font-size: 1.7rem;
  font-family: Minseo;
  margin: 1rem;
  text-align: center;
`

const ChoiceBtn = styled.button`
  font-size: 1.3rem;
  font-family: Minseo;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  border: none;
  cursor: pointer;

  &.yes {
    background-color: #40c0e7;

    &:hover {
      background-color: #3ab3d8;
      font-weight: bold;
    }
  }

  &.no {
    background-color: #f38ba0;

    &:hover {
      background-color: #ee778f;
      font-weight: bold;
    }
  }
`

const CamGuideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin-bottom: 2rem;

  @media (max-height: 620px) {
    margin: 0;
  }
`

const CamBox = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 426px;
  }

  @media (max-height: 620px) {
    height: 403px;
  }
`

const CamContainer = styled(Webcam)`
  width: 100%;
  height: 100%;
  margin: 0 2rem;
  background-color: none;
  border-radius: 50%;
  border: 1rem solid #b5eaea;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 960px) {
    height: 350px;
    width: 350px;
  }

  @media (max-height: 620px) {
    height: 350px;
    width: 350px;
  }
`

const CamOffContainer = styled.div`
  width: 25rem;
  height: 25rem;
  margin: 0 2rem;
  background-color: #ccf3ee;
  border-radius: 50%;
  border: 1rem solid #b5eaea;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    height: 350px;
    width: 350px;
  }

  @media (max-height: 620px) {
    height: 350px;
    width: 350px;
  }
`

const LogoImg = styled.img.attrs({ src: `${logoImg}` })`
  position: absolute;
  width: 80%;
  margin-bottom: 1.5rem;
`

const GuideBox = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (max-width: 960px) {
    width: 426px;
  }

  @media (max-height: 620px) {
    height: 403px;
  }
`
const GuideContainer = styled.div`
  width: 90%;
  height: 93%;
  margin: 0 2rem 1rem 2rem;
  background-color: #b5eaea;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 960px) {
    width: 300px;
  }

  @media (max-height: 620px) {
    height: 370px;
  }
`
const CheckIcon = styled(MdCheckCircleOutline)`
  text-align: center;
  margin-right: 0.5rem;
  color: green;
`

const GuideHeader = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 2.2rem;
  font-family: Minseo;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px ridge #333333;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }
`

const GuideText = styled.div`
  padding: 0.8rem 2.5rem;
  font-size: 1.6rem;
  font-family: Minseo;
  color: #333333;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    font-size: 1.3rem;
    padding: 0.8rem 2.5rem;
  }

  @media (max-width: 1170px) {
    font-size: 1rem;
    padding: 0.8rem 2.5rem;
  }
`

const CamOn = styled(MdVideocam)`
  font-size: 2.5rem;
  color: #333333;
  margin-top: 1.5rem;
  cursor: pointer;
`

const CamOff = styled(MdVideocamOff)`
  font-size: 2.5rem;
  color: #333333;
  margin-top: 1.5rem;
  cursor: pointer;
`

class Waiting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      uuid: undefined,
      nowmatching: true,

      total: undefined,
      roleCode: undefined,

      // 3분의 시간제한
      timeLimit: 0,
      minute: 0,
      sec: 0,

      videoSet: true,
    }

    this.intervalRef = React.createRef()
    this.cancelMatching = this.cancelMatching.bind(this)
  }

  // routeChange = ()=> {
  //   let path = '/main';
  //   this.props.history.push(path);
  // }

  componentDidMount() {
    const { mode } = this.props
    console.log('mode 출력하기', mode)
    const total = mode.total
    const roleCode = mode.roleCode
    console.log('total, roleCode', total, roleCode)
    this.setState({ total: total, roleCode: roleCode })
    const data = {
      total,
      roleCode,
    }
    console.log(data.total)
    this.matchStart(data)
    this.intervalRef.current = setInterval(() => {
      // timeLimit이 남은 경우, 카운팅
      if (this.state.timeLimit >= 0) {
        this.setState((prevState) => ({
          timeLimit: prevState.timeLimit + 1,
          minute: parseInt((prevState.timeLimit + 1) / 60),
          sec: (prevState.timeLimit + 1) % 60,
        }))
      } else {
        // 스톱워치 종료
        this.stopTimer()
      }
    }, 1000)
  }

  componentWillUnmount() {
    // unmount 될때, 스톱워치 종료
    this.stopTimer()
  }

  // 스톱워치 종료 함수: clearInterval(변수)
  stopTimer = () => {
    clearInterval(this.intervalRef.current)
  }

  resetTimer = () => {
    this.setState({ timeLimit: 0 })
  }

  videoOnOff = () => {
    const val = !this.state.videoSet
    this.setState({ videoSet: val })
  }

  matchStart(data) {
    const { doMatchDataGet } = this.props

    const matchData = {
      total: data.total,
      roleCode: data.roleCode,
    }

    doMatchDataGet(matchData)
      .unwrap()
      .then((res) => {
        if (res.result === 1) {
          this.props.history.push('/meeting')
        } else if (res.result === -1) {
          this.setState({
            uuid: undefined,
            nowmatching: false,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  cancelMatching = () => {
    const { doExitMatching } = this.props
    doExitMatching()
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push('/main')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  rematchStart() {
    this.setState({ nowmatching: true })
    console.log('total, roleCode', this.state.total, this.state.roleCode)
    const { doMatchDataGet } = this.props
    const data = {
      total: this.state.total,
      roleCode: this.state.roleCode,
    }
    doMatchDataGet(data)
      .unwrap()
      .then((res) => {
        if (res.result === 1) {
          this.props.history.push('/meeting')
        } else if (res.result === -1) {
          this.setState({
            uuid: undefined,
            nowmatching: false,
          })
        } 
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Background>
        <Header>
          <Logo />
          <LeaveBox onClick={this.cancelMatching}>
            <Leave />
            <LeaveText className="leaveTip">나가기</LeaveText>
          </LeaveBox>
        </Header>

        {this.state.uuid === undefined ? (
          <>
            <SpinnerBox>
              <TimerBox>
                <TimerImg />
                <Timer>
                  {this.state.minute}:{this.state.sec < 10 ? 0 : null}
                  {this.state.sec}
                </Timer>
              </TimerBox>
              {this.state.nowmatching === true &&
              this.state.uuid === undefined ? (
                <>
                  <HashLoader color="#e5a0a0" />
                  <StatusText>유저를 찾고 있습니다 ...</StatusText>
                </>
              ) : (
                <>
                  <StatusText>
                    현재 매칭 가능한 상대가 없습니다
                    <br />
                    다시 연결하시겠습니까?
                  </StatusText>
                  <div>
                    <ChoiceBtn
                      className="yes"
                      onClick={() => {
                        this.resetTimer()
                        this.rematchStart()
                      }}>O</ChoiceBtn>
                    {' '}/{' '}
                    <ChoiceBtn className="no" onClick={this.cancelMatching}>X</ChoiceBtn>
                  </div>
                </>
              )}
            </SpinnerBox>

            <CamGuideBox>
              <CamBox>
                <CamOffContainer>
                  <LogoImg />
                  {this.state.videoSet ? <CamContainer /> : null}
                </CamOffContainer>
                {this.state.videoSet ? 
                  <CamOn onClick={this.videoOnOff} /> : 
                  <CamOff onClick={this.videoOnOff} />
                }
              </CamBox>
              <GuideBox>
                <GuideContainer>
                  <GuideHeader>혼자야?는 이렇게 즐겨보세요!</GuideHeader>
                  <GuideText>
                    <CheckIcon />
                    아바타로 입장 시 누군가의 아바타가 되어 미팅을 진행해요
                  </GuideText>
                  <GuideText>
                    <CheckIcon />
                    지시자는 모습을 감추고 채팅으로 아바타와 소통할 수 있어요
                  </GuideText>
                  <GuideText>
                    <CheckIcon />
                    시간이 끝나면 지시자가 있는 참가자인지 투표해보세요
                  </GuideText>
                  <GuideText>
                    <CheckIcon />
                    상대의 정체를 맞히면 +100 루팡!
                  </GuideText>
                  <GuideText>
                    <CheckIcon />
                    상대를 잘 속이면 +50 루팡!
                  </GuideText>
                  <GuideText>
                    <CheckIcon />
                    마음에 드는 상대에게 1:1 채팅을 요청해보세요
                  </GuideText>
                </GuideContainer>
              </GuideBox>
            </CamGuideBox>
          </>
        ) : null}
      </Background>
    )
  }
}

const mapStateToProps = (state) => ({
  mode: state.mode,
})

const mapDispatchToProps = (dispatch) => {
  return {
    doMatchDataGet: (type) => dispatch(matchDataGet(type)),
    doExitMatching: () => dispatch(exitMatching()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
