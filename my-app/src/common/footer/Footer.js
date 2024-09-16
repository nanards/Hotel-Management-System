import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>For guests, we provide an intuitive interface to search, book, and manage hotel reservations effortlessly. Our secure payment system ensures peace of mind, while our reviews and ratings help you make informed decisions.</p>
            <br />
            <p>Our dedicated support team is always here to assist you, ensuring a smooth and pleasant experience. Join us and discover a smarter way to travel and manage hospitality. Experience convenience, reliability, and excellence with Hotel Booking Management System Name.</p>
            <div className='icon flex_space'>
            <a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <a href="https://www.youtube.com/watch?v=rBPNuKnFIqc"><i className='fab fa-youtube'></i></a>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
              <Link to='/destination'>Destination</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
              <Link to='/testimonail'>Testimonail</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>In this final work, this project is a crucial step in implementing
                  new technology system in a Hotel. </p>
                <label className='fa fa-calendar-alt'></label>
                <span>15 June 2024</span>
              </li>
              <li>
                <p>Review this work</p>
                <label className='fa fa-calendar-alt'></label>
                <span>16 June 2024</span>
                <p>A hotel review is a guest's written assessment of a hotel's amenities,
                  services, and overall experience. It provides potential guests with 
                  and honest account of what to expect and can influence the hotels reputation
                  and business.
                </p>
              </li>
              <li>
                <p>The day to present this project about Hotel Management System,
                  the presentation typically includes an introduction, project scope,
                  risk and challenges, project plan, budget and resource allocation,
                  benefits and value, and a conclusion.
                </p>
                <label className='fa fa-calendar-alt'></label>
                <span>18 June 2024</span>
              </li>
            </ul>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer