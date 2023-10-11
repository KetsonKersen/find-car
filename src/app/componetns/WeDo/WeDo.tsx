'use client'
import WeDoCard from "./WeDoCard"
import trocaCarro from "../../assets/trocar-carro.png"
import financiamento from "../../assets/financiamento.png"

import { motion, MotionConfig } from "framer-motion"
const WeDo = ()=>{
    return(
        <section className="w-full flex items-center justify-center pt-12 p-4 overflow-hidden sm:pt-28">
            <div className="w-full max-w-6xl"> 
                <h3 className="w-full text-center text-3xl font-bold mb-4 sm:text-left">Só a FindCar faz</h3>
                <div className="w-full grid gap-4 sm:gap-32 lg:grid-flow-col lg:gap-4">
                    <MotionConfig  transition={{duration: 1 }}>
                        <motion.div initial={{ translateX: -300 }} whileInView={{translateX: 0}}>
                            <WeDoCard title="Quer trocar de carro?" txt="Use seu usado como entrada na troca por um seminovo. Tenha a melhor avaliação do seu usado." img={trocaCarro}/>
                        </motion.div>
                    </MotionConfig>
                    <MotionConfig  transition={{duration: 1 }}>
                        <motion.div initial={{ translateX: 300 }} whileInView={{translateX: 0}}>
                            <WeDoCard title="Financiamento" txt="Faça uma simulação de financiamento do seu carro em até 60 meses com parcelas que cabem no seu bolso." img={financiamento}/>     
                        </motion.div>
                    </MotionConfig>
                </div>
            </div>
        </section>
    )
}
export default WeDo