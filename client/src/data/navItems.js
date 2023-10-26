import {
  home,
  statistics,
  budget,
  card,
  profile,
  statActive,
  homeActive,
  budgetActive,
  cardActive,
  profileActive,
} from "../assets/icons";

export const navbar = [
  {
    title: "Home",
    path: "/userdashboard",
    icon: home,
    active: homeActive,
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: statistics,
    active: statActive,
  },
  {
    title: "Budget",
    path: "/budget",
    icon: budget,
    active: budgetActive,
  },
  {
    title: "Card",
    path: "/card",
    icon: card,
    active: cardActive,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: profile,
    active: profileActive,
  },
];
