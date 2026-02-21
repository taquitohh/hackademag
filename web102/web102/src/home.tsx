// import { useState } from 'react'
import './home.css'
import Navbar from'./components/navbar'
// import Imgslider from './imgslider.tsx'
// import Product from'./components/product'
function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div> */}
        <div className="slider">

          <div className="list">


            <div className="item">
              <img src="./png/cod.jpg" alt=""/>

              <div className="content">
                <div className="title">&nbsp;</div>
                <div className="type">&nbsp;</div>
                <div className="description">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
              
            </div>

            <div className="item">
              <img src="./png/r6.jpg" alt=""/>

              <div className="content">
                <div className="title">&nbsp;</div>
                <div className="type">&nbsp;</div>
                <div className="description">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
              
            </div>

            <div className="item">
              <img src="./png/fn.jpg" alt=""/>

              <div className="content">
                <div className="title">&nbsp;</div>
                <div className="type">&nbsp;</div>
                <div className="description">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
              
            </div>

            <div className="item">
              <img src="./png/rl.jpg" alt=""/>

              <div className="content">
                <div className="title">&nbsp;</div>
                <div className="type">&nbsp;</div>
                <div className="description">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
              
            </div>

          </div>

          <div className="thumbnail">

            <div className="item">
              <img src="./png/cod.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./png/r6.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./png/fn.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./png/rl.jpg" alt=""/>
            </div>

          </div>

          <div className="nextPrevArrows">
            <button className="prev">&lt;</button>
            <button className="next">&gt;</button>
          </div>
        </div>

        
        {/* <script><Imgslider/></script> */}
    </>
  )
}

export default Home
