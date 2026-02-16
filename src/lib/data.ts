export interface ProjectScreenshot {
  url: string;
  alt: string;
}

export interface FeaturedProject {
  title: string;
  slug: string;
  tech: string[];
  description: string;
  longDescription: string;
  features: string[];
  image?: string;
  screenshots: ProjectScreenshot[];
  github?: string;
  homepage?: string;
}

export const profileData = {
  profile: {
    name: "Rahmad Noor Ikhsan",
    title: "Android Developer & Lead Technical Support",
    location: "Indonesia",
    tagline: "Built with the precision of an Android Dev. Maintained with the discipline of Tech Support. I engineer systems that endure.",
    links: {
      linkedin: "https://www.linkedin.com/in/rhmdnrikhsn/",
      github: "https://github.com/rahmadnoorikhsan",
      email: "rahmadnoorikhsan@gmail.com"
    }
  },
  about: {
    summary: "I don't just build apps—I engineer reliability. My background as Lead Technical Support gave me an obsession with stability; I treat every bug report as a lesson. As an Android Developer, I translate that discipline into clean, battle-tested code.\n\nLeadership means lifting others up. I've mentored 100+ developers through IDCamp and Infinite Learning, turning juniors into engineers who ship code they're proud of.",
    longBio: "Most developers write code. I aim to build systems that survive real-world chaos.\n\nMy path is unconventional: Lead Technical Support by day, Android Developer by passion. This dual role gives me full-stack perspective—from infrastructure monitoring with Grafana to pixel-perfect Compose UIs. When your morning starts with incident reports and ends with pull requests, you learn to code differently: defensively and efficiently.\n\nI've guided 100+ developers through intensive programs. My mentorship philosophy is simple: ship code that doesn't wake you up at 3 AM.\n\nMy stack runs deep: Kotlin, Flutter, Linux, and backend observability. Not just to list them on a CV, but because understanding the full pipeline allows me to solve problems others miss.\n\nNext move: Master's in Business Tech/Applied AI. The goal isn't just to build products—it's to master the strategy behind them.",
    goals: "Exploring opportunities in Master's degrees for Business Technology or Applied AI."
  },
  skills: {
    mobile: ["Android Native (Kotlin)", "Jetpack Compose", "Flutter", "Dart"],
    backend_infra: ["Laravel", "Linux System Admin", "Grafana", "Prometheus", "SSH"],
    mentorship: ["Public Speaking", "Curriculum Development", "Agile Method", "Project Management"]
  },
  experience: [
    {
      role: "Lead Technical Support",
      company: "Tamtech International",
      period: "Nov 2025 - Present",
      type: "professional",
      description: "Spearhead a cross-functional support team, orchestrating system reliability initiatives and establishing comprehensive knowledge transfer protocols to ensure seamless operations."
    },
    {
      role: "Multi-Platform App Developer Cohort",
      company: "BEKUP (Baparekraf for Startup)",
      period: "Jul 2025 - Present",
      type: "education",
      description: "Architecting production-grade Flutter applications while applying SOLID principles and integrating AI/ML capabilities. Delivered MVP capstone demonstrating full-stack mobile proficiency."
    },
    {
      role: "Freelance Mobile Developer",
      company: "Fastwork Technologies Indonesia",
      period: "Dec 2023 - Present",
      type: "professional",
      description: "Deliver end-to-end mobile solutions for diverse clients—from concept to deployment. Architect clean, maintainable Android (Kotlin/Compose) and Flutter applications while providing strategic technical consultation."
    },
    {
      role: "Discussion Squad",
      company: "Dicoding Indonesia",
      period: "Jun 2024 - Present",
      type: "volunteering",
      description: "Empower aspiring developers by providing technical guidance and debugging support across Dicoding's learning platform, accelerating student progression through complex programming challenges."
    },
    {
      role: "Expert Android Development Facilitator",
      company: "Indosat Ooredoo Hutchison Digital Camp",
      period: "May 2025 - Oct 2025",
      type: "mentorship",
      description: "Facilitated advanced Android mastery for 25 developers through live synchronous sessions. Orchestrated curriculum delivery in partnership with Dicoding, driving high participant completion rates."
    },
    {
      role: "Machine Learning Cohort",
      company: "Coding Camp (DBS Foundation)",
      period: "Feb 2025 - Jul 2025",
      type: "education",
      description: "Acquired comprehensive ML expertise spanning Python pipelines, SQL analytics, and full model training lifecycles—from data preprocessing to production-ready deployment."
    },
    {
      role: "Intermediate Android Development Facilitator",
      company: "Indosat Ooredoo Hutchison Digital Camp",
      period: "Jan 2025 - May 2025",
      type: "mentorship",
      description: "Cultivated foundational Android skills for 25 developers, guiding them through intermediate concepts while maintaining high engagement and on-time completion metrics."
    },
    {
      role: "Mobile Development Assistant Mentor",
      company: "Infinite Learning Indonesia",
      period: "Aug 2024 - Dec 2024",
      type: "mentorship",
      description: "Coordinated mentor operations and supervised hands-on coding sessions, ensuring seamless delivery of practical activities and optimizing class logistics for participants."
    },
    {
      role: "Mobile Development Technical Mentor",
      company: "Infinite Learning Indonesia",
      period: "Jan 2024 - Jul 2024",
      type: "mentorship",
      description: "Spearheaded Kotlin and Jetpack Compose curriculum delivery for 25 mentees in the Kampus Merdeka program. Guided learners through research, design, and development phases using Agile methodologies."
    },
    {
      role: "Mobile Development Cohort",
      company: "Bangkit Academy (Google, Gojek, Tokopedia, Traveloka)",
      period: "Feb 2023 - Jul 2023",
      type: "education",
      description: "Progressed through Google's intensive Android curriculum from fundamentals to expert level. Collaborated on a cross-functional capstone integrating Cloud Computing and Machine Learning."
    }
  ],
  featuredProjects: [
    {
      title: "Wavies",
      slug: "wavies",
      tech: ["Android", "Kotlin", "Clean Architecture", "MVVM"],
      description: "A movie discovery app built for Dicoding's Android Developer Expert class. Features clean architecture, modularization, SQLCipher encryption, and SSL pinning.",
      longDescription: "Wavies is a comprehensive movie discovery application developed as the capstone project for Dicoding's Android Developer Expert certification. The app demonstrates advanced Android development practices including clean architecture with a fully modularized codebase, ensuring each layer (data, domain, presentation) is independently testable and maintainable.\n\nSecurity is a first-class concern in Wavies. The app implements SQLCipher for encrypted local database storage, protecting user favorites and cached data. Network communications are secured through certificate pinning (SSL pinning), preventing man-in-the-middle attacks. These security measures reflect real-world production standards.\n\nThe architecture follows the MVVM pattern with reactive streams, leveraging Kotlin Coroutines and Flow for asynchronous operations. Dependency injection is handled cleanly, and the app features a smooth, intuitive UI that makes discovering and saving movies a delightful experience.",
      features: [
        "Clean Architecture with full modularization (app, core, favorite)",
        "SQLCipher encryption for secure local database",
        "SSL/Certificate pinning for network security",
        "MVVM pattern with Kotlin Coroutines & Flow",
        "Favorite movie management with encrypted storage",
        "Now Playing & popular movie browsing",
        "Search functionality with real-time results",
        "Dynamic feature module for favorites"
      ],
      image: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/screenshot/home.jpg", alt: "Wavies Home Screen" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/screenshot/detail.jpg", alt: "Wavies Movie Detail" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/screenshot/favorite.jpg", alt: "Wavies Favorites" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/screenshot/now%20playing.jpg", alt: "Wavies Now Playing" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Wavies/master/screenshot/searching.jpg", alt: "Wavies Search" },
      ],
      github: "https://github.com/rahmadnoorikhsan/Wavies",
    },
    {
      title: "Moodvies",
      slug: "moodvies",
      tech: ["Android", "Kotlin", "Hilt", "Paging 3"],
      description: "A movie recommendation app that helps users discover films based on genre preferences, trailers, and reviews. Built with MVVM, Retrofit, and Material Design 3.",
      longDescription: "Moodvies is a feature-rich movie recommendation application designed to help users discover their next favorite film. The app provides a curated experience with genre-based recommendations, full movie details including trailers and reviews, all wrapped in a modern Material Design 3 interface.\n\nBuilt with a robust tech stack, Moodvies leverages Hilt for dependency injection, Paging 3 for efficient data loading of large movie lists, and Retrofit for seamless API communication with The Movie Database (TMDB). The MVVM architecture ensures clean separation of concerns and testability.\n\nThe user experience is central to Moodvies—from smooth infinite scrolling through movie catalogs to immersive detail pages with embedded trailers. The app demonstrates proficiency in modern Android development patterns while delivering a polished, production-quality experience.",
      features: [
        "Genre-based movie recommendations",
        "Movie detail with trailers and reviews",
        "Paging 3 for smooth infinite scrolling",
        "Hilt dependency injection",
        "Material Design 3 UI components",
        "MVVM architecture with Retrofit",
        "TMDB API integration",
        "Responsive and polished UI"
      ],
      image: "https://raw.githubusercontent.com/rahmadnoorikhsan/Moodvies/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Moodvies/master/screenshots/home.jpg", alt: "Moodvies Home Screen" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Moodvies/master/screenshots/detail.jpg", alt: "Moodvies Movie Detail" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Moodvies/master/screenshots/reviews.jpg", alt: "Moodvies Reviews" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Moodvies/master/screenshots/trailer.jpg", alt: "Moodvies Trailer" },
      ],
      github: "https://github.com/rahmadnoorikhsan/Moodvies",
    },
    {
      title: "StoryDicoding",
      slug: "storydicoding",
      tech: ["Android", "Kotlin", "Maps", "Paging"],
      description: "A social story sharing platform built as the final submission for Dicoding's Android Intermediate class during Bangkit Academy 2023. Features maps, camera, and paging.",
      longDescription: "StoryDicoding is a social story sharing platform developed as the final submission for Dicoding's Android Intermediate course during the Bangkit Academy 2023 program. The app allows users to capture and share stories with photos, complete with location tagging on an interactive map.\n\nThe application showcases intermediate Android skills including camera integration for capturing story photos, Google Maps for viewing story locations, and Paging 3 for efficient story feed loading. User authentication is handled through a secure login/registration system.\n\nStoryDicoding demonstrates practical implementation of Android components commonly used in production apps—from handling camera permissions and image uploads to displaying geolocation data on maps. The clean UI makes sharing and browsing stories intuitive and engaging.",
      features: [
        "Story sharing with photo capture",
        "Camera integration with gallery support",
        "Google Maps for story location display",
        "Paging 3 for efficient story feed",
        "User authentication (Sign in / Sign up)",
        "Location tagging for stories",
        "Splash screen with branding",
        "Clean and intuitive UI"
      ],
      image: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Home%20Screen.jpg", alt: "StoryDicoding Home Screen" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Detail.jpg", alt: "StoryDicoding Story Detail" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Camera.jpg", alt: "StoryDicoding Camera" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Maps.jpg", alt: "StoryDicoding Maps" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Sign%20in.jpg", alt: "StoryDicoding Sign In" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Sign%20up.jpg", alt: "StoryDicoding Sign Up" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/StoryDicoding/master/screenshot/Splash.jpg", alt: "StoryDicoding Splash Screen" },
      ],
      github: "https://github.com/rahmadnoorikhsan/StoryDicoding",
    },
    {
      title: "Lestari",
      slug: "lestari",
      tech: ["Android", "Kotlin", "Jetpack Compose"],
      description: "An Indonesian culture exploration app built as the macro project at Infinite Learning. Features digital museums, articles, cultural events, and community forums.",
      longDescription: "Lestari is an Indonesian culture exploration application developed as the macro project during the Infinite Learning program. The app serves as a digital gateway to Indonesia's rich cultural heritage, featuring digital museum experiences, articles about traditional cultures, event listings, and community engagement features.\n\nBuilt entirely with Jetpack Compose, Lestari showcases modern declarative UI development on Android. The app covers a wide range of cultural content—from traditional cultures and digital museum exhibits to contemporary cultural events and community-driven articles.\n\nThe project demonstrates team collaboration and full product development lifecycle, from research and design through implementation. Lestari represents the intersection of technology and cultural preservation, making Indonesia's heritage accessible through a modern mobile experience.",
      features: [
        "Digital museum exploration",
        "Indonesian culture articles and details",
        "Cultural event listings",
        "Community forum and engagement",
        "User profile management",
        "Built entirely with Jetpack Compose",
        "Modern Material Design UI",
        "Cultural heritage preservation through technology"
      ],
      image: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/home.jpg", alt: "Lestari Home Screen" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/culture.jpg", alt: "Lestari Culture" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/museum-digital.jpg", alt: "Lestari Digital Museum" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/detail-culture.jpg", alt: "Lestari Culture Detail" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/artikel.jpg", alt: "Lestari Articles" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/watch-1.jpg", alt: "Lestari Watch" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/profile.jpg", alt: "Lestari Profile" },
        { url: "https://raw.githubusercontent.com/rahmadnoorikhsan/Lestari/master/screenshot/event-seni.jpg", alt: "Lestari Cultural Events" },
      ],
      github: "https://github.com/rahmadnoorikhsan/Lestari",
    },
    {
      title: "Asclepius",
      slug: "asclepius",
      tech: ["Android", "Kotlin", "TensorFlow Lite", "ML"],
      description: "A skin cancer detection application leveraging on-device machine learning with TensorFlow Lite for real-time image classification.",
      longDescription: "Asclepius is a skin cancer detection application that brings machine learning to the edge with on-device inference using TensorFlow Lite. The app enables users to capture or select skin images and receive instant classification results, demonstrating the power of mobile ML for healthcare applications.\n\nThe application integrates a pre-trained TensorFlow Lite model optimized for mobile deployment, ensuring fast inference times without requiring network connectivity. This approach prioritizes user privacy by keeping sensitive medical images on-device.\n\nAsclepius represents the intersection of mobile development and machine learning, showcasing how Android developers can leverage ML Kit and TensorFlow Lite to build intelligent applications that make a real-world impact in healthcare accessibility.",
      features: [
        "On-device skin cancer image classification",
        "TensorFlow Lite model integration",
        "Camera and gallery image input",
        "Real-time inference results",
        "No network required for classification",
        "Privacy-first approach (on-device processing)",
        "Clean and accessible UI",
        "Healthcare-focused mobile ML application"
      ],
      image: "https://raw.githubusercontent.com/rahmadnoorikhsan/Asclepius/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [],
      github: "https://github.com/rahmadnoorikhsan/Asclepius",
    },
    {
      title: "RentBike",
      slug: "rentbike",
      tech: ["Python", "Streamlit", "Data Analysis"],
      description: "A bike rental data analysis dashboard with interactive visualizations exploring rental patterns by time, weather, season, and user type.",
      longDescription: "RentBike is an interactive data analysis dashboard built with Python and Streamlit, exploring bike rental patterns across multiple dimensions. The dashboard provides rich visualizations that reveal how factors like time of day, weather conditions, seasons, and user types influence bike rental behavior.\n\nThe project demonstrates strong data analysis skills, from data cleaning and preprocessing to creating meaningful visualizations that tell a compelling story. Built with Streamlit for rapid dashboard development, the app offers an interactive experience where users can explore the data through various filters and chart types.\n\nRentBike showcases the ability to extract actionable insights from raw data—skills that complement mobile development with data-driven decision making. The live demo on Streamlit Cloud makes the analysis accessible to anyone with a web browser.",
      features: [
        "Interactive data visualizations",
        "Rental pattern analysis by time of day",
        "Weather impact on bike rentals",
        "Seasonal trend analysis",
        "User type comparison (casual vs registered)",
        "Built with Streamlit for rapid prototyping",
        "Live demo deployed on Streamlit Cloud",
        "Data-driven insights and storytelling"
      ],
      image: "https://opengraph.githubassets.com/1/rahmadnoorikhsan/RentBike",
      screenshots: [],
      github: "https://github.com/rahmadnoorikhsan/RentBike",
      homepage: "https://rent-bike.streamlit.app/",
    },
    {
      title: "Bean Greader",
      slug: "bean-greader",
      tech: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "ML"],
      description: "A coffee information and bean quality detection app built as the Bangkit Academy 2023 capstone project (C23-PS128). Features camera-based coffee bean scanning powered by machine learning.",
      longDescription: "Bean Greader is a comprehensive coffee companion application developed as the capstone project for Bangkit Academy 2023 (Team C23-PS128). The app combines coffee information browsing with an innovative machine learning feature that detects coffee bean quality through camera scanning.\n\nBuilt with Jetpack Compose and Material Design 3, the app follows MVVM and Clean Architecture principles. Authentication is handled through Firebase, supporting both email/password and Google Sign-In. The ML-powered bean scanning feature uses CameraX for image capture, sending images to a backend powered by DenseNet121, InceptionV3, and VGG16 model fusion.\n\nAs a cross-functional capstone, Bean Greader integrates work from Mobile Development, Cloud Computing, and Machine Learning teams. The app features bilingual support (Indonesian and English), dark/light theme toggle, favorite coffee management, and a polished user experience that showcases the full potential of collaborative product development.",
      features: [
        "Coffee bean quality detection via camera scanning",
        "Firebase authentication (Email & Google Sign-In)",
        "Coffee information browsing and search",
        "Favorite coffee collection",
        "Dark and light theme support",
        "Bilingual: Indonesian and English",
        "CameraX integration for bean scanning",
        "MVVM + Clean Architecture with Dagger Hilt"
      ],
      image: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/1%20Splash.png", alt: "Bean Greader Splash" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/2%20Home.png", alt: "Bean Greader Home" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/3%20Search.png", alt: "Bean Greader Search" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/4%20Detail.png", alt: "Bean Greader Detail" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/5%20Scan%20Screen.png", alt: "Bean Greader Scan Screen" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/6%20Upload.png", alt: "Bean Greader Upload" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/8%20Result%20Detect.png", alt: "Bean Greader Detection Result" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/9%20Favorite.png", alt: "Bean Greader Favorites" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/10%20Profile%20Screen.png", alt: "Bean Greader Profile" },
        { url: "https://raw.githubusercontent.com/C23-PS128/Mobile-Development/master/screenshot/12%20Setting.png", alt: "Bean Greader Settings" },
      ],
      github: "https://github.com/C23-PS128/Mobile-Development",
    },
    {
      title: "BeCipes",
      slug: "becipes",
      tech: ["Android", "Kotlin", "Clean Architecture", "MVVM"],
      description: "A healthy food recipe platform that helps users discover nutritious meals, get nutritional health information, and learn cooking techniques.",
      longDescription: "BeCipes (Best Recipes - Best Life) is a healthy food recipe platform designed to make nutritious cooking accessible to everyone. The app helps users discover healthy recipes, understand nutritional information, and learn proper cooking techniques through an intuitive mobile interface.\n\nThe Android application follows MVVM and Clean Architecture principles with a modular codebase, separating the project into presentation, domain, and data layers. Built with Kotlin and modern Android libraries, BeCipes demonstrates professional-grade software architecture and team collaboration.\n\nAs a full-stack collaborative project, BeCipes includes a React web frontend, a Node.js/Express REST API with Prisma ORM and Firebase Storage, and an Android mobile app. The project showcases cross-platform development skills and the ability to work within a multi-disciplinary team to deliver a complete product ecosystem.",
      features: [
        "Healthy food recipe discovery",
        "Nutritional health information",
        "Cooking technique guides",
        "MVVM + Clean Architecture with modular codebase",
        "Full-stack ecosystem (Mobile + Web + API)",
        "REST API with JWT authentication",
        "Firebase Storage integration",
        "Material Design UI"
      ],
      image: "https://raw.githubusercontent.com/BeCipes/Mobile-Development/main/app/src/main/ic_launcher-playstore.png",
      screenshots: [
        { url: "https://raw.githubusercontent.com/BeCipes/Resources/main/assets/BeCipes%20App.png", alt: "BeCipes App Overview" },
      ],
      github: "https://github.com/BeCipes/Mobile-Development",
    },
  ] as FeaturedProject[]
};
