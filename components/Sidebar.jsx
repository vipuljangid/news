import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-secondary h-screen p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin">
              <div className="block p-2 text-white rounded hover:bg-primary">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/admin/create">
              <div className="block p-2 text-white rounded hover:bg-primary">Create Article</div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
