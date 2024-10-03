import React, { ReactElement } from 'react'
import CalenderApp from '../../components/CalenderApp/CalenderApp'

type Props = {}

export default function Home({}: Props): ReactElement<any, any>  {
  return (
    <CalenderApp/>
  )
}