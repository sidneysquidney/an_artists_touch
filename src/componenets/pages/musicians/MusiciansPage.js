import AudioApp2 from "../../../learning/audio2/AudioApp2";
import Footer from "../../other/footer/Footer";
import Album from "./album/Album";
import Concerts from "./concerts/Concerts";
import MusiciansHeader from "./header/MusiciansHeader";
import MusicianProfiles from "./musician-profiles/MusicianProfiles";

export default function MusiciansPage() {
  return (
    <div>
      <MusiciansHeader />
      <MusicianProfiles />
      <Album />
      {/* <AudioApp2 /> */}
      <Concerts />
      <Footer musicPage={false} />
    </div>
  );
}
