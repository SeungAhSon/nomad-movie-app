import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


//2019년 강의 기준으로 리액트는 하나의 컴포넌트만 렌더링
//2022년 기준 React.StrictMode로 감싸면 병렬 작성 가능
//StrictMode는 애플리케이션 내의 잠재적 문제 알아내기 위한 도구
//import Potato from "./Potato";
  //<React.StrictMode>
  //  <App /> <Potato />
  //</React.StrictMode>,

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
