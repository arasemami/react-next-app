import { FC } from 'react';
import { fetchPosts } from '../services/apiService';
import Link from 'next/link';

const SSR: FC = async () => {
  try {
    const posts: any[] = await fetchPosts();
    return (
      <div>
        <h1>Articles (SSR)</h1>
        <ul className="flex flex-col gap-4">
          {posts.map((post: any) => (
            <li key={post.id} className='bg-gray-700 p-2 rounded-md'>
              <Link href={`/about/${post.id}`}>
                <h1 className="font-bold">{post.title}</h1>
              </Link>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default SSR;