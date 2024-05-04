import Header from "../components/home/Header";
import FileDropZone from "../components/home/FileDropZone";
import FileReciever from "../components/home/FileReciever";
import FileDropHeader from "../components/home/FileDropHeader";

const HomePage = () => {
  return (
    <main className="bg-pattern flex max-h-screen min-h-screen flex-col">
      <div className="h-full ">
        {/* header  */}
        <Header />

        {/* main  */}
        <div className="flex h-full flex-col items-center gap-16 py-20">
          <FileDropHeader />
          <FileDropZone />
          <FileReciever />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
