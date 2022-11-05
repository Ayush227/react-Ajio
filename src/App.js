import React from 'react';
import './style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <div>
      <div>
        <nav class="navbar background">
          <ul class="nav-list">
            <div class="logo">
              <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" />
            </div>
            <li>
              <a href="#courses">Men</a>
            </li>
            <li>
              <a href="#tutorials">Women</a>
            </li>
            <li>
              <a href="#jobs">INDIE</a>
            </li>
            <li>
              <a href="#student">Home And Kitchain</a>
            </li>
          </ul>
          <div class="rightNav">
            <input type="text" name="search" id="search" />
            <button class="btn btn-sm">Search</button>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <Carousel>
            <div>
              <img src="https://assets.ajio.com/cms/AJIO/WEB/05112022-unisex-d-main-p2-brands-upto700.jpg" />
            </div>
            <div>
              <img src="https://assets.ajio.com/cms/AJIO/WEB/05112022-unisex-d-main-p2-brands-upto700.jpg" />
            </div>
            <div>
              <img src="https://assets.ajio.com/cms/AJIO/WEB/05112022-unisex-d-main-p2-brands-upto700.jpg" />
            </div>
          </Carousel>
        </div>
        
        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
