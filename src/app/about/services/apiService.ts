export const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await res.json();
  };

  export const fetchPostById = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post with ID ${id}`);
    }
    return await res.json();
  };