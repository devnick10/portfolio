import { Icons } from "@/components/icons";
import { HomeIcon, } from "lucide-react";

export const DATA = {
  name: "Nikhil Bhoyar",
  initials: "NB", 
  url: "https://github.com/devnick10",
  location: "Nagpur, Maharashtra", 
  locationLink: "https://www.google.com/maps/place/Nagpur", 
  description:
    "Fresher web developer passionate about building scalable and user-friendly applications. I love learning new technologies and solving real-world problems.", 
  summary:
    "I am a fresher web developer with a strong foundation in modern web technologies. I recently completed my Bachelor's degree in Computer Science and have built several projects, including a credit-based SaaS application for media processing. I am actively learning and improving my skills in React, Next.js, and TypeScript.",
  avatarUrl: "/me.jpg", 
  skills: [
    "React",
    "Next.js",
    "TypeScript", // Currently learning
    "Node.js",
    "TailwindCSS",
    "Prisma",
    "Postgres", // Used in projects
    "Docker", // Basic knowledge
    "Java", // Basic knowledge
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "bhoyarnikhil683@gmail.com",
    tel: "+919373372037",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devnick10",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-bhoyar-nb1010/", 
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Nikhil10_02", 
        icon: Icons.x,
        navbar: true,
      },
    },
  },


  education: [
    {
      school: "RTMNU University",
      href: "https://nagpuruniversity.ac.in",      degree: "B.Sc Computer Science",
      logoUrl: "https://nagpuruniversity.ac.in/images/rtmnu-logo.png", 
      start: "07/2020",
      end: "07/2023",
    },
  ],

  projects: [
    {
      title: "Resizely - Media Processing SaaS",
      href: "https://github.com/devnick10/resizely_saas", 
      dates: "2023 - Present",
      active: true,
      description:
        "Resizely is a credit-based SaaS application designed to make media processing easy and efficient. Users can resize images, compress videos, and remove backgrounds, with a credit system that provides free credits and a seamless Razorpay integration for purchasing more.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "Postgres",
        "Cloudinary",
        "Clerk",
        "Razorpay",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/devnick10/resizely_saas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resizely.png", 
      video: "", 
    },
    {
      title: "Video Streaming App (Backend) – TypeScript",
      href: "https://github.com/devnick10/rest_api_videotube_app", 
      dates: "2023 - Present",
      active: true,
      description:
        "A scalable and secure REST API for a video streaming platform where users can upload, watch, and share videos. It features high-quality streaming, Cloudinary-powered media storage, and JWT-based authentication for secure access. Users can post tweets, engage with the community, and comment on videos, making it a dynamic and interactive platform.",
      technologies: [
        "Express",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/devnick10/rest_api_videotube_app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/video_streaming_backend.png", 
      video: "", 
    },

  ],

} as const;