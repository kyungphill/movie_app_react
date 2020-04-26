import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
	{
		id: 1,
		name: "김밥",
		rating: 4
	},
	{
		id: 2,
		name: "삼겹살",
		rating: 3
	},
	{
		id: 3,
		name: "냉면",
		rating: 5
	}
];

function Food({ name, rating }) {
	return (
		<div>
			<h2> I like { name }</h2>
			<h4>{rating}/5.0</h4>
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
		  <h1>Hello!</h1>
		  {foodILike.map(dish => 
			<Food  key = {dish.id} name = {dish.name} rating = {dish.rating}
		  />)}
	</div>
  );
}

export default App;
