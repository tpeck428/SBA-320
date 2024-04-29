import React, { useState, useEffect } from 'react';

const RandomMeal = () => {
  // State to store the current meal
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch a random meal
  const fetchMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]); // taking the first meal in an array of displayed meal data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching meal:', error);
      setLoading(false);
    }
  };

  // Function to load a new meal when the component mounts
  useEffect(() => {
    fetchMeal();
  }, []);

  // Function to handle loading a new meal
  const handleLoadMeal = () => {
    setLoading(true);
    fetchMeal();
  };

  return (
    <div className="random-meal">
      {loading ? (
        <p>Loading...</p>
      ) : meal ? (
        <>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>Ingredients</h2>
          <ul>
            {Object.keys(meal)
              .filter(key => key.includes('Ingredient') && meal[key])
              .map(key => (
                <li key={key}>{meal[key]} - {meal[`strMeasure${key.split('Ingredient')[1]}`]}</li>
              ))}
          </ul>
          <p>{meal.strInstructions}</p>

        </>
      ) : (
        <p>No meal found</p>
      )}
      <button className='btn' onClick={handleLoadMeal}>Try a Different Meal</button>
    </div>
  );
};

export default RandomMeal;
