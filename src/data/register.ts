export type RoleCard = {
  id: string;
  name: string;
  description: string;
};

export const roles: RoleCard[] = [
  {
    id: "participant",
    name: "Participant",
    description:
      "Participants can build with the freedom of their creativity across a variety of fields from software, hardware, AI/ML, data science, AR/VR, game development, and more!",
  },
  {
    id: "mentor",
    name: "Mentor",
    description:
      "Meet a variety of hackers across engineering, design, and more. Guide hackers by providing project insight and advice.",
  },
  {
    id: "judge",
    name: "Judge",
    description:
      "Industry professionals, researchers, and more that assess innovative hacker projects based on idea, value, technical complexity, feasibility, and scalability across hackathon tracks.",
  },
  {
    id: "speaker",
    name: "Speaker",
    description:
      "Help teach hackers technical and professional development skills. Answer questions and provide insight into career growth, fields, and more.",
  },
  {
    id: "sponsor",
    name: "Sponsor",
    description:
      "Companies and individuals that want to help [hackathon name] come to life through monetary support, food, swag, digital credits, and more! If you are interested in contributing, contact us at [email].",
  },
  {
    id: "volunteer",
    name: "Volunteer",
    description:
      "Help out our organizing team directly on the day of the hackathon through shifts, including answering general inquiries from hackers, distributing meals, and more.",
  },
];