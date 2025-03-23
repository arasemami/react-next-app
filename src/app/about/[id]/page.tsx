import { notFound } from "next/navigation";
import { fetchPostById } from "../services/apiService";

const PostDetail = async ({ params }: { params: { id: string } }) => {
 
    const { id } = await params; 

    const post = await fetchPostById(Number(id));

    if (!post) {
        notFound();
    }

    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.body}</p>
            <p className="mt-4 text-gray-500">Post ID: {post.id}</p>
        </main>
    );
};

export default PostDetail;
