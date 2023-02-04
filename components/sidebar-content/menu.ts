import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/admin/dashboard" },
  { name: "Trending", icon: FiTrendingUp, link: "/test" },
  { name: "Explore", icon: FiCompass, link: "/sdfsq" },
  { name: "Favourites", icon: FiStar, link: "/sdfqsfdff" },
  { name: "Settings", icon: FiSettings, link: "/zet" },
];
