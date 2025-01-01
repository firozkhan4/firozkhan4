import AsideMenu from "../components/AsideMenu";
import ContentBox from "../components/ContentBox";
import { ItemInterface } from "../models/Interface";

const menuItems: ItemInterface[] = [
  { name: "Java", link: "/projects/java", isInternal: true },
];

export default function Projects() {
  return (
    <main>
      <AsideMenu menuItems={menuItems} />
      <ContentBox />
    </main>
  );
}
