// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: 'https://arpitneewaliya.github.io',
  base: '/my-personal-docs/',
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: "DevHaiku",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/arpitneewaliya/my-personal-docs",
        },
      ],
      sidebar: [
        {
          label: "Object Oriented Programming(OOP)",
          items: [
            { label: "Introduction", slug: "oop/intro" },
            { label: "Inheritance", slug: "oop/inheritance" },
            { label: "Abstraction", slug: "oop/abstraction" },
            { label: "Polymorphism", slug: "oop/polymorphism" },
            { label: "Encapsulation", slug: "oop/encapsulation" },
          ],
        },
        {
          label: "Git",
          items: [{ label: "Basics", slug: "git/basics" }],
        },
      ],
    }),
  ],
});
