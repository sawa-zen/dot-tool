import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPage } from '../../router/routerAction';
import Page from '../../components/Page';
import PrimaryButton from '../../components/PrimaryButton';

const Title = styled.h1`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  text-align: center;
  font-size: 48px;
`;

const HighScore = styled.div`
  position: absolute;
  top: 220px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: 20px;
  color: white;
`;

const StartButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

const MadeBy = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  color: white;
  text-align: center;
  font-size: 0.8rem;

  a {
    color: #44ACEB;
  }
`;

const TopScene = pure((props) => {
  const sec = ('000' + Math.floor(props.highScore / 60)).slice(-3);
  const msec = ('00' + props.highScore % 60).slice(-2);
  const time = `${sec}.${msec}`;

  return (
    <Page>
      <Title>METEOR<br/>ESCAPE</Title>
      <HighScore>HIGH SCORE：{time}</HighScore>
      <StartButton
        label="START"
        onClick={props.onClickStart}
      />
      <MadeBy>
        made by <a href="https://twitter.com/sawada_tkys?lang=ja" target="_blank">@sawa-zen</a>
      </MadeBy>
    </Page>
  );
});

const mapStateToProps = (state) => ({
  highScore: state.gamePage.highScore,
});

const mapDispatchToProps = (dispatch) => ({
  onClickStart: () => {
    dispatch(setCurrentPage('game'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopScene);
