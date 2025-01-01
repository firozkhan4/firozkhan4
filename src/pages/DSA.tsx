import AsideMenu from "../components/AsideMenu";
import ContentBox from "../components/ContentBox";
import { ItemInterface } from "../models/Interface";


const menuItems: ItemInterface[] = [
    {name: "Array", link: "array", isInternal: true},
    {name: "String", link: "array", isInternal: true},
    {name: "Linked List", link: "array", isInternal: true},
    {name: "Stack", link: "array", isInternal: true},
    {name: "Queue", link: "array", isInternal: true},
    {name: "Hashing", link: "array", isInternal: true},
    {name: "Tree", link: "array", isInternal: true},
    {name: "Graphs", link: "array", isInternal: true},
    {name: "Heaps", link: "array", isInternal: true},
    {name: "Recursion and Backtracking", link: "array", isInternal: true},
    {name: "Dynamic Programming", link: "array", isInternal: true},
    {name: "Divide and Conquer", link: "array", isInternal: true},
    {name: "Greedy Algorithms", link: "array", isInternal: true},
    {name: "Bit Manipulation", link: "array", isInternal: true},
    {name: "Trie", link: "array", isInternal: true},
    {name: "Sorting Algorithms", link: "array", isInternal: true},
    {name: "Searching Algorithms", link: "array", isInternal: true},
    {name: "Mathematical Algorithms", link: "array", isInternal: true},
    {name: "Game Theory", link: "array", isInternal: true},

]
export default function DSA(){
    return(
        <main>
            <AsideMenu menuItems={menuItems} />
            <ContentBox />
        </main>
    )
}