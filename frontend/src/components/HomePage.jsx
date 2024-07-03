import React from 'react';
import SideBar from './Side';
import MessageContainer from './MessageContainer';

function HomePage() {
  return (
    <div className='flex sm:h-[500px] md:h-[500px] rounded-lg overflow-hidden bg-blue-100'>
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default HomePage;
