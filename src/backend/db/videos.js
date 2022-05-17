/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
 import { car1, carCh1, chn1, chn3, chn5, song1, song2, song3, song5, song6, song7 } from "assets";
import { v4 as uuid } from "uuid";


export const videos = [
  
  {
    _id: uuid(),
    thumbnail: song1,
    title: "Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Tanishk, Pritam, Neeraj, Anees B, Bhushan K",
    description: `Presenting #BhoolBhulaiyaa2 (Title Track) video song.
    Gulshan Kumar & T-Series presents "Bhool Bhulaiyaa 2" produced by Bhushan Kumar, Murad Khetani, and Krishan Kumar under the banner of T-Series and Cine1 Studios, starring Kartik Aaryan, Kiara Advani and Tabu, directed by Anees Bazmee, screenplay by Akash Kaushik and dialogues by Farhad Samji and Akash Kaushik. 
    `,
    creator: "T series",
    views: 80512792,
    createdAt: " 20th MAY 2022",
    chanel_pic: chn1,
    video: "J1rOfVst-EQ",
    categoryName: "song",
  },
  {
    _id: uuid(),
    thumbnail: song7,
    title: "ZAYN, Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)",
    description: `I Don’t Wanna Live Forever (Fifty Shades Darker) Official Video
    Song available on the Fifty Shades Darker Original Motion Picture Soundtrack `,
    creator: "Vevo",
    views: "4.9M",
    createdAt: " May 10, 2022",
    chanel_pic: chn3,
    video: "-QTNFALG3U0",
    categoryName: "song",
  },
  {
    _id: uuid(),
    thumbnail: song2,
    title: "Tumse Pyaar Karke (Video) Tulsi Kumar, Jubin N, Gurmeet C, Ihana D, Payal, Kunaal, Navjit, Bhushan K",
    description: `Gulshan Kumar & T-Series presents 'Tumse Pyaar karke' sung by Tulsi Kumar & Jubin Nautiyal featuring Gurmeet Choudhary & Ihana Dhillon in a beautiful story. 
 
    `,
    creator: "T series",
    views: 62433404,
    createdAt: " 20th MAY 2022",
    chanel_pic: chn1,
    video: "J1rOfVst-EQ",
    categoryName: "song",
  },
 
  {
    _id: uuid(),
    thumbnail: song3,
    title: "Martin Garrix - Animals (Official Video)",
    description: `Hymn For The Weekend - Alan Walker Remix | Sam Kolder - (Unofficial Video)`,
    creator: "Vevo",
    views: 62753455,
    createdAt: " Mar 21, 2019",
    chanel_pic: chn3,
    video: "3ociATLe100",
    categoryName: "song",
  },
 
  {
    _id: uuid(),
    thumbnail: song6,
    title: "Meri Zindagi Hai Tu (4k Video) | Himanshu Verma Ft. Jubin Nautiyal | Satyameva Jayate",
    description: `
    Everyone who sees this: You’re beautiful, and never give up your dreams, you are on this world for a reason!`,
    creator: "T series",
    views: 1563874747,
    createdAt: " May 10, 2022",
    chanel_pic: chn1,
    video: "ihN0tkQvme4",
    categoryName: "song",
  },
  {
    _id: uuid(),
    thumbnail: car1,
    title: "The World's Most Insane Car! Lamborghini Vision GT",
    description: `
    I was invited to a secret location in Italy to get an up close look at the most insane car in the world! This is the Lambo V12 Vision GT. It was made especially for players to drive in the game Gran Turismo in 2019, but they also made a real life version as well!`,
    creator: "Supercar Blondie",
    views: "2M",
    createdAt: " May 10, 2022",
    chanel_pic: carCh1,
    video: "_SB7h2kB6Eg",
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    thumbnail: song5,
    title: "Martin Garrix - Animals (Official Video)",
    description: `
    Martin Garrix and Spinnin' Records proudly present the official video for Animals.`,
    creator: "Spinnin Record",
    views: 1563874747,
    createdAt: " Mar 21, 2019",
    chanel_pic: chn5,
    video: "gCYcHz2k5x0",
    categoryName: "song",
  },
  {
    _id: uuid(),
    thumbnail: "//i.ytimg.com/an_webp/FpLNFPzttX8/mqdefault_6s.webp?du=3000&sqp=CJbg_ZMG&rs=AOn4CLB-FUveUXhGLtUHIauOwK7Nm82RtA",
    title: "Lamborghini Aventador SVJ DRAG RACING vs Huracan Performante!",
    description: `During Supercar Sunday at circuit Assen I have filmed this brand new Lamborghini Aventador SVJ doing drag races and laps on track!`,
    creator: "Supercar Blondie",
    views: "2M",
    createdAt: " May 10, 2022",
    chanel_pic: carCh1,
    video: "FpLNFPzttX8",
    categoryName: "Sports Car",
  },
  
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/an_webp/dEg_tVV0_n0/mqdefault_6s.webp?du=3000&sqp=COvJ_ZMG&rs=AOn4CLC20pBtquEYN5_0Yvqr085tCxJsZQ",
    title: "2021 Formula Rapide vs Hypercars at Highland",
    description: `Video Produced by Assetto Corsa Racing Simulator`,
    creator: "virtuSportsCars",
    views: "1.4M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLSX_V_y3U5ybovUvfrbOnbk2r5b9FaGwO5acBHu_w=s48-c-k-c0x00ffffff-no-rj",
    video: "dEg_tVV0_n0",
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHVB8xIJcebxSg0uFB8mFvTJQH1g",
    title: "Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini",
    description: `Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.`,
    creator: "Namaste JavScript",
    views: "5M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s48-c-k-c0x00ffffff-no-rj",
    video: "pN6jk0uUrD8",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/an_webp/bHWgc5MPnPA/mqdefault_6s.webp?du=3000&sqp=CMDc_ZMG&rs=AOn4CLBIpPFI94uxg3KmYlJFF-jlP45koQ",
    title: "Bugatti Vision GT vs Super Cars at Highlands",
    description: `The Bugatti Vision GT mod credits are: Assetto Garage`,
    creator: "virtuSportsCars",
    views: "2.4M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLSX_V_y3U5ybovUvfrbOnbk2r5b9FaGwO5acBHu_w=s48-c-k-c0x00ffffff-no-rj",
    video: "bHWgc5MPnPA",
    categoryName: "Sports Car",
  },
  
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/an_webp/iLWTnMzWtj4/mqdefault_6s.webp?du=3000&sqp=CLzu_ZMG&rs=AOn4CLAddQZB42fMhabkyn3VpbwmMUJq3g",
    title: "How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2",
    description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
    creator: "Namaste JavScript",
    views: "4.3M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s48-c-k-c0x00ffffff-no-rj",
    video: "uH-tVP8MUs8",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/an_webp/C1YfOTAD42M/mqdefault_6s.webp?du=3000&sqp=CKG9_ZMG&rs=AOn4CLBAPkObsrzD7MhufmLbNDkHp8ddMQ",
    title: "OnePlus Nord 2T 5G Unboxing & Quick Look !",
    description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
    creator: "Tech Burner",
    views: "4.1M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLSLzBlLalLFEXgvGHr6f9yBm9Y8PrJMXZC_hxTTlQ=s48-c-k-c0x00ffffff-no-rj",
    video: "C1YfOTAD42M",
    categoryName: "Tech",
  },
 
  {
    _id: uuid(),
    thumbnail: "https://i.ytimg.com/an_webp/uH-tVP8MUs8/mqdefault_6s.webp?du=3000&sqp=CNjW_ZMG&rs=AOn4CLBMcIlFhqcrtaubzHvQWrcMyGRcWQ",
    title: "The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7",
    description: `Diving deep into Scope, Lexical Environment, and The Scope Chain in JavaScript with a lot of code examples and visuals. This is a HOT interview topic and this video cover everything that happens under the hood. `,
    creator: "Namaste JavScript",
    views: "5.2M",
    createdAt: " May 10, 2022",
    chanel_pic: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s48-c-k-c0x00ffffff-no-rj",
    video: "uH-tVP8MUs8",
    categoryName: "JavaScript",
  },
  
];
