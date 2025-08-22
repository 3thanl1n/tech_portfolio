import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function AboutSection() {
  const skills = [
    { category: "Design", items: ["Figma", "Adobe Creative Suite", "Prototyping", "UI/UX Design"] },
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML/CSS"] },
    { category: "Backend", items: ["Python", "C++", "Node.js", "FastAPI"] },
    { category: "Tools", items: ["OpenAI API", "GitHub", "Streamlit", "HTTP Protocols"] }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am currently pursuing a Master's of Science in Engineering in Computer Science at the University of Pennsylvania. My educational background includes a Bachelor of Arts from NYU where I obtained an Individualized Major with a concentration in Sustainable Business and Technology.
              </p>
              <p>
                Along with my Individualized Major, I obtained a cross-school minor in the Business of Entertainment, Media, and Technology (BEMT) from NYU Stern School of Business, Tisch School Of The Arts, and NYU Steinhardt School of Culture, Education, and Human Development.
              </p>
              <p>
                My diverse academic background allows me to bridge the gap between technical implementation and user-centered design, creating solutions that are both functionally robust and intuitively designed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h4 className="mb-4 text-primary">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
