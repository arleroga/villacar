import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="row">
            <img
              src="/resources/img/logo-white-vc-2.png"
              alt="VillaCarolina Logo"
              className="logo"
            />
            <ul className="main-nav">
              <li>
                <a href="#section-features">Características</a>
              </li>
              <li>
                <a href="#section-places">Galeria</a>
              </li>
              <li>
                <a href="#section-price">Precios</a>
              </li>
              <li>
                <a href="#section-form">Contactenos</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-text-box">
          <span>
            <h1>Lo mejor de un viaje,</h1>
            <h1>siempre son los recuerdos.</h1>{" "}
          </span>
          <br />
          <a className="btn btn-full" href="#section-price">
            Quiero ir
          </a>
          <a className="btn btn-ghost" href="#section-features">
            Muestrame más
          </a>
        </div>
      </header>

      <section className="section-features" id="section-features">
        <div className="row">
          <h2>CASA DE CAMPO VILLACAROLINA</h2>
          <p className="long-copy">
            "Ofrecemos una agradable y confortable casa quinta con total
            privacidad, para el descanso y recreación familiar, permitiendo
            disfrutar del contacto con el campo y la naturaleza con una amplia
            zona verde y arboles frutales.
          </p>
          <div className="row">
            <div className="col span-1-of-4 box">
              <i className="ion-ios-infinite-outline iconb"></i>
              <h3>Titulo cuadro 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <i className="ion-ios-stopwatch-outline iconb"></i>
              <h3>Titulo cuadro 2</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <i className="ion-ios-nutrition-outline iconb"></i>
              <h3>Titulo cuadro 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col span-1-of-4 box">
              <i className="ion-ios-cart-outline iconb"></i>
              <h3>Titulo cuadro 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-places" id="section-places">
        <ul className="places-showcase clearfix">
          <li>
            <figure className="place-photo">
              <img src="resources/img/1.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/2.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/3.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/4.jpg" alt="XXX" />
            </figure>
          </li>
        </ul>
        <ul className="places-showcase clearfix">
          <li>
            <figure className="place-photo">
              <img src="resources/img/5.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/6.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/7.jpg" alt="XXX" />
            </figure>
          </li>
          <li>
            <figure className="place-photo">
              <img src="resources/img/8.jpg" alt="XXX" />
            </figure>
          </li>
        </ul>
      </section>

      <section className="section-price" id="section-price">
        <div className="row">
          <h2>Nuestros precios por temporada</h2>
        </div>
        <div className="row">
          <div className=" col span-1-of-3">
            <div className="temporada">
              <div>
                <h3>Baja</h3>
                <p className="temporada-price">
                  $400.000 <span>/ noche</span>
                </p>
                <p className="temporada-price-person">
                  grupo de hasta 10 personas
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="ion-ios-checkmark-empty icon-small"></i>$
                    35.000 persona adicional
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col span-1-of-3">
            <div className="temporada">
              <div>
                <h3>Media</h3>
                <p className="temporada-price">
                  $450.000 <span>/ noche</span>
                </p>
                <p className="temporada-price-person">
                  grupo de hasta 10 personas
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="ion-ios-checkmark-empty icon-small"></i>$
                    40.000 persona adicional
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col span-1-of-3">
            <div className="temporada">
              <div>
                <h3>Alta</h3>
                <p className="temporada-price">
                  $500.000 <span>/ noche</span>
                </p>
                <p className="temporada-price-person">
                  grupo de hasta 10 personas
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="ion-ios-checkmark-empty icon-small"></i>$
                    50.000 persona adicional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectiom-form" id="section-form">
        <div className="row">
          <h2>Estaremos complacidos en atenderte</h2>
          <div className="row">
            <form method="POST" action="#" className="contact-form">
              <div className="row">
                <div className="col span-1-of-3">
                  <label for="name">Nombre</label>
                </div>
                <div className="col span-2-of-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="tu nombre"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label for="email">Correo electrónico</label>
                </div>
                <div className="col span-2-of-3">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="tu correo"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label>Como nos encontraste?</label>
                </div>
                <div className="col span-2-of-3">
                  <select name="find-us" id="find-us">
                    <option value="friends">amigos</option>
                    <option value="Web">Web</option>
                    <option value="redes_sociales">redes sociales</option>
                    <option value="nos_conocias">ya nos conocias?</option>
                    <option value="otro">otro</option>
                  </select>
                </div>
                {/*<div className="row">
                  <div className="col span-1-of-3">
                    <label>Newsletter</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="checkbox"
                      name="Newsletter"
                      id="Newsletter"
                      checked
                    />
                    Yes, please.
                  </div>
                </div>*/}
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>Mensaje</label>
                  </div>
                  <div className="col span-2-of-3">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>&nbsp;</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input className="inputEnv" type="submit" value="Enviar" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="row">
          <div className="col span-1-of-2">
            <ul className="footer-nav">
              <li>
                <a href="#">Acerca de nosotros</a>
              </li>
              {/*<li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>*/}
            </ul>
          </div>
          <div className="col span-1-of-2">
            <ul className="social-icons">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=573202365200&text=Buen%20d%C3%ADa!%20Quiero%20más%20información%20del%20alquiler%20de%20la%20Casa%20Quinta%20Villa%20Carolina!%20Gracias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ion-social-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/villacarolinaturismo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ion-social-facebook"></i>
                </a>
              </li>
              {/*<li>
                <a href="">
                  <i className="ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="ion-social-instagram"></i>
                </a>
            </li>*/}
            </ul>
          </div>
        </div>
        <div className="row">
          <p>
            Copyrigth {String.fromCharCode(169)} 2022 VillaCarolina. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
