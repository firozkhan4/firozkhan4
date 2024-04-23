import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialIcons() {
    return (
        <div className=' flex items-center justify-between w-28'>
            <a href="https://www.github.com/firozkhan4" target="_blank" className="hover"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/firozkhan5/" target="_blank" className="hover"><FaLinkedin /></a>
            <a href="https://www.twitter.com/in/firozkhan_4/" target="_blank" className="hover"><FaXTwitter /></a>
        </div>
    )
}

export default SocialIcons