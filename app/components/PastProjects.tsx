"use client";
import { useState} from "react";
import Image from "next/image";



type PROJECT = {
    title: string;
    description: string;
    image: string;
    link: string;
    testimonial: string;
    track: string;
    hackathon: string;
    year: string;
};

const projects: PROJECT[] = [
    {
        title: "Project example",
        description: "desc",
        image: "/example.svg",
        link: "example.com",
        testimonial: "something",
        track: "Best Overall",
        hackathon: "Citrus Hack",
        year: "3036",
    },
    {
        title: "Project example 2",
        description: "desc 2",
        image: "/example2.png",
        link: "example2.com",
        testimonial: "something something",
        track: "Beginner Hack",
        hackathon: "Citrus Hack",
        year: "2027",
    },
    {
        title: "Project example 3",
        description: "desc 3",
        image: "/example3.png",
        link: "example3.com",
        testimonial: "something something something",
        track: "Hardware",
        hackathon: "Cutie Hack",
        year: "1300",
    },
];

function PastProjectBubble({project, onClick, className}: {project: PROJECT; onClick: () => void; className: string;}) {
    return (
        <button type="button" onClick={onClick} className={`overflow-hidden group absolute items-center justify-center bg-gray-300 ${className}`}>
                <span className="text-s text-center transition-opacity group-hover:opacity-0">
                    {project.title}
                </span>
                <Image
                    src={project.image}
                    alt="project_image"
                    fill
                    className="object-cover opacity-0 transition-opacity group-hover:opacity-100 overflow-hidden"
                />
            </button>
    );
}

const PastProjects = () => {
    const [curIndex, setIndex] = useState(0);
    const curProject = projects[curIndex];
    const prevProj = () => setIndex((i) => (i-1+projects.length) % projects.length);
    const nextProj = () => setIndex((i) => (i+1) % projects.length);

    return (

        <section id="past-projects" className="w-full text-black bg-white px-10 py-16">
            <h2 className="w-full text-center text-4xl font-extrabold font-sans">
                Past Projects
            </h2>
            {/*past project bubbles*/}
            <div className="relative max-w-xl mx-auto">
            {/*top right*/}
            <PastProjectBubble project={projects[0]} onClick={() => setIndex(0)} className="-left-50 top-20 rounded-full h-30 w-30" />
            {/*bottom left*/}
            <PastProjectBubble project={projects[1]} onClick={() => setIndex(1)} className="-left-60 top-70 rounded-full h-30 w-30" />
            {/*top right*/}
            <PastProjectBubble project={projects[2]} onClick={() => setIndex(2)} className="-right-50 top-20 rounded-full h-30 w-30" />
            {/*bottom right*/}
            <PastProjectBubble project={projects[2]} onClick={/*change to more past project link or smthin*/() => setIndex(2)} className="-right-50 top-70 rounded-2xl h-25 w-40" />
            </div>


            {/*center past project card*/}
            <article className="relative mt-6 mx-auto w-full max-w-xl rounded-3xl bg-gray-300 p-6">
                <h3 className="font-extrabold text-center text-2xl font-sans">
                    {curProject.title} | {curProject.hackathon} {curProject.year}
                </h3>
                <div className="mt-6 flex flex-col items-center">
                    <Image src={curProject.image} alt="project_image" className="text-white rounded-2xl bg-gray-400 h-auto max-w-sm w-full" width={100} height={50} />
                    <div className="w-full max-w-sm">
                        <p className="text-sm text-gray-500">{curProject.track}</p>
                        <p>{curProject.description}</p>
                        <p>{curProject.testimonial}</p>
                    </div>

                    <div className="mt-10 flex flex-row items-center justify-center gap-4">
                        <button onClick={prevProj}>{"<"}</button>
                        <div className="flex items-center gap-4">
                        {projects.map((_, i) => (
                            <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`rounded-full h-3 w-3 ${i === curIndex ? "bg-black" : "border border-black"}`}
                            />
                        ))}
                        </div>
                        <button onClick={nextProj}>{">"}</button>
                    </div>

                </div>
            </article>
        </section>
    );
};

export default PastProjects;