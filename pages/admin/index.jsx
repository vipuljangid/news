import doFetch from '@/sources/functions/doFetch';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Sample Article 1',
      shortDescription: 'This is a short description for article 1.',
      description: 'This is a detailed description for article 1.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 2,
      title: 'Sample Article 2',
      shortDescription: 'This is a short description for article 2.',
      description: 'This is a detailed description for article 2.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 3,
      title: 'Sample Article 3',
      shortDescription: 'This is a short description for article 3.',
      description: 'This is a detailed description for article 3.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 4,
      title: 'Sample Article 4',
      shortDescription: 'This is a short description for article 4.',
      description: 'This is a detailed description for article 4.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 5,
      title: 'Sample Article 5',
      shortDescription: 'This is a short description for article 5.',
      description: 'This is a detailed description for article 5.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 6,
      title: 'Sample Article 6',
      shortDescription: 'This is a short description for article 6.',
      description: 'This is a detailed description for article 6.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
    {
      id: 7,
      title: 'Sample Article 7',
      shortDescription: 'This is a short description for article 7.',
      description: 'This is a detailed description for article 7.',
      coverImageUrl: 'https://source.unsplash.com/random/800x600/?news',
    },
  ]);

  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));

  };

  const getArtical=async()=>{
    const resp=await doFetch('localhost:8000/api/admin')
    // setArticles(resp.articals)
  }
    

  useEffect(()=>{
    getArtical();
  },[])

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.coverImageUrl} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.shortDescription}</p>
                <div className="flex justify-between">
                  <Link href={`/admin/edit/${article.id}`} passHref>
                    <button className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Edit</button>
                  </Link>
                  <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => handleDelete(article.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
