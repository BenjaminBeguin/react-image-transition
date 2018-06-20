import React from 'react'
import styled from 'styled-components';
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'
import img3 from './img/image3.jpg'


const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  .table & {
  }
`
const Cta = styled.div`
  position: relative;

`

const ImageText = styled.h2`
  font-size: 40px;
  position: absolute;
  z-index: 40;
  text-transform: uppercase;
  color: white;
  transform: translateX(-100%);
  transition: 0.5s ease all 1s;
  // text-shadow: 1px 1px black;

  .visible & {
    transform: translateX(0%);
  }

  .willClose & {
    transform: translateX(-100%);
    transition: 0.5s ease all 0.2s;

  }

`
const ImageContent = styled.h2`
  font-size: 30px;
  position: absolute;
  z-index: 40;
  color: white;
  transform: translateX(-100%);
  transition: 0.5s ease all ${props => props.delay || '1s'};

  .visible & {
    transform: translateX(0%);
  }

  .willClose & {
    transform: translateX(-100%);
    transition: 0.5s ease all 0.2s;
  }

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
  transition: 1s ease-in-out width, 1s left ease 0.1s;

  &.visible {
    opacity: 1;
  }

  .table & {
    // position: relative
    opacity: 1;
    width: 33.33%;
    left: auto;


    &:nth-child(1) {
      left: 33.33%;
    }
    &:nth-child(2) {
      left: 66.66%;
    }
  }
`

const ImageContainer = styled.div`
  flex: 1 0 30%;
  overflow: hidden;
  // border: 0px solid white;
  position: relative

  &:before {
    width: 0%;
    height: 100%;
    content: '';
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    background: white;
    z-index: 2;
    transition: 1s ease-in-out all 0s;
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
  // transition: 1s all ease-in-out ${props => props.delay || 1}s;
  transition: 0.8s all cubic-bezier(.645,.045,.355,1) ${props => props.delay}s;
  transform: scale(1.4) rotate(${props => props.rotate});
  opacity: 0;

  .table & {
    opacity: 1;
    width: 300%;
    height: 300%;
    transition: 0.8s all cubic-bezier(.645,.045,.355,1) ${props => props.delay + 1}s , opacity 0s ease;

  }

  .visible & {
    transform: scale(1) rotate(0deg);
    opacity: 1;

  }

  .willClose & {
    opacity: 0;
    transform: scale(1.4) rotate(${props => props.rotate});
  }
`

class imageTransition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      willOpen: null,
      willClose: null,
      layout: 'table'
    }
    this.numberOfSquare = 9
    this.imgs = [
      {
        title: 'San francisco',
        content: ['Growing up', 'Internship', 'vibes', '6-month', 'friends'],
        img: img1
      },
      {
        title: 'Paris',
        content: ['Home', 'My love', 'Born', 'raised', 'friends', 'studies'],
        img: img2
      },
      {
        title: 'Class',
        content: ['Growing up', 'Internship', 'vibes', '6-month', 'friends'],
        img: img3
      }
  ]

    this.nextSlide = this.nextSlide.bind(this)
    this.toggleLayout = this.toggleLayout.bind(this)
  }

  getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  toggleLayout() {
    let layout = 'slider'
    if (this.state.layout === 'slider') {
      layout = 'table'
    }

    this.setState({
      layout
    })
  }
  nextSlide() {
    if (this.state.layout === 'slider') {
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
        willClose
      })

      setTimeout(() => {
        this.setState({
          willClose: null,
          active: nextIndex
        })
      }, 1500)
    }
  }
  render() {
    return (
      <div className={this.state.layout}>
        <Cta onClick={this.toggleLayout}>Click</Cta>
        <Slider >
          {
            this.imgs.map((image, index) => {
            let used = [5]

            let random = this.getRandom(0, this.numberOfSquare)
            for (var y = 0; y < this.numberOfSquare;  y++) {
              while (used.indexOf(random) >= 0 && used.length < 9) {
                random = this.getRandom(0, this.numberOfSquare)
              }
              used.push(random)
            }

            return (
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
                    let delay = 0.3
                    let text = null

                    const j = i + 1

                    if (j === 1 || j === 2 || j === 3) {
                      top = 0
                      delay = 0.30
                    } else if (j === 4 || j === 5 || j === 6 ) {
                      top = '-33.33333334vh'
                      Xreverse = '100%'
                      X = "-100%"
                      delay = 0.10
                      rotate = '-0deg'

                      if (j === 5) {
                        delay = 0.20
                      }
                    } else {
                      bottom = '0'
                      delay = '0.15s'
                    }

                    // delay = `0.${i}`

                    // left && right
                    if (j === 1 || j === 4 || j === 7) {
                      left = 0
                    } else if (j === 2 || j === 5 || j === 8 ) {
                      left = `${-33.33333334 * 3}%`
                    } else {
                       right = '0'
                    }

                    if (i === 4 ) {
                      text = (<ImageText>{this.imgs[index].title}</ImageText>)
                    } else {
                      // text = (<ImageContent delay={`${Math.random() + 1}s`}>{this.imgs[index].content[used[i]]}</ImageContent>)
                    }

                    return (
                      <ImageContainer key={x} X={X} Xreverse={Xreverse} delay={delay}>
                        {text}
                        <Image
                          bg={this.imgs[index].img}
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
            )
          })
        }
        </Slider>
      </div>
    )
  }
}

export default imageTransition
