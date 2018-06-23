import React from 'react'
import { Link } from 'react-router-dom'
import imageTransitionImg from './img/image-transition.png'
import {
  Intro,
  Title,
  Projects,
  BG,
  ProjectTitle,
  Project,
  Wrapper
} from './styled'

class homePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>React LAB</Title>
        <Intro>You find some little projects developed on react environnement</Intro>
        <Projects>
          <Project background={imageTransitionImg}>
            <Link to="/imageTransition" target="_blank">
              <BG>
                <ProjectTitle target="_blank" to="/imageTransition">Image transition</ProjectTitle>
              </BG>
            </Link>
          </Project>
        </Projects>

      </Wrapper>
    )
  }
}

export default homePage
