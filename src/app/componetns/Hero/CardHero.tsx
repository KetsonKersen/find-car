'use client'
import Image, { StaticImageData } from "next/image"
interface CardHeroType{
    img:string
    title:string
    txt:string
}

const CardHero = (props:CardHeroType)=>{
    const{img,title,txt} = props
    return(
        <div className="bg-zinc-50 shadow-lg shadow-zinc-950/10 rounded-lg flex flex-col gap-4 items-center justify-center p-10 text-center">
            <div className="p-4 bg-orange-500 rounded-lg">
                <Image src={img} width={40} height={40} alt={title}/>
            </div>
            <h4>{title}</h4>
            <p>{txt}</p>
        </div>
    )
}
export default CardHero