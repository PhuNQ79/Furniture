import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel'
function Slider() {
    return(
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/200000065946/1000806110/14/slideshow_2.jpg?v=555"
            alt="First slide"
            style={{height:753}}
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/200000065946/1000806110/14/slideshow_6.jpg?v=555"
            alt="Second slide"
            style={{height:753}}
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/200000065946/1000806110/14/slideshow_8.jpg?v=555"
            alt="Third slide"
            style={{height:753}}
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider;