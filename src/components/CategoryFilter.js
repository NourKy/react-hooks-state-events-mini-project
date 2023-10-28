import React,{useState} from "react";

function CategoryFilter({categories,setTasksCategories}) {
  const[selectedCategory,setSelectedCategory]=useState();
  function handleCategoryClick(category)
  {
    setSelectedCategory(category);
    console.log(category);
    setTasksCategories(category);


  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>
      <button key={category}
       className={selectedCategory===category?"selected":""}
       onClick={() => handleCategoryClick(category)}>{category}</button>)}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
