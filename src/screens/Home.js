import React from "react";

// Components
import Intro from "components/Intro";
import CallToAction from "components/CallToAction";
import Button from "components/Button";
import Video from "components/Video";
import Carousel from "components/Carousel";
import ProductCard from "components/ProductCard";
import BlogCard from "components/BlogCard";
import Footer from "components/Footer";

// Images
import chaProductImage from "resources/images/product_1.png";
import chaNoiteProductImage from "resources/images/product_2@2x.png";
import ingredientsHeaderImage from "resources/images/ingredients_header@2x.png";
import ingredientsImage from "resources/images/ingredients@2x.png";
import videoThumbnail from "resources/images/video_thumbnail@2x.png";
import smoothieImage from "resources/images/smoothie@2x.png";
import blog1Image from "resources/images/blog_1@2x.png";
import blog2Image from "resources/images/blog_2@2x.png";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />

      <CallToAction
        background="gradient"
        from="secondaryDarker"
        to="secondary"
        header="CHEGA  DE CONTAR CARNEIRINHOS."
        image={chaNoiteProductImage}
        title="DESINCHÁ NOITE"
        text="Assista o vídeo para ver as
        recomendações da nutricionista Ana Paula Montemor sobre o consumo do Desinchá e os seus ingredientes. Assista o vídeo para ver asrecomendações da nutricionista Ana Paula "
        actions={[
          <Button variant="text" color="primaryLighter">
            Saiba Mais >
          </Button>,
          <Button variant="text" color="tertiary">
            Comprar >
          </Button>
        ]}
      />

      <CallToAction
        background="gradient"
        from="primary"
        to="primaryDarker"
        header="SEU CHÁ COM O MELHOR QUE A NATUREZA E A CIÊNCIA PODEM OFERECER."
        image={chaProductImage}
        title="DESINCHÁ"
        text="Assista o vídeo para ver as
        recomendações da nutricionista Ana Paula Montemor sobre o consumo do Desinchá e os seus ingredientes. Assista o vídeo para ver asrecomendações da nutricionista Ana Paula "
        actions={[
          <Button variant="text" color="primaryLighter">
            Saiba Mais >
          </Button>,
          <Button variant="text" color="tertiary">
            Comprar >
          </Button>
        ]}
      />

      <CallToAction
        background="flat"
        header={<img src={ingredientsHeaderImage} />}
        image={ingredientsImage}
        title="MEUS INGREDIENTES"
        text="Assista o vídeo para ver as
        recomendações da nutricionista Ana Paula Montemor sobre o consumo do Desinchá e os seus ingredientes. Assista o vídeo para ver asrecomendações da nutricionista Ana Paula "
        actions={
          <Button variant="flat" color="primary">
            Saiba Mais
          </Button>
        }
      />

      <Video
        thumbnail={videoThumbnail}
        title="DESINCHÁ EM 3 PALAVRAS"
        text="Perguntamos para parceiros, nutricionistas e clientes: “Como você descreveria o Desinchá em 3 palavras?”"
      />

      <Carousel title="RECEITAS DESINCHÁ">
        <ProductCard title="Smoothie bowl" thumbnail={smoothieImage} />
        <ProductCard title="Smoothie bowl" thumbnail={smoothieImage} />
        <ProductCard title="Smoothie bowl" thumbnail={smoothieImage} />
      </Carousel>

      <Carousel title="TODAY AT DESINCHÁ">
        <BlogCard
          text="Foi inaugurada o meu cantinho aqui em São Paulo, a @casadesincha!
          Ainda tem muita coisa boa por aqui. Workshops, aulões e experiências inesquecíveis. Fique de olho no meu feed e garanta seu ingresso."
          thumbnail={blog1Image}
        />
        <BlogCard
          text="Foi inaugurada o meu cantinho aqui em São Paulo, a @casadesincha!
          Ainda tem muita coisa boa por aqui. Workshops, aulões e experiências inesquecíveis. Fique de olho no meu feed e garanta seu ingresso."
          thumbnail={blog2Image}
        />
      </Carousel>

      <CallToAction
        background="flat"
        title="Perguntas Frequentes"
        text="Veja as respostas de nutricionistas e da minha equipe de atendimento às perguntas mais frequentes que recebemos."
        actions={
          <Button variant="flat" color="primary">
            Ver Perguntas
          </Button>
        }
      />

      <Footer />
    </div>
  );
}

export default Home;
