"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type HeaderLinkType = {
  label: string;
  url: string;
};

export const Header = () => {
  const headerLinks: HeaderLinkType[] = [
    {
      label: "Inicio",
      url: "/",
    },
    {
      label: "Pacientes",
      url: "/patients",
    },
    {
      label: "Todos os Indices",
      url: "/indexes",
    },
  ];

  return (
    <NavigationMenu className="bg-yellow-500 h-16">
      <div className="container mx-auto flex justify-between px-2">
        <div className="flex flex-row items-center">
          <h1>Hospital - Desafio Anlix</h1>
        </div>
        <NavigationMenuList>
          {headerLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.url}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};
