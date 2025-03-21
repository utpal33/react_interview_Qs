
import React from 'react'
import "./styles.css"

interface props{
    todo:string; 
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e:React.FormEvent) => void;
}

const InputField:React.FC<props> = ({ todo, setTodo, handleAddTodo }) => {
   

  return (
    <form className='input' onSubmit={handleAddTodo}>
        <input type="text" className='input_box' placeholder='Enter Your Task'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit" className='input_submit'>  Go </button>
    </form>
  )
}

export default InputField;