import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/admin/dashboard" },
  { name: "Utilisateurs", icon: FiTrendingUp, link: "/admin/users" },
  { name: "Roles", icon: FiTrendingUp, link: "/admin/roles" },
  { name: "Explore", icon: FiCompass, link: "/sdfsq" },
  { name: "Favourites", icon: FiStar, link: "/sdfqsfdff" },
  { name: "Settings", icon: FiSettings, link: "/zet" },
];
