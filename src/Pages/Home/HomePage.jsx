import { Suspense, use } from 'react';
import Hero from './Hero';
import Friends from './Friends/Friends';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const Spiner=()=>{
  const friends=use(friendsPromise);
  return <Friends friends={friends}/>
}

const HomePage = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Hero />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Spiner/>
      </Suspense>

    </div>
  );
};

export default HomePage;
