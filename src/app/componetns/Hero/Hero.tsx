'use client'
import CardHero from "./CardHero"
import HeroCar from "../../assets/hero-car.png"
import { motion, MotionConfig } from "framer-motion"

import iconCard1 from "../../assets/iconCard1.png"
import iconCard2 from "../../assets/iconCard2.png"
import iconCard3 from "../../assets/iconCard3.png"
import Image from "next/image"

const Hero = ()=>{
    return(
        <section id="Hero" className="w-full grid">
            <div className="bg-Hero w-full h-[calc(100vh+80px)] overflow-hidden pb-48 px-4 flex flex-col-reverse gap-8 items-center justify-center md-Hero">
                <MotionConfig transition={{duration: 1 }}>       
                    <motion.div initial={{ translateX: -300 }} whileInView={{translateX: 0}}  className="w-full grid gap-4 text-center">
                        <h4 className="text-zinc-50 text-4xl font-extrabold md-Hero-Title lg-Hero-Title mx-auto">
                            SEU SEMI NOVO
                            <br/>
                            ESTÁ AQUI!
                        </h4>
                        <p className="text-zinc-50 text-lg font-semibold md-Hero-SubTitle lg-Hero-SubTitle mx-auto">COM PARCELAS QUE CABEM NO SEU BOLSO.</p>
                    </motion.div>
                </MotionConfig>

                <MotionConfig  transition={{duration: 1 }}>
                    <motion.div initial={{ translateX: 300 }} whileInView={{translateX: 0}} className="w-full p-8 md-Hero-Image">
                        <Image priority src={HeroCar} width={0} height={0} alt="Banner Find Car"/>
                    </motion.div>
                </MotionConfig>
            </div>
            <div className="w-full -mt-32 grid grid-row-3 gap-4 p-4 mx-auto lg-CardsHero">
                <CardHero img={iconCard1.src} title="Entrada facilitada" txt="A entrada parcelada até 10x sem juros no cartão."/>
                <CardHero img={iconCard2.src} title="Garantia FindCar" txt="Garantia de 3 meses grátis ou 12 meses com a Garantia Estendida."/>
                <CardHero img={iconCard3.src} title="Selo Seminovos" txt="Todos os carros passam por uma revisão de 360 itens."/>
            </div>
        </section>
    )
}
export default Hero