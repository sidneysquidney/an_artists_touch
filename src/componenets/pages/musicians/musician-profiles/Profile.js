import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function Profile(props) {
  const artist = props.artist;

  return (
    <div className="profile-container">
      <div className="profile-picture-container">
        <img src={artist.picture} className="profile-picture"></img>
      </div>
      <div className="profile-text-container">
        <h2>{artist.name}</h2>
        <p>{artist.about}</p>

        <p>{artist.availability()}</p>
        <a className="profile-website" href={artist.website}>
          {artist.website}
        </a>
        <div>
          {artist.social_media.facebook ? (
            <a href={artist.social_media.facebook}>
              <FaFacebookSquare className="profile-icon" />
            </a>
          ) : null}
          {artist.social_media.instagram ? (
            <a href={artist.social_media.instagram}>
              <FaInstagram className="profile-icon" />
            </a>
          ) : null}
          {artist.social_media.spotify ? (
            <a href={artist.social_media.spotify}>
              <FaSpotify className="profile-icon" />
            </a>
          ) : null}
          {artist.social_media.youtube ? (
            <a href={artist.social_media.youtube}>
              <FaYoutubeSquare className="profile-icon" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
