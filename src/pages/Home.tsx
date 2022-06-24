import React from "react";
import Banner from "../components/Banner/Banner";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionIcons from "../components/SectionIcons/SectionIcons";
import img1 from "../assets/foto1.jpg";
import img2 from "../assets/foto2.jpg";
import img3 from "../assets/foto3.jpg";
import Footer from "../components/Footer/Footer";
const Home: React.FC = () => {
  return (
    <>
      <Banner titulo="Minha primeira página em ReactJS" />
      <SectionIcons />
      <SectionContent
        titulo="Titulo 1"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis
        accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit
        optio nam sint?
        Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum
        maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis."
        imagem={img1}
      />
      <SectionContent
        titulo="Titulo 1"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis
        accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit
        optio nam sint?
        Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum
        maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis."
        imagem={img2}
        reverse
      />
      <SectionContent
        titulo="Titulo 1"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis
        accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit
        optio nam sint?
        Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum
        maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis."
        imagem={img3}
      />
      <Banner titulo="Contato" footer />
      <Footer />
    </>
  );
};

export default Home;
