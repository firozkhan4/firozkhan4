import AsideMenu from "../components/AsideMenu";
import ContentBox from "../components/ContentBox";
import { ItemInterface } from "../models/Interface";

const menuItems: ItemInterface[] = [
]

export default function Articles(){
    return(
        <main>
            <AsideMenu menuItems={menuItems} />
            <ContentBox />
        </main>
    )
}