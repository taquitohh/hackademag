import { ImageSlider } from "./imgslider.tsx"
import Navbar from "./components/navbar.tsx"
import Categories from './components/Categories.tsx';
import Footer from'./components/footer'
import car1 from "./img/cod.jpg"
import car2 from "./img/r6.jpg"
import car3 from "./img/fn.jpg"
import car4 from "./img/rl.jpg"
import car5 from "./img/fg.jpg"

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
]


export default function Home() {
  return (
    <>
    <Navbar/>
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      
    </div>
    <Categories />
    <Footer/>
    </>
  )
}