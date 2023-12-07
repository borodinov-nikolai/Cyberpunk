import Carousel from "@/src/components/client/ui/carousel";
import Description from "@/src/components/server/sections/description";
import Draw from "@/src/components/server/sections/draw";
import Comercial from "@/src/components/server/sections/commercial";
import Buy from "@/src/components/server/sections/buy";

export default function Home() {
  return (
    <main>
      <section id="carousel">
        {" "}
        <Carousel />{" "}
      </section>
      <section id="decription">
        {" "}
        <Description />{" "}
      </section>
      <section id="draw">
        {" "}
        <Draw />{" "}
      </section>
      <section id="comercial">
        {" "}
        <Comercial />{" "}
      </section>
      <section id="buy">
        {" "}
        <Buy />{" "}
      </section>
    </main>
  );
}
