import React from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart, checkout, and payment integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    githubUrl: "https://github.com/santoshyadav979439/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates, notifications, and team workspaces.",
    image: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg",
    technologies: ["React", "TypeScript", "Firebase", "Redux", "Material UI"],
    githubUrl: "https://github.com/santoshyadav979439/task-management",
    liveUrl: "https://task-management-demo.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "An application to track personal expenses, income, and financial goals with data visualization.",
    image: "https://images.pexels.com/photos/5199761/pexels-photo-5199761.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Recharts",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/santoshyadav979439/finance-tracker",
    liveUrl: "https://finance-tracker-demo.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            These are just a few highlights of my work. I've contributed to many
            more projects spanning various domains and technologies.
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/santoshyadav979439"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
