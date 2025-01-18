import React from 'react';

export default async function Unity({params}: any): Promise<JSX.Element> {
    const { id } = await params
    const result = await fetch(`http://localhost:1337/api/unities?populate=*&filters[uid][$eq]=${id}`);
    const data = await result.json();
    const unity = data.data[0];

  return (
    <main className="grid grid-cols-[0.5fr_1fr] gap-20 py-16 px-20">
        <div className="flex items-center justify-center">
            <img src={`http://localhost:1337${unity.image.url}`} alt="" className="rounded-md"/>
        </div>
        <div className="flex flex-col py-4 gap-8">
            <h1 className="pt-5">{unity.name}</h1>
            <p>{unity.description}</p>
        </div>
    </main>
  );
}
