"use client";
import { useEffect, useState } from "react";

export default function ArticlesPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [articles, setArticles] = useState<{ id: number; title: string; description: string }[]>([]);


    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        const res = await fetch("/api/articles");
        const data = await res.json();
        setArticles(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/articles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
        });

        if (res.ok) {
            fetchArticles();
            setTitle("");
            setDescription("");
        }
    };

    const handleDelete = async (id: number) => {
        const res = await fetch("/api/articles", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            fetchArticles();
        }
    }

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-xl font-bold mb-4"> Add Articles</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Send
                </button>
            </form>

            <h3 className="text-lg font-bold mt-6"> List of Articles </h3>
            <ul>
                {articles.map((a) => (
                    <li key={a.id} className="flex flex-col mb-4 bg-gray-600 rounded-md p-2 ">
                        <h1>{a.title}</h1>
                        <p>{a.description}</p>
                        <button onClick={() => handleDelete(a.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
