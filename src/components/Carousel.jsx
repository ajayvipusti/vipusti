import react from "react";
import { Carousel, Card } from "react-bootstrap";
import img1 from "../assets/card1.png";
import img2 from "../assets/about5-t3.png";
import img3 from "../assets/logo192.png";
import logo from "../assets/card-logo.png";
import logo2 from "../assets/card-logo-2.png";
import logo3 from "../assets/card-logo-3.png";
import card from "../assets/card2.webp";

const Carouselcard = () => {
  return (
    <>
      <div className="App" id="services">
        <div className="container ">
          <div className="carousel_text">
            <h5>Technology solutions</h5>
            <h1>We Provide IT & Business Solutions</h1>
          </div>
          <Carousel style={{ paddingBottom: "70px" }}>
            <Carousel.Item className="carousel-item">
              <div className="row ">
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img1}
                      alt=""
                      
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo} alt="" />

                      <Card.Title className="card-title">
                        Digital Marketing
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img2}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo2} alt="" />
                      <Card.Title className="card-title">
                        User Research
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img3}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo3} alt="" />
                      <Card.Title className="card-title">
                        SEM Research
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>



            <Carousel.Item>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img3}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo} alt="" />
                      <Card.Title className="card-title">
                        Network Protection
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={card}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo2} alt="" />
                      <Card.Title className="card-title">
                        Product Developement
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img1}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo3} alt="" />
                      <Card.Title className="card-title">
                        Digital Marketing
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>




            <Carousel.Item>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img2}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo} alt="" />
                      <Card.Title className="card-title">
                        User Research
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img2}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo2} alt="" />
                      <Card.Title className="card-title">
                        SEM Research
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <Card className="card-container">
                    <Card.Img
                      className="card_image"
                      variant="top"
                      src={img2}
                      alt=""
                    />
                    <Card.Body className="card-body">
                      <Card.Img className="card-logo" src={logo3} alt="" />
                      <Card.Title className="card-title">
                        Network Protection
                      </Card.Title>
                      <Card.Text>
                        There are many variatons of passag es of Lorem Ipsum
                        available, but the majority have suffered
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>

            
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Carouselcard;
