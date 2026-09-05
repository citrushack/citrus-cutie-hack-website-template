"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Industry.module.css";

import {
    filters,
    professionals,
    IndustryType,
    Professional,
} from "@/data/industry";

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
        <section className={styles.industrySection}>
            <h2 className={styles.industryTitle}>Industry</h2>

            <div className={styles.industryFilters}>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={
                            selectedType === filter ? styles.active : ""
                        }
                        onClick={() => setSelectedType(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className={styles.industryGrid}>
                {filteredProfessionals.map((person) => (
                    <button
                        key={person.name}
                        className={styles.industryPerson}
                        onClick={() => setSelectedProfessional(person)}
                    >
                        <div className={styles.industryPhoto}>
                            {person.image && (
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    sizes="74px"
                                />
                            )}
                        </div>

                        <strong>{person.name}</strong>
                        <span>{person.position}</span>
                    </button>
                ))}
            </div>

            {selectedProfessional && (
                <div
                    className={styles.industryOverlay}
                    onClick={() => setSelectedProfessional(null)}
                >
                    <div
                        className={styles.industryPopup}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className={styles.industryClose}
                            onClick={() => setSelectedProfessional(null)}
                            aria-label="Close professional popup"
                        >
                            ×
                        </button>

                        <div className={styles.popupPhoto}>
                            {selectedProfessional.image && (
                                <Image
                                    src={selectedProfessional.image}
                                    alt={selectedProfessional.name}
                                    fill
                                    sizes="100px"
                                />
                            )}
                        </div>

                        <h3>{selectedProfessional.name}</h3>

                        <p className={styles.popupPosition}>
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
