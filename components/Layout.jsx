// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// export default function Layout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-0 z-30 transition-transform transform lg:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 bg-primary text-white lg:relative lg:flex-shrink-0`}>
        <div className="flex items-center justify-between p-4 lg:justify-center">
          <span className="text-2xl font-semibold">Admin Panel</span>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/admin">
            <div className="p-2 transition-colors duration-200 rounded hover:bg-secondary">Dashboard</div>
          </Link>
          <Link href="/admin/create">
            <div className="p-2 transition-colors duration-200 rounded hover:bg-secondary">Create New Article</div>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <h1 className="text-xl">Admin Panel</h1>
        </div>
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
