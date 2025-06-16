import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      demoLink: "#",
      githubLink: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application displaying forecasts, historical data, and interactive maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      tags: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      demoLink: "#",
      githubLink: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with user authentication.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "Auth.js"],
      demoLink: "#",
      githubLink: "#",
      category: "fullstack"
    },
    {
      id: 5,
      title: "API Service",
      description: "A RESTful API service for data management with comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
      demoLink: "#",
      githubLink: "#",
      category: "backend"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a modern design.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
      category: "frontend"
    }
  ];

  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="container px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">My Projects</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Here's a collection of my recent work. Each project represents different skills 
        and technologies I've worked with.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Button 
          variant={filter === "all" ? "default" : "outline"} 
          onClick={() => setFilter("all")}
        >
          All Projects
        </Button>
        <Button 
          variant={filter === "frontend" ? "default" : "outline"} 
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </Button>
        <Button 
          variant={filter === "backend" ? "default" : "outline"} 
          onClick={() => setFilter("backend")}
        >
          Backend
        </Button>
        <Button 
          variant={filter === "fullstack" ? "default" : "outline"} 
          onClick={() => setFilter("fullstack")}
        >
          Full Stack
        </Button>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}