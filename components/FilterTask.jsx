const FilterTasks = ({ filter, setFilter }) => {
  return (
    <div className="px-3 py-2 w-full flex justify-center bg-sky-950 shadow-2xl shadow-blue-900 mb-4">
      <div className="w-full max-w-2xl flex justify-between">
        <span className="mr-2 hidden sm:flex">Filtrar:</span>
        <button
          className={`transition-colors mr-2 ${filter === 'all' ? 'text-blue-400' : 'hover:text-neutral-400'}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button
          className={`transition-colors mr-2 ${filter === 'completed' ? 'text-blue-400' : 'hover:text-neutral-400'}`}
          onClick={() => setFilter('completed')}
        >
          Completadas
        </button>
        <button
          className={`transition-colors mr-2 ${filter === 'pending' ? 'text-blue-400' : 'hover:text-neutral-400'}`}
          onClick={() => setFilter('pending')}
        >
          Pendientes
        </button>
      </div>
    </div>
  );
};

export default FilterTasks;