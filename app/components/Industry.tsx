"use client";

import { useState } from "react";

type IndustryType = "All" | "Speakers" | "Judges" | "Mentors";

type Professional = {
    name: string;
    position: string;
    company: string;
    type: Exclude<IndustryType, "All">;
    bio: string;
    photo: string;
    linkedin: string;
};

const professionals: Professional[] = [
    {
        name: "Speaker Name",
        position: "Software Engineer",
        company: "Company",
        type: "Speakers",
        bio: "Short bio about the speaker goes here.",
        photo: "/placeholder-person.png",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Judge Name",
        position: "Product Manager",
        company: "Company",
        type: "Judges",
        bio: "Short bio about the judge goes here.",
        photo: "/placeholder-person.png",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Mentor Name",
        position: "Software Engineer",
        company: "Company",
        type: "Mentors",
        bio: "Short bio about the mentor goes here.",
        photo: "/placeholder-person.png",
        linkedin: "https://www.linkedin.com/",
    },
];

const filters: IndustryType[] = ["All", "Speakers", "Judges", "Mentors"];

export default function Industry() {
    const [selectedType, setSelectedType] = useState<IndustryType>("All");
    const [selectedProfessional, setSelectedProfessional] =
        useState<Professional | null>(null);

    const filteredProfessionals =
        selectedType === "All"
            ? professionals
            : professionals.filter((person) => person.type === selectedType);

    return (
        <section className="industry-section">
            <h2>Industry Professionals</h2>

            <p className="industry-subtitle">
                Toggle by all, speakers, judges, mentors, etc.
            </p>

            <div className="industry-filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={selectedType === filter ? "active" : ""}
                        onClick={() => setSelectedType(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="industry-grid">
                {filteredProfessionals.map((person) => (
                    <button
                        key={person.name}
                        className="industry-card"
                        onClick={() => setSelectedProfessional(person)}
                    >
                        <strong>{person.name}</strong>
                        <span>
                            {person.position} at {person.company}
                        </span>
                    </button>
                ))}
            </div>

            {selectedProfessional && (
                <div
                    className="industry-overlay"
                    onClick={() => setSelectedProfessional(null)}
                >
                    <div
                        className="industry-popup"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="industry-close"
                            onClick={() => setSelectedProfessional(null)}
                        >
                            ×
                        </button>

                        <img
                            src={selectedProfessional.photo}
                            alt={selectedProfessional.name}
                            className="industry-photo"
                        />

                        <h3>{selectedProfessional.name}</h3>

                        <p>
                            {selectedProfessional.position} at {selectedProfessional.company}
                        </p>

                        <p>{selectedProfessional.bio}</p>

                        <a
                            href={selectedProfessional.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
