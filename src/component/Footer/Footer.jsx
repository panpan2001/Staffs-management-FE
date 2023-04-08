import 'bulma/css/bulma.min.css';
import './Footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="columns has-background-light mt-6 ml-3 mr-3 ">
            <div className="column is-3  ">
                <img src="https://bulma.io/images/bulma-logo.png" alt="" srcSet="" className='img_footer' />
            </div>
            <div className="column is-3 has-text-centered is-size-3 has-text-info">
                <p><strong>Nhat's Assignments</strong></p>
            </div>
            <div className="column is-3 has-text-centered is-size-3 ">
                <p><a href="mailto:truonghoc19102001@gmail.com"> truonghoc19102001@gmail.com</a></p>
            </div>
            </div>
            
        </footer>
    )
}