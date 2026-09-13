'use client'

import { motion } from 'framer-motion'
import useSectionInView from '../hooks/useSectionInView'
import AboutMeCard from '../components/AboutMeCard'
import SkillsEducationSection from './Skills'

const skills = [
  'TypeScript', 'C#', 'Java', 'Angular', 'Next.js', 'Node.js',
  'Express.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'
]
const tools = ['Git', 'GitHub', 'Docker', 'Azure DevOps', 'Microsoft Azure', 'AWS']

const education = [
  { 'Title': 'B.E in Computer Engineering', 'year': '2022-2026', 'institution': 'St. Francis Institute of Technology' },
  { 'Title': 'HSC', 'year': '2019-2021', 'institution': 'Shailendra Education Society' }
]

export default function About() {
  const { ref } = useSectionInView("About", 0.3);

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">About Me</h2>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutMeCard />
        </motion.div>
      </div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SkillsEducationSection skills={skills} tools={tools} education={education} />
      </motion.div>
    </section>
  )
}
