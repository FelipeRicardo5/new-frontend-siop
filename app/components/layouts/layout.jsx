import Header from './header';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      <Sidebar />
      <main className="ml-64 mt-12 p-6 bg-gray-100 h-[calc(100vh-3rem)] overflow-y-auto bg-[#F4F6F6]">
        {children}
      </main>
    </div>
  );
}
