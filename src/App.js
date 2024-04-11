import './App.css';
import logo from "./images/Logo.png";
import Alisher from "./images/Alisher.png";
import picture from "./images/Picture.png";
import picture1 from "./images/Picture (1).png";
import picture2 from "./images/Picture (2).png";
import rectengle from "./images/Rectangle 201.png";
import rectengle1 from "./images/Rectangle 201 (1).png";
import rectengle2 from "./images/Rectangle 201 (2).png";
import rectengle3 from "./images/Rectangle 201 (3).png"
import video from "./images/Video.png";
import photo1 from "./images/Photo1.png";
import photo2 from "./images/Photo2.png";
import photo3 from "./images/Photo3.png";
import photo4 from "./images/Photo4.png";
import photo12 from "./images/photo12.png";

function App() {
  return (
    <div className="body">
      <header>
          <nav className="navbar navbar-expand-lg">
              <div className="container">
                  <div className="logo">
                      <img src={logo} alt=""/>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarScroll">
                      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                          <a href="#" className="nav-item nav-link header-p first-nav-link">Maqolalar</a>
                          <a href="#" className="nav-item nav-link header-p">Ijtimoiy tarmoqlar</a>
                      </ul>
                      <div className="d-flex" role="search">
                          <select name="" id="" className="language-select mx-4">
                              <option value="">O'zbek</option>
                              <option value="">Русский</option>
                              <option value="">English</option>
                          </select>
                          <button className="btn btn-dark px-3 p-2 header-btn" type="submit">Xabar qoldirish</button>
                      </div>
                  </div>
              </div>
          </nav>

          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <div className="header-text-box">
                          <h1 className="header-heading">
                              Alisher <br/>
                              Rustamov
                          </h1>
                          <p className="header-p">
                              Malevich Consulting asoschilardan <br/> biri va 16 yillik SERVIS bo‘yicha <br/> mutaxassis
                          </p>
                          <button className="btn btn-dark py-2 px-3">Men haqimda</button>
                      </div>
                  </div>
                  <div className="col-6 px-5 relative-box">
                      <img src={Alisher}  alt="" className="absolute-box"/>
                  </div>
              </div>
          </div>
      </header>

        <div className="container d-block d-sm-none">
            <div className="row mt-5">
                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={picture} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Portugal and I are very much in Love - is here are 5 reasons why? What is</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={photo12} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Portugal and I are very much in Love - is here are 5 reasons why? What is</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={picture2} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Portugal and I are very much in Love - is here are 5 reasons why? What ist</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={picture} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Portugal and I are very much in Love - is here are 5 reasons why? What is</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12">
                    <iframe className="iframe-sm" width="100%" height="300" src="https://www.youtube.com/embed/Sc_FJckymbc?si=ftWEZ9HjMOH5Y2wp"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={photo1} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={photo2} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={photo3} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>

                <div className="col-6 mt-4">
                    <div className="my-card">
                        <img src={photo4} alt="" className="w-100"/>
                        <h6 className="my-3 mt-4">Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h6>
                        <button className="date-btn">13.08.2022</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="container-fluid">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8 mt-4">
                            <div className="container-fluid d-none d-xl-block">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="my-card">
                                            <img src={picture} alt="" className="w-100"/>
                                            <h5 className="my-3 mt-4">Motivasiya bergim keladi ayrim payt</h5>
                                            <p>
                                                Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                                            </p>
                                            <button className="date-btn">13.08.2022</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="my-card">
                                            <img src={picture1} alt="" className="w-100"/>
                                            <h5 className="my-3 mt-4">Motivasiya bergim keladi ayrim payt</h5>
                                            <p>
                                                Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                                            </p>
                                            <button className="date-btn">13.08.2022</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="my-card">
                                            <img src={picture2} alt="" className="w-100"/>
                                            <h5 className="my-3 mt-4">Boy-otaning xayotidan.</h5>
                                            <p>
                                                Qiyin bo‘lsa ham, bir nechta odam non topyapdi. Yana bir yil guv etib o‘tib ketdi.
                                            </p>
                                            <button className="date-btn">13.08.2022</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-5">
                                    <div className="col-12">
                                        <iframe className="iframe-sm" width="100%" height="400" src="https://www.youtube.com/embed/Sc_FJckymbc?si=ftWEZ9HjMOH5Y2wp"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 container-fluid">
                                        <div className="row my-4 justify-content-between">
                                            <div className="col-7 left-box px-2">
                                                <h5>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h5>
                                                <p>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                                <button className="date-btn for-new-card">13.08.2022</button>
                                            </div>
                                            <div className="col-4">
                                                <img src={photo1} alt="" className="w-100"/>
                                            </div>
                                        </div>

                                        <div className="row my-4 justify-content-between">
                                            <div className="col-7 left-box px-2">
                                                <h5>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h5>
                                                <p>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                                <button className="date-btn for-new-card">13.08.2022</button>
                                            </div>
                                            <div className="col-4">
                                                <img src={photo2} alt="" className="w-100"/>
                                            </div>
                                        </div>

                                        <div className="row my-4 justify-content-between">
                                            <div className="col-7 left-box px-2">
                                                <h5>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h5>
                                                <p>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                                <button className="date-btn for-new-card">13.08.2022</button>
                                            </div>
                                            <div className="col-4">
                                                <img src={photo3} alt="" className="w-100"/>
                                            </div>
                                        </div>

                                        <div className="row my-4 justify-content-between">
                                            <div className="col-7 left-box px-2">
                                                <h5>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h5>
                                                <p>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                                <button className="date-btn for-new-card">13.08.2022</button>
                                            </div>
                                            <div className="col-4">
                                                <img src={photo4} alt="" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-3 mt-4 d-none d-xl-block">
                            <div className="container-fluid my-5">
                                <div className="row justify-content-center px-5">
                                    <div className="col-10 py-3 right-data">
                                        <p className="my-2 right-data-p">
                                            Boy-otaning xayotidan...
                                        </p>
                                        <button className="date-btn">13.08.2022</button>
                                    </div>
                                    <div className="col-10 py-3 right-data">
                                        <p className="my-2 right-data-p">
                                            Hech kim velosiped minib
                                            tug‘ilmagan.
                                        </p>
                                        <button className="date-btn">13.08.2022</button>
                                    </div>
                                    <div className="col-10 py-3 right-data">
                                        <p className="my-2 right-data-p">
                                            Talabalik davrida ishlash
                                            yomonmi?
                                        </p>
                                        <button className="date-btn">13.08.2022</button>
                                    </div>
                                    <div className="col-10 py-3 right-data">
                                        <p className="my-2 right-data-p">
                                            Sizda qaysi kuchli
                                            resursingiz bor?
                                        </p>
                                        <button className="date-btn">13.08.2022</button>
                                    </div>
                                </div>

                                <h4 className="text-center mt-5">Ijtimoiy Tarmoqlar</h4>
                                <div className="row px-5">
                                    <div className="col-12">
                                        <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-facebook"></i>
                                    </span>
                                            Facebook
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-telegram"></i>
                                    </span>
                                            Telegram
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-instagram"></i>
                                    </span>
                                            Instagram
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-youtube"></i>
                                    </span>
                                            Youtube
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-2 d-none d-sm-block d-xl-none ">
            <div className="row mt-5">
                <div className="col-12 container-fluid">
                    <div className="row my-4 justify-content-between">
                        <div className="col-7 left-box">
                            <h4>Portugal and I are very much in Love - is here are 5 reasons why? What is</h4>
                            <button className="date-btn for-new-card">13.08.2022</button>
                        </div>
                        <div className="col-4">
                            <img src={rectengle} alt="" className="w-100"/>
                        </div>
                    </div>

                    <div className="row my-4 justify-content-between">
                        <div className="col-7 left-box">
                            <h4>Portugal and I are very much in Love - is here are 5 reasons why? What is</h4>
                            <button className="date-btn for-new-card">13.08.2022</button>
                        </div>
                        <div className="col-4">
                            <img src={rectengle1} alt="" className="w-100"/>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-12">
                            <img src={video} alt="" className="w-100"/>
                        </div>
                    </div>

                    <div className="row my-4 justify-content-between">
                        <div className="col-7 left-box">
                            <h4>Portugal and I are very much in Love - is here are 5 reasons why? What is</h4>
                            <button className="date-btn for-new-card">13.08.2022</button>
                        </div>
                        <div className="col-4">
                            <img src={rectengle2} alt="" className="w-100"/>
                        </div>
                    </div>

                    <div className="row my-4 justify-content-between">
                        <div className="col-7 left-box">
                            <h4>Portugal and I are very much in Love - is here are 5 reasons why? What is</h4>
                            <button className="date-btn for-new-card">13.08.2022</button>
                        </div>
                        <div className="col-4">
                            <img src={rectengle3} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5 ">
            <button className="btn btn-dark btn-lg d-block mx-auto d-block d-xl-none">Ko'proq maqolalar</button>
        </div>

        <div className="container-fluid pt-5 d-block d-xl-none second-sending-place">
            <div className="row justify-content-center py-5">
                <div className="col-sm-7">
                    <h4 className="text-center">Xabar Qoldirish</h4>
                    <p className="text-center mt-3">Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!</p>
                    <form className="my-input-group">
                        <input type="text" placeholder=" Xabar qoldiring" className="my-input"/>
                        <button className="my-button two">Yuborish</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="container-fluid my-5 d-block d-xl-none">
            <h3 className="text-center">Ijtimoiy Tarmoqlar</h3>
            <div className="row justify-content-center">
                <div className="col-sm-7">
                    <div className="container-fluid my-2">
                        <div className="row">
                            <div className="col-md-6">
                                <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-facebook"></i>
                                    </span>
                                    Facebook
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-telegram"></i>
                                    </span>
                                    Telegram
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-instagram"></i>
                                    </span>
                                    Instagram
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="icon-btn mt-3">
                                    <span className="mx-2">
                                        <i className="bi bi-youtube"></i>
                                    </span>
                                    Youtube
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer py-5">
            <div className="container">
                <div className="row d-block d-xl-none">
                    <h3 className="text-center footer-man-name mt-3">
                        Alisher <br/>
                        Rustamov
                    </h3>
                    <p className="text-center footer-man-name-p my-3">
                        Malevich Consulting asoschilardan <br/> biri va 16 yillik SERVIS bo‘yicha <br/> mutaxassis
                    </p>
                </div>
                <div className="row justify-content-between mt-4 d-none d-xl-flex">
                    <div className="col-xl-3">
                        <h3 className="footer-man-name">
                            Alisher <br/>
                            Rustamov
                        </h3>
                        <p className="footer-man-name-p mt-4">
                            Malevich Consulting asoschilardan <br/> biri va 16 yillik SERVIS bo‘yicha <br/> mutaxassis
                        </p>
                    </div>

                    <div className="col-xl-4">
                        <h5 className="footer-man-name">
                            Xabar Qoldirish
                        </h5>
                        <p className="footer-man-name-p">
                            Alisher Rustamovga o‘z fikrlaringiz, <br/> munosabatlaringizni bildirish imkoniyatingiz <br/> bor!
                        </p>
                        <form className="my-input-group">
                            <input type="text" placeholder="    Xabar qoldirish" className="my-input"/>
                            <button className="my-button">Yuborish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
