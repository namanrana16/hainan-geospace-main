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

export const navigation = [{
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Products & Services",
        url: "#pricing",
    },
    {
        id: "2",
        title: "Blog",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Case Studies",
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

//export const roadmaptext = [Satellite data has a fast application portfolio in the mining industry];

export const roadmap = [{
        id: "0",
        title: "Environmental Protection and Resource Management",
        text: "By utilizing satellite data, information regarding forest cover, land use, water resource management, and more can be provided. This will aid in the formulation of environmental protection policies, monitoring deforestation activities, and promoting sustainable resource management and conservation efforts.",
        date: "March 2018",
        status: "done",
        colorful: true,
    },
    {
        id: "1",
        title: "Disaster Monitoring – Drought Monitoring",
        text: "During the period from March to September 2022, the Horn of Africa experienced a significant deficiency in rainfall. The majority of Somalia, Kenya, and Ethiopia encountered a general rainfall deficit of 50 to 200 millimetres compared to normal years, leading to severe drought issues. This prolonged drought has had a devastating impact on the region, affecting residents' ability to cultivate crops, raise livestock, and afford food, ultimately resulting in famine.",
        date: "March 2021",
        status: "done",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Infrastructure Planning and Urban Development",
        text: "Satellite data can offer valuable information on various aspects, including urban growth, land use planning, traffic flow, and infrastructure development. This data proves instrumental for urban planners and governments in formulating well-informed urban development plans, enhancing traffic mobility, and improving infrastructure construction efficiency.",
        date: "March 2018",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Mining: SAR Imagery for Mining Applications and Solutions",
        text: "Satellite data has a fast application portfolio in the mining industry. The use of SAR imagery in mining applications is a game changer, providing a cost-effective and efficient solution for monitoring mining activities, ensuring environmental compliance, and managing mining operations.",
        date: "May 2024",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const servicesText1 = ["VHR Optical Imagery: capture stunning, detailed views of the Earth with our high-resolution optical satellite imagery. Ideal for applications requiring clear visuals, such as urban planning, infrastructure development, and environmental monitoring.\n",
    "Multispectral Imagery: Our multispectral imagery captures data across multiple wavelengths, allowing you to analyse vegetation health, water quality, and more.\n",
    "SAR Imagery: SAR imagery penetrates clouds and is effective in all weather conditions, providing reliable data for terrain mapping, infrastructure monitoring, and disaster management. It’s especially useful in areas with persistent cloud cover.\n"
];
export const servicesText2 = ["Tailored Satellite Imagery: We offer tailored satellite imagery solutions to meet unique project requirements. Whether it’s a custom geographic study, or a targeted environmental monitoring, we can customize our services to fit your needs.\n",
    "On-Demand Satellite Tasking: For time- sensitive projects, our on-demand satellite tasking service allows you to request new imagery captures on a specified date and time. This is perfect for monitoring events as they unfold or capturing imagery at critical moments.\n",
    "Data integration & Analytics: Our team of data scientists can help you integrate satellite imagery with your existing data systems and perform advanced analytics. From predictive modelling to trend analysis, we provide the expertise needed to derive actionable insights.\n"
];

export const servicesContent = [{
        id: "0",
        title: "Satellite Imagery Type",
        text: servicesText1,


    },
    {
        id: "1",
        title: "Custom Solutions",
        text: servicesText2,


    },
];

export const collabText = [
    "Our mission is to empower organizations with cutting-edge satellite imagery.\n",
    "We are dedicated to supporting diverse industries by delivering high-resolution imageries that drive informed decisions, foster innovation, and contribute to a more sustainable future.\n"
];
export const collabText2 = [
    "Expertise and Experience. \n",
    "Access to 100+ satellite images meeting all requirements of Earth Observation.\n",
    "Tailored solutions with actionable insights that matter most to clients.\n",
    "Sustainability focus to support organization's green initiatives.\n",
    "Global Impact, our EO solutions have the potential to make a positive impact on a wide range of industries.\n"
];
export const collabContent = [{
        id: "0",
        title: "Our Mission",
        text: collabText,
    },
    {
        id: "1",
        title: "Why choose us",
        text: collabText2,
    },

];

export const collabApps = [{
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

export const pricing = [{
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

export const benefits = [{
        id: "0",
        title: "Data Acquisition",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",

    },
    {
        id: "1",
        title: "Data Processing and Analysis",
        text: "Turn raw data into actionable insights with our advanced analytics tools.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",

        light: true,
    },
    {
        id: "2",
        title: "Environmental Monitoring",
        text: "Track changes in ecosystems and climate with our precise EO solutions",
        backgroundUrl: "./src/assets/benefits/card-3.svg",

    },
    {
        id: "3",
        title: "Precision Agriculture",
        text: "Optimize crop yields and resource management using satellite data",
        backgroundUrl: "./src/assets/benefits/card-4.svg",

        light: true,
    },
    {
        id: "4",
        title: "Disaster Monitoring",
        text: "Respond to emergencies quickly and effectively with real-time satellite imagery",
        backgroundUrl: "./src/assets/benefits/card-5.svg",

    },
    {
        id: "5",
        title: "Infrastructure Planning and Urban Development",
        text: "Make informed decisions about city growth and development.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",

    },
];

export const socials = [{
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