"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  UserGroupIcon,
  CustomerService01Icon,
  News01Icon,
  Mail01Icon,
  Moon02Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { usePathname, useRouter } from "next/navigation";
import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";

interface SiteDockProps {
  onContactClick?: () => void;
}

export function SiteDock({ onContactClick }: SiteDockProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = (href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(href);
  };

  const isDark = mounted && resolvedTheme === "dark";

  const isHome = pathname === "/";
  const isAbout = pathname === "/about" || pathname.startsWith("/about/");
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");
  const isContact = pathname === "/contact" || pathname.startsWith("/contact/");

  const items: FloatingDockItem[] = [
    {
      title: "Home",
      icon: (
        <HugeiconsIcon
          icon={Home01Icon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "/",
      onClick: () => handleNavigate("/"),
      active: isHome,
    },
    {
      title: "About",
      icon: (
        <HugeiconsIcon
          icon={UserGroupIcon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "/about",
      onClick: () => handleNavigate("/about"),
      active: isAbout,
    },
    {
      title: "Services",
      icon: (
        <HugeiconsIcon
          icon={CustomerService01Icon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "/services",
      onClick: () => handleNavigate("/services"),
      active: isServices,
    },
    {
      title: "Blog",
      icon: (
        <HugeiconsIcon
          icon={News01Icon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "/blog",
      onClick: () => handleNavigate("/blog"),
      active: isBlog,
    },
    {
      title: "Contact",
      icon: (
        <HugeiconsIcon
          icon={Mail01Icon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "/contact",
      onClick: () => {
        if (onContactClick) {
          onContactClick();
        } else {
          handleNavigate("/contact");
        }
      },
      active: isContact,
    },
    {
      title: isDark ? "Light Mode" : "Dark Mode",
      icon: isDark ? (
        <HugeiconsIcon
          icon={Sun01Icon}
          className="h-full w-full text-amber-400 dark:text-amber-300"
          strokeWidth={1.8}
        />
      ) : (
        <HugeiconsIcon
          icon={Moon02Icon}
          className="h-full w-full text-current"
          strokeWidth={1.8}
        />
      ),
      href: "#theme",
      onClick: () => setTheme(isDark ? "light" : "dark"),
      active: false,
    },
  ];

  return (
    <nav
      aria-label="Floating Navigation Dock"
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <FloatingDock items={items} />
    </nav>
  );
}
