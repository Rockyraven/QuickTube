// import { v4 as uuid } from "uuid";
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const song1 = require("../assets")
 const videos = [
    {
      title: "Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Tanishk, Pritam, Neeraj, Anees B, Bhushan K",
      thumbnail: song1,
      description: `Presenting #BhoolBhulaiyaa2 (Title Track) video song.
      Gulshan Kumar & T-Series presents "Bhool Bhulaiyaa 2" produced by Bhushan Kumar, Murad Khetani, and Krishan Kumar under the banner of T-Series and Cine1 Studios, starring Kartik Aaryan, Kiara Advani and Tabu, directed by Anees Bazmee, screenplay by Akash Kaushik and dialogues by Farhad Samji and Akash Kaushik. 
      `,
      creator: "T series",
      views: 80512792,
      video: "J1rOfVst-EQ",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "ZAYN, Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)",
      thumbnail: song1,
      description: `I Don’t Wanna Live Forever (Fifty Shades Darker) Official Video
      Song available on the Fifty Shades Darker Original Motion Picture Soundtrack `,
      creator: "Vevo",
      views: 58573245,
      video: "-QTNFALG3U0",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Tumse Pyaar Karke (Video) Tulsi Kumar, Jubin N, Gurmeet C, Ihana D, Payal, Kunaal, Navjit, Bhushan K",
      description: `Gulshan Kumar & T-Series presents 'Tumse Pyaar karke' sung by Tulsi Kumar & Jubin Nautiyal featuring Gurmeet Choudhary & Ihana Dhillon in a beautiful story. 
   
      `,
      creator: "T series",
      views: 62433404,
      video: "J1rOfVst-EQ",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "Martin Garrix - Animals (Official Video)",
      thumbnail: song1,
      description: `Hymn For The Weekend - Alan Walker Remix | Sam Kolder - (Unofficial Video)`,
      creator: "Vevo",
      views: 62753455,
      video: "3ociATLe100",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "Meri Zindagi Hai Tu (4k Video) | Himanshu Verma Ft. Jubin Nautiyal | Satyameva Jayate",
      thumbnail: song1,
      description: `Everyone who sees this: You’re beautiful, and never give up your dreams, you are on this world for a reason!`,
      creator: "T series",
      views: 1563874747,
      video: "ihN0tkQvme4",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "The World's Most Insane Car! Lamborghini Vision GT",
      thumbnail: song1,
      description: `
      I was invited to a secret location in Italy to get an up close look at the most insane car in the world! This is the Lambo V12 Vision GT. It was made especially for players to drive in the game Gran Turismo in 2019, but they also made a real life version as well!`,
      creator: "Supercar Blondie",
      views: 9826592,
      video: "_SB7h2kB6Eg",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Martin Garrix - Animals (Official Video)",
      thumbnail: song1,
      description: `
      Martin Garrix and Spinnin' Records proudly present the official video for Animals.`,
      creator: "Spinnin Record",
      views: 1563874747,
      video: "gCYcHz2k5x0",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Lamborghini Aventador SVJ DRAG RACING vs Huracan Performante!",
      thumbnail: song1,
      description: `During Supercar Sunday at circuit Assen I have filmed this brand new Lamborghini Aventador SVJ doing drag races and laps on track!`,
      creator: "Supercar Blondie",
      views: 9285925,
      video: "FpLNFPzttX8",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    
    {
      title: "2021 Formula Rapide vs Hypercars at Highland",
      thumbnail: song1,
      description: `Video Produced by Assetto Corsa Racing Simulator`,
      creator: "virtuSportsCars",
      views: 9857395,
      video: "dEg_tVV0_n0",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini",
      thumbnail: song1,
      description: `Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.`,
      creator: "Namaste JavScript",
      views: 9258925,
      video: "pN6jk0uUrD8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Bugatti Vision GT vs Super Cars at Highlands",
      thumbnail: song1,
      description: `The Bugatti Vision GT mod credits are: Assetto Garage`,
      creator: "virtuSportsCars",
      views: 2975295,
      video: "bHWgc5MPnPA",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    
    {
      title: "How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2",
      thumbnail: song1,
      description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
      creator: "Namaste JavScript",
      views: 29865925,
      video: "uH-tVP8MUs8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "OnePlus Nord 2T 5G Unboxing & Quick Look !",
      thumbnail: song1,
      description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
      creator: "Tech Burner",
      views: 984579245,
      video: "C1YfOTAD42M",
      categoryName: "Tech",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "iQOO Neo 6 Unboxing & Review *Midrange King*?",
      thumbnail: song1,
      description: `iQOO ka New Phone aa gaya hai 😁 `,
      creator: "Tech Burner",
      views: 985792,
      video: "C1YfOTAD42M",
      categoryName: "Tech",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7",
      thumbnail: song1,
      description: `Diving deep into Scope, Lexical Environment, and The Scope Chain in JavaScript with a lot of code examples and visuals. This is a HOT interview topic and this video cover everything that happens under the hood. `,
      creator: "Namaste JavScript",
      views: 9459725,
      video: "uH-tVP8MUs8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },


  ];

  module.exports = videos;
  