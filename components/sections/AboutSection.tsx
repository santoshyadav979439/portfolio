import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a Full Stack Engineer with over 9 years of experience in
              designing, developing, and implementing complex web applications.
              My journey in technology began at TCS and has led me through
              remarkable opportunities at Nagarro, Ferns AND Petals, PayPal, and
              currently at ServiceNow.
            </p>
            <p className="text-lg mb-6">
              Throughout my career, I've specialized in JavaScript/TypeScript
              ecosystems, building scalable frontend applications with React,
              Angular, and modern frameworks while developing robust backend
              services with Node.js.
            </p>
            <p className="text-lg">
              I'm passionate about creating efficient, maintainable code and
              consistently delivering high-quality solutions that solve
              real-world problems. When I'm not coding, I enjoy contributing to
              open-source projects and sharing my knowledge through technical
              writing.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Software Development
                    </h3>
                    <p className="text-muted-foreground">
                      Skilled in full-stack development with expertise in React,
                      Angular, Node.js, and cloud services. I build performant,
                      accessible web applications that deliver exceptional user
                      experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Technical Leadership
                    </h3>
                    <p className="text-muted-foreground">
                      Experience leading technical teams, architecting
                      solutions, and mentoring junior developers. I excel at
                      translating business requirements into technical
                      implementations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Dedicated to staying current with emerging technologies
                      and industry best practices. I'm always exploring new
                      tools and approaches to enhance my development skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
