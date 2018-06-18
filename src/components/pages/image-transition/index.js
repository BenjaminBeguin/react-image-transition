import React from 'react'
import styled from 'styled-components';
import img1 from './img/image1.jpg'


const Slider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const ImagesWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`

const ImageContainer = styled.div`
  flex: 1 0 30%;
  overflow: hidden;
  border: 0.5px solid #ebebeb;
  position: relative
`

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  transition: 0.5s all ease ${props => props.right || '0'};
`

class imageTransition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.numberOfSquare = 9
    this.imgs = [img1]
  }
  render() {
    return (
      <Slider >
        {
          this.imgs.map((image, index) => (
            <ImagesWrapper>
              {
                [...Array(this.numberOfSquare)].map((x, i) => {
                  let top = 'auto'
                  let bottom = 'auto'
                  let left = 'auto'
                  let right = 'auto'

                  const j = i + 1

                  if (j === 1 || j === 2 || j === 3) {
                    top = 0
                  } else if (j === 4 || j === 5 || j === 6 ) {
                    top = '-33vh'
                  } else {
                    bottom = '0'
                  }

                  // left && right
                  if (j === 1 || j === 4 || j === 7) {
                    left = 0
                  } else if (j === 2 || j === 5 || j === 8 ) {
                    left = '-33vw'
                  } else {
                     right = '0'
                  }

                  return (
                    <ImageContainer key={x}>
                      <Image
                        bg={this.imgs[index]}
                        top={top}
                        right={right}
                        left={left}
                        bottom={bottom}
                        delay={`${(i + 1) / 4}s`}
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
