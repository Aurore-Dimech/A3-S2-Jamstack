import React from 'react';
import UnityCard from '@/components/UnityCard'
import PageTitle from '@/components/PageTitle'

export default async function Unities(): Promise<JSX.Element> {
    const result = await fetch("http://localhost:1337/api/unities?populate=*");
    const data = await result.json()

    return (
        <>
        <PageTitle title="Les unités" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-40">
            {data.data.map((unity: any, index: any) => (
                <UnityCard unity={unity} key={index}/>
            ))}
        </div>
        </>
    );
}
