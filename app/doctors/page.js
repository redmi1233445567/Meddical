import React from 'react'
import Head from '../component/componentDoctors/Head'
import Content from '../component/componentDoctors/Content'
import Wisdom from '../component/componentAbout/Wisdom'
import Info from '../component/componentHome/Info'
import Contact from '../component/componentHome/Contact'

export default function page() {
  return (
    <div>
      <Head />
      <Content />
      <Wisdom />
      <Info />
      <Contact />
    </div>
  )
}
