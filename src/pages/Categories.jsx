import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Categories = () => {
  // State to store the categories
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch all categories
  const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        // Sort categories alphabetically by category name
        const sortedCategories = data.categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
        setCategories(sortedCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
  };

  // Function to load categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  //return displays the categories on a listed item on the page along with their descriptions
  return (
    <div className="categories">
      
      {loading ? (
        <p>Loading...</p>
      ) : categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category.idCategory}>
              <h2>{category.strCategory}</h2>
              <p>{category.strCategoryDescription}</p>
             </li>
          ))}
        </ul>
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default Categories;