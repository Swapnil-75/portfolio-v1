import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useSectionInView from '../hooks/useSectionInView';
import { Card, CardContent } from "../app/components/ui/card";
import { Badge } from '../app/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../app/components/ui/carousel";
import { Code, Eye, EyeOff, Link2Off } from 'lucide-react';

const projects = [
  {
    title: 'Trustlens AI',
    description: 'A real-time log-monitoring and anomaly detection platform with automated alert mechanisms, built on a high-throughput Redis Streams event pipeline.',
    codebaseLink: '',
    previewLink: '',
    techstack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    title: 'Travex',
    description: 'A centralized visit and reimbursement management platform digitizing manual email workflows, with authenticated RESTful endpoints for approval tracking.',
    codebaseLink: '',
    previewLink: '',
    techstack: ['React.js', 'Node.js', 'Express', 'PostgreSQL']
  },
  {
    title: 'Task Flow',
    description: 'A project scheduling platform with interactive milestone tracking, JWT-based RBAC, and critical-path analysis for automated dependency mapping.',
    codebaseLink: '',
    previewLink: '',
    techstack: ['Node.js', 'React.js', 'MongoDB', 'JWT']
  },
  {
    title: 'PESCA',
    description: 'An interactive DSA learning app with 30+ GSAP-driven algorithm visualizations, an in-browser code editor, and a markdown note-taking workspace.',
    codebaseLink: '',
    previewLink: '',
    techstack: ['React.js', 'Redux', 'GSAP']
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="group h-full bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techstack.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {project.codebaseLink ? (
              <a
                href={project.codebaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-600
                text-zinc-900 dark:text-zinc-100 font-medium
                shadow-md hover:shadow-lg hover:scale-[1.02]
                transition-all duration-300 overflow-hidden relative
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l 
                before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%]
                hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <Code className="h-4 w-4 relative" strokeWidth={2.5} />
                <span className="relative">Code</span>
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500
                cursor-not-allowed font-medium backdrop-blur-sm">
                <EyeOff className="h-4 w-4" strokeWidth={2.5} />
                <span>Private</span>
              </span>
            )}

            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-gradient-to-br from-primary/80 to-primary/100 text-primary-foreground font-medium
                shadow-md hover:shadow-lg hover:scale-[1.02]
                transition-all duration-300 overflow-hidden relative
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l 
                before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%]
                hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <Eye className="h-4 w-4 relative" strokeWidth={2.5} />
                <span className="relative">Demo</span>
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500
                cursor-not-allowed font-medium backdrop-blur-sm">
                <Link2Off className="h-4 w-4" strokeWidth={2.5} />
                <span>Unhosted</span>
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);


export default function Projects() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const { ref } = useSectionInView("Projects", 0.3);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">My Projects</h2>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto mt-6"></div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-[-4rem] hover:bg-zinc-100 dark:hover:bg-zinc-800" />
            <CarouselNext className="right-[-4rem] hover:bg-zinc-100 dark:hover:bg-zinc-800" />
          </div>
        </Carousel>

        <div className="flex sm:hidden justify-center gap-4 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${i === current
                ? 'bg-primary scale-125'
                : 'bg-zinc-300/70 dark:bg-zinc-700/70 hover:bg-zinc-400 dark:hover:bg-zinc-600 hover:scale-110'
                }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
