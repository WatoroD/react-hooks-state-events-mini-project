import React from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=> (
        <button 
          key={index} 
          className={category === selectedCategory ? 'selected' : ''} 
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;