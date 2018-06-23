import styled from 'styled-components'

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  .table & {
  }
`
export const Cta = styled.div`
  position: relative;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 40px;
  z-index: 9999;

  .extend, .reduce {
    display: none;
    color: white;
    fill: white;
    font-size: 32px;
    text-shadow: 1px 1px 3px #8e8e8e;
    transition: 0.5s ease all;
  }

  .table & {
    .extend {
      display: block
    }
  }

  .slider & {
    .reduce {
      display: block
    }
  }

`

export const ImageText = styled.h2`
  font-size: 40px;
  position: absolute;
  z-index: 40;
  text-transform: uppercase;
  color: white;
  transform: translateX(-105%);
  transition: 0.5s ease all 1s;
  text-shadow: 1px 1px 3px #8e8e8e;

  .table & {
    transform: translateX(0%);
    font-size: 20px;
  }

  .isLeavingTable & {
    transition: 0s ease all 0s;
  }

  .visible & {
    transform: translateX(0%);
  }

  .willClose & {
    transform: translateX(-100%);
    transition: 0.5s ease all 0.2s;

  }

`
export const ImageContent = styled.h2`
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

export const ImagesWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  opacity: 1;
  pointer-event: none;
  transition: 1s ease-in-out width, 1s left ease 0.1s;

  &.visible {
    opacity: 1;
    z-index: 2;
  }

  .table & {
    opacity: 1;
    width: ${(props) => 100 / props.nb}%
    left: auto;


    &:nth-child(1) {
      left: ${(props) => 100 / props.nb * 0}%
    }
    &:nth-child(2) {
      left: ${(props) => 100 / props.nb * 1}%
    }

    &:nth-child(3) {
      left: ${(props) => 100 / props.nb * 2}%
    }

    &:nth-child(4) {
      left: ${(props) => 100 / props.nb * 3}%
    }

    &:nth-child(5) {
      left: ${(props) => 100 / props.nb * 4}%
    }
  }
`

export const ImageContainer = styled.div`
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

export const Image = styled.div`
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

  .isLeavingTable & {
    transition: 0.8s all cubic-bezier(.645,.045,.355,1) ${props => props.delay}s, opacity 0s ease;
  }

  .table & {
    opacity: 1;
    width: 300%;
    height: 300%;
    transition: 0.8s all cubic-bezier(.645,.045,.355,1) ${props => props.delay + 1}s , opacity 0s ease;

  }

  .visible & {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    z-index: 2;
  }

  .willClose & {
    opacity: 0;
    transform: scale(1.4) rotate(${props => props.rotate});
  }
`
