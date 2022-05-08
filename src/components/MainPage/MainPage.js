import myPhoto from '../../images/photo.jpg';
import './MainPage.scss';

function MainPage() {
    return (
        <div className="main-page">
            <h2 className="name-component">MainPage</h2>
            <div className="contact-inform">
                <div className="photo">
                    <img src={myPhoto} alt="My photo"/>
                </div>
                <div className="contact-details">
                    <h5>Контактная информация:</h5>
                    <ul>
                        <li>Aliaksandr Kotau</li>
                        <li>The Republic of Poland, Warsaw</li>
                        <li>Mob/WhatsApp: +48 730 060 649</li>
                        <li>Viber/Telegram: +375 33 691 79 48</li>
                        <li>E-mail: kotau.alexander@gmail.com</li>
                        <li>Skype: kotau.alexander@gmail.com</li>
                        <li>LinkedIn: https://linkedin.com/in/alexander-kotau</li>
                        <li>Codewars: "https://codewars.com/users/Alexander1"</li>
                        <li>GitHub: https://github.com/avkotau</li>
                    </ul>
                </div>
            </div>

            <div>
                <h5>Mои навыки:</h5>
                <ul>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Sass</li>
                    <li>Css</li>
                    <li>Html</li>
                    <li>Css</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage;
