import React from 'react';
import PropTypes from 'prop-types';

//img elements must have an alt prop, either with meaningful text, or an empty string 오류
//img 요소에는 alt가 무조건 있어야 한다
//npm restart 하면 해결됨?

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>temp {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} style={{ width: "200px" }} alt={name} />
    </div>
  );
}

//string, number, array, bool, func, symbol, object 등등.. 가능
//propTypes의 명칭은 바뀌지않음
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2012/02/07/bibimbop-ck-x.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  },
];


function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
export default App;
