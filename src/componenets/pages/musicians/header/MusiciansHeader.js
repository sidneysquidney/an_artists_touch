import Button from "../../../other/button/Button";
import Navbar from "../../../other/navbar/Navbar";

export default function MusiciansHeader() {
  return (
    <div>
      <Navbar />
      <h1>Meet the Artist's</h1>
      <p>
        If you use our window cleaning service… then you support the arts! But
        how? It has become increasingly difficult for an artist’s full potential
        to blossom. Yet music and art are something we value most within our
        society. We hire student musicians and artists offering them free
        professional training and (with your help!) a steady flow of window
        cleaning work, private music tuition, concert opportunities and
        publicity to support their creative ambitions. ​ Teaching alone is not
        always the best way for a musician to make money if their goal is to
        pursue a career in performance. It can be time consuming and mentally
        draining for a relatively small amount of money. An Artists Touch
        provides window cleaning training and work to up and coming musicians
        that helps to support their studies, while we use our community and
        website to offer instrumental teaching, musician bookings and a platform
        to share their concerts and other creative endeavours.
      </p>
      <Button value="Concerts & Music lessons" page="/contact" />
    </div>
  );
}
