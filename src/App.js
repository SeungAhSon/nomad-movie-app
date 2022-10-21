import React from 'react';
//import PropTypes from 'prop-types';

// Function component는 return
// Class component는 react component로부터 확장되고 render를 통해 스크린에 표시

// setstate를 호출할 떄마다 react는 새로운 state와 render function을 호출한다

// class이니 this.state.count, 하지만 current.count를 사용하는게 더 좋음
// 왜냐면 setstate는 비동기로 처리되므로, 여러번 호출하거나 다른 곳에서 동시에 변경되는 경우 처리 순서가 바뀌어 오류가 생길 수 있음 ?
// current.count 할 떄 괄호 기억하기!!! {}할 떄 return 인지 객채인지 구분하기 위해서 ({})


class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count : current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
