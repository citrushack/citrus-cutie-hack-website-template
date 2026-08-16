"use client";

import { useState } from "react";

type IndustryType = "All" | "Speakers" | "Judges" | "Mentors";

type Professional = {
    name: string;
    position: string;
    company: string;
    type: Exclude<IndustryType, "All">;
    bio: string;
    linkedin: string;
};

const filters: IndustryType[] = [
    "All",
    "Speakers",
    "Judges",
    "Mentors",
];

const professionals: Professional[] = [
    {
        name: "Speaker Name",
        position: "Software Engineer",
        company: "Company",
        type: "Speakers",
        bio: "Short bio about the speaker goes here.",
        linkedin: "#",
    },
    {
        name: "Judge Name",
        position: "Product Manager",
        company: "Company",
        type: "Judges",
        bio: "Short bio about the judge goes here.",
        linkedin: "#",
    },
    {
        name: "Mentor Name",
        position: "Software Engineer",
        company: "Company",
        type: "Mentors",
        bio: "Short bio about the mentor goes here.",
        linkedin: "#",
    },
];

export default function Industry() {
    const [selectedType, setSelectedType] =
        useState<IndustryType>("All");

    const [selectedProfessional, setSelectedProfessional] =
        useState<Professional | null>(null);

    const filteredProfessionals =
        selectedType === "All"
            ? professionals
            : professionals.filter(
                (professional) => professional.type === selectedType
            );

    return (
        <section className="industry-section">
            <h2 className="industry-title">Industry</h2>

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
                        className="industry-person"
                        onClick={() => setSelectedProfessional(person)}
                    >
                        <div className="industry-photo-placeholder" />

                        <strong>{person.name}</strong>
                        <span>{person.position}</span>
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

                        <div className="industry-popup-photo" />

                        <h3>{selectedProfessional.name}</h3>

                        <p className="industry-popup-position">
                            {selectedProfessional.position} at{" "}
                            {selectedProfessional.company}
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
