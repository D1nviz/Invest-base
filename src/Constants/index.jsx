import firstCard from "../resources/card-1.webp";
import secondCard from "../resources/card-2.webp";
import thirdCard from "../resources/card-3.webp";
import fourthCard from "../resources/card-4.webp";
import advantage1 from "../resources/advantage-1.png";
import advantage2 from "../resources/advantage-2.png";
import advantage3 from "../resources/advantage-3.png";
import advantageIcon from "../resources/advantageIcon1.webp"
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
            ico: advantageIcon,
            text: "Take a risk assessment"
         },
         {
            ico: advantageIcon,
            text: "Get your personalized portfolio"
         },
         {
            ico: advantageIcon,
            text: "Sit back and let us do the work"
         }
      ]
   },
   {
      id: 2,
      headDesc: "Build your own portfolio",
      title: "Know your crypto? Build your own portfolio.",
      image: advantage2,
      description: [
         {
            ico: advantageIcon,
            text: "Buy and sell digital assets"
         },
         {
            ico: advantageIcon,
            text: "Convert one crypto to many, or many to one"
         },
         {
            ico: advantageIcon,
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
            ico: advantageIcon,
            text: "Manage all your crypto in one convenient app"
         },
         {
            ico: advantageIcon,
            text: "Track your portfolio anywhere, anytime"
         },
         {
            ico: advantageIcon,
            text: "Invest with just a few clicks"
         }
      ]
   }
]