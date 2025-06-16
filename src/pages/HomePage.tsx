import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function HomePage() {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", 
    "Tailwind CSS", "UI/UX Design", "JavaScript",
    "HTML/CSS", "GraphQL", "REST APIs"
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      demoLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <div className="flex flex-col gap-20 py-10">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
          A passionate developer creating beautiful and functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              alt="Profile" 
              className="rounded-lg w-full h-auto object-cover shadow-lg aspect-square"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate web developer with expertise in creating modern, responsive web applications. 
              With a strong foundation in both front-end and back-end technologies, I deliver 
              high-quality solutions that meet business objectives while providing exceptional user experiences.
            </p>
            <Button variant="outline" className="group" asChild>
              <Link to="/about">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link to="/about">View All Skills</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
          <Button asChild variant="ghost" className="group">
            <Link to="/projects">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind or just want to connect? I'm always open to discussing new projects, 
            creative ideas or opportunities to be part of your vision.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}