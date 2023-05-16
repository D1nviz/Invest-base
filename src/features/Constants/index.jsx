import { v4 as uuidv4 } from 'uuid';

import firstCard from "../../resources/cards/card-1.webp";
import secondCard from "../../resources/cards/card-2.webp";
import thirdCard from "../../resources/cards/card-3.webp";
import fourthCard from "../../resources/cards/card-4.webp";

import advantage1 from "../../resources/slides/advantage-1.png";
import advantage2 from "../../resources/slides/advantage-2.png";
import advantage3 from "../../resources/slides/advantage-3.png";

import advantageIcon1 from "../../resources/advantageIcon/advantageIcon1.webp";
import advantageIcon2 from "../../resources/advantageIcon/advantageIcon2.webp";
import advantageIcon3 from "../../resources/advantageIcon/advantageIcon3.webp";
import advantageIcon4 from "../../resources/advantageIcon/advantageIcon4.webp";
import advantageIcon5 from "../../resources/advantageIcon/advantageIcon5.webp";
import advantageIcon6 from "../../resources/advantageIcon/advantageIcon6.png";
import advantageIcon7 from "../../resources/advantageIcon/advantageIcon7.png";
import advantageIcon8 from "../../resources/advantageIcon/advantageIcon8.png";
import advantageIcon9 from "../../resources/advantageIcon/advantageIcon9.png";

import cnbc from "../../resources/featuredIn/cnbc.png";
import coindesk from "../../resources/featuredIn/coindesk.png";
import cointel from "../../resources/featuredIn/cointelegraph.png";
import yahoo from "../../resources/featuredIn/yahoo.png";


import activeOption from "../../resources/svg/active-option.svg";
import unActiveOption from "../../resources/svg/un-active-option.svg";

export const featuredItems = [
  cnbc,
  cointel,
  coindesk,
  yahoo
]

export const cards = [
  {
    id: 1,
    title: "Intelligent crypto management",
    description: "Our automation tools aim to keep your portfolio balanced and risk-adjusted by ensuring your assets are appropriately allocated over time.",
    thumbnail: firstCard
  },
  {
    id: 2,
    title: "Balance your risk and reward",
    description: "Take the emotions out of the equation. Stay consistent over time using our long-term investment strategies.",
    thumbnail: secondCard
  },
  {
    id: 3,
    title: "Crypto investing made simple",
    description: "Our easy-to-use platform allows you to manage your cryptocurrency portfolio in one convenient place.",
    thumbnail: thirdCard
  },
  {
    id: 4,
    title: "Keep your account safe and secure",
    description: "Path uses multi-layer security technology to protect your data",
    thumbnail: fourthCard
  }
]
export const slides = [

  {
    id: 1,
    headDesc: "Let us build your portfolio",
    title: "Automate your investing with Path Managed Portfolios.",
    image: advantage1,
    bgImg: "radial-gradient(circle at 100% 0,#11dead 7%,transparent),linear-gradient(#3554f2,#3554f2)",
    headColor: "#95d6f6",
    fntColor: "white",
    description: [
      {
        ico: advantageIcon1,
        text: "Take a risk assessment"
      },
      {
        ico: advantageIcon2,
        text: "Get your personalized portfolio"
      },
      {
        ico: advantageIcon3,
        text: "Sit back and let us do the work"
      }
    ],
    button: {
      color: "#2c74e1",
      background: "#fff"
    }
  },
  {
    id: 2,
    headDesc: "Build your own portfolio",
    title: "Know your crypto? Build your own portfolio.",
    image: advantage2,
    description: [
      {
        ico: advantageIcon4,
        text: "Buy and sell digital assets"
      },
      {
        ico: advantageIcon5,
        text: "Convert one crypto to many, or many to one"
      },
      {
        ico: advantageIcon6,
        text: "Discover and compare cryptocurrencies"
      }
    ]
  },
  {
    id: 3,
    headDesc: "Crypto on-the-go",
    title: "Your crypto portfolio in your pocket.",
    image: advantage3,
    description: [
      {
        ico: advantageIcon7,
        text: "Manage all your crypto in one convenient app"
      },
      {
        ico: advantageIcon8,
        text: "Track your portfolio anywhere, anytime"
      },
      {
        ico: advantageIcon9,
        text: "Invest with just a few clicks"
      }
    ]
  }
]

export const featuresItems = [
  {
    id: uuidv4(),
    title: "Do your own research",
    path: unActiveOption,
    cryptoExchanges: activeOption
  },
  {
    id: uuidv4(),
    title: "Registered Robo-Investment Advisor",
    path: activeOption,
    cryptoExchanges: unActiveOption
  },
  {
    id: uuidv4(),
    title: "Risk-adjusted portfolios",
    path: activeOption,
    cryptoExchanges: unActiveOption
  },
  {
    id: uuidv4(),
    title: "Leverage trading",
    path: unActiveOption,
    cryptoExchanges: activeOption
  },
  {
    id: uuidv4(),
    title: "Educational resources",
    path: activeOption,
    cryptoExchanges: activeOption
  }
]