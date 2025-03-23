import Link from "next/link";
import React from "react";

const PostItem: React.FC<any> = ({ post }) => {
    return (
        <li key={post.id} className="p-4 bg-gray-900 rounded-md hover:bg-gray-950">
            <Link href={`/about/${post.id}`}>
                <h1 className="font-bold text-2xl hover:text-gray-500">{post.title}</h1>
            </Link>
            <p>{post.body}</p>
        </li>
    );
};

export default PostItem;
