import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SkillBadge from "@/components/SkillBadge";

export default function AboutPage() {
  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs", "GraphQL"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "Webpack", "Figma", "Jest", "CI/CD"]
  };

  const timeline = [
    {
      year: "2023-Present",
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web standards."
    },
    {
      year: "2020-2023",
      title: "Web Developer",
      company: "Digital Solutions LLC",
      description: "Built responsive web applications and e-commerce platforms using React, Node.js, and various databases."
    },
    {
      year: "2018-2020",
      title: "Junior Developer",
      company: "StartUp Studio",
      description: "Collaborated on web projects, learned modern development practices, and contributed to frontend implementations."
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "Tech University",
      description: "Graduated with honors, specialized in web technologies and software engineering principles."
    }
  ];

  return (
    <div className="container px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-10">About Me</h1>
      
      {/* Bio Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold">My Journey</h2>
            <p className="text-muted-foreground">
              I'm a passionate web developer with over 5 years of experience building modern web applications. 
              My journey in tech began with a curiosity about how websites work, which led me to pursue a 
              degree in Computer Science.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've worked with a variety of clients from startups to established enterprises, 
              helping them achieve their digital goals through thoughtful and efficient solutions.
            </p>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies 
              and best practices. When I'm not coding, you can find me hiking, reading tech blogs, or experimenting 
              with new frameworks and tools.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Experience & Education</h2>
        
        <div className="relative border-l border-muted-foreground/30 pl-6 ml-3">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2"></div>
              
              <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <div className="text-muted-foreground mb-2">{item.company}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}