import React, { useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import bgImg from "../../images/bg-agriculture.jpg"

function AgriculturePlatform() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main className="grow" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-gray-800 opacity-50'> </div>
              <div className="relative px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto text-gray-50">  Agriculture Platform </div>

            </main>
        </div>
     </div>
  );
}

export default AgriculturePlatform;