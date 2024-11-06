import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

export default function SocialIcons() {
  return (
    <section>
      <ul className="text-4xl flex gap-x-4 items-center">
        <li>
          <a href="https://github.com/firozkhan4" target="__blank">
            <SlSocialGithub />
          </a>
        </li>
        <li>
          <a href="https://x.com/firozkhan_4" target="__blank">
            <SlSocialTwitter />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/firozkhan4" target="__blank">
            <SlSocialLinkedin />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/firozkhan_4" target="__blank">
            <SlSocialInstagram />
          </a>
        </li>
      </ul>
    </section>
  );
}
