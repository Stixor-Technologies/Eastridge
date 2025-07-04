import Building from "@/public/images/building.png";
import BuildingFront from "@/public/images/building-front.png";
import BuildingSide from "@/public/images/building-side.png";

import BuildingMobile from "@/public/images/building-mobile.png";
import BuildingFrontMobile from "@/public/images/building-front-mobile.png";
import BuildingSideMobile from "@/public/images/building-side-mobile.png";

const MENU = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#department", label: "Department" },
  { id: "#team", label: "Team" },
  { id: "#contact-us", label: "Contact Us" },
];

const HERO_SLIDER_IMAGES = [
  {
    id: "building-front",
    src: BuildingFront,
    mobileSrc: BuildingFrontMobile,
    alt: "Building Front",
  },
  {
    id: "building-side",
    src: BuildingSide,
    mobileSrc: BuildingSideMobile,
    alt: "Building Side",
  },
  {
    id: "building",
    src: Building,
    mobileSrc: BuildingMobile,
    alt: "Building",
  },
];

export { MENU, HERO_SLIDER_IMAGES };
