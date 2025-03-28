import { NextResponse } from "next/server";

let articles: { id: number; title: string; description: string }[] = [];

export async function GET() {
  return NextResponse.json(articles);
}

export async function POST(req: Request) {
  const { title, description } = await req.json();
  const newArticle = { id: Date.now(), title, description };
  articles.push(newArticle);
  return NextResponse.json(newArticle, { status: 201 });
}


export async function DELETE(req: Request) {
  const { id } = await req.json();
  articles = articles.filter((a) => a.id !== id)
  return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });

}