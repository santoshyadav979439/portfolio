"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Newspaper,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, opportunities, or
              partnerships. Feel free to reach out through the form or via my
              contact information.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:tl.santosh.yadav@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ysantoshdev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9532272648
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/santoshyadav979439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-secondary-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/santoshyadav979439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-secondary-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://medium.com/@santoshyadav979439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-secondary-foreground hover:text-primary transition-colors"
                  aria-label="Medium"
                >
                  <Newspaper className="h-5 w-5" />
                </a>

                {/*     <a
                  href="https://twitter.com/santoshyadav979439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-secondary-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a> */}
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {submitSuccess ? (
                <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
