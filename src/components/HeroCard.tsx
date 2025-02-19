import React from 'react';
import Link from 'next/link'

const HeroCard = ({hero}) => {
    return (
        <Link href={`/heroes/${hero.slug}`} className="w-full flex flex-col md:flex-row justify-center border border-white rounded-xl overflow-hidden gap-3">
            <img src={`https://a3-s2-jamstack-api-production.up.railway.app${hero.image.url}`} alt="" className="md:rounded-lg md:max-h-52 lg:max-h-64"/>
            <div className="flex flex-col gap-3 p-4 justify-center">
                <h2 className="line-clamp-1">{hero.name}</h2>
                <p className="line-clamp-4 lg:line-clamp-[6]">
                    {hero.description.map((paragraph: array, index: number) => (
                        <span key={index}>{paragraph.children[0].text}</span>
                    ))}
                </p>
            </div>
        </Link>
    );
}

export default HeroCard;