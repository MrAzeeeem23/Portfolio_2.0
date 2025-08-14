import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Skills = [
  {
    Name: "React",
    Link: "https://skillicons.dev/icons?i=react",
  },
  {
    Name: "Next.Js",
    Link: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    Name: "javaScrpt",
    Link: "https://skillicons.dev/icons?i=js",
  },
  {
    Name: "MongoDB",
    Link: "https://skillicons.dev/icons?i=mongodb",
  },
  {
    Name: "Express Js",
    Link: "https://skillicons.dev/icons?i=expressjs",
  },
  {
    Name: "Node",
    Link: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    Name: "Java",
    Link: "https://skillicons.dev/icons?i=java",
  },
  {
    Name: "SpringBoot",
    Link: "https://skillicons.dev/icons?i=spring",
  },
  {
    Name: "Postman",
    Link: "https://skillicons.dev/icons?i=postman",
  },
  {
    Name: "GCP",
    Link: "https://skillicons.dev/icons?i=gcp",
  },
  {
    Name: "GitHub",
    Link: "https://skillicons.dev/icons?i=github",
  },
  {
    Name: "git",
    Link: "https://skillicons.dev/icons?i=git",
  },
  {
    Name: "Intelij",
    Link: "https://skillicons.dev/icons?i=idea",
  },
  {
    Name: "mysql",
    Link: "https://skillicons.dev/icons?i=mysql",
  },
  {
    Name: "netlify",
    Link: "https://skillicons.dev/icons?i=netlify",
  },
  {
    Name: "npm",
    Link: "https://skillicons.dev/icons?i=npm",
  },
  {
    Name: "postgres",
    Link: "https://skillicons.dev/icons?i=postgres",
  },
  {
    Name: "powershell",
    Link: "https://skillicons.dev/icons?i=powershell",
  },
  {
    Name: "python",
    Link: "https://skillicons.dev/icons?i=py",
  },
  {
    Name: "redux",
    Link: "https://skillicons.dev/icons?i=redux",
  },
  {
    Name: "tailwind",
    Link: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    Name: "vercel",
    Link: "https://skillicons.dev/icons?i=vercel",
  },
  {
    Name: "vite	",
    Link: "https://skillicons.dev/icons?i=vite",
  },
  {
    Name: "vscode",
    Link: "https://skillicons.dev/icons?i=vscode",
  },
];

function SkillsMarquee() {
  return (
<div className="w-full my-12">
  <Marquee gradient={true} gradientColor="black" gradientWidth={500} pauseOnHover={false} speed={50}>
    {Skills.map((icon, index) => (
      <div
        key={index}
        className="flex-shrink-0 flex items-center justify-center"
      >
        <img
          src={`${icon.Link},theme=dark`}
          alt={icon.Name}
          className="h-10 sm:h-10 md:h-14 lg:h-16 w-auto object-contain grayscale-0"
        />
      </div>
    ))}
  </Marquee>
</div>

  );
}

export default SkillsMarquee;
