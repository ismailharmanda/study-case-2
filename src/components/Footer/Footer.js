import { Link, NavLink } from "react-router-dom";

import appstore from "../../assets/download-centers/appstore.png";
import playstore from "../../assets/download-centers/playstore.png";
import appgallery from "../../assets/download-centers/appgallery.png";
import facebook from "../../assets/social-icons/facebook.svg";
import linkedin from "../../assets/social-icons/linkedin.svg";
import instagram from "../../assets/social-icons/instagram.svg";
import youtube from "../../assets/social-icons/youtube.svg";
import file from "../../assets/social-icons/file.svg";
import phone from "../../assets/social-icons/phone.svg";
import whatsapp from "../../assets/social-icons/whatsapp.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top d-flex row align-items-center ">
        <div className="stores col-12 col-lg-6 m-0 p-0">
          <span>Uygulamayı indirin</span>
          <Link to="#">
            <img src={appstore} alt="App Store" />
          </Link>
          <Link to="#">
            <img src={playstore} alt="Play Store" />
          </Link>
          <Link to="#">
            <img src={appgallery} alt="App Gallery" />
          </Link>
        </div>
        <div className="socials col-12 col-lg-6 m-0 p-0 text-lg-end">
          <span>Bizi takip edin</span>
          <Link to="#">
            <img src={facebook} alt="Facebook" />
          </Link>
          <Link to="#">
            <img src={linkedin} alt="LinkedIn" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link to="#">
            <img src={youtube} alt="YouTube" />
          </Link>
        </div>
      </div>
      <div className="footer__bottom d-flex row">
        <div className="col-12 col-sm-4 text-center text-sm-start col-lg-2 m-0 p-0 mb-5 sm-mb-0">
          <div className="footer__bottom-title">Yardım</div>
          <ul>
            <li>
              <Link to="#">Sıkça sorulan sorular</Link>
            </li>
            <li>
              <Link to="#">İade ve değişim</Link>
            </li>
            <li>
              <Link to="#">Site haritası</Link>
            </li>
            <li>
              <Link to="#">Kullanım koşulları</Link>
            </li>
            <li>
              <Link to="#">İşlem rehberi</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 text-center text-sm-start  m-0 p-0 mb-5 sm-mb-0">
          <div className="footer__bottom-title">Kurumlar</div>
          <ul>
            <li>
              <Link to="#">Hakkımızda</Link>
            </li>
            <li>
              <Link to="#">Mağazalarımız</Link>
            </li>
            <li>
              <Link to="#">Kurumsal/Corporate</Link>
            </li>
            <li>
              <Link to="#">Kariyer fırsatları</Link>
            </li>
            <li>
              <Link to="#">Kurumsal destek</Link>
            </li>
            <li>
              <Link to="#">Hediye kart</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 text-center text-sm-start  m-0 p-0 mb-5 sm-mb-0">
          <div className="footer__bottom-title">Politikalar</div>
          <ul>
            <li>
              <Link to="#">Aydınlatma metni</Link>
            </li>
            <li>
              <Link to="#">Veri gizliliği ve güvenliği politikası</Link>
            </li>
          </ul>
        </div>
        <div className="support col-12 col-lg-6 m-0 p-0 d-flex justify-content-center">
          <div className="support-list">
            <div className="footer__bottom-title">LC Waikiki Destek</div>
            <ul>
              <li>
                <Link className="btn" to="#">
                  <img src={file} alt="İletişim Formu" />
                  <span>İletişim Formu</span>
                </Link>
              </li>
              <li>
                <Link className="btn" to="#">
                  <img src={phone} alt="Phone" />
                  <span>444 4 529</span>
                </Link>
              </li>
              <li>
                <Link className="btn" to="#">
                  <img src={whatsapp} alt="Whatsapp" />
                  <span>Whatsapp destek 444 4 529</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
