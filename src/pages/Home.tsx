import AsideMenu from "../components/AsideMenu";
import ContentBox from "../components/ContentBox";
import { ItemInterface } from "../models/Interface";

export default function Home() {
  const menuItems: ItemInterface[] = [
    { name: "Home", link: "/", isInternal: true },
    { name: "Projects", link: "/projects", isInternal: true },
    { name: "DSA", link: "/dsa", isInternal: true },
    { name: "Articles", link: "/articles", isInternal: true },
  ];
  return (
    <main>
      <AsideMenu menuItems={menuItems} />
      <ContentBox />
    </main>
  );
}
