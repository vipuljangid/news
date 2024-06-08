import Layout from '../../components/Layout';
import ArticleForm from '../../components/ArticleForm';
import { useState } from 'react';

export default function CreateArticle() {
  const [articles, setArticles] = useState([]);

  const handleSubmit =async (formData) => {
    const newArticle = {
      id: Date.now(),
      ...formData,
    };
    setArticles([...articles, newArticle]);
      const resp=await doFetch('localhost:8000/api/admin',POST,{formData})
      console.log(resp)
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">Create New Article</h1>
        <ArticleForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}
