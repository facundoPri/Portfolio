import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Facundo Prieto. All Rights Reserved.`,
  author: {
    name: "Facundo Prieto",
    accounts: [
      {
        url: "https://github.com/facundopri",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      // {
      //   url: "https://linkedin.com/in/facundo-prieto",
      //   label: "LinkedIn Account",
      //   type: "gray",
      //   icon: <FaLinkedin />
      // },
      {
        url: "mailto:facundo.prieto321@gmail.com",
        label: "Mail Facundo",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
