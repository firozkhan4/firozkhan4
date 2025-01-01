import { Link } from "react-router-dom";

interface ItemInterface {
  name: string;
  link: string;
  isInternal: boolean;
}

interface MenuPropsInterface {
  menuItems: ItemInterface[];
}

export default function AsideMenu({ menuItems }: MenuPropsInterface) {
  return (
    <aside>
      <div>
        <ul>
          {menuItems.map((item: ItemInterface, index: number) => {
            return (
              <li key={index}>
                <Link
                  to={item.link}
                  target={item.isInternal ? "_self" : "_blank"}
                  className="link"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
