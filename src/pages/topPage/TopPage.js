import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class TopScene extends React.Component {
  _onChange = (event) => {
    var file = event.target.files[0];
    var image = new Image();
    var reader = new FileReader();

    reader.onload = (evt) => {
      image.onload = () => {
        this._canvas.width = image.width;
        this._canvas.height = image.height;
        var ctx = this._canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
      }
      image.src = evt.target.result;
    }
    reader.readAsDataURL(file);
  }

  state = {
    value: '',
  }

  _onClickButton = () => {
    const ctx = this._canvas.getContext("2d");
    const w = this._canvas.clientWidth;
    const h = this._canvas.clientHeight;
    const dotList = [];

    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        const imageData = ctx.getImageData(x, y, 1, 1);
        const colorData = imageData.data;

        if (colorData[3] === 0) {
          continue;
        }

        dotList.push([
          x, y,
          colorData[0],
          colorData[1],
          colorData[2],
          colorData[3]
        ]);
      }
    }
    console.info(dotList.length);

    const value = JSON.stringify(dotList);
    this.setState({ value });

    function download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    download(value, 'json.txt', 'text/plain');
  }

  render() {
    return (
      <Wrapper>
        <input type="file" onChange={this._onChange} accept="image/png"/>
        <canvas id="myCanvas" ref={element => this._canvas = element} />
        <button onClick={this._onClickButton}>ボタン</button>
        <div>
          {this.state.value}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
`;

export default TopScene;
