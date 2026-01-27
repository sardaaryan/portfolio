import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* Renders a Twitter icon and links to the profile */}
      <SocialIcon url="https://www.linkedin.com/in/aryansarda630/" />

      {/* Renders a Facebook icon and links to the profile */}
      <SocialIcon url="https://github.com/sardaaryan" />

      {/* Renders a YouTube icon and links to the channel */}
      <SocialIcon url="https://www.instagram.com/sarda.aryan/" />

      {/* Renders a YouTube icon and links to the channel */}
      <SocialIcon url="https://open.spotify.com/user/epicbhaiya?si=a7d588228d3f4698" />
    </div>
  );
};

export default Socials;
