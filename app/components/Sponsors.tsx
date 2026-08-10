"use client";
import {useState} from "react";
import Image from "next/image";

type SponsorCard = {
    id: string;
    name: string;
    description: string;
    link: string;
    image: string;
};

const sponsors: SponsorCard[] = [
    {
        id: "1",
        name: "Google",
        description: "Description 1",
        link: "https://www.google.com",
        image: "/file.svg",
    },
    {
        id: "2",
        name: "Amazon",
        description: "Description 2",
        link: "https://www.amazon.com",
        image: "/images/amazon.png",
    },
    {
        id: "3",
        name: "Meta",
        description: "Description 3",
        link: "https://www.meta.com",
        image: "/images/meta.png",
    },
    {
        id: "4",
        name: "Sponsor 4",
        description: "Description 4",
        link: "https://www.sponsor4.com",
        image: "/images/sponsor4.png",
    },
    {
        id: "5",
        name: "Sponsor 5",
        description: "Description 5",
        link: "https://www.sponsor5.com",
        image: "/images/sponsor5.png",
    },
    
    {
        id: "6",
        name: "Sponsor 6",
        description: "Description 6",
        link: "https://www.sponsor6.com",
        image: "/images/sponsor6.png",
    },
    {
        id: "7",
        name: "Sponsor 7",
        description: "Description 7",
        link: "https://www.sponsor7.com",
        image: "/images/sponsor7.png",
    },
    {
        id: "8",
        name: "Sponsor 8",
        description: "Description 8",
        link: "https://www.sponsor8.com",
        image: "/images/sponsor8.png",
    },


];



const Sponsors = () => {
    const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());

    const toggleFlip = (id: string) => {
        setFlippedIds((current) => {
          const next = new Set(current);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        });
    };

    return (
        <section id="sponsors" className="w-full text-black mt-6">
            <h2 className="text-center text-3xl font-extrabold font-sans">
                Sponsors
            </h2>
            <div className="mx-auto grid max-w-4xl grid-cols-4 gap-4 mt-10">
                {sponsors.map((sponsor)=>{
                    const isFlipped = flippedIds.has(sponsor.id);
                    return(
                        <button
                        key={sponsor.id}
                        type="button"
                        onClick={() => toggleFlip(sponsor.id)}
                        className={`relative h-30 w-full max-w-sm transition-transform duration-300 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                        >
                            {/*front of card*/}
                            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl backface-hidden bg-gray-300">
                            <Image src={sponsor.image} alt={sponsor.name} className="flex flex-col items-center justify-center object-contain h-20 w-20" width={100} height={100} />
                                <span className="flex flex-col items-center justify-center font-bold text-xl">{sponsor.name}</span>
                            </div>
                            {/*back of card*/}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-gray-300 backface-hidden [transform:rotateY(180deg)]">
                                <span className="font-bold text-xl">{sponsor.name}</span>
                                <p className="text-sm text-gray-500">{sponsor.description}</p>
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="absolute bottom-2 right-2 text-black hover:text-blue-500 rounded-2xl bg-gray-400 px-3 text-sm mt-1">Visit</a>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );

};

export default Sponsors;