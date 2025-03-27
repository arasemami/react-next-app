import Image from 'next/image';

export default function Home() {
  const image01 = "/images/01.png";
  const image02 = "/images/02.png";
  const image03 = "/images/03.png";
  return (
    <main>
      <h1>Home Page</h1>
      <p>Welcome to our Next.js site!</p>

      <div className='flex flex-row gap-4'>
        <Image
          src={image01}
          alt='01'
          width={400}
          height={250}
          className="rounded-md"
        />
        <Image
          src={image02}
          alt='02'
          width={400}
          height={250}
          className="rounded-md"
        />
        <Image
          src={image03}
          alt='03'
          width={400}
          height={250}
          className="rounded-md"
        />
      </div>
    </main>
  );
}
