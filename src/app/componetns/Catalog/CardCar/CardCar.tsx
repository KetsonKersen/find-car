'use client'
import motor from "../../../assets/IconsCar/motor.svg"
import cambioManual from "../../../assets/IconsCar/cambio-manual.svg"
import cambioAutomatico from "../../../assets/IconsCar/cambio-automatico.svg"
import calendario from "../../../assets/IconsCar/calendario.svg"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Link } from "react-scroll"

const CardCar = ({car,idx}:any)=>{
    const {brand,model,year,price,machine,cambio,pasteImage,id} = car
    const Router = useRouter()

    return(
        <div key={idx} className=" bg-zinc-50 border rounded-lg shadow-lg shadow-zinc-950/10 cursor-pointer">
            <Link to="Catalogo" offset={-85} onClick={()=>{Router.push(`/car/?id=${id}`, {scroll: false })}}>
                <Image width={0} height={0} src={require(`../API/imgsCars/${pasteImage}/s0.jpg`)} alt="carro" className="rounded-t-lg"/>

                <div className="flex flex-col gap-2 p-2">
                    <div>
                        <h5 className="text-xl text-orange-500">{brand}</h5>
                        <h4 className="text-zinc-700">{model}</h4>
                    </div>
                    <div className="opacity-70 border-y py-2">
                        <span className="flex items-center gap-2">
                            <Image className="" width={24} height={24} alt="Motor" src={motor}/>
                            <p>{machine}</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <Image width={24} height={24} alt="Cambio" src={cambio == "Manual" ? cambioManual : cambioAutomatico}/>
                            <p>{cambio}</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <Image width={24} height={24} alt="Ano" src={calendario}/>
                            <p>{year}</p>
                        </span>
                    </div>
                    <span className="text-orange-500 text-xl text-center w-full flex justify-end">{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>     
                </div>
            </Link>
        </div>
    )
}
export default CardCar