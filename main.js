const soundboardContainer = document.getElementById("soundboard-container");
const audioContainer = document.getElementById("audio-container");
let v1 = false;

let itemsv1 = [
  {
    title: "Texmex",
    imageFileName: "Texmex-min.png",
    soundFileName: "texmex.wav",
  },
  {
    title: "Cat Dragged In",
    imageFileName: "CatDraggedIn-min.png",
    soundFileName: "lookwhatthecatdraggedin.wav",
  },
  {
    title: "You fucked up",
    imageFileName: "YouFuckedUp-min.png",
    soundFileName: "nowyoufuckedup.wav",
  },
  {
    title: "Loadout Drop",
    imageFileName: "LoadoutDrop-min.png",
    soundFileName: "AtrexxexplainswarzoneAudioExtracted.wav",
  },
  {
    title: "Here We Go",
    imageFileName: "HereWeGo-min.png",
    soundFileName: "aloneherewego.wav",
  },
  {
    title: "You Aight",
    imageFileName: "YouAight-min.png",
    soundFileName: "youaight.wav",
  },
  {
    title: "Snort",
    imageFileName: "Snort-min.png",
    soundFileName: "trexsnort.wav",
  },
  {
    title: "Stutter",
    imageFileName: "Stutter-min.png",
    soundFileName: "stutter.wav",
  },
  {
    title: "Rio Denidrio",
    imageFileName: "RioDenidrio-min.png",
    soundFileName: "riodeniro.wav",
  },
  {
    title: "Mr Baggings",
    imageFileName: "MrBaggins-min.png",
    soundFileName: "mybaggings.wav",
  },
  {
    title: "Not Too Bad",
    imageFileName: "Nottoobad-min.png",
    soundFileName: "Joenottoobad.wav",
  },
  {
    title: "Im Nigel",
    imageFileName: "I'mNigel-min.png",
    soundFileName: "imnigel.wav",
  },
  {
    title: "Hiccup 1",
    imageFileName: "Hiccup1-min.png",
    soundFileName: "hiccup1.wav",
  },
  {
    title: "Hiccup 2",
    imageFileName: "Hiccup2-min.png",
    soundFileName: "hiccup2.wav",
  },
  {
    title: "Hiccup 3",
    imageFileName: "Hiccup3-min.png",
    soundFileName: "hiccup3.wav",
  },
  {
    title: "Fighting With An Elf",
    imageFileName: "Gimly-min.png",
    soundFileName: "fightingwithanelf.wav",
  },
  {
    title: "Coolbeans",
    imageFileName: "CoolBeans-min.png",
    soundFileName: "coolbeans.wav",
  },
  {
    title: "Chose My Ass",
    imageFileName: "ChoseMyAss-min.png",
    soundFileName: "chosemyass.wav",
  },
  {
    title: "Cant Answer Now",
    imageFileName: "Cantanswernow-min.png",
    soundFileName: "cantanswernowsorry.wav",
  },
  {
    title: "Stephen Hawking",
    imageFileName: "StephenHawking-min.png",
    soundFileName: "AstephenhawkingAudioExtracted.wav",
  },
  {
    title: "Profanity",
    imageFileName: "Profanity-min.png",
    soundFileName: "Profanity.wav",
  },
  {
    title: "Fuckin This Girl",
    imageFileName: "Trexx_in_da_club-min.png",
    soundFileName: "FuckinThisGirl.wav",
  },
  {
    title: "2 Already",
    imageFileName: "2already-min.png",
    soundFileName: "2already.wav",
  },
];

let itemsv2 = [
  {
    title: "Angry Leo",
    imageFileName: "AngryLeo-min.png",
    soundFileName: "AngryLeo.wav",
  },
  {
    title: "Attractive Guy",
    imageFileName: "AttractiveGuy-min.png",
    soundFileName: "AttractiveGuy.wav",
  },
  {
    title: "Charcoal Tan",
    imageFileName: "CharcoalTan-min.png",
    soundFileName: "CharcoalTan.wav",
  },
  {
    title: "Chinese Gold Spam",
    imageFileName: "ChineseGoldSpam-min.png",
    soundFileName: "ChineseGoldSpam.wav",
  },
  {
    title: "Dark Side",
    imageFileName: "DarkSide-min.png",
    soundFileName: "DarkSide.wav",
  },
  {
    title: "Defending Farm",
    imageFileName: "DefendingFarm-min.png",
    soundFileName: "DefendingFarm.wav",
  },
  {
    title: "Dog Eat Cat World",
    imageFileName: "DogEatCatWorld-min.png",
    soundFileName: "DogEatCatWorld.wav",
  },
  {
    title: "Dreaming",
    imageFileName: "Dreaming-min.png",
    soundFileName: "Dreaming.wav",
  },
  {
    title: "Incipacitated",
    imageFileName: "Incipacitated-min.png",
    soundFileName: "Incipacitated.wav",
  },
  {
    title: "Jaguar",
    imageFileName: "Jaguar-min.png",
    soundFileName: "Jaguar.wav",
  },
  {
    title: "My Business",
    imageFileName: "MyBusiness-min.png",
    soundFileName: "MyBusiness.wav",
  },
  {
    title: "Nigerian Falls",
    imageFileName: "NigerianFalls-min.png",
    soundFileName: "NigerianFalls.wav",
  },
  {
    title: "Obviously Joking",
    imageFileName: "ObviouslyJoking-min.png",
    soundFileName: "ObviouslyJoking.wav",
  },
  {
    title: "Owens Mic",
    imageFileName: "OwensMic-min.png",
    soundFileName: "OwensMic.wav",
  },
  {
    title: "Poggers Mum",
    imageFileName: "PoggersMum-min.png",
    soundFileName: "PoggersMum.wav",
  },
  {
    title: "Rinsed Cheese",
    imageFileName: "RinsedCheese-min.png",
    soundFileName: "RinsedCheese.wav",
  },
  {
    title: "Sound The Gong",
    imageFileName: "SoundTheGong-min.png",
    soundFileName: "SoundTheGong.wav",
  },
  {
    title: "Spaghetti",
    imageFileName: "Spaghetti-min.png",
    soundFileName: "Spaghetti.wav",
  },
  {
    title: "Tums Plate",
    imageFileName: "TumsPlate-min.png",
    soundFileName: "TumsPlate.wav",
  },
  {
    title: "Wazzup",
    imageFileName: "Wazzup-min.png",
    soundFileName: "Wazzup.wav",
  },
  {
    title: "You Lying",
    imageFileName: "YouLying-min.png",
    soundFileName: "YouLying.wav",
  },
  {
    title: "You're Not Tough",
    imageFileName: "You'reNotTough-min.png",
    soundFileName: "You'reNotTough.wav",
  },
];

const mapSoundboardItems = () => {
  let items = v1 ? itemsv1 : itemsv2;
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card">
      <img src=../assets/${item.imageFileName} class="slide-in-left">
      <div class="card-text">
      <h2 class="fade-in-bottom" >${item.title}</h2>
      <button onclick=playSound("${item.soundFileName}") class="fade-in-bottom"><i class="fa fa-play" aria-hidden="true"></i></button> 
      </div></div>`;
    })
    .join("");
};

const playSound = (soundFileName) => {
  stopAudio();
  document.getElementById(soundFileName).play();
};

const mapAudioElements = () => {
  let items = v1 ? itemsv1 : itemsv2;
  audioContainer.innerHTML = items
    .map((item) => {
      return `<audio id="${
        item.soundFileName
      }" preload="none"><source src=../assets/${
        item.soundFileName
      } type="audio/${item.soundFileName.slice(-3)}"></audio>`;
    })
    .join("");
};

const stopAudio = () => {
  let items = v1 ? itemsv1 : itemsv2;
  for (let i = 0; i < items.length; i++) {
    const audioFile = document.getElementById(items[i].soundFileName);
    audioFile.currentTime = 0;
    audioFile.pause();
  }
};

const handleClick = () => {
  v1 = !v1;
  mapSoundboardItems();
  mapAudioElements();
};

mapSoundboardItems();
mapAudioElements();
