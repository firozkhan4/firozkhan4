import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import {SocialIcon} from "./index";


export default function SocialIcons() {
  return (
    <section>
      <ul className="text-4xl flex gap-x-4 items-center">
        <SocialIcon
          href="https://github.com/firozkhan4"
          Icon={SlSocialGithub}
        />
        <SocialIcon
          href="https://x.com/firozkhan_4"
          Icon={SlSocialTwitter}
        />
        <SocialIcon
          href="https://linkedin.com/in/firozkhan4"
          Icon={SlSocialLinkedin}
        />
        <SocialIcon
          href="https://instagram.com/firozkhan_4"
          Icon={SlSocialInstagram}
        />
      </ul>
    </section>
  );
}

