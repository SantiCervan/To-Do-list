import Image from 'next/image';

const TaskList = ({ tasks, handleToggleTaskCompletion, handleDeleteTask, filter }) => {
  return (
    <div data-cy="task-list" className='max-h-[75vh] sm:max-h-[84vh] overflow-y-scroll flex flex-col transition-all bg-neutral-800 py-4 px-3 sm:px-8 rounded-md'>
      {tasks.length > 0 ?
        tasks.map((task) => (
          <div data-cy="task-item" key={task.id} className={`${task.completed ? 'completed' : ''} flex items-center py-3 border-b border-neutral-700`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTaskCompletion(task.id)}
              className="mr-4 cursor-pointer"
              data-cy="task-checkbox"
            />
            <div data-cy="task-item-div-span" className='w-[80%] sm:w-[90%]'>
              <span data-cy="task-item-span" className={`transition-colors ${task.completed && 'line-through text-neutral-500'}`}>{task.title}</span>
            </div>
            <button
              className="delete-task text-white rounded-md w-8 h-8 flex items-center justify-center text-2xl hover:bg-red-900 transition-colors"
              onClick={() => handleDeleteTask(task.id)}
              data-cy="delete-task"
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
  );
};

export default TaskList;
