import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <img
          src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75"
          alt="Logo Zé Delivery"
        />
        <Link to="/signin">
          <button className="btn-entrar-inicio">Entrar</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
