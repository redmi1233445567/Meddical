import React from 'react'
import Head from '../component/componentAbout/Head'
import Wellcom from '../component/componentAbout/Wellcom'
import Wisdom from '../component/componentAbout/Wisdom'
import Doctors from '../component/componentHome/Doctors'
import Info from '../component/componentHome/Info'
import Contact from '../component/componentHome/Contact'

export default function About() {
  return (
    <div>
      <Head />
      <Wellcom />
      <Wisdom />
      <Doctors />
      <Info />
      <Contact />
    </div>
  )
}
