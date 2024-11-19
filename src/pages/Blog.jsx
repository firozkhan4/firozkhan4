import manifestfile from "../assets/blogs/manifest.json";
import ContentList from "../components/ContentList";

export default function Blog() {
  return (
    <div className="container mx-auto w-2/4 overflow-hidden pt-7 space-y-10 ">
      <div className="space-y-4 ">
        <h1 className="text-4xl font-mono font-italic">Blogs</h1>
        <p>
          Every week, I documente and articulate my acquired knowledge and
          personal perspectives on topics that captivate my interest. Here are
          all blogs I wrote to date.
        </p>
      </div>
      <div>
        {manifestfile.map((item, index) => {
          return (
            <ContentList
              title={item.title}
              date={item.date}
              link={item.src}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
