import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: black;
`;

class Page extends React.Component {
  static defaultProps = {
    className: '',
  };

  componentDidMount() {
    this._resize();
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width / 9 * 16 > height) {
      this._element.style.width = `${Math.floor(height / 16 * 9)}px`;
      this._element.style.height = `${height}px`;
    } else {
      this._element.style.width = `${width}px`;
      this._element.style.height = `${Math.floor(width / 9 * 16)}px`;
    }
  };

  render() {
    return (
      <Wrapper
        className={this.props.className}
        innerRef={element => { this._element = element; }}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Page;
