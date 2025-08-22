import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import elevenAiImage from "/11aihome.png";
import othe from "/othe.png";
import dna from "/dna.png";
import search from "/searcb.png";

export function ProjectsSection() {
  const designProjects = [
    {
      title: "11ai Wireframe Prototype",
      description:
        "Comprehensive wireframe prototype for 11ai, a medical AI platform that helps healthcare providers streamline patient encounters and clinical documentation. The wireframes map out user flows for doctors and medical staff, focusing on intuitive navigation through patient data, AI-powered clinical insights, and efficient charting workflows to improve healthcare delivery.",
      imageUrl: elevenAiImage,
      tags: ["Wireframe", "Prototype", "Figma", "UI Design"],
      link: "https://www.figma.com/design/ZFFbdJr41bP1r1elsQzRqR/11-AI-wireframe-prototype?node-id=2-3&t=GnaWs5bpyO1yi9nJ-1",
    },
    {
      title: "11ai Website Prototype",
      description:
        "Fully functional website prototype for 11ai's medical AI platform. This prototype demonstrates how healthcare providers can interact with AI-powered tools for patient precharting and clinical documentation. Features responsive design optimized for both desktop clinical workstations and mobile devices, allowing medical professionals to access patient insights and streamline their workflow across different environments.",
      imageUrl: elevenAiImage,
      tags: [
        "Website",
        "Prototype",
        "Responsive",
        "Development",
      ],
      link: "https://11ai.figma.site/",
    },
  ];

  const softwareProjects = [
    {
      title: "AI-Powered Othello Game",
      description:
        "Built a smart Othello game where you can play against AI opponents. The AI uses advanced decision-making algorithms to provide challenging gameplay at different difficulty levels.",
      imageUrl: othe,
      tags: ["AI", "Game Development", "Algorithms", "Python"],
      link: "https://github.com/3thanl1n/OthelloGamel",
    },
    {
      title: "Multithreaded Web Search Engine",
      description:
        "Created a fast search engine that can handle multiple users searching at the same time. Built the entire system including web crawling, indexing, and a server that responds to search queries.",
      imageUrl: search,
      tags: [
        "Search Engine",
        "Multithreading",
        "C++",
        "Web Server",
      ],
      link: "https://github.com/3thanl1n/proj-x47k-systems-impl",
    },
    {
      title: "getGPT Alpha",
      description:
        "Built a data analysis platform that helps biomedical researchers automatically find connections between diseases and genes. Makes complex research tasks easier and faster using AI and medical databases.",
      imageUrl: dna,
      tags: [
        "Python",
        "Data Analysis",
        "Biomedical",
        "Streamlit",
      ],
      link: "https://getgptalpha.streamlit.app/",
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical and UI design projects,
            from wireframe prototypes to full-stack
            applications.
          </p>
        </motion.div>

        {/* UI Prototyping Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center">
            UI Prototyping Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {designProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>

          {/* Company Link Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              These prototypes were designed for 11ai, a medical
              AI platform transforming healthcare delivery.
            </p>
            <motion.a
              href="https://www.11ai.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit 11ai Platform
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Software Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center">
            Software Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}