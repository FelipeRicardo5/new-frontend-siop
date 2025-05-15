import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { Outlet } from 'react-router';
import { ThemeProvider } from '../../providers/themeContext';
import { useTheme } from '../../providers/themeContext';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header />
      <Sidebar setSidebarOpen={setSidebarOpen} />
      <main className={`transition-all ml-${sidebarOpen ? '64' : '16'} flex justify-center mt-12 p-6 h-[calc(100vh-3rem)] ${theme === 'dark' ? 'bg-[#363636] text-white' : 'bg-[#F4F6F6]'}  overflow-y-auto overflow-x-hidden relative z-0`}>
        <Outlet />
      </main>
    </>
  );
}
