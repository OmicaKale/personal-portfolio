import { Appbar } from "./components/appbar";
import { Banner } from "./components/home/banner";
import { About } from "./components/home/about";
import { Service } from "./components/home/service";
import { Project } from "./components/home/project";

import { Design } from "./components/home/design";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <>
      <div className="px-0">
        <Appbar />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10 bg-white dark:bg-slate500">
          <Banner />
          <About />
          <Service />
          <Project />
       
          <Design />
        </div>
        <div className="dark:bg-slate500">
          <Footer />
        </div>
      </div>
    </>

  );
}
