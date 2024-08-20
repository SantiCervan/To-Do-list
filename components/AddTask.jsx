import { useState } from 'react';

const AddTask = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      handleAddTask({ title: newTask, completed: false });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between w-full bg-white rounded-full py-1 px-1">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Agregar nueva tarea"
        className="add-task-input rounded-l-full pl-2 lg:pl-4 pr-2 py-1 focus:outline-none text-black w-[95%] text-sm lg:text-base"
        required
      />
      <button
        type="submit"
        className={`add-task-button bg-blue-500 text-white rounded-full w-12 lg:w-10 h-10 flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors ${newTask.length === 0 && "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"}`}
      >
        +
      </button>
    </form>
  );
};

export default AddTask;
