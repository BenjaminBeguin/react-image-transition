import React from 'react'
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'
import img3 from './img/image3.jpg'
import {
  Slider,
  Cta,
  ImageText,
  ImagesWrapper,
  ImageContainer,
  Image
} from './styled'


class imageTransition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: -1,
      willOpen: null,
      willClose: null,
      layout: 'slider',
      transition: 'auto'
    }
    this.numberOfSquare = 9
    this.imgs = [
      {
        title: 'San francisco',
        img: img1
      },
      {
        title: 'Paris',
        img: img2
      },
      {
        title: 'Sydney',
        img: img3
      }
  ]

    this.nextSlide = this.nextSlide.bind(this)
    this.toggleLayout = this.toggleLayout.bind(this)

    this.nextSlide()
  }

  getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  toggleLayout() {
    let layout = ''
    let transition = ''
    if (this.state.layout === 'slider') {
      layout = 'table'
      transition = 'auto'
    } else {
      layout = 'slider'
      transition = 'isLeavingTable'

      setTimeout(() => {
        this.setState({
          transition: 'auto'
        })
      }, 1000)
    }

    this.setState({
      layout,
      transition
    })
  }
  nextSlide() {
    if (this.state.layout === 'slider') {

      clearInterval(this.changeTimer)
      this.changeTimer = setTimeout(() => {
        // this.nextSlide()
      }, 6000)

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
      <div className={`${this.state.layout} ${this.state.transition}`}>
        <Cta onClick={this.toggleLayout}>
          <div className="extend" alt="expand" >
            <i className="fas fa-expand" />
          </div>
          <div className="reduce" alt="reduce" >
            <i className="fas fa-compress" />
          </div>
        </Cta>
        <Slider >
          {
            this.imgs.map((image, index) => {
            let used = [5]

            let random = this.getRandom(0, this.numberOfSquare)
            for (let y = 0; y < this.numberOfSquare;  y++) {
              while (used.indexOf(random) >= 0 && used.length < 9) {
                random = this.getRandom(0, this.numberOfSquare)
              }
              used.push(random)
            }

            return (
              <ImagesWrapper
                key={`img_${index}`}
                nb={this.imgs.length}
                className={`${this.state.active === index ? 'visible' : '' } ${this.state.willOpen === index ? 'willOpen' : '' } ${this.state.willClose === index ? 'willClose' : '' }`}
                onClick={this.nextSlide}
              >
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
                      X = '-100%'
                      delay = 0.10
                      rotate = '-0deg'

                      if (j === 5) {
                        delay = 0.20
                      }
                    } else {
                      bottom = '0'
                      delay = 0.15
                    }

                    // left && right
                    if (j === 1 || j === 4 || j === 7) {
                      left = 0
                    } else if (j === 2 || j === 5 || j === 8) {
                      left = `${-33.33333334 * 3}%`
                    } else {
                       right = '0'
                    }

                    if (i === 1 ) {
                      text = (<ImageText>{this.imgs[index].title}</ImageText>)
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
