import React from 'react';

export default async function Home(): Promise<JSX.Element> {
  const result = await fetch("http://localhost:1337/api/faction?populate=*");
  const data = await result.json()

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-8 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className='relative'>
        <img src={`http://localhost:1337${data.data.cover.url}`} alt=""/>
        <h1 className="absolute bottom-5 md:bottom-10 pl-10 md:pl-20" >{data.data.name}</h1>
      </div>
      <div className='px-8 md:px-20 flex flex-col gap-8'>
        {data.data.description.map((paragraph: any, index: number) => (
          <p key={index}>{paragraph.children[0].text}</p>
        ))}
      </div>
    </div>
  );
}
