// import { v4 as uuid } from "uuid";
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const song1 = require("../assets")
 const videos = [
    {
      title: "Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Tanishk, Pritam, Neeraj, Anees B, Bhushan K",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106795/wjgpvntm7ohrbap7aroj.webp",
      description: `Presenting #BhoolBhulaiyaa2 (Title Track) video song.
      Gulshan Kumar & T-Series presents "Bhool Bhulaiyaa 2" produced by Bhushan Kumar, Murad Khetani, and Krishan Kumar under the banner of T-Series and Cine1 Studios, starring Kartik Aaryan, Kiara Advani and Tabu, directed by Anees Bazmee, screenplay by Akash Kaushik and dialogues by Farhad Samji and Akash Kaushik. 
      `,
      creator: "T series",
      views: 80512792,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106703/dgoqdysu2lyh5tygetog.jpg",
      video: "J1rOfVst-EQ",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "ZAYN, Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106897/jb2hjpx5tsba16dddlg2.webp",
      description: `I Don’t Wanna Live Forever (Fifty Shades Darker) Official Video
      Song available on the Fifty Shades Darker Original Motion Picture Soundtrack `,
      creator: "Vevo",
      views: 58573245,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106758/nv0yxxlri59t38lu6jnc.jpg",
      video: "-QTNFALG3U0",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Tumse Pyaar Karke (Video) Tulsi Kumar, Jubin N, Gurmeet C, Ihana D, Payal, Kunaal, Navjit, Bhushan K",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106805/lvsqwxsynivgrdzubpg6.webp",
      description: `Gulshan Kumar & T-Series presents 'Tumse Pyaar karke' sung by Tulsi Kumar & Jubin Nautiyal featuring Gurmeet Choudhary & Ihana Dhillon in a beautiful story. `,
      creator: "T series",
      views: 62433404,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106703/dgoqdysu2lyh5tygetog.jpg",
      video: "LZ-Qn4q3sbU",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "Coldplay - Hymn For The Weekend - Alan Walker Remix",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680156846/nypbqkp3orbmt4gusvqy.webp",
      description: `Hymn For The Weekend - Alan Walker Remix | Sam Kolder - (Unofficial Video)`,
      creator: "Vevo",
      views: 62753455,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106697/lfhgrhjlvrvatbiib29c.jpg",
      video: "3ociATLe100",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "Meri Zindagi Hai Tu (4k Video) | Himanshu Verma Ft. Jubin Nautiyal | Satyameva Jayate",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106884/gylvuzqsq6zsv0id17rz.webp",
      description: `Everyone who sees this: You’re beautiful, and never give up your dreams, you are on this world for a reason!`,
      creator: "T series",
      views: 1563874747,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106703/dgoqdysu2lyh5tygetog.jpg",
      video: "uPXBQ1L8Ebw",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "The World's Most Insane Car! Lamborghini Vision GT",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106577/l2njyfh78nrnrgogdy0j.webp",
      description: `
      I was invited to a secret location in Italy to get an up close look at the most insane car in the world! This is the Lambo V12 Vision GT. It was made especially for players to drive in the game Gran Turismo in 2019, but they also made a real life version as well!`,
      creator: "Supercar Blondie",
      views: 9826592,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106582/qumecybtnqnmaol7pach.jpg",
      video: "_SB7h2kB6Eg",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Martin Garrix - Animals (Official Video)",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106867/khuqfibhhz1sbyyiw6un.webp",
      description: `
      Martin Garrix and Spinnin' Records proudly present the official video for Animals.`,
      creator: "Spinnin Record",
      views: 1563874747,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106758/nv0yxxlri59t38lu6jnc.jpg",
      video: "gCYcHz2k5x0",
      categoryName: "song",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Lamborghini Aventador SVJ DRAG RACING vs Huracan Performante!",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680030132/btrgkc1ir3mhsshg02dz.png",
      description: `During Supercar Sunday at circuit Assen I have filmed this brand new Lamborghini Aventador SVJ doing drag races and laps on track!`,
      creator: "Supercar Blondie",
      views: 9285925,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106582/qumecybtnqnmaol7pach.jpg",
      video: "FpLNFPzttX8",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    
    {
      title: "2021 Formula Rapide vs Hypercars at Highland",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106937/pb7trd9kzdqaz5fobzzh.png",
      description: `Video Produced by Assetto Corsa Racing Simulator`,
      creator: "virtuSportsCars",
      views: 9857395,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106697/lfhgrhjlvrvatbiib29c.jpg",
      video: "dEg_tVV0_n0",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106770/d5uqlesf2dro5b1kcb4o.webp",
      description: `Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.`,
      creator: "Namaste JavScript",
      views: 9258925,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680109101/p51cr0nyzjcg8co5k7ub.jpg",
      video: "pN6jk0uUrD8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "Bugatti Vision GT vs Super Cars at Highlands",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106921/lmdzg3vyoi6mygfvdbhx.png",
      description: `The Bugatti Vision GT mod credits are: Assetto Garage`,
      creator: "virtuSportsCars",
      views: 2975295,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106582/qumecybtnqnmaol7pach.jpg",
      video: "bHWgc5MPnPA",
      categoryName: "Sports Car",
      userId: "6415ece4c0702da7a748a100"
    },
    
    {
      title: "How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680023166/vrmpk9ubwfxl6aiqyax5.png",
      description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
      creator: "Namaste JavScript",
      views: 29865925,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680109101/p51cr0nyzjcg8co5k7ub.jpg",
      video: "uH-tVP8MUs8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },
    {
      title: "OnePlus Nord 2T 5G Unboxing & Quick Look !",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106958/zfscgmaxw7kwbleezguv.png",
      description: `Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind the scenes, there are a lot of things happening in JS Engine when the code is executed. All core fundamentals are covered in this video with examples. `,
      creator: "Tech Burner",
      views: 984579245,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106758/nv0yxxlri59t38lu6jnc.jpg",
      video: "C1YfOTAD42M",
      categoryName: "Tech",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "iQOO Neo 6 Unboxing & Review *Midrange King*?",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106948/vdupzfshmucajauft5yu.png",
      description: `iQOO ka New Phone aa gaya hai 😁 `,
      creator: "Tech Burner",
      views: 985792,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680106758/nv0yxxlri59t38lu6jnc.jpg",
      video: "C1YfOTAD42M",
      categoryName: "Tech",
      userId: "6415ece4c0702da7a748a100"
    },
   
    {
      title: "The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7",
      thumbnail: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680023166/vrmpk9ubwfxl6aiqyax5.png",
      description: `Diving deep into Scope, Lexical Environment, and The Scope Chain in JavaScript with a lot of code examples and visuals. This is a HOT interview topic and this video cover everything that happens under the hood. `,
      creator: "Namaste JavScript",
      views: 9459725,
      chanel_pic: "https://res.cloudinary.com/dnjrwizwk/image/upload/v1680109101/p51cr0nyzjcg8co5k7ub.jpg",
      video: "uH-tVP8MUs8",
      categoryName: "JavaScript",
      userId: "6415ece4c0702da7a748a100"
    },


  ];

  module.exports = videos;
  