import React from 'react';
import Image from 'next/image'

export default async function Hero({params}: any): Promise<JSX.Element> {
    const { id } = await params
    const result = await fetch(`http://localhost:1337/api/heroes?populate=*&filters[uid][$eq]=${id}`);
    const data = await result.json();
    const hero = data.data[0];

    console.log(hero)

  return (
    <>
      <div className="relative h-fit w-screen">
        <img src={`http://localhost:1337${hero.cover.url}`} alt="" className="w-full max-h-60 object-cover brightness-75 blur-sm"/>
        <div className="flex gap-10 items-center absolute bottom-1/2 translate-y-1/2 px-20 min-w-full"> 
          <Image src="/asset/icon.webp" height="80" width="80"  alt=""/>
          <h1 className="text-center w-full">{hero.name}</h1>
          <Image src="/asset/icon.webp" height="80" width="80"  alt=""/>
        </div>
      </div>
    <main className="flex flex-col gap-20 py-16 px-20">
          <div>
            <div className="float-right w-1/2 pl-8">
              <img src={`http://localhost:1337${hero.image.url}`} alt="" className="rounded-md"/>
            </div>
            <p>
              {hero.description.map((paragraph: any, index: number) => (
                <span key={index} className={index == 0 ? null : "block pt-5"}>{paragraph.children[0].text}</span>
              ))}
            </p>
        </div>
    </main>
    </>
  );
}
