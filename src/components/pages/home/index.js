import React from 'react'
import { Link } from 'react-router-dom'
import imageTransitionImg from './img/image-transition.png'
import peakIMG from '../../../img/musicpeak.png'
import matterIMG from '../../../img/matter.png'
import fallIMG from '../../../img/falls.png'
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
        <Title>LAB</Title>
        <Intro>You find some little projects developed on react environnement or just in Javascript.</Intro>
        <Projects>
          <Project background={imageTransitionImg}>
            <Link to="/imageTransition" target="_blank">
              <BG>
                <ProjectTitle target="_blank" to="/imageTransition">Image transition</ProjectTitle>
              </BG>
            </Link>
          </Project>
          <Project background={peakIMG}>
            <a href="http://benjaminbeguin.com/lab/music" target="_blank">
              <BG>
                <ProjectTitle target="_blank" to="http://benjaminbeguin.com/musicPeak">Music peak with p5.js</ProjectTitle>
              </BG>
            </a>
          </Project>
          <Project background={fallIMG}>
            <a href="http://benjaminbeguin.com/lab/falls" target="_blank">
              <BG>
                <ProjectTitle target="_blank" to="http://benjaminbeguin.com/musicPeak">Magic falls with p5.js</ProjectTitle>
              </BG>
            </a>
          </Project>
          <Project background={matterIMG}>
            <a href="http://benjaminbeguin.com/lab/bubble" target="_blank">
              <BG>
                <ProjectTitle target="_blank" to="http://benjaminbeguin.com/musicPeak">Bubble with Matter.Js</ProjectTitle>
              </BG>
            </a>
          </Project>
        </Projects>

      </Wrapper>
    )
  }
}

export default homePage
