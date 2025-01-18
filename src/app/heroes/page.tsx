import React from 'react';
import HeroCard from '@/components/HeroCard'
import PageTitle from '@/components/PageTitle'

type Hero = {
    description: array,
    id: number,
    image: array,
    name: string,
    slug: string,
    cover: array
}

export default async function Heroes(): Promise<JSX.Element> {
    const result = await fetch("http://localhost:1337/api/heroes?populate=*");
    const data = await result.json()

    return (
        <>
        <PageTitle title="Les héroïnes" />
        <div className="flex flex-col gap-8 mx-10 md:mx-20">
            {data.data.map((hero: Hero, index: number) => (
                <HeroCard hero={hero} key={index}/>
            ))}
        </div>
        </>
    );
}
