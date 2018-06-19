import React from 'react'
import styled from 'styled-components';
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'


const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const ImagesWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  pointer-event: none;

  &.visible {
    opacity: 1;
  }
`

const ImageContainer = styled.div`
  flex: 1 0 30%;
  overflow: hidden;
  border: 0px solid white;
  position: relative

  &:before {
    width: 110%;
    height: 103%;
    content: '';
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    background: white;
    z-index: 2;
    transition: 1s ease-in-out all;
    // transition: 1s all ease-in-out ${props => props.delay || '1s'};
    transform: translatex(0%);

    .visible & {
      transform: translatex(${props => props.X});
    }

    .willClose & {
      transform: translatex(0%);
    }
  }


`

const Image = styled.div`
  position: absolute;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  left: ${props => props.left || 'auto'};
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  id: ${props => props.id};
  // transition: 1s all ease-in-out ${props => props.delay || '1s'};
  transition: 0.8s all cubic-bezier(.645,.045,.355,1) ${props => props.delay};
  transform: scale(1.4) rotate(${props => props.rotate});

  .visible & {
    transform: scale(1) rotate(0deg);
  }

  .willClose & {
    // transition: 0.8s all cubic-bezier(.645,.045,.355,1);
    transform: scale(1.4) rotate(${props => props.rotate});
  }
`

class imageTransition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      willOpen: null,
      willClose: null
    }
    this.numberOfSquare = 9
    this.imgs = [img1, img2]

    this.nextSlide = this.nextSlide.bind(this)
  }

  nextSlide() {
    console.log("nextSlide");
    const currentIndex = this.state.active
    const maxIndex = this.imgs.length - 1
    const minIndex = 0
    let nextIndex = this.state.active
    let willOpen = null
    let willClose = null

    if (currentIndex < maxIndex) {
      nextIndex += 1
      willOpen = nextIndex
      willClose = currentIndex
    } else {
      nextIndex = minIndex
      willOpen = minIndex
      willClose = currentIndex
    }

    this.setState({
      willClose: willClose

    })

    setTimeout(() => {
      this.setState({
        willClose: null,
        active: nextIndex
      })
    }, 1500);

  }
  render() {
    return (
      <Slider >
        {
          this.imgs.map((image, index) => (
            <ImagesWrapper key={index} className={`${this.state.active === index ? 'visible' : '' } ${this.state.willOpen === index ? 'willOpen' : '' } ${this.state.willClose === index ? 'willClose' : '' }`} onClick={this.nextSlide}>
              {
                [...Array(this.numberOfSquare)].map((x, i) => {
                  let top = 'auto'
                  let bottom = 'auto'
                  let left = 'auto'
                  let right = 'auto'
                  let X = '100%'
                  let Xreverse = '-100%'
                  let rotate = '0deg'
                  let delay = '0.3s'

                  const j = i + 1

                  if (j === 1 || j === 2 || j === 3) {
                    top = 0
                    delay = '0.30s'
                  } else if (j === 4 || j === 5 || j === 6 ) {
                    top = '-33.33333334vh'
                    Xreverse = '100%'
                    X = "-100%"
                    delay = '0.10s'
                    rotate = '-0deg'

                    if (j === 5) {
                      delay = '0.10s'
                    }

                  } else {
                    bottom = '0'
                    delay = '0.15s'
                  }

                  // left && right
                  if (j === 1 || j === 4 || j === 7) {
                    left = 0
                  } else if (j === 2 || j === 5 || j === 8 ) {
                    left = '-33.33333334vw'
                  } else {
                     right = '0'
                  }

                  return (
                    <ImageContainer key={x} X={X} Xreverse={Xreverse} delay={delay}>
                      <Image
                        bg={this.imgs[index]}
                        top={top}
                        right={right}
                        left={left}
                        bottom={bottom}
                        rotate={rotate}
                        delay={delay}
                      />
                    </ImageContainer>
                  )
                })
              }
            </ImagesWrapper>
          ))
        }
      </Slider>
    )
  }
}

export default imageTransition
