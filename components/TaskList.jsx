import Image from 'next/image';

const TaskList = ({ tasks, handleToggleTaskCompletion, handleDeleteTask, filter }) => {
  return (
    <div className="task-list">
      <div className='max-h-[75vh] sm:max-h-[84vh] overflow-y-scroll flex flex-col transition-all bg-neutral-800 py-4 px-3 sm:px-8 rounded-md'>

        {tasks.length > 0 ?
          tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''} flex items-center py-3 border-b border-neutral-700`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTaskCompletion(task.id)}
                className="mr-4 cursor-pointer"
              />
              <div className='w-[80%] sm:w-[90%]'>
                <span className={`transition-colors ${task.completed && 'line-through text-neutral-500'}`}>{task.title}</span>
              </div>
              <button
                className="delete-task text-white rounded-md w-8 h-8 flex items-center justify-center text-2xl hover:bg-red-900 transition-colors"
                onClick={() => handleDeleteTask(task.id)}
              >
                <Image src='/icons/basura.svg' alt='eliminar' width={24} height={24} />
              </button>
            </div>
          ))
          :
          <div className='h-[84vh] flex flex-col justify-center items-center'>
            {filter === 'completed' ?
              <div className='py-3'>
                <p className="text-white text-center text-lg font-semibold">Aún no marcaste ninguna tarea como completada...</p>
                <p className="text-white text-sm text-center">¡Marca algunas tareas como listas para ver tu progreso!</p>
              </div>
              :
              <div className='py-3'>
                <p className="text-white text-center text-lg font-semibold">No hay tareas pendientes por ahora</p>
                <p className="text-white text-sm text-center">¡Pero puedes comenzar a agregarlas en cualquier momento!</p>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default TaskList;
