
import './App.scss';
import { imageData } from './components/data';
import Footer from './components/footer/Footer';
import GalleryItem from './components/galleryItem/GalleryItem';
import Navbar from './components/navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import { useEffect, useRef } from 'react';

function App() {

  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.7
      });
    }
  }, [])


  const images = imageData.map((items, index) => {
    return (
      items.map((url, elementIndex) => <GalleryItem key={url} index={elementIndex} src={url} columnOffset={index * 14} />)
    );
  })
  return (
    <div className="App">
      <Navbar />
      <div className='main-container'>
        <div className='scroll-container' data-scroll-container ref={ref} data-scroll>
          <div className='content'>
            <div className='hero-section'></div>
            <div className='gallery'>
              {images}
              <div className='gallery-helper'>
                <span>scroll to navigate</span>

              </div>
              <div className='behind-text fill' data-scroll data-scroll-speed>
                The people who are crazy enough to think they can change the world are the ones who do.
                  </div>
              <div className='behind-text outline' data-scroll data-scroll-speed>
                The people who are crazy enough to think they can change the world are the ones who do.
                  </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
