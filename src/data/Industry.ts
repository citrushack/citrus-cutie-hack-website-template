export type IndustryType =
    | "All"
    | "Speakers"
    | "Judges"
    | "Mentors";

export type Professional = {
    name: string;
    position: string;
    company: string;
    type: Exclude<IndustryType, "All">;
    bio: string;
    linkedin: string;
    image: string;
};

export const filters: IndustryType[] = [
    "All",
    "Speakers",
    "Judges",
    "Mentors",
];

export const professionals: Professional[] = [
    {
        name: "Speaker Name",
        position: "Software Engineer",
        company: "Company",
        type: "Speakers",
        bio: "Short bio about the speaker goes here.",
        linkedin: "#",
        image: "",
    },
    {
        name: "Judge Name",
        position: "Product Manager",
        company: "Company",
        type: "Judges",
        bio: "Short bio about the judge goes here.",
        linkedin: "#",
        image: "",
    },
    {
        name: "Mentor Name",
        position: "Software Engineer",
        company: "Company",
        type: "Mentors",
        bio: "Short bio about the mentor goes here.",
        linkedin: "#",
        image: "",
    },
];
