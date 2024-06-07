import Layout from '../../../components/Layout';
import ArticleForm from '../../../components/ArticleForm';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function EditArticle() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      // Simulating fetching article by ID
      const fetchedArticle = {
        id,
        title: 'Sample Article',
        shortDescription: 'This is a short description.',
        description: 'This is a detailed description.',
      };
      setArticle(fetchedArticle);
    }
  }, [id]);

  const handleSubmit = (formData) => {
    // Simulating updating article data
    setArticle({ ...article, ...formData });
    router.push('/admin');
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">Edit Article</h1>
        <ArticleForm initialData={article} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}
