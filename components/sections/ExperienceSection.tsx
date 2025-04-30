import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    company: "ServiceNow",
    position: "Staff Software Engineer",
    period: "November 2024 - Present",
    responsibilities: [
      "Lead development of key features for ServiceNow's platform",
      "Architect and implement scalable solutions using modern web technologies",
      "Mentor junior engineers and promote best practices",
    ],
    technologies: ["React", "Angular", "Node.js", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    company: "PayPal",
    position: "Software Engineer 3",
    period: "December 2022 - November 2024",
    responsibilities: [
      "Developed and maintained core components of PayPal's checkout experience",
      "Collaborated with cross-functional teams to implement new payment features",
      "Optimized application performance and improved code quality",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "TypeScript",
      "Redux",
    ],
  },
  {
    id: 3,
    company: "Ferns AND Petals (FNP)",
    position: "Technical Lead Frontend",
    period: "September 2021 - November 2022",
    responsibilities: [
      "Led a team of 5 frontend developers",
      "Architected and implemented e-commerce platform features",
      "Improved site performance and user experience metrics",
    ],
    technologies: [
      "React",
      "Next.js",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Redux",
    ],
  },
  {
    id: 4,
    company: "Nagarro",
    position: "Associate Staff Engineer",
    period: "March 2021 - September 2021",
    responsibilities: [
      "Designed and implemented frontend solutions for clients",
      "Collaborated with UX/UI designers to implement responsive designs",
      "Contributed to technical documentation and code reviews",
    ],
    technologies: ["Angular", "React", "JavaScript", "TypeScript", "SCSS"],
  },
  {
    id: 5,
    company: "TCS",
    position: "Full Stack Engineer",
    period: "December 2015 - March 2021",
    responsibilities: [
      "Developed and maintained web applications for various clients",
      "Implemented backend APIs and frontend components",
      "Participated in agile development cycles and continuous integration",
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Java",
      "Spring Boot",
      "JavaScript",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-10 timeline-item relative">
                <div className="absolute left-0 top-2 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                <Card className="p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow ml-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <div className="flex items-center text-muted-foreground mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg text-primary font-medium mb-4">
                    {exp.company}
                  </h4>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
