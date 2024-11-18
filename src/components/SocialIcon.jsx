export default function SocialIcon({ href,  Icon }) {
    return (
        <li className="hover:-translate-y-1 duration-300 ">
            <a href={href} target="_blank" rel="noopener noreferrer" className=" ">
                <Icon className=" " />
            </a>
        </li>
    );
}

