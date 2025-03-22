import { fetchPosts } from '../services/apiService';

const SSG = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Articles (SSG)</h1>
      <ul className="flex flex-col gap-4">
          {posts.map((post: any) => (
            <li key={post.id} className='bg-gray-700 p-2 rounded-md'>
              <h1 className="font-bold">{post.title}</h1>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default SSG;
