"use client";
import { useState } from "react";
import { tracks, type Track } from "../data/tracks";
import "../styles/tracks.css";

function FlipCard({ title, description }: Track) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="cardContainer" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="cardFace">
          <h3 className="cardTitle">{title}</h3>
        </div>

        {/* Back */}
        <div className="cardFace cardBack">
          <p className="cardDescription">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function TracksPage() {
  return (
    <section className="tracksSection">
      <h2 className="w-full text-center text-4xl font-extrabold">Hackathon Tracks</h2>
      <div className="tracksGrid">
        {tracks.map((track, i) => (
          <FlipCard key={i} {...track} />
        ))}
      </div>
    </section>
  );
}
