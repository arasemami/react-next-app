import PostItem from '@/app/components/PostItem';
import { fetchPosts } from '../services/apiService';

const SSG = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Articles (SSG)</h1>
      <ul className="flex flex-col gap-4">
        {posts.map((post: any) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default SSG;
