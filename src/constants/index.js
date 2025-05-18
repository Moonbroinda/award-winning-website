import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
export const experiences = [
  {
    title: "Веб хөгжүүлэлтийн 1-р шат",
    job: "Үндсэн HTML, CSS, Bootstrap",
    date: "1-р сар",
    contents: [
      "🟢 HTML-ийн үндсэн бүтэц, элементүүдийг сурах",
      "🎨 CSS ашиглан вэб хуудсыг гоё сайхан болгох",
      "⚡ Bootstrap ашиглаж хурдан, уян хатан загвар хийх",
      "✅ Энэ шатны эцэст та үндсэн, хариу үйлдэлтэй веб сайт бүтээж чадна."
    ],
  },
  {
    title: "Веб хөгжүүлэлтийн 2-р шат",
    job: "React болон орчин үеийн JavaScript",
    date: "2-р сар",
    contents: [
      "📘 JavaScript-ийн орчин үеийн ES6+ боломжуудыг эзэмших",
      "⚛️ React-ийн үндсэн ойлголтууд: компонент, state, props",
      "🛣️ React Router ашиглан олон хуудстай апликейшн хийх",
      "🔗 API-тай харилцах fetch, axios ашиглах",
      "✅ Энэ шатны эцэст та интерактив React вэб апликейшн бүтээх чадвартай болно."
    ],
  },
  {
    title: "Веб хөгжүүлэлтийн 3-р шат",
    job: "Дэвшилтэт React ба төслийн ажил",
    date: "3-р сар",
    contents: [
      "🗂️ State удирдлагын аргачлалууд (Context API эсвэл Redux)",
      "🎣 React hooks-уудыг (useState, useEffect г.м) ашиглах",
      "🚀 Бие даасан бүрэн төслийг бүтээх",
      "🌐 Веб апликейшнээ live-д байршуулж, хөгжүүлэлт хийх",
      "✅ Энэ шатны төгсгөлд та дэвшилтэт React ойлголтуудыг эзэмшин, өөрийн төслийг амжилттай гаргах болно."
    ],
  },
];
export const contentCreatorStages = [
  {
    title: "Контент бүтээгчийн 1-р шат",
    job: "Видео засварлах ба график дизайн",
    date: "1-р сар",
    contents: [
      "🎬 Видео засварлах үндсэн программ хангамж: DaVinci Resolve, Premiere Pro, After Effects-ийг сурах",
      "🖌️ График дизайн: Photoshop болон холбоотой програмуудыг эзэмших",
      "⚙️ Видео эффект, өнгө засвар, хөдөлгөөнт график хийх үндэс",
      "✅ Энэ шатны төгсгөлд та видео болон график дизайны үндсэн чадвартай болно."
    ],
  },
  {
    title: "Контент бүтээгчийн 2-р шат",
    job: "Видеограф ба контент бүтээх арга барил",
    date: "2-р сар",
    contents: [
      "📹 Видеографийн үндсэн ойлголтууд, камерын ажиллагаа",
      "🎥 Видео бичлэгийн зохион байгуулалт, кадр, гэрэл зураглал",
      "🔊 Дуу бичлэг, засварлах, контентын яриа, субтитр хийх",
      "✅ Энэ шатанд та чанартай контент бүтээх арга барил эзэмших болно."
    ],
  },
  {
    title: "Контент бүтээгчийн 3-р шат",
    job: "Дижитал маркетинг ба кино урлаг (Cinematography)",
    date: "3-р сар",
    contents: [
      "🚀 Дижитал маркетингийн үндсэн ойлголтууд, нийгмийн сүлжээ ашиглах стратеги",
      "🎞️ Cinematography - кино зураг авалт, гэрэл, угсралтын нарийн мэдлэг",
      "🤖 AI хэрэгсэл ашиглан контент бүтээх, засварлах, оновчтой болгох",
      "📈 Контент маркетинг ба үзэгчдийг татах тактикууд",
      "✅ Энэ шатанд та орчин үеийн дижитал ертөнцөд амжилттай контент бүтээх чадвартай болно."
    ],
  },
];

