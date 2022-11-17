import About from '../about/About'
import './Footer.css'



function Footer() {
  return (
    <div id="footer-container">
        <About/>
        <div className='footer-menu'>
            <button className='menu-button'>Contact Us</button>
            <button className='menu-button'>Terms of Use</button>
            <button className='menu-button'>Privacy Policy</button>
        </div>
    </div>
  )
}

export default Footer