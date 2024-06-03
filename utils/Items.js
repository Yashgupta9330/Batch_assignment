import iPhone135 from "../public/iPhone135Copy.png"
import Group12 from "../public/Group12.png"
import star from "../public/star.png";
import cube1 from "../public/cube1.png";
import cube4 from "../public/cube4.png";
import User1 from "../public/User1.png";
import User2 from "../public/User2.png";
import User3 from "../public/User3.png";
import User4 from "../public/User4.png";
import User5 from "../public/User5.png";
import Group35 from "../public/Group35.png";
import Group351 from "../public/Group351.png";

export  const items = ["Home", "About Us", "Pricing", "Features"];

export  const sections=[
    { 
        image: iPhone135,
        alt: "iPhone",
        groupImage: Group12,
        heading: "FEATURES",
        title: "Uifry Premium",
        features: [
            { title: "Budgeting Intervals", image: star,description: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor." },
            { title: "Budgeting Intervals", image: cube1, description: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor." },
            { title: "Budgeting Intervals", image: cube4,description: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor." },
        ],
        reverse:false,
    },
    { 
        image: iPhone135,
        alt: "iPhone",
        groupImage: Group12,
        heading: "Advatnages",
        title: "Why Choose Uifry?",
        features: [
            { title: "Clever Notifications", 
            image: Group35,
            description: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam." },
        ],
       reverse:true,
    },
    { 
        image: iPhone135,
        alt: "iPhone",
        groupImage: Group12,
        features: [
            { title: "Fully Customizable", 
            image: Group351,
            description: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.." },
        ],
       reverse:false,
    },

]


export const reviews=[
    {
      id: 1,
      name: "John Doe",
      heading:"Financial Expert",
      image: User1,
      review: "Ureka has completely changed how I manage my finances. The budgeting features are incredibly useful and have helped me save more than ever before.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      heading: "Financial Planner",
      image: User2,
      review: "I love using Ureka! It's user-friendly and the clever notifications ensure I never miss an important financial decision.",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      heading: "Best Budgeting App",
      image: User3,
      review: "Ureka's premium features are worth every penny. It's like having a personal financial advisor in my pocket.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Davis",
      heading: "Budgeting Expert",
      image: User4,
      review: "The app's design is clean and easy to navigate. It makes financial planning less daunting and more approachable.",
      rating: 4,
    },
    {
      id: 5,
      name: "David Martinez",
      heading: "Budgeting App",
      image: User5,
      review: "I appreciate how customizable Ureka is. It allows me to tailor the app to fit my unique financial goals and needs.",
      rating: 5,
    },
  ];