export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },

  {
    id: 2,
    path: "/boat-rides",
    text: "Boat Rides",
  },

  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/about",
    text: "About",
  },
  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },
  {
    id: 5,
    path: "/contact",
    text: "Contact",
  },
];

export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    url: "https://www.facebook.com/LRDCservices",
  },
  {
    icon: <i className="fab fa-twitter"></i>,
    url: "https://www.twitter.com/lrdcserv",
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    url: "https://www.instagram.com/lrdc.services/",
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    url: "https://www.facebook.com/LRDCservices",
  },
  {
    icon: <i className="fab fa-youtube"></i>,
    url: "https://www.youtube.com/channel/UC2mc_wj1bNlYUasVnQBFAgw",
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Time Efficient and Safe Boat Ride",
    subtitle: "safe boat riding",
    btn1: "BOOK NOW",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Enjoy the Ultimate Party Vibes",
    subtitle: "enjoy boat riding",
    btn1: "BOOK NOW",
  },
  {
    img: "../assets/img/carousel-3.jpg",
    title: "Discover A Brand Luxurious Boat Ride",
    subtitle: "luxury boat riding",
    btn1: "BOOK NOW",
  },
];

export const about = [
  {
    icon: <i class="fa-solid fa-ship fa-2x text-primary mb-2"></i>,
    text: "Boats",
    count: "10+",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Staff",
    count: "25+",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Passengers",
    count: "2600+",
  },
];

export const services = [
  {
    icon: <i class="fa-solid fa-ship fa-2x text-primary"></i>,
    name: "Passenger Boat Service",
    discription:
      "Our Passenger Boat Service provides a fast and scenic commute across city waterways, offering a pleasant and efficient alternative to road traffic.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription:
      "Our boat service features a buffet with a variety of fresh options, catering to all tastes and dietary needs in a scenic, relaxed setting.",
  },
  {
    icon: <i class="fa-solid fa-ferry fa-2x text-primary"></i>,
    name: "Luxury and Adventure Cruises",
    discription:
      "Our Luxury Cruises offer opulent amenities and personal service, while our Adventure Cruises provide thrilling activities.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Games",
    discription:
      "Our boat service enhances the journey with onboard sports and games, perfect for entertainment and socializing on the water.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription:
      "Our boat service provides a unique setting for events and parties, complete with customizable catering and entertainment.",
  },

  {
    icon: <i class="fa-solid fa-medal fa-2x text-primary"></i>,
    name: "Fun Activities",
    discription:
      "Our boat service enhances trips with fun activities like live music and themed parties, creating memorable experiences on the water.",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Careers",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Civil Security Guards",
      },
      {
        name: "CCTV Security Solutions",
      },
      {
        name: "Manpower Support Service",
      },
      {
        name: "Boat Passenger Service",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "No: 28/10, Kirimandala Mw., Nawala, Rajagiriya.",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "(+94) 112 861 948",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@lrdcservices.lk",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "ride@lrdcservices.lk",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@lrdcservices.lk",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@lrdcservices.lk",
  },
];

export const testimonial = [
  {
    description:
      "The boat ride significantly cut down my commute time, bypassing city traffic and providing a relaxing start and end to my workday. Highly efficient and enjoyable.",
    name: "Pasinduni Pabasara",
    profession: "Teacher",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "I appreciate efficiency in all aspects of my life, and this boat service has been a game changer for my daily commute. This efficiency boosts my productivity and enhances my daily routine.",
    name: "Randil Dulakna",
    profession: "Software Engineer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "It's offering a swift and scenic route that avoids traffic and saves time. It's a stress-free way to start and end the workday, boosting my productivity.",
    name: "Gayani Wanninayake",
    profession: "Project Manager",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
];

export const boatItems1 = [
  {
    img: "../assets/img/boat-1.jpg",
    price: "LKR 3,500",
    name: "Junior Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Junior Ride offers an unforgettable adventure tailored for young explorers and their families. It's designed to be fun and safe for all ages.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/boat-2.jpg",
    price: "LKR 7,500",
    name: "Premier Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Premier Ride invites discerning guests to indulge in a luxurious maritime experience tailored for utmost comfort and exclusivity.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/boat-3.jpg",
    price: "LKR 10,000",
    name: "Deluxe Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Deluxe Ride offers a vibrant escape perfect for enjoyment by people of all ages, ensuring a fun-filled yet secure outing for families.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },
];

export const boatItems2 = [
  {
    img: "../assets/img/boat-4.jpg",
    price: "LKR 15,000",
    name: "WeekDay Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Discover the joy of the open water during the week, designed specifically for those who prefer a daily working, more busy peoples.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/boat-5.jpg",
    price: "LKR 30,000",
    name: "WeekEnd Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Make your weekends unforgettable, designed for thrill-seekers and leisure lovers alike. This vibrant escape is perfect for families, friends.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/boat-6.jpg",
    price: "LKR 10,000",
    name: "AlongSide Ride",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Turn the water into your party playground, specially designed for celebrations of all kinds. Whether you're hosting a fun gathering.",
    yellowbtn: "View details",
    darkbtn: "book now",
  },
];

export const Leisure_Tours = [
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 5,
      facility: "Min",
    },
    {
      quantity: 12,
      facility: "Max",
    },
    {
      icon: <i class="fa-regular fa-clock text-primary me-2"></i>,
      facility: "30 min",
    },
  ],
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 7,
      facility: "Min",
    },
    {
      quantity: 12,
      facility: "Max",
    },
    {
      icon: <i class="fa-regular fa-clock text-primary me-2"></i>,
      facility: "45 min",
    },
  ],
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 7,
      facility: "Min",
    },
    {
      quantity: 12,
      facility: "Max",
    },
    {
      icon: <i class="fa-regular fa-clock text-primary me-2"></i>,
      facility: "1 h",
    },
  ],
];

export const Diyathma = [
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 30,
      facility: "Passengers",
    },
    {
      icon: <i class="fa-solid fa-wind text-primary me-2"></i>,
      facility: "A / C",
    },
    {
      icon: <i class="fa-regular fa-clock text-primary me-2"></i>,
      facility: "1 h",
    },
  ],
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 30,
      facility: "Passengers",
    },
    {
      icon: <i class="fa-solid fa-wind text-primary me-2"></i>,
      facility: "A / C",
    },
    {
      icon: <i class="fa-regular fa-clock text-primary me-2"></i>,
      facility: "1 h",
    },
  ],
  [
    {
      icon: <i class="fa-solid fa-user text-primary me-2"></i>,
      quantity: 30,
      facility: "Passengers",
    },
    {
      icon: <i class="fa-solid fa-wind text-primary me-2"></i>,
      facility: "A / C",
    },
  ],
];
