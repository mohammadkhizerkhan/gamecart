import { v4 as uuid } from "uuid";
import {Logo,games,controller,accessories,xbox_series_x,ps5,ps4,ps3,nintendo,ps5_white,ps5_pink,ps5_skyblue,ps5_accessories_kit,alan_awake,among_us,apex_legends,astro_bot_rescue,blood_and_truth,farcry,god_of_war,hitman3,kena,nba2k22,resident_evil,sifu,spiderman,mouse1,mouse2,mouse3} from "../../assets"
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

console.log(ps5_pink)

export const products = [
  {
    _id: uuid(),
    title: "Alan Awake",
    img:alan_awake,
    price: "1000",
    original_price:"1500",
    isPopular:false,
    rating:3.5,
    desc:"Alan Wake Remastered offers the complete experience, with the main game and its two story expansions - The Signal and The Writer. The tense, episodic story is packed with unexpected twists, heart-stopping cliff hangers and intense bursts of combat where it takes more than bullets to banish the darkness.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Among Us",
    img:among_us,
    price: "500",
    original_price:"1000",
    isPopular:true,
    rating:4.8,
    desc:"Among Us is a multiplayer game where 10 players get dropped into an alien spaceship, sky headquarters or planet base, where each player is designated with a private role of either a “crewmate” and an “impostor.” This is an online multiplayer social deduction game, and a player can either be a crewmate or an imposter.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Apex Legends",
    img:apex_legends,
    price: "4000",
    original_price:"5000",
    isPopular:true,
    rating:4.3,
    desc:"Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called 'legends', similar to those of hero shooters. Alternate modes have been introduced allowing for single and for two-player squads since the game's release.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Astro bot rescue mission",
    img:astro_bot_rescue,
    price: "3000",
    original_price:"3500",
    isPopular:true,
    rating:4,
    desc:"Astro Bot Rescue Mission is a 3D platform game in which the player takes control of Astro Bot, a small robot using the DualShock 4. Astro is able to jump, hover, punch and charge his punch into a spinning attack",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Blood And Truth",
    img:blood_and_truth,
    price: "2500",
    original_price:"3000",
    isPopular:false,
    rating:3.5,
    desc:"The game is a first-person shooter. The player assumes control of Ryan Marks, a former Special Forces soldier who must save his family from a London crime boss. Players can hide behind cover and pick up different guns to shoot enemies. To move in the game, players only need to look at a spot and press a button.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Farcry",
    img:farcry,
    price: "5000",
    original_price:"6000",
    isPopular:true,
    rating:4.9,
    desc:"Far Cry is a franchise of first-person shooter games, all of which have been published by Ubisoft. ... The following games in the series have used a Ubisoft-modified version of the CryEngine, the Dunia Engine, allowing for open world gameplay.. It is the first installment in the Far Cry franchise. Set on a mysterious tropical archipelago, the game follows Jack Carver, a former American special forces operative, as he searches for the journalist who accompanyed him to the islands but went missing after their boat was destroyed by mercenaries.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "God Of War",
    img:god_of_war,
    price: "6000",
    original_price:"7000",
    isPopular:true,
    rating:4.6,
    desc:"God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. As the story progresses, Kratos is revealed to be Ares' former servant, who had been tricked into killing his own family and is haunted by terrible nightmares.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Hitman-3",
    img:hitman3,
    price: "5000",
    original_price:"6500",
    isPopular:true,
    rating:4.7,
    desc:"HITMAN 3 is the dramatic conclusion to the World of Assassination trilogy and takes players around the world on a globetrotting adventure to sprawling sandbox locations. Agent 47 returns as a ruthless professional for the most important contracts of his entire career.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Kena",
    img:kena,
    price: "2000",
    original_price:"2500",
    isPopular:false,
    rating:4.4,
    desc:"Kena: Bridge of Spirits is a 2021 action-adventure video game developed and published by Ember Lab. The story follows Kena, a young spirit guide who uses her magical abilities to help deceased people move from the physical to the spirit world. The game is presented through a third-person perspective.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "NBA-2K22",
    img:nba2k22,
    price: "5000",
    original_price:"6500",
    isPopular:true,
    rating:4.7,
    desc:"NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today's stars and yesterday's legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Resident Evil",
    img:resident_evil,
    price: "7000",
    original_price:"8500",
    isPopular:true,
    rating:4.8,
    desc:"Resident Evil is a 1996 survival horror game developed and published by Capcom for the PlayStation. It is the first title in Capcom's Resident Evil franchise. Players control Chris Redfield and Jill Valentine, members of the elite task force S.T.A.R.S, who must escape a mansion infested with zombies and other monsters.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Sifu",
    img:sifu,
    price: "2000",
    original_price:"3500",
    isPopular:false,
    rating:4.2,
    desc:"Sifu is a stylish yet gritty beat-em-up, featuring visceral hand-to-hand combat in a contemporary urban setting. From Sloclap, creators of acclaimed PS4 fighting game Absolver, Sifu follows a young kung fu student on a path of revenge, hunting for the murderers of his family.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "Marvel's Spider-Man",
    img:spiderman,
    price: "8000",
    original_price:"9500",
    isPopular:true,
    rating:4.9,
    desc:"The game is a spin-off of Marvel's Spider-Man, and depicts Miles' struggle to balance the duties of his civilian persona and Spider-Man when his new home, Harlem, is threatened by a war between the Roxxon Energy Corporation and the Tinkerer's high-tech criminal army, the Underground.",
    categoryName: "games",
  },
  {
    _id: uuid(),
    title: "PS-3",
    img:ps3,
    price: "12000",
    original_price:"15000",
    isPopular:false,
    rating:3.2,
    desc:"The PlayStation 3 (PS3) is a home video game console developed by Sony Computer Entertainment. The successor to PlayStation 2, it is part of the PlayStation brand of consoles. It was first released on November 11, 2006, in Japan, November 17, 2006, in North America, and March 23, 2007, in Europe and Australia.",
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    title: "PS-4",
    img:ps4,
    price: "15000",
    original_price:"18000",
    isPopular:true,
    rating:4.1,
    desc:"Incredible games & non-stop entertainment. The PS4 console, delivering awesome gaming power, incredible entertainment and vibrant HDR technology1.The PlayStation 4 uses an Accelerated Processing Unit (APU) developed by AMD in cooperation with Sony. It combines a central processing unit (CPU) and graphics processing unit (GPU), as well as other components such as a memory controller and video decoder. The CPU consists of two 28 nm quad-core Jaguar modules totaling 8 x86-64 cores, 7 of which are available for game developers to use. The GPU consists of 18 compute units to produce a theoretical peak performance of 1.84 TFLOPS.",
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    title: "PS-5",
    img:ps5,
    price: "25000",
    original_price:"28000",
    isPopular:true,
    rating:4.7,
    desc:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment.The PlayStation 5's main hardware features include a solid-state drive customized for high-speed data streaming to enable significant improvements in storage performance, an AMD GPU capable of 4K resolution display at up to 120 frames per second, hardware-accelerated ray tracing for realistic lighting and reflections, and the Tempest Engine allowing for hardware-accelerated 3D audio effects. Other features include the DualSense controller with haptic feedback and backward compatibility with the majority of PlayStation 4 and PlayStation VR games.",
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    title: "Xbox Series X",
    img:xbox_series_x,
    price: "22000",
    original_price:"24000",
    isPopular:true,
    rating:4.6,
    desc:"The Xbox Series X has higher end hardware and supports higher display resolutions (up to 8K resolution), along with higher frame rates and real-time ray tracing; it also has a high-speed solid-state drive to reduce loading times.",
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    title: "Nintendo Switch",
    img:nintendo,
    price: "18000",
    original_price:"20000",
    isPopular:true,
    rating:4.1,
    desc:"The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as 'a home console that you can take with you on the go'.",
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    title: "White PS5 Controller",
    img:ps5_white,
    price: "8000",
    original_price:"9000",
    isPopular:true,
    rating:4.5,
    desc:"The DualSense wireless controller for PS5 White offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    title: "Pink PS5 Controller",
    img:ps5_pink,
    price: "9000",
    original_price:"10000",
    isPopular:true,
    rating:4.6,
    desc:"The DualSense wireless controller for PS5 Pink offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    title: "Light Blue PS5 Controller",
    img:ps5_skyblue,
    price: "8500",
    original_price:"9000",
    isPopular:false,
    rating:4.3,
    desc:"The DualSense wireless controller for PS5 Light Blue offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    title: "Dragon Gaming mouse",
    img:mouse3,
    price: "2500",
    original_price:"3000",
    isPopular:false,
    rating:4.1,
    desc:"A gaming mouse is essentially, from one angle, just a desktop mouse with a few additional functions which make it suited to computer gaming or high intensity programming.",
    categoryName: "accessories",
  },
  
];
