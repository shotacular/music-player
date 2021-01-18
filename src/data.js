import { v4 as uuidv4 } from "uuid";
import AnxiousMusic from "./assets/music/Anxious.m4a";
import AnxiousCover from "./assets/img/anxious.jpg";
import ThatsWhatILikeMusic from "./assets/music/That'sWhatILike.m4a";
import ThatsWhatILikeCover from "./assets/img/ThatsWhatILike.jpg";
import BlindingLightsMusic from "./assets/music/BlindingLights.m4a";
import BlindingLightsCover from "./assets/img/BlindingLights.jpg";
import DYNAMITEMusic from "./assets/music/DYNAMITE.m4a";
import DYNAMITECover from "./assets/img/DYNAMITE.jpg";
import DancingAsOneMusic from "./assets/music/DancingAsOne.m4a";
import DancingAsOneCover from "./assets/img/DancingAsOne.jpg";
import FriendsMusic from "./assets/music/Friends.m4a";
import FriendsCover from "./assets/img/Friends.jpg";
import NoPlaceMusic from "./assets/music/NoPlace.m4a";
import NoPlaceCover from "./assets/img/NoPlace.jpg";
import IfICantHaveYouMusic from "./assets/music/IfICantHaveYou.m4a";
import IfICantHaveYouCover from "./assets/img/IfICantHaveYou.jpg";
import TalkMusic from "./assets/music/Talk.m4a";
import TalkCover from "./assets/img/Talk.jpg";
import SomethingJustLikeThisMusic from "./assets/music/SomethingJustLikeThis.mp3";
import SomethingJustLikeThisCover from "./assets/img/SomethingJustLikeThis.jpg";
import SlideMusic from "./assets/music/Slide.mp3";
import SlideCover from "./assets/img/Slide.jpg";
import SummerNightsMusic from "./assets/music/SummerNights.mp3";
import SummerNightsCover from "./assets/img/SummerNights.jpg";
import CloserMusic from "./assets/music/Closer.mp3";
import CloserCover from "./assets/img/Closer.jpg";
import FunnyMusic from "./assets/music/Funny.m4a";
import FunnyCover from "./assets/img/Funny.jpg";
import ShapeOfYouMusic from "./assets/music/ShapeOfYou.mp3";
import ShapeOfYouCover from "./assets/img/ShapeOfYou.jpg";

function chillHop() {
  return [
    {
      name: "Anxious",
      cover: AnxiousCover,
      artist: "Austin Mahone",
      audio: AnxiousMusic,
      color: ["#5f5d5e", "#e2e351"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "That's What I Like",
      cover: ThatsWhatILikeCover,
      artist: "Bruno Mars",
      audio: ThatsWhatILikeMusic,
      color: ["#a07e53", "#ded5aa"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Blinding Lights",
      cover: BlindingLightsCover,
      artist: "The Weeknd",
      audio: BlindingLightsMusic,
      color: ["#ebb255", "#7c2217"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "DYNAMITE",
      cover: DYNAMITECover,
      artist: "BTS",
      audio: DYNAMITEMusic,
      color: ["#bdd7bf", "#ffeaea"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dancing as One",
      cover: DancingAsOneCover,
      artist: "ELWIN",
      audio: DancingAsOneMusic,
      color: ["#cdbbed", "#cc6092"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Friends ft. Anne Marie",
      cover: FriendsCover,
      artist: "Marshmello",
      audio: FriendsMusic,
      color: ["#e77e99", "#f5f5f5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "No Place",
      cover: NoPlaceCover,
      artist: "Backstreet Boys",
      audio: NoPlaceMusic,
      color: ["#404b50", "#90a5a8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "If I Can't Have You",
      cover: IfICantHaveYouCover,
      artist: "Shawn Mendes",
      audio: IfICantHaveYouMusic,
      color: ["#eca59f", "#f9eeec"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Something Just Like This",
      cover: SomethingJustLikeThisCover,
      artist: "The Chainsmokers",
      audio: SomethingJustLikeThisMusic,
      color: ["#243b4b", "#a08675"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Talk",
      cover: TalkCover,
      artist: "Khalid",
      audio: TalkMusic,
      color: ["#5f5aca", "#f7c231"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Slide",
      cover: SlideCover,
      artist: "Calvin Harris feat. Frank Ocean & Migos",
      audio: SlideMusic,
      color: ["#3d6642", "#96b32e"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Summer nights",
      cover: SummerNightsCover,
      artist: "Tiësto ft. John Legend",
      audio: SummerNightsMusic,
      color: ["#c56150", "#020304"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Closer",
      cover: CloserCover,
      artist: "The Chainsmokers ft. Halsey",
      audio: CloserMusic,
      color: ["#a4826d", "#eff0e9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Funny",
      cover: FunnyCover,
      artist: "Zedd & Jasmine Thompson",
      audio: FunnyMusic,
      color: ["#fdefe6", "#ecefef"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Shape of You",
      cover: ShapeOfYouCover,
      artist: "Ed Sheeran",
      audio: ShapeOfYouMusic,
      color: ["#0bbbe0", "#072a42"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;