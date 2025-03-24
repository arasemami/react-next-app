import { FC } from 'react';
import { fetchPosts } from '../services/apiService';
import PostItem from '@/app/components/PostItem';
 
const SSR: FC = async () => {
  try {
    const posts: any[] = await fetchPosts();
    return (
      <div>
        <h1>Articles (SSR)</h1>
        <ul className="flex flex-col gap-4">
          {posts.map((post: any) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default SSR;