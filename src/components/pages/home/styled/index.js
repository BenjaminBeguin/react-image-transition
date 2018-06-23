import styled from 'styled-components'

export const Intro = styled.div`
  margin-bottom: 30px;
  margin-top: 5px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: normal;
  color: #343434;
`
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  color: #343434;
  margin-top: 30px;
  padding: 10px 0 0px;

  &:after {
    position: absolute;
    content: "";
    width: 200px;
    height: 40px;
    background: #328695;
    opacity: 0.4;
    left: 109px;
    top: 25px;
    z-index: -1;
`
export const Projects = styled.div`
  display: flex;
  margin-top: 40px;

  @media (max-width: 700px) {
    display: block;
  }

`
export const BG = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, 0.4);
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    opacity: 0;
  }

`

export const ProjectTitle = styled.h3`
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`

export const Project = styled.div`
  height: 16vw;
  width: 33%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    width: 100%;
    height: 48vw;
  }

`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;

`
