"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin01Icon,
  NewTwitterIcon,
  Mail01Icon,
  GithubIcon,
} from "@hugeicons/core-free-icons";

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  socials: {
    icon: React.ReactNode;
    label: string;
    link: string;
  }[];
}

export const DEFAULT_BPO_TEAM: TeamMember[] = [
  {
    name: "Marcus Vance",
    role: "Chief Operating Officer",
    specialty: "Ex-Zendesk • 16 yrs CX Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    socials: [
      {
        icon: (
          <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Marcus Vance on LinkedIn",
        link: "https://linkedin.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} className="size-4" />
        ),
        label: "Marcus Vance on X",
        link: "https://x.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Email Marcus Vance",
        link: "mailto:marcus@aura.com",
      },
    ],
  },
  {
    name: "Elena Rostova",
    role: "VP of Workforce & QA",
    specialty: "Specialized in 24/7 Elastic Capacity",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    socials: [
      {
        icon: (
          <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Elena Rostova on LinkedIn",
        link: "https://linkedin.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} className="size-4" />
        ),
        label: "Elena Rostova on X",
        link: "https://x.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Email Elena Rostova",
        link: "mailto:elena@aura.com",
      },
    ],
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Head of SLA & Governance",
    specialty: "Fintech & Incident Triage Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    socials: [
      {
        icon: (
          <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Tariq Al-Mansoor on LinkedIn",
        link: "https://linkedin.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={GithubIcon} strokeWidth={2} className="size-4" />
        ),
        label: "Tariq Al-Mansoor on GitHub",
        link: "https://github.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Email Tariq Al-Mansoor",
        link: "mailto:tariq@aura.com",
      },
    ],
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Global Delivery",
    specialty: "Multilingual Follow-the-Sun Pods",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: [
      {
        icon: (
          <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Sarah Jenkins on LinkedIn",
        link: "https://linkedin.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} className="size-4" />
        ),
        label: "Sarah Jenkins on X",
        link: "https://x.com",
      },
      {
        icon: (
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
        ),
        label: "Email Sarah Jenkins",
        link: "mailto:sarah@aura.com",
      },
    ],
  },
];

interface Team02Props {
  team?: TeamMember[];
  className?: string;
}

export function Team02({ team = DEFAULT_BPO_TEAM, className }: Team02Props) {
  return (
    <section
      id="team"
      className={`w-full py-20 sm:py-28 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden ${
        className ?? ""
      }`}
    >
      <div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* ── Top Header Section (Aligned with Site Design) ── */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading leading-[1.15]">
                Engineered by veterans of enterprise scale.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Our operations directors and QA architects bring decades of collective governance across high-stakes customer care and technical helpdesks.
            </p>
          </motion.div>

          {/* ── 4-Column Responsive Executive Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 w-full">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex flex-col items-start"
              >
                {/* Image Container with Sophisticated Overlays */}
                <div className="relative w-full aspect-[4/5] sm:h-84 overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Hover Curtain */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
                    {/* Specialty Chip */}
                    <span className="text-[11px] font-mono text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 line-clamp-1 max-w-[55%]">
                      {member.specialty}
                    </span>

                    {/* Social Action Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex size-8 sm:size-8.5 items-center justify-center rounded-lg bg-white/95 dark:bg-forest-surface text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-md transition-colors shadow-xs"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name, Role & Specialty Details */}
                <div className="flex flex-col mt-3.5 sm:mt-4 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-mono font-medium text-forest-surface dark:text-primary mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team02;
