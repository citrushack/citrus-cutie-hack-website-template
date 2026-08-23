"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqItems = [
    {
        question: "What is a hackathon?",
        answer:
            "A hackathon is an event where participants work together to build projects and learn new skills.",
    },
    {
        question: "Who can participate?",
        answer:
            "Cutie Hack is open to college students of different majors and experience levels.",
    },
    {
        question: "Do I need coding experience?",
        answer:
            "No! Cutie Hack is beginner-friendly and prior coding experience is not required.",
    },
    {
        question: "Do I have to build a project?",
        answer:
            "No. You can also attend workshops, activities, and other hackathon events.",
    },
    {
        question: "What if I have more questions?",
        answer:
            "You can reach out through Discord, Instagram, or email for additional information.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.faqWrapper}>
            <div className={styles.faqPanel}>
                <h2>FAQ</h2>

                <div className={styles.faqList}>
                    {faqItems.map((item, index) => (
                        <div className={styles.faqItem} key={item.question}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <span>{item.question}</span>

                                <span className={styles.faqArrow}>
                                    {openIndex === index ? "▴" : "▾"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
