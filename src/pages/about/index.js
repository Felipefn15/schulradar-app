import "./index.css";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../assets/founder-image.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audio from "../../assets/file_example_MP3_700KB.mp3";
function About() {
  return (
    <div className="aboutWrapper">
      <h1>Was sagt unser Gründer?</h1>
      <div className="founderWrapper">
        <div className="founderData">
          <Avatar
            alt="Remy Sharp"
            src={avatarImage}
            sx={{ width: 190, height: 190 }}
          />
          (c) Lukas Beck
        </div>
        <div className="founderData">
          <p>Vom Gründer der Lehrerbewertungsapp Lernsieg.</p>
          <AudioPlayer
            src={audio}
            showJumpControls={false}
            hasDefaultKeyBindings={false}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
