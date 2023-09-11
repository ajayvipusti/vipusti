import "./App.css";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import about5 from "./assets/about5-t3.png";
import about51 from "./assets/about5-t2.png";
import about52 from "./assets/logo192.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Footer from "./components/Footer";
import Carouselcard from "./components/Carousel";
import headerimg from '../src/assets/headimg.webp'

function App() {
  const now = 100;

  return (
    <>
      <TopHeader />
      <Navbar />

      <main
        className="row"
        id="home"
        style={{
          // border: "1px solid red",
          textAlign: "center",
          background: "#f5f8fc",
          margin:'0px'
        }}
      >
        <section className="col-md-6 my-auto textalignhead"  >
          <div className="typingtext">
            <h2 style={{ color: "#4d7fdb", fontSize: '40px' }}>IT Services and Consulting</h2>
          </div>
          <div>
            <h1 className="fs-bold">Awesome IT Services </h1>
            <h1>for Your Business</h1>
          </div>
          <div>
            <p>
              We bring customized software programs modeled to answer your needs
              or to improve your existing system. We help evaluate your process
              and present the best possible solution to bring excellent results
              and upgrade your operations in any area or process.
            </p>
          </div>
          <div></div>
        </section>



        <section className="col-md-6 h">
          <img
            src={headerimg}
            height={440}
            width={500}
            className="img-fluid"
            style={{borderRadius: "15px", margin: "30px 0 0 5px"}}
          />
        </section>
      </main>

      <main className="row" style={{margin:'0px'}}>
        <section
          className="col-md-6 mx-auto text-center"
          style={{ background: "" }}
        >
          <div>
            <img src={about5} height={240} width={240} className="img-fluid" />

            <img src={about52} height={240} width={240} className="img-fluid" />
          </div>

          <img src={about51} height={240} width={240} className="img-fluid" />
        </section>
        <section className="col-md-6 text-center">
          <div className="mt-5 mobile-view" >
            <p style={{ color: "#6382bf"  }} className="fs-4" id="skillheading">
              Our Technical Skill
            </p>

            <p className="fs-3">We Are Increasing Business </p>
            <p className="fs-3">Success With Technology</p>
            <div>
              <p>Software Development</p>
              <ProgressBar now={now} label={`${now}%`} />
            </div>
            <div className="mt-4">
              <p>UL / UX Design</p>
              <ProgressBar now={now} label={`${now}%`} />
            </div>
            <div className="mt-4">
              <p>Web Development</p>
              <ProgressBar now={now} label={`${now}%`} />
            </div>
          </div>
        </section>
      </main>

      <main
        className="mt-5 d-flex justify-content-between align-items-center Project "
        id="projects"
      >
        <div className="d-flex">
          <div>
            <img
              src="https://quomodothemes.website/html/antech/assets/images/feature-icons/projects.svg"
              alt="img"
            />
          </div>
          <div className="ms-3">
            <p className="fw-bold">2547+</p>
            <p>Project Done</p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <img
              src="https://quomodothemes.website/html/antech/assets/images/feature-icons/clients.svg"
              alt="img"
            />
          </div>
          <div className="ms-3">
            <p className="fw-bold">8255+</p>
            <p>Active Clients</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <img
              src="https://quomodothemes.website/html/antech/assets/images/feature-icons/years.svg"
              alt="img"
            />
          </div>
          <div className="ms-3">
            <p className="fw-bold">12+</p>
            <p>Glorious Years</p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <img
              src="https://quomodothemes.website/html/antech/assets/images/feature-icons/win.svg"
              alt="img"
            />
          </div>
          <div className="ms-3">
            <p className="fw-bold">894+</p>
            <p>Project Win</p>
          </div>
        </div>
      </main>
      <Carouselcard />
      <Footer />
    </>
  );
}

export default App;
