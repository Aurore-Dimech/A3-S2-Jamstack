import React from 'react';
import Link from 'next/link'

const UnityCard = ({unity}) => {

    return (
        <Link href={`/unities/${unity.slug}`} className="w-full flex flex-col justify-center border border-white p-4 rounded-xl gap-3">
            <img src={`http://localhost:1337${unity.image.url}`} alt="" className="rounded-md"/>
            <div className="flex flex-col grow gap-3">
                <h2 className="pt-5 line-clamp-2">{unity.name}</h2>
                <p className="line-clamp-4 lg:line-clamp-[6]">
                    {unity.description.map((paragraph: array, index: number) => (
                        <span key={index}>{paragraph.children[0].text}</span>
                    ))}
                </p>
            </div>
        </Link>
    );
}

export default UnityCard;