'use client'
import { useRouter } from "next/navigation"
import { useState , useEffect} from "react"
import Image from "next/image"
import {BsChevronLeft , BsChevronRight} from 'react-icons/bs'
import {BiLeftArrowAlt} from "react-icons/bi"

import img_motor from "../assets/IconsCar/motor.png"
import img_cambioManual from "../assets/IconsCar/cambio-manual.svg"
import img_cambioAutomatico from "../assets/IconsCar/cambio-automatico.svg"
import img_calendario from "../assets/IconsCar/calendario.svg"
import img_combustivel from "../assets/IconsCar/combustivel.svg"
import img_km from "../assets/IconsCar/km.svg"
import img_cor from "../assets/IconsCar/cor.svg"
import img_porta from "../assets/IconsCar/porta.svg"

import img_Hacth from "../assets/IconsCategorys/modelo-hatch.svg"
import img_Sedan from "../assets/IconsCategorys/modelo-sedan.svg"
import img_SUV from "../assets/IconsCategorys/modelo-suv.svg"
import img_Picape from "../assets/IconsCategorys/modelo-picape.svg"
import img_MiniVan from "../assets/IconsCategorys/modelo-minivan.svg"
import img_Furgao from "../assets/IconsCategorys/modelo-furgao.svg"
import { useSearchParams } from "next/navigation"
import { API_Cars } from "../componetns/Catalog/API/API"

let Car_api:any;
const Car = ()=>{
    const Router = useRouter()
    const searchParms = useSearchParams()
    const id = searchParms.get('id')
    API_Cars.map((item)=>{
        if(item.id == Number(id)){
            Car_api = item
        }
    })


    const [stateCategory,setStateCategory] = useState(img_Hacth)
    useEffect(()=>{
        if(Car_api.category == "Hatch"){
            setStateCategory(img_Hacth)
        }else if(Car_api.category == "Sedan"){
            setStateCategory(img_Sedan)
        }else if(Car_api.category == "Suv"){
            setStateCategory(img_SUV)
        }else if(Car_api.category == "Picape"){
            setStateCategory(img_Picape)
        }else if(Car_api.category == "Mini Van"){
            setStateCategory(img_MiniVan)
        }else if(Car_api.category == "Furgão"){
            setStateCategory(img_Furgao)
        }
    },[])

    //GERADOR DE MARCADOR DINAMICO
    const List_Marker:any[] = []
    const Generator_mark = (qnt_img:number)=>{
        List_Marker.push(<li className="activeMark w-4 h-4 bg-zinc-50 rounded-full" onClick={()=>{setState_Image(0),Skip_Mark(0)}}></li>)
        for(let i = 1; i < qnt_img; i++){
            List_Marker.push(<li className="w-4 h-4 bg-zinc-50 rounded-full" onClick={()=>{setState_Image(i),Skip_Mark(i)}}></li>)
        }
    }
    Generator_mark(Car_api.qntImg)

    //TROCA MARCADOR DO CARROSSEL
    const Skip_Mark= (idx:number)=>{
        const List = document.querySelectorAll("#containerMarks ul li")
        List.forEach((item)=>{
            item.classList.remove('activeMark')
        })
        List[idx].classList.add('activeMark')
    }

    //TROCA IMAGEM DO CARROSSEL
    const [state_Image,setState_Image] = useState(0)
    let count = 0
    const Skip_Image = (direction:number)=>{
        count += state_Image + direction
        
        if(direction == +1){
            setState_Image(state_Image + 1)
            if(state_Image == List_Marker.length - 1){
                setState_Image(0)
                count = 0
            }
        }

        if(direction == -1){
            setState_Image(state_Image - 1)
            if(state_Image == 0){
                setState_Image(List_Marker.length - 1)
                count = List_Marker.length - 1
            }
        }

        Skip_Mark(count) 
    }

    //PRE LOAD IMAGES
    const ImagesCar = []
    for(let i = 0; i < Car_api.qntImg; i++){
        ImagesCar.push(<Image className="rounded-lg w-full h-auto"  alt="carro" priority unoptimized blurDataURL={require(`../componetns/Catalog/API/imgsCars/${Car_api.pasteImage}/s${i}.jpg`)} src={require(`../componetns/Catalog/API/imgsCars/${Car_api.pasteImage}/s${i}.jpg`)}/>)
    }

    return(
        <section id="Catalogo" className="w-full flex items-center justify-center px-4">
            <div className="w-full max-w-6xl grid gap-4 modalCar">
                <h3 className="w-full max-w-6xl bg-zinc-800 text-center py-2 text-3xl font-bold text-zinc-50">Catálogo</h3>
                <div className="flex gap-4 items-center justify-between">
                    <button className="flex gap-4 px-4  py-2 bg-orange-500 text-zinc-50 rounded-lg shadow-lg shadow-zinc-950/10 cursor-pointer" onClick={()=>Router.push('/',{scroll:false})}><BiLeftArrowAlt size={24}/>VOLTAR</button>
                    <h3 className="w-full text-zinc-600 text-xl font-semibold text-right px-4  py-2 rounded-lg bg-zinc-50 shadow-lg shadow-zinc-950/10">Sobre o veiculo</h3>
                </div>
                <div className="h-full xl:flex gap-4 bg-zinc-50 rounded-lg shadow-lg shadow-zinc-950/10 p-4">
                    <div className="w-full relative">
                        <button className="w-16 h-full flex items-center justify-center absolute top-0 left-0 text-orange-500" onClick={()=>{Skip_Image(-1)}}><BsChevronLeft size={40}/></button>
                        {ImagesCar[state_Image]}
                        <div id="containerMarks" className="absolute bottom-6 left-2/4 -translate-x-2/4">
                            <ul className="grid grid-flow-col items-center gap-2">
                                {List_Marker.map((Mark:any)=> Mark)}
                            </ul>
                        </div>
                        <button className="w-16 h-full flex items-center justify-center absolute top-0 right-0 text-orange-600" onClick={()=>{Skip_Image(+1)}}><BsChevronRight size={40}/></button>
                    </div>

                    <div className="w-full h-hit grid gap-2 xl:w-2/3 mt-4 xl:mt-0 ">
                        <div>
                            <h4 className="text-2xl text-right font-semibold text-orange-500">{Car_api.brand}</h4> 
                            <h4 className="text-xl text-right font-semibold text-zinc-800">{Car_api.model}</h4> 
                        </div>
                        <div className="w-full max-h-fit container-items grid grid-cols-4 gap-2 flex-grow-0">
                            <div className="w-full bg-zinc-100 border flex flex-col items-center justify-center p-2 rounded-lg">
                                <Image width={28} height={0} className="filter opacity-60" src={img_motor} alt="Motor"/>
                                <p className="filter opacity-60">{Car_api.machine}</p>
                            </div>
                            <div className="col-start-2 col-end-4 w-full h-full bg-zinc-100 border flex flex-col items-center justify-center py-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={img_km} alt="KM"/>
                                <p className="filter opacity-60">{Car_api.km}/KM</p>
                            </div>
                            <div className="w-full  bg-zinc-100 border flex flex-col items-center justify-center p-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={img_calendario} alt="Ano"/>
                                <p className="filter opacity-60">{Car_api.year}</p>
                            </div>
                            <div className="col-start-1 col-end-3 w-full h-full bg-zinc-100 border flex flex-col items-center justify-center py-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={Car_api.cambio == "Manual" ? img_cambioManual : img_cambioAutomatico} alt="Cambio"/>
                                <p className="filter opacity-60">{Car_api.cambio}</p>
                            </div>
                            <div className="col-start-3 col-end-5 w-full h-full bg-zinc-100 border flex flex-col items-center justify-center py-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={img_combustivel} alt="Combustivel"/>
                                <p className="filter opacity-60">{Car_api.fuel}</p>
                            </div>
                            <div className="w-full  bg-zinc-100 border flex flex-col items-center justify-center p-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={img_porta} alt="Porta"/>
                                <p className="filter opacity-60">{Car_api.doors}</p>
                            </div>
                            <div className="col-start-2 col-end-4 w-full bg-zinc-100 border flex flex-col items-center justify-center p-2 rounded-lg">
                                <Image width={0} height={32} className="filter opacity-60" src={stateCategory} alt="Cor"/>
                                <p className="filter opacity-60">{Car_api.category}</p>
                            </div>
                            <div className="w-full bg-zinc-100 border flex flex-col items-center justify-center p-2 rounded-lg">
                                <Image width={28} height={28} className="filter opacity-60" src={img_cor} alt="Cor"/>
                                <p className="filter opacity-60">{Car_api.color}</p>
                            </div>
                        </div>
                        <span className="w-full h-hit flex justify-center text-2xl text-orange-500 lg:justify-end">Valor: {Car_api.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                        <div className="grid gap-4">
                            <a className="w-full flex items-center justify-center py-4 rounded-lg bg-orange-500 text-zinc-50 cursor-pointer">Tenho interesse</a>
                            <a className="w-full flex items-center justify-center py-4 rounded-lg bg-zinc-100 border text-zinc-600 cursor-pointer">Simular financiamento</a>
                        </div>
                    </div>
                </div>
                
                <div className="w-fll p-4 rounded-lg bg-zinc-50 shadow-lg shadow-zinc-950/10 text-center">
                    <p className="text-zinc-500">Garantia de 3 meses grátis ou 12 meses com a Garantia Estendida</p>
                </div>
            </div>
        </section>
    )
}
export default Car