'use client'
import Image, { StaticImageData } from "next/image"
import {BiRightArrowAlt} from "react-icons/bi"

interface WeDoCardType{
    title:string
    txt:string
    img:StaticImageData
}

const WeDoCard = (props:WeDoCardType)=>{
    const {title,txt,img} = props
    return(
        <div className="w-full relative">
            <div className="w-full bg-zinc-50 shadow-lg shadow-zinc-950/10 p-4 rounded-t-lg text-center sm:text-left sm:pr-32">
                <h4 className="text-xl font-bold text-zinc-900 my-4">{title}</h4>
                <p className="sm:w-3/4">{txt}</p>
            </div>
            <a className="w-full underline underline-offset-4 p-4 font-li shadow-lg shadow-zinc-950/10 bg-orange-500 flex items-center justify-center gap-4 text-zinc-50 rounded-b-lg sm:justify-start cursor-pointer">Fale com um revendedor<BiRightArrowAlt size={30}/></a>
            <Image className="absolute bottom-0 right-0 hidden sm:block" width={0} height={300} alt={title} src={img}/>
        </div>
    )
}
export default WeDoCard