import React from 'react';
import Image from 'next/image'

export default async function Hero({params}): Promise<JSX.Element> {
    const { slug } = await params
    const result = await fetch(`https://a3-s2-jamstack-api-production.up.railway.app/api/heroes/${slug}?populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN_RAILWAY}`,
        'Content-Type': 'application/json'
      }
  });
    const data = await result.json();
    const hero = data.data;

  return (
    <>
      <div className="relative h-fit w-screen">
        <img src={`https://a3-s2-jamstack-api-production.up.railway.app${hero.cover.url}`} alt="" className="w-full max-h-60 object-cover brightness-75 blur-sm"/>
        <div className="flex gap-10 items-center absolute bottom-1/2 translate-y-1/2 px-8 md:px-20 min-w-full"> 
          <Image src="/asset/icon.webp" height="80" width="80" className="hidden md:block"  alt=""/>
          <h1 className="text-center w-full">{hero.name}</h1>
          <Image src="/asset/icon.webp" height="80" width="80" className="hidden md:block"  alt=""/>
        </div>
      </div>
    <main className="flex flex-col gap-10 md:gap-20 pt-8 md:py-16 px-8 md:px-20">
          <div className="flex flex-col md:block">
            <div className="order-last pt-8 md:pt-0 md:float-right md:w-1/2 md:pl-8">
              <img src={`https://a3-s2-jamstack-api-production.up.railway.app${hero.image.url}`} alt="" className="rounded-md"/>
            </div>
            <p>
              {hero.description.map((paragraph: array, index: number) => (
                <span key={index} className={index == 0 ? null : "block pt-5"}>{paragraph.children[0].text}</span>
              ))}
            </p>
        </div>
    </main>
    </>
  );
}
