import React from 'react';

export default async function Unity({params}): Promise<JSX.Element> {
    const { slug } = await params
    const result = await fetch(`http://localhost:1337/api/unities/${slug}?populate=*`);
    const data = await result.json();
    const unity = data.data;


  return (
    <main className="grid md:grid-cols-[0.5fr_1fr] gap-10 md:gap-20 pt-8 md:py-16 px-8 md:px-20">
        <div className="flex items-center justify-center">
            <img src={`http://localhost:1337${unity.image.url}`} alt="" className="rounded-md"/>
        </div>
        <div className="flex flex-col pt-4 md:py-4 gap-4 md:gap-8">
            <h1 className="pt-3 md:pt-5">{unity.name}</h1>
            <div className="flex flex-col gap-4">
                {unity.description.map((paragraph: array, index: number) => (
                    <p key={index}>{paragraph.children[0].text}</p>
                ))}
            </div>
        </div>
    </main>
  );
}
