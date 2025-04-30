import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Angular', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Redux', level: 85 },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'Spring Boot', level: 65 },
      { name: 'MongoDB', level: 75 },
    ]
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest', level: 85 },
      { name: 'Webpack', level: 75 },
      { name: 'Agile/Scrum', level: 85 },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="bg-primary py-4 px-6">
                <h3 className="text-xl font-bold text-primary-foreground">
                  {category.name}
                </h3>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design', 'Performance Optimization', 'Accessibility (a11y)', 
              'SEO', 'UI/UX Principles', 'Microservices', 'System Design',
              'Code Reviews', 'Technical Documentation', 'Team Leadership',
              'Mentoring', 'Problem Solving', 'PostgreSQL', 'MySQL',
              'Redis', 'Firebase', 'OAuth', 'JWT', 'SCSS/SASS',
              'Tailwind CSS', 'Material UI', 'Bootstrap', 'Styled Components'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}