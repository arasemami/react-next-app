'use client';

import { useEffect, useState } from "react";
import { fetchPosts } from "../services/apiService";
import PostItem from "@/app/components/PostItem";

const CSR = () => {

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);  
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);  
      }
    };

    fetchData();  
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1 className="pb-5">Show the data with CSR Mode :</h1>
      <ul className="flex flex-col gap-4">
        {posts.map((post: any) => (
       <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}


export default CSR;
