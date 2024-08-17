import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text && category) { 
      const newTask={
        id: Date.now(),
        text,
        category
      }
    onTaskFormSubmit(newTask);
    setText('');
    setCategory();
    }
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          <option value="">setCategory</option>
          {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;