import { Icons } from "@/components/icons";
import { HomeIcon, } from "lucide-react";

export const DATA = {
  name: "Nikhil Bhoyar",
  initials: "NB",
  url: "https://github.com/devnick10",
  location: "Nagpur, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Nagpur",
  description:
    "I am a full stack developer passionate about creating scalable and user-friendly applications. Always eager to learn new technologies and solve real-world problems, I strive to build efficient and impactful solutions.",
  summary:
    "I’m a web developer with a strong foundation in modern technologies. I recently completed my Bachelor's in Computer Science and built several projects, including a credit-based SaaS app for media processing. I specialize in React, Next.js, and TypeScript, constantly learning to improve my full-stack skills. Let’s connect and build something awesome! 🚀.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Redux",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Hono",
    "TailwindCSS",
    "Prisma",
    "Redis",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "MongoDB",
    "AWS",
    "Cloudflare Workers",
    "Turborepo"
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
      href: "https://nagpuruniversity.ac.in", degree: "B.Sc Computer Science",
      logoUrl: "https://nagpuruniversity.ac.in/images/rtmnu-logo.png",
      start: "07/2020",
      end: "07/2023",
    },
  ],

  projects: [
    {
      title: "PayWallet – Peer-to-Peer Payment App",
      href: "https://github.com/devnick10/pay-wallet",
      dates: "2025 - Present",
      active: true,
      description:
        "A full-stack UPI-style payment platform enabling secure user authentication, peer-to-peer transfers, and transaction tracking. Features include OTP-based login (Twilio), real-time balance updates, and seamless fund transfers. Built in a monorepo with Turborepo, the user app is fully integrated with the merchant ecosystem.",
      technologies: [
        "Next.js",
        "Turborepo",
        "TypeScript",
        "TailwindCSS",
        "ShadCN UI",
        "Prisma",
        "PostgreSQL",
        "Twilio",
        "NextAuth",
        "Express.js",
        "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://pay-wallet.devnikhil.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/devnick10/pay-wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pay-wallet.png",
      video: "",
    }
    ,
    {
      title: "PayWallet Business – Merchant Portal",
      href: "https://github.com/devnick10/pay-wallet",
      dates: "2025 - Present",
      active: true,
      description:
        "A dedicated merchant platform that complements the PayWallet user app, providing dashboards for managing transactions, payments received, and customer verification. Built within a Turborepo monorepo architecture, it includes secure admin access, earnings insights, QR code generation, and bank webhook integration.",
      technologies: [
        "Next.js",
        "Turborepo",
        "TypeScript",
        "TailwindCSS",
        "ShadCN UI",
        "Prisma",
        "PostgreSQL",
        "Twilio",
        "NextAuth",
        "Express.js",
        "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://paywallet-merchant.devnikhil.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/devnick10/pay-wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/merchantlandingPage.png",
      video: "",
    },
    {
      title: "Resizely - Media Processing SaaS",
      href: "https://github.com/devnick10/resizely_saas",
      dates: "2025 - Present",
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
        "NextAuth",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://resizely.devnikhil.xyz",
          icon: <Icons.globe className="size-3" />,
        },
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
      title: "Ashoka Candy - Rani Agro Food (Product Landing Page)",
      href: "https://raniagrofood.com",
      dates: "2025 - Present",
      active: true,
      description:
        "Official product showcase website for Ashoka Candy manufactured by Rani Agro Food. The responsive landing page highlights our premium fruit candies with sections for product features, manufacturing process, company information, and contact details. Includes interactive elements like product filtering and factory location mapping.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google Maps API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.raniagrofood.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/devnick10/candy_store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/candy-store.png",
      video: "",
    },
    {
      title: "Brainly App",
      href: "https://github.com/devnick10/brainly_app",
      dates: "2025 - Present",
      active: true,
      description:
        "Brainly is a simple and powerful web application that allows users to save and share content (like YouTube and Twitter links) for watching later. Think of it as your personal &apos;watch later&apos; vault, with easy sharing capabilities.",
      technologies: [
        "Express",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "JWT",
        "React",
        "TanstackQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://brainly.devnikhil.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/devnick10/brainly_app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/brainly.png",
      video: "",
    },
    {
      title: "Video Streaming App (Backend)",
      href: "https://github.com/devnick10/rest_api_videotube_app",
      dates: "2024 - Present",
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
    }
  ],

} as const;
