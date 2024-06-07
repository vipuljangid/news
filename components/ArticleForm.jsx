import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ArticleForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [shortDescription, setShortDescription] = useState(initialData.shortDescription || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImage, setAdditionalImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      shortDescription,
      description,
      coverImage,
      additionalImage,
      pdf,
    };

    onSubmit(formData);
    router.push('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Short Description</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Cover Image</label>
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          onChange={(e) => setCoverImage(e.target.files[0])}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Additional Image (Optional)</label>
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          onChange={(e) => setAdditionalImage(e.target.files[0])}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">PDF</label>
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          onChange={(e) => setPdf(e.target.files[0])}
        />
      </div>
      <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-secondary focus:ring-2 focus:ring-secondary">
        Submit
      </button>
    </form>
  );
}
