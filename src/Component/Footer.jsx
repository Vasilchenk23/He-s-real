import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
        <footer>
            <div className="footer">
                <div className="catalog">
                    <h1>Каталог</h1>
                    <p>Акции</p>
                    <p>Новости</p>
                  <Link to="/men"style={{ textDecoration: 'none', color: 'black' }}> <p>Одежда Мужская</p></Link> 
                  <Link to="/women"style={{ textDecoration: 'none', color: 'black' }}> <p>Одежда Женская</p></Link>
                  <Link to="/kids"style={{ textDecoration: 'none', color: 'black' }}> <p>Одежда Детская</p></Link>
                </div>
                <div className="infoBlockFooter">
                    <h1>Информация</h1>
                   <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><p>Магазин</p></Link> 
                   <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}> <p>О нас</p> </Link>
                   <Link to="/service" style={{ textDecoration: 'none', color: 'black' }} ><p>Доставка, оплата, возврат</p></Link> 
                   <Link to="/feedbacks" style={{ textDecoration: 'none', color: 'black' }}><p>Отзывы</p></Link>
                </div>
                <div className="publicNetwork">
                    <h1>Социальные сети</h1>
                        <img src="/brand-facebook.svg" alt="facebook" />
                        <img src="/brand-instagram.svg" alt="instagram" />
                        <img src="/brand-telegram.svg" alt="telegram" />
                        <img src="/brand-youtube.svg" alt="youtube" />
                    
                </div>
            </div>
        </footer>
        <div className="footerLine"></div>
        </>
    );
}

export default Footer;