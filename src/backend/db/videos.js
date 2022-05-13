/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
 import { chn1, chn3, chn5, song1, song2, song3, song5, song6 } from "assets";
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
];
