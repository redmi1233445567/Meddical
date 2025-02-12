import Contact from '@/app/component/componentHome/Contact';
import Doctors from '@/app/component/componentHome/Doctors';
import Content from '@/app/component/componentServSingel/Content';
import Head from '@/app/component/componentServSingel/Head';
import React from 'react'

export default function page({params}) {

  const id = params.servSingel;

  return (
    <div>
      <Head id={id} />
      <Content id={id} />
      <Doctors />
      <Contact />
    </div>
  )
}
