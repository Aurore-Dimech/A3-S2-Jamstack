import React from 'react';
import Image from 'next/image'

export default async function Hero({params}): Promise<JSX.Element> {
    const { slug } = await params
    const result = await fetch(`http://localhost:1337/api/heroes/${slug}?populate=*`);
    const data = await result.json();
    const hero = data.data;

  return (
    <>
      <div className="relative h-fit w-screen">
        <img src={`http://localhost:1337${hero.cover.url}`} alt="" className="w-full max-h-60 object-cover brightness-75 blur-sm"/>
        <div className="flex gap-10 items-center absolute bottom-1/2 translate-y-1/2 px-8 md:px-20 min-w-full"> 
          <Image src="/asset/icon.webp" height="80" width="80" className="hidden md:block"  alt=""/>
          <h1 className="text-center w-full">{hero.name}</h1>
          <Image src="/asset/icon.webp" height="80" width="80" className="hidden md:block"  alt=""/>
        </div>
      </div>
    <main className="flex flex-col gap-10 md:gap-20 pt-8 md:py-16 px-8 md:px-20">
          <div className="flex flex-col md:block">
            <div className="order-last pt-8 md:pt-0 md:float-right md:w-1/2 md:pl-8">
              <img src={`http://localhost:1337${hero.image.url}`} alt="" className="rounded-md"/>
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
