import { Metadata } from "next"
import Catalog from "./componetns/Catalog/Catalog"
import Header from "./componetns/Header/Header"
import Hero from "./componetns/Hero/Hero"
import WeDo from "./componetns/WeDo/WeDo"

export const metadata: Metadata = {
  title: 'Find Car',
  description: 'Seu semi novo esta aqui',
}


export default function Home() {
  return (
    <>
      <Catalog/>
    </>
  )
}
