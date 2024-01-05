import Hero from "./ui/Hero/Hero";
import hamburguerHero from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import _hamburguerHero from "@/public/media/sections-pictures/hero/french-fries-hero-picture.png"
import pizzaHero from "@/public/media/sections-pictures/hero/pizza-hero-picture.png";
import _pizzaHero from "@/public/media/sections-pictures/hero/tomatoes-hero-picture.png"
import acaiHero from "@/public/media/sections-pictures/hero/acaii-hero-picture.png";
import _acaiHero from "@/public/media/sections-pictures/hero/acai-leaves-hero-picture.png"

export default function Home() {
  return (
    <Hero foodText="hambúrguer" heroPicture={hamburguerHero} borderHeroPicture={{picture: _hamburguerHero, text: "batatas-fritas"}} />
  )
}
