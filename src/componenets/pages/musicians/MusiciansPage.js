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
      <Concerts />
    </div>
  );
}
