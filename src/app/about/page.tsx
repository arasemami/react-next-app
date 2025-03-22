import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>Show the data :</h1>

      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-4">
          <h1>1- Client-Side Fetching (CSR)</h1>
          <Link href="/about/csr" className="bg-blue-400 p-2 rounded-md flex w-fit hover:bg-blue-600 ">
            Show Data With CSR
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h1>2- Server-Side Fetching (SSR)</h1>
          <Link href="/about/ssr" className="bg-blue-400 p-2 rounded-md flex w-fit hover:bg-blue-600 ">
            Show Data with SSR
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h1>3- Static Site Generation  (SSG)</h1>
          <Link href="/about/ssg" className="bg-blue-400 p-2 rounded-md flex w-fit hover:bg-blue-600 ">
            Show Data with SSG
          </Link>
        </li>

      </ul>
    </main>
  );
}
