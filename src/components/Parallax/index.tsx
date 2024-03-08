import React, { ReactNode, forwardRef } from 'react'
import {
  Parallax as ReactSpringParallax,
  ParallaxLayer,
  IParallax,
} from '@react-spring/parallax'
import './styles.scss'
import useScreenSize from '../../hooks/useScreenSize'

interface ParallaxProps {
  children: [ReactNode, ReactNode]
}

const Parallax: React.ForwardRefRenderFunction<
  IParallax | null,
  ParallaxProps
> = ({ children }, ref) => {
  const isMobile = useScreenSize()
  const stars = require('../../assets/svg/stars.svg').default
  const cloud = require('../../assets/svg/cloud.svg').default
  const earth = require('../../assets/svg/earth.svg').default

  console.log('isMobile', isMobile)
  return (
    <ReactSpringParallax
      pages={2}
      ref={ref}
    >
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{ backgroundColor: '#1a1a1a' }}
      />
      <ParallaxLayer
        offset={1}
        speed={0}
        style={{ backgroundColor: '#805E73' }}
      />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={2}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
          animation: 'moveStars 80s linear infinite',
          width: '120%',
        }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.8}
        style={{ opacity: 0.1 }}
      >
        <img
          src={cloud}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          alt='cloud'
        />
        <img
          src={cloud}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          alt='cloud'
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.75}
        speed={0.5}
        style={{ opacity: 0.1 }}
      >
        <img
          src={cloud}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          alt='cloud'
        />
        <img
          src={cloud}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          alt='cloud'
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{ opacity: 0.2 }}
      >
        <img
          src={cloud}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          alt='cloud'
        />
        <img
          src={cloud}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          alt='cloud'
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.6}
        speed={-0.1}
        style={{ opacity: 0.4 }}
      >
        <img
          src={cloud}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          alt='cloud'
        />
        <img
          src={cloud}
          style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          alt='cloud'
        />
        <img
          src={cloud}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          alt='cloud'
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.6}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img
          src={earth}
          style={{ width: isMobile ? '800%' : '60%' }}
          alt='earth'
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children[0]}
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children[1]}
      </ParallaxLayer>
    </ReactSpringParallax>
  )
}

export default forwardRef(Parallax)
