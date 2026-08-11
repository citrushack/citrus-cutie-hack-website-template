"use client";

import { useState } from "react";

type TeamType =
    | "All"
    | "Leads"
    | "Operations"
    | "Finance"
    | "Marketing"
    | "UI/UX Design"
    | "SWE";

const filters: TeamType[] = [
    "All",
    "Leads",
    "Operations",
    "Finance",
    "Marketing",
    "UI/UX Design",
    "SWE",
];
type TeamMember = {
    name: string;
    position: string;
    team: Exclude<TeamType, "All">;
    bio: string;
    linkedin: string;
    github: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Lead Name",
        position: "Director",
        team: "Leads",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Operations Lead",
        position: "Operations",
        team: "Operations",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Finance Lead",
        position: "Finance",
        team: "Finance",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Marketing Lead",
        position: "Marketing",
        team: "Marketing",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Design Lead",
        position: "UI/UX Designer",
        team: "UI/UX Design",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
    {
        name: "SWE Lead",
        position: "Software Engineering",
        team: "SWE",
        bio: "Short bio about the team member.",
        linkedin: "#",
        github: "#",
    },
];

export default function Team() {
    const [selectedType, setSelectedType] = useState<TeamType>("All");
    const [selectedMember, setSelectedMember] =
        useState<TeamMember | null>(null);

    const filteredMembers =
        selectedType === "All"
            ? teamMembers
            : teamMembers.filter((member) => member.team === selectedType);

    return (
        <section className="team-section">
            <div className="team-heading">
                <h2>Team</h2>

                <p className="team-subtitle">
                    Toggle by all, leads, operations, finance, marketing, UI/UX design, SWE
                </p>
            </div>

            <div className="team-content">
                <div className="team-filters">
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

                <div className="team-grid">
                    {filteredMembers.map((member) => (
                        <button
                            key={member.name}
                            className="team-card"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="team-photo-placeholder" />

                            <strong>{member.name}</strong>
                            <span>{member.position}</span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedMember && (
                <div
                    className="team-overlay"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="team-popup"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="team-close"
                            onClick={() => setSelectedMember(null)}
                        >
                            ×
                        </button>

                        <div className="team-popup-photo-placeholder" />

                        <h3>{selectedMember.name}</h3>
                        <p>{selectedMember.position}</p>
                        <p>{selectedMember.bio}</p>

                        <div className="team-links">
                            <a
                                href={selectedMember.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href={selectedMember.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
