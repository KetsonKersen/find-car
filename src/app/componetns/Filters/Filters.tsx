'use client'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState , useEffect} from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { AiOutlineClear } from "react-icons/ai"
import Button from "../Button/Button"
import ReactSlider from "react-slider"
import InptSelect from "./InptSelect"

import preco_Icon from "../../assets/IconsFilter/preco.png"
import categoria_Icon from "../../assets/IconsFilter/categoria.png"
import brand_Icon from "../../assets/IconsFilter/marca.png"
import km_Icon from "../../assets/IconsFilter/km.png"
import ano_Icon from "../../assets/IconsFilter/ano.png"
import cambio_Icon from "../../assets/IconsFilter/cambio.png"
import hatch_Icon from "../../assets/IconsCategorys/modelo-hatch.svg"
import sedan_Icon from "../../assets/IconsCategorys/modelo-sedan.svg"
import suv_Icon from "../../assets/IconsCategorys/modelo-suv.svg"
import picape_Icon from "../../assets/IconsCategorys/modelo-picape.svg"
import miniVan_Icon from "../../assets/IconsCategorys/modelo-minivan.svg"
import furgao_Icon from "../../assets/IconsCategorys/modelo-furgao.svg"
import audi from "../../assets/IconsBrands/audi.png"
import bmw from "../../assets/IconsBrands/bmw.png"
import chery from "../../assets/IconsBrands/chery.png"
import chevrolet from "../../assets/IconsBrands/chevrolet.png"
import citroen from "../../assets/IconsBrands/citroen.png"
import fiat from "../../assets/IconsBrands/fiat.png"
import ford from "../../assets/IconsBrands/ford.png"
import hyundai from "../../assets/IconsBrands/hyundai.png"
import jaguar from "../../assets/IconsBrands/jaguar.png"
import jeep from "../../assets/IconsBrands/jeep.png"
import kia from "../../assets/IconsBrands/kia.png"
import land_rover from "../../assets/IconsBrands/land rover.png"
import mercedes_benz from "../../assets/IconsBrands/mercedes benz.png"
import mini from "../../assets/IconsBrands/mini.png"
import mitsubishi from "../../assets/IconsBrands/mitsubishi.png"
import nissan from "../../assets/IconsBrands/nissan.png"
import peugeot from "../../assets/IconsBrands/peugeot.png"
import renault from "../../assets/IconsBrands/renault.png"
import suzuki from "../../assets/IconsBrands/suzuki.png"
import toyota from "../../assets/IconsBrands/toyota.png"
import volkswagen from "../../assets/IconsBrands/volkswagen.png"
import volvo from "../../assets/IconsBrands/volvo.png"
import manual from "../../assets/IconsCar/cambio-manual.png"
import automatico from "../../assets/IconsCar/cambio-automatico.png"
import Image from "next/image"

let Array_Category:any = []
let Array_Brand:any = []
let Array_Cambio:any = []

const Filters = (props:any)=>{
    const {ResetOrder} = props
    const searchParams = useSearchParams()

    const url = searchParams.toString()
    const urlClear = searchParams.get('clear')
    const Url_Category = searchParams.get('Category')
    const Url_PriceMin = searchParams.get('Val_Min')
    const Url_PriceMax = searchParams.get('Val_Max')
    const Url_Brand = searchParams.get('Brand')
    const Url_kmMin = searchParams.get('Km_Min')
    const Url_kmMax = searchParams.get('Km_Max')
    const Url_anoMin = searchParams.get('Ano_Min')
    const Url_anoMax = searchParams.get('Ano_Max')
    const Url_Cambio = searchParams.get('Cambio')

    const [statePreço,set_statePreço] = useState(false)
    const [stateCategoria,set_stateCategoria] = useState(false)
    const [stateMarca,set_stateMarca] = useState(false)
    const [stateKm,set_stateKm] = useState(false)
    const [stateAno,set_stateAno] = useState(false)
    const [stateCambio,set_stateCambio] = useState(false)

    const [F_ValorMin,setF_ValorMin] = useState(0)
    const [F_ValorMax,setF_ValorMax] = useState(300000)
    const [F_kmMin,setF_kmMin] = useState(0)
    const [F_kmMax,setF_kmMax] = useState(300000)
    const [F_AnoMin,setF_AnoMin] = useState(1999)
    const [F_AnoMax,setF_AnoMax] = useState(2023)
    
    const ResetModal_False = ()=>{
        set_statePreço(false)
        set_stateCategoria(false) 
        set_stateMarca(false)   
        set_stateKm(false) 
        set_stateAno(false)
        set_stateCambio(false)
    }
    
    const Router = useRouter()
    const clearFilter = ()=>{
        event?.preventDefault()
        ResetOrder()
        Router.push(`/` , { scroll: false })
        setF_ValorMin(0)
        setF_ValorMax(300000)
        setF_kmMin(0)
        setF_kmMax(300000)
        setF_AnoMin(1999)
        setF_AnoMax(2023)
        Array_Category = []
        Array_Brand = []
        Array_Cambio = []
        ResetModal_False()
    }

    useEffect(()=>{
        if(urlClear){
            clearFilter()
        }
    },[urlClear])
    
    const SetSearchParamsUrl = ()=>{
        event?.preventDefault()
        const Url_Search = `?Val_Min=${F_ValorMin}&Val_Max=${F_ValorMax}&Category=${Array_Category}&Brand=${Array_Brand}&Km_Min=${F_kmMin}&Km_Max=${F_kmMax}&Ano_Min=${F_AnoMin}&Ano_Max=${F_AnoMax}&Cambio=${Array_Cambio}`
        Router.push(Url_Search , { scroll: false })
        ResetModal_False()
    }
 
    const SelectInpt = (element:any)=>{
        if(element.checked){
            element.parentNode.classList.add('activeImput')
        }else{
            element.parentNode.classList.remove('activeImput')
        }
    }

    const Add_Array_Category = (element:any)=>{
        const index = Array_Category.indexOf(element.value)
        if(index > -1){
            Array_Category.splice(index, 1)
        }else{
            if(element.value == '' || element.value == null){
                return
            }else{
                Array_Category.push(element.value)
            }
        }
        SelectInpt(element)
    }

    const Add_Array_Marca = (element:any)=>{
        const index = Array_Brand.indexOf(element.value)
        if(index > -1){
            Array_Brand.splice(index, 1)
        }else{
            if(element.value == '' || element.value == null){
                return
            }else{
                Array_Brand.push(element.value)
            }
        }
        SelectInpt(element)
    }

    const Add_Array_Cambio = (element:any)=>{
        const index = Array_Cambio.indexOf(element.value)
        if(index > -1){
            Array_Cambio.splice(index, 1)
        }else{
            if(element.value == '' || element.value == null){
                return
            }else{
                Array_Cambio.push(element.value)
            }
        }
        SelectInpt(element)
    }

    useEffect(()=>{ 
        const List = document.querySelectorAll('.BTN_Filters')
        List.forEach((item)=> item.classList.remove('BTN_Filters_Active'))
        if((Number(Url_PriceMin) > 0 || Number(Url_PriceMax) < 300000) && (Url_PriceMin  !== 'null' && Url_PriceMax !== null)){
            List[0].classList.add('BTN_Filters_Active')
        }
        if(Url_Category !== null && Url_Category !== '' ){
            List[1].classList.add('BTN_Filters_Active')
        }
        if(Url_Brand !== null && Url_Brand !== ''){
            List[2].classList.add('BTN_Filters_Active')
        }
        if((Number(Url_kmMin) > 0 || Number(Url_kmMax) < 300000) && (Url_kmMin  !== null && Url_kmMax !== null)){
            List[3].classList.add('BTN_Filters_Active')
        }
        if((Number(Url_anoMin) > 1999 || Number(Url_anoMax) < 2023) && (Url_anoMin  !== null && Url_anoMax !== null)){
            List[4].classList.add('BTN_Filters_Active')
        }
        if(Url_Cambio !== null && Url_Cambio !== '' ){
            List[5].classList.add('BTN_Filters_Active')
        }
    },[url])

    useEffect(()=>{
        Url_PriceMin == null ? setF_ValorMin(0) : setF_ValorMin(Number(Url_PriceMin))
        Url_PriceMax == null ? setF_ValorMax(300000) : setF_ValorMax(Number(Url_PriceMax))
        Url_kmMin == null ? setF_kmMin(0) : setF_kmMin(Number(Url_kmMin))
        Url_kmMax == null ? setF_kmMax(300000) : setF_kmMax(Number(Url_kmMax))
        Url_anoMin == null ? setF_AnoMin(1999) : setF_AnoMin(Number(Url_anoMin))
        Url_anoMax == null ? setF_AnoMax(2023) : setF_AnoMax(Number(Url_anoMax))
    },[])

    return(
        <section className="w-full lg-Filter-Desktop">
            <ul className="w-full h-96 overflow-y-scroll p-4 grid gap-2 lg-Filter-Desktop-ul">
                <li className="md:relative">
                    <div className="BTN_Filters" onClick={()=>{ResetModal_False(),set_statePreço(!statePreço)}}>
                        <Image src={preco_Icon} alt={'Preço'} width={22} className="filter brightness-0"/>
                        <span>Preço</span>
                        {statePreço ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>
                    {statePreço && 
                    <div className="Card-Filter lg-Card-Filter mx-auto">
                        <h4 className="h-fit text-lg text-zinc-800">Filtrar por preço</h4>
                        <div className="contentSlider lg:px-20">
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="thumb"
                                trackClassName="track"
                                defaultValue={[Number(F_ValorMin) , Number(F_ValorMax)]}
                                min={0}
                                max={300000}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                renderThumb={(props, state) => <p {...props}><span>{state.valueNow.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span></p>}
                                minDistance={1000}
                                step={1000}
                                onChange={(value)=>{setF_ValorMin(value[0]),setF_ValorMax(value[1])}}
                            />
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>

                <li className="md:relative">
                    <div className="BTN_Filters lg:justify-between" onClick={()=>{ResetModal_False(),set_stateCategoria(!stateCategoria)}}>
                        <Image src={categoria_Icon} alt={'Categoria'} width={22} className="filter brightness-0"/>
                        <span>Categoria</span>
                        {stateCategoria ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>
                    {stateCategoria && 
                    <div className="content-category Card-Filter lg-Card-Filter mx-auto">
                        <h4 className="text-lg text-zinc-800">Filtrar por categoria</h4>
                        <div className="w-72 max-h-fit grid grid-cols-3 gap-2">
                           <InptSelect img={hatch_Icon.src} value="Hatch" func={Add_Array_Category}/>
                           <InptSelect img={sedan_Icon.src} value="Sedan" func={Add_Array_Category}/>
                           <InptSelect img={suv_Icon.src} value="SUV" func={Add_Array_Category}/>
                           <InptSelect img={picape_Icon.src} value="Picape" func={Add_Array_Category}/>
                           <InptSelect img={miniVan_Icon.src} value="Mini-Van" func={Add_Array_Category}/>
                           <InptSelect img={furgao_Icon.src} value="Furgão" func={Add_Array_Category}/>
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>

                <li className="md:relative">
                    <div className="BTN_Filters lg:justify-between" onClick={()=>{ResetModal_False(),set_stateMarca(!stateMarca)}}>
                        <Image src={brand_Icon} alt={'Marca'} width={22} className="filter brightness-0"/>
                        <span>Marca</span>
                        {stateMarca ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>
                    {stateMarca && 
                    <div className="Card-Filter lg-Card-Filter mx-auto ">
                        <h4 className="text-lg text-zinc-800">Filtrar por marcas</h4>
                        <div className="content-brand w-full max-h-52 grid grid-cols-4 gap-2 overflow-y-scroll overflow-x-hidden md:pr-4 lg:w-96">
                           <InptSelect img={audi.src} value="Audi" func={Add_Array_Marca}/>
                           <InptSelect img={bmw.src} value="BMW" func={Add_Array_Marca}/>
                           <InptSelect img={chery.src} value="Chery" func={Add_Array_Marca}/>
                           <InptSelect img={chevrolet.src} value="Chevrolet" func={Add_Array_Marca}/>
                           <InptSelect img={citroen.src} value="Citroen" func={Add_Array_Marca}/>
                           <InptSelect img={fiat.src} value="Fiat" func={Add_Array_Marca}/>
                           
                           <InptSelect img={ford.src} value="Ford" func={Add_Array_Marca}/>
                           <InptSelect img={hyundai.src} value="Hyundai" func={Add_Array_Marca}/>
                           <InptSelect img={jaguar.src} value="Jaguar" func={Add_Array_Marca}/>
                           <InptSelect img={jeep.src} value="Jeep" func={Add_Array_Marca}/>
                           <InptSelect img={kia.src} value="Kia" func={Add_Array_Marca}/>
                           <InptSelect img={land_rover.src} value="LandHover" func={Add_Array_Marca}/>

                           <InptSelect img={mercedes_benz.src} value="MercedesBenz" func={Add_Array_Marca}/>
                           <InptSelect img={mini.src} value="Mini" func={Add_Array_Marca}/>
                           <InptSelect img={mitsubishi.src} value="Mitsubishi" func={Add_Array_Marca}/>
                           <InptSelect img={nissan.src} value="Nissan" func={Add_Array_Marca}/>
                           <InptSelect img={peugeot.src} value="Peugeot" func={Add_Array_Marca}/>
                           <InptSelect img={renault.src} value="Renault" func={Add_Array_Marca}/>

                           <InptSelect img={suzuki.src} value="Suzuki" func={Add_Array_Marca}/>
                           <InptSelect img={toyota.src} value="Toyota" func={Add_Array_Marca}/>
                           <InptSelect img={volkswagen.src} value="Volkswagen" func={Add_Array_Marca}/>
                           <InptSelect img={volvo.src} value="Volvo" func={Add_Array_Marca}/>
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>

                <li className="md:relative">
                    <div className="BTN_Filters lg:justify-between" onClick={()=>{ResetModal_False(),set_stateKm(!stateKm)}}>
                        <Image src={km_Icon} alt={'KM'} width={22} className="filter brightness-0"/>
                        <span>KM</span>
                        {stateKm ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>

                    {stateKm && 
                    <div className="Card-Filter lg-Card-Filter mx-auto">
                        <h4 className="text-lg text-zinc-800">Filtrar por KM</h4>
                        <div className="contentSlider lg:px-20">
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="thumb"
                                trackClassName="track"
                                defaultValue={[Number(F_kmMin) , Number(F_kmMax)]}
                                min={0}
                                max={300000}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                renderThumb={(props, state) => <p {...props}><span>{state.valueNow.toLocaleString()+"/km"}</span></p>}
                                minDistance={1000}
                                step={1000}
                                onChange={(value)=>{setF_kmMin(value[0]),setF_kmMax(value[1])}}
                            />
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>
                <li className="md:relative">
                    <div className="BTN_Filters lg:justify-between" onClick={()=>{ResetModal_False(),set_stateAno(!stateAno)}}>
                        <Image src={ano_Icon} alt={'Ano'} width={22} className="filter brightness-0"/>
                        <span>ANO</span>
                        {stateAno ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>

                    {stateAno && 
                    <div className="mx-auto Card-Filter lg-Card-Filter">
                        <h4 className="text-lg text-zinc-800">Filtrar por ano</h4>
                        <div className="contentSlider lg:px-20">
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="thumb"
                                trackClassName="track"
                                defaultValue={[Number(F_AnoMin) , Number(F_AnoMax)]}
                                min={1999}
                                max={2023}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                renderThumb={(props, state) => <p {...props}><span>{state.valueNow}</span></p>}
                                minDistance={1}
                                step={1}
                                onChange={(value)=>{setF_AnoMin(value[0]),setF_AnoMax(value[1])}}
                            />
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>

                <li className="md:relative">
                    <div className="BTN_Filters lg:justify-between" onClick={()=>{ResetModal_False(),set_stateCambio(!stateCambio)}}>
                        <Image src={cambio_Icon} alt={'Cambio'} width={22} className="filter brightness-0"/>
                        <span>Cambio</span>
                        {stateCambio ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22}/>}
                    </div>
                    {stateCambio && 
                    <div className="Card-Filter lg-Card-Filter mx-auto">
                        <h4 className="text-lg text-zinc-800">Filtrar por cambio</h4>
                        <div className="content-cambio w-64 max-h-fit grid grid-cols-2 gap-2">
                           <InptSelect img={manual.src} value="Mecanico" func={Add_Array_Cambio}/>
                           <InptSelect img={automatico.src} value="Automatico" func={Add_Array_Cambio}/>
                        </div>
                        <Button txt="Buscar" func={SetSearchParamsUrl}/>
                    </div>}
                </li>
            </ul>
            <div className="border-t-2 p-4 lg-Filter-Desktop-BtnClear">
                <button onClick={()=>{clearFilter()}} className="w-full flex items-center justify-center px-4 py-4 gap-2 bg-zinc-700 rounded-lg text-zinc-50 md:py-2 whitespace-nowrap"><AiOutlineClear size={18}/>Limpar filtros</button>
            </div>
        </section>
    )
}
export default Filters