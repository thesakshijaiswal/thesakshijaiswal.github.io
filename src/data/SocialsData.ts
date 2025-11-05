import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { IconType } from "react-icons";


export interface Socials {
  icon: IconType;
  label: string;
  heading: string;
  link: string;
}
export const socialsData: Socials[] = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    heading: "Let's Connect!",
    link: "https://www.linkedin.com/in/thesakshijaiswal",
  },
  {
    icon: PiGithubLogoFill,
    label: "GitHub",
    heading: "Check out my work!",
    link: "https://github.com/thesakshijaiswal",
  },
  {
    icon: BiLogoGmail,
    label: "Gmail",
    heading: "Copy email to clipboard",
    link: "mailto:sakshijaiswal0211@gmail.com?subject=Let's%20Connect%2C%20Sakshi!&body=Hey%20Sakshi%2C%0A%0AI%20really%20enjoyed%20checking%20out%20your%20work%20and%20wanted%20to%20reach%20out.%20Let%27s%20chat%20and%20see%20if%20there%27s%20a%20way%20we%20can%20collaborate%20or%20work%20together.%0A%0ALooking%20forward%20to%20connecting!%0A%0ACheers!",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    heading: "Follow me!",
    link: "https://x.com/Sakshi45188",
  },
];