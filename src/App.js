import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";

//import PropTypes from 'prop-types';

// Function component는 return
// Class component는 react component로부터 확장되고 render를 통해 스크린에 표시

// setstate를 호출할 떄마다 react는 새로운 state와 render function을 호출한다

// class이니 this.state.count, 하지만 current.count를 사용하는게 더 좋음
// 왜냐면 setstate는 비동기로 처리되므로, 여러번 호출하거나 다른 곳에서 동시에 변경되는 경우 처리 순서가 바뀌어 오류가 생길 수 있음 ?
// current.count 할 떄 괄호 기억하기!!! {}할 떄 return 인지 객채인지 구분하기 위해서 ({})

// #11.3 처음에 render를 하면 호출되는 life cycle method = componentDidMount

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false})
  };

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
