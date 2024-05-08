import { EmailIcon } from "../assets/Email";
import FacebookIcon from "../assets/Facebook";
import GithubIcon from "../assets/Github";
import LocationIcon from "../assets/Location";
import { PhoneIcon } from "../assets/Phone";
import TwitterIcon from "../assets/Twitter";
import { IUserContact } from "../utils/type";

export const UserContact:IUserContact[] = [
  {
    label: "Email",
    value: "katwalnelson8@gmail.com",
    Icon: EmailIcon,
  },
  {
    label: "Phone",
    value: "+977 9876543210",
    Icon: PhoneIcon,
  },
  {
    label: "Location",
    value: "Mulpani-6,Kageshowri-Manohara,kathmandu",
    Icon: LocationIcon,
  },
];


export const SocialMedias =[
  {
    label:'Facebook',
    Icon:FacebookIcon
  },
  {
    label:'Twitter',
    Icon:TwitterIcon
  },
  {
    label:'Github',
    Icon:GithubIcon
  }
]