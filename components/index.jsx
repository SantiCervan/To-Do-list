import FilterTasks from './FilterTask';
import TaskList from './TaskList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import AddTask from './AddTask';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setTasks(response.data.slice(0, 20));
        setFilteredTasks(response.data.slice(0, 20));
      } catch (error) {
        alert('Oh no! tuvimos un error cargando tus tareas 😢', error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const filterTasks = () => {
      if (filter === 'all') {
        setFilteredTasks(tasks);
      } else if (filter === 'completed') {
        setFilteredTasks(tasks.filter((task) => task.completed));
      } else if (filter === 'pending') {
        setFilteredTasks(tasks.filter((task) => !task.completed));
      }
    };

    filterTasks();
  }, [tasks, filter]);

  const handleAddTask = async (newTask) => {
    try {
      const taskWithId = { ...newTask, id: Date.now() };
      setTasks((prevTasks) => [taskWithId, ...prevTasks]);
    } catch (error) {
      alert('Oh no! tuvimos un error agregando esa tarea 😢', error);
    }
  };

  const handleToggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      alert('Oh no! tuvimos un error eliminando esa tarea 😢', error);
    }
  };

  return (
    <div className='bg-[#141414] flex flex-col items-center w-full'>
      <Navbar handleAddTask={handleAddTask} />
      <FilterTasks filter={filter} setFilter={setFilter} />
      <div className="w-full max-w-3xl">
        <TaskList
          tasks={filteredTasks}
          handleToggleTaskCompletion={handleToggleTaskCompletion}
          handleDeleteTask={handleDeleteTask}
          filter={filter}
        />
      </div>
      <div className='fixed bottom-0 sm:hidden py-2 px-2 w-full'>
        <AddTask handleAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default Index;
