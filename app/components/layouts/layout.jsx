import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { Outlet } from 'react-router';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Estado que controla se a sidebar está aberta ou fechada

  return (
    <>
      <Header />
      <Sidebar setSidebarOpen={setSidebarOpen} />
      <main className={`transition-all ml-${sidebarOpen ? '64' : '16'} mt-12 p-6 h-[calc(100vh-3rem)] bg-[#F4F6F6] overflow-y-auto relative z-0`}>
        <Outlet />
      </main>
    </>
  );
}
