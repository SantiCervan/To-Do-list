import Link from 'next/link';
import AddTask from './AddTask';
import { useRouter } from 'next/router';

const Navbar = ({ handleAddTask }) => {
  const router = useRouter()
  return (
    <div className={`px-3 flex justify-between bg-sky-900 w-full sm:px-20 py-3 ${router.pathname === '/about' && 'shadow-2xl shadow-blue-900'}`}>
      <div className={`${router.pathname === '/' ? 'md:w-1/3' : 'md:w-1/2'} flex justify-start items-center`}>
        <Link href="/">
          <button>
            <h1 className="text-2xl font-bold hover:text-blue-300 transition-colors">To-Do List ©</h1>
          </button>
        </Link>
      </div>
      {router.pathname === '/' &&
        <div className='hidden md:flex w-1/3' data-cy="div-add-task">
          <AddTask handleAddTask={handleAddTask} />
        </div>
      }
      <div className={`${router.pathname === '/' ? 'sm:w-1/3' : 'sm:w-1/2'} flex justify-end items-center h-12`}>
        <Link href="/about">
          <button className="px-4 py-2 rounded-full h-10 hover:text-blue-400">
            Sobre To-do List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;