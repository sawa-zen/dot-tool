import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import EscapeGameBridge from './EscapeGameBridge';
import PrimaryButton from '../../components/PrimaryButton';
import { setCurrentPage } from '../../router/routerAction';
import { setHighScore } from './gamePageAction';

const GameOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const GameOverTitle = styled.h1`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  text-align: center;
  font-size: 48px;
`;

const TopButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 130px;
  margin: auto;
  width: 200px;
`;

const RetryButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

const GameBridge = styled(EscapeGameBridge)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

class GamePage extends React.Component {
  state = {
    status: 'playing',
  };

  render() {
    return (
      <Page>
        <GameBridge
          status={this.state.status}
          onDestroyed={this._onDestroyed}
        />
        {
          this.state.status === 'gameover' && (
            <GameOver>
              <GameOverTitle>
                GAME OVER
              </GameOverTitle>
              <TopButton
                label="TOP"
                onClick={this.props.onClickTop}
              />
              <RetryButton
                label="RETRY"
                onClick={this._onClickRetry}
              />
            </GameOver>
          )
        }
      </Page>
    );
  }

  _onClickRetry = () => {
    this.setState({
      status: 'playing',
    });
  };

  _onDestroyed = (score) => {
    this.props.onDestroyed(score);
    this.setState({
      status: 'gameover',
    });
  };
}

const mapDispatchToProps = (dispatch) => ({
  onClickTop: () => {
    dispatch(setCurrentPage('top'));
  },
  onDestroyed: (score) => {
    dispatch(setHighScore(score));
  },
});

export default connect(null, mapDispatchToProps)(GamePage);
