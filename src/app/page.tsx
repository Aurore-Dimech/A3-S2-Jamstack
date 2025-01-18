import React from 'react';

export default async function Home(): Promise<JSX.Element> {
  const result = await fetch("https://a3-s2-jamstack-api-production.up.railway.app/api/faction?populate=*", {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN_RAILWAY}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await result.json()

  console.log(data.data.cover)

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-8 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className='relative'>
        <img src={`https://a3-s2-jamstack-api-production.up.railway.app${data.data.cover.url}`} alt=""/>
        <h1 className="absolute bottom-5 md:bottom-10 pl-10 md:pl-20" >{data.data.name}</h1>
      </div>
      <div className='px-8 md:px-20 flex flex-col gap-8'>
        {data.data.description.map((paragraph: array, index: number) => (
          <p key={index}>{paragraph.children[0].text}</p>
        ))}
      </div>
    </div>
  );
}
