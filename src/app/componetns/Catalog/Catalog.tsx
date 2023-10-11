'use client'
import Filters from "../Filters/Filters"
import { API_Cars } from "./API/API"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Link } from "react-scroll"
import { useEffect, useState, useRef} from "react"
import {BsFilter} from "react-icons/bs"
import {GrFormClose} from "react-icons/gr"
import {BsChevronLeft , BsChevronRight} from 'react-icons/bs'
import CardCar from "./CardCar/CardCar"
import NotFound from "./NotFound/NotFound"
import Loading from "@/app/loading"

const URL_PADRAO = '?Val_Min=0&Val_Max=300000&Category=&Brand=&Km_Min=0&Km_Max=300000&Ano_Min=1999&Ano_Max=2023&Cambio='
let currentCar:any = []
let Per_Page = 15;

const Catalog = ()=>{
    const Router = useRouter()
    const searchParams = useSearchParams()
    
    const [stateAPI,setStateAPI] = useState(API_Cars)
    const [state_CurrentCar,setState_CurrentCar] = useState()
    const [state_Modal_Filters,setState_Modal_Filters] = useState(false)
    const [state_Modal_Order,setState_Modal_Order] = useState(false) 
    
    const url:string | null = searchParams.toString()
    const string_PriceMin:string | null = searchParams.get('Val_Min')
    const string_PriceMax:string | null = searchParams.get('Val_Max')
    const string_ArrayCategory:string | null = searchParams.get('Category')
    const string_ArrayBrand:string | null = searchParams.get('Brand')
    const string_ArrayCambio:string | null = searchParams.get('Cambio')
    const string_KmMin:string | null = searchParams.get('Km_Min')
    const string_KmMax:string | null = searchParams.get('Km_Max')
    const string_AnoMin:string | null = searchParams.get('Ano_Min')
    const string_AnoMax:string | null = searchParams.get('Ano_Max')
   
    let NewArrayCategory:string[]
    let NewArrayBrand:string[]
    let NewArrayCambio:string[]

    const Reset_Arrays = ()=>{
        currentCar = []
        NewArrayCategory = []
        NewArrayBrand = []
        NewArrayCambio = []
    }

    const PerPageResize = ()=>{
        ArraySlicePage()
        UpdateBtns_Page()
        Filtered()
    }
    const ref:any = useRef(null)
    useEffect(()=>{
        onresize = ()=>{
            const width = ref.current?.offsetWidth
            if(width < 734){
                Per_Page = 14
                PerPageResize()
            }else if(width < 990){
                Per_Page = 16
                PerPageResize()
            }else if(width >= 990){
                Per_Page = 15
                PerPageResize()
            }
        }
    })

    //FILTRO 
    const [state_currentPage,setState_currentPage] = useState(1)
    const ArraySlicePage = ()=>{
        const start = Math.ceil(state_currentPage * Per_Page - Per_Page)
        const end = Math.ceil(start + Per_Page)
        const NewCurrentCars:any = currentCar.slice(start , end)
        setState_CurrentCar(NewCurrentCars)
    }

    let countCar = currentCar.length
    const Filtered = ()=>{
        event?.preventDefault()
        Reset_Arrays()
        string_ArrayCategory !== null ? NewArrayCategory = string_ArrayCategory.split(',') : NewArrayCategory = []
        string_ArrayBrand !== null ? NewArrayBrand = string_ArrayBrand.split(',') : NewArrayBrand = []
        string_ArrayCambio !== null ? NewArrayCambio = string_ArrayCambio.split(',') : NewArrayBrand = []

        stateAPI.map((car,idx)=>{
            if(((Number(string_PriceMin) <= car.price) && (Number(string_PriceMax) >= car.price)) && (NewArrayCategory.find(category => category == car.category) || NewArrayCategory[0] == '') && (NewArrayBrand.find(brand => brand == car.brand) || NewArrayBrand[0] == '') && ((Number(string_KmMin) <= car.km) && (Number(string_KmMax) >= car.km)) && (NewArrayBrand.find(brand => brand == car.brand) || NewArrayBrand[0] == '') && ((Number(string_AnoMin) <= car.year) && (Number(string_AnoMax) >= car.year)) && (NewArrayCambio.find(cambio => cambio == car.cambio) || NewArrayCambio[0] == '')){
                currentCar.push(
                    <CardCar car={car} key={idx}/>
                )

            }else{
                countCar = -1
            }
        })
        ArraySlicePage()
    }

    //PAGINATION
    const [state_btnsPagination,setState_BtnsPagination] = useState ([])
    let MaxLeft = (state_currentPage - 3)
    let MaxRight = (state_currentPage + 2)
    const UpdateBtns_Page = ()=>{
        let TotalPage = Math.ceil(currentCar.length / Per_Page)
        if(TotalPage == 0){
            TotalPage = 1
        }

        if(state_currentPage < 1){
            setState_currentPage(1)
        }else if (state_currentPage > TotalPage){
            setState_currentPage(TotalPage)
        }


        const ListBtn:any = []
        for(let i = 1; i <= TotalPage; i++){
            ListBtn.push(
                state_currentPage == i ? <a key={i} className="w-8 h-8 bg-orange-500 text-zinc-50 font-extrabold rounded-full flex items-center justify-center cursor-pointer">{i}</a> : <Link key={i} to="Catalogo" smooth={true} offset={-85} duration={500} className="w-8 h-8 bg-zinc-200 text-zinc-600 font-extrabold rounded-full flex items-center justify-center cursor-pointer" onClick={()=>setState_currentPage(i)}>{i}</Link>
                )
            }
        
        if(MaxLeft < 0){
            MaxLeft = 0
            MaxRight =  5
        }
        
        if(MaxRight > TotalPage - 1){
            MaxRight = TotalPage + 1
            MaxLeft = TotalPage - 5
        }
        setState_BtnsPagination(ListBtn.slice(MaxLeft < 0 ? 0 : MaxLeft ,MaxRight))
    }
    useEffect(()=>{
        Filtered()
        UpdateBtns_Page()
    },[state_currentPage])

    useEffect(()=>{
        if(url == ''){
            Router.push(URL_PADRAO, { scroll: false })
        }else{
            Filtered()
            setState_currentPage(1)
            UpdateBtns_Page()
        }
    },[url])

    //ORDER
    const [state_Li_Index,setState_Li_Index] = useState(0)
    const OrderPriceMin = ()=>{
        const PriceMin = new Array()
        API_Cars.map((item)=>{
            PriceMin.push(item)
        })
        PriceMin.sort((a,b)=>{ return(a.price - b.price)})
        setStateAPI(PriceMin)
    }
    const OrderPriceMax = ()=>{
        const PriceMax = new Array()
        API_Cars.map((item)=>{
            PriceMax.push(item)
        })
        PriceMax.sort((a,b)=>{ return(b.price - a.price)})
        setStateAPI(PriceMax)
    }
    const OrderKmMin = ()=>{
        const KmMin = new Array()
        API_Cars.map((item)=>{
            KmMin.push(item)
        })
        KmMin.sort((a,b)=>{ return(a.km - b.km)})
        setStateAPI(KmMin)
    }
    const YearMin = ()=>{
        const YearMin = new Array()
        API_Cars.map((item)=>{
            YearMin.push(item)
        })
        YearMin.sort((a,b)=>{ return(b.year - a.year)})
        setStateAPI(YearMin)
    }
    const ResetOrder = ()=>{
        setStateAPI(API_Cars)
        setState_Li_Index(0)
    }

    useEffect(()=>{
        const ListOrder_Btns = document.querySelectorAll('#OrderList > li')
        const Filter_btnOrder = document.querySelector('#BtnOrder')

        if(state_Modal_Order){
            ListOrder_Btns[state_Li_Index].classList.add('text-orange-500')
        }

        ListOrder_Btns.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{

                Filter_btnOrder?.addEventListener('click',()=>{
                    setState_Li_Index(index)
                })

                ListOrder_Btns.forEach((item)=>{item.classList.remove('text-orange-500')})
                btn.classList.add('text-orange-500')
            })
        })
        
    },[state_Modal_Order])

    return(
        <section id="Catalogo" className="w-full flex items-center justify-center px-4">
            <div className="w-full max-w-6xl grid gap-4">
                <h3 className="w-full max-w-6xl bg-zinc-800 text-center py-2 text-3xl font-bold text-zinc-50">Catálogo</h3>
                
                {state_Modal_Filters && 
                <div className="w-full h-full fixed top-0 left-0 bg-zinc-950/60 flex items-end justify-center z-50">
                    <div className="w-full h-fit bg-zinc-50 z-20 rounded-t-lg overflow-hidden">
                        <div className="w-full p-4 flex items-center justify-between bg-zinc-50 border border-zinc-200">
                            <h2 className="text-xl">Filtrar por</h2>
                            <button className="p-2 bg-zinc-200 rounded-lg" onClick={()=>setState_Modal_Filters(!state_Modal_Filters)}><GrFormClose size={30}/></button>
                        </div>
                        <Filters ResetOrder={ResetOrder}/>
                    </div>
                </div>
                }
                
                <div className="hidden lg-Filter-Desktop">
                    <Filters ResetOrder={ResetOrder}/>
                </div>

                <div className="relative">
                    <div className="flex items-center justify-between lg:justify-end ">
                        <button className="w-32 h-10 flex items-center justify-center gap-2 text-lg text-zinc-50 bg-zinc-700 rounded-lg lg:bg-orange-500" onClick={()=>setState_Modal_Order(!state_Modal_Order)}><BsFilter size={20}/>Ordenar</button>
                        <button className="w-32 h-10 flex items-center justify-center gap-2 text-lg text-zinc-50 bg-orange-500 rounded-lg lg-Filter-Mobile" onClick={()=>setState_Modal_Filters(!state_Modal_Filters)}><BsFilter size={20}/>Filtros</button>
                    </div>
                    <p className="mt-4 lg:my-4 lg:-mt-8">Veiculos Encontrados: {currentCar.length}</p>

                    <div className="Content_Order">
                        {state_Modal_Order && 
                        <div className="w-full h-full fixed top-0 right-0 bg-zinc-950/60 flex items-end justify-center z-50 lg:w-fit lg:h-fit lg:bg-transparent lg:absolute lg:top-12">
                            <div className="w-full h-fit bg-zinc-50 z-20 rounded-t-lg overflow-hidden flex flex-col items-center lg:rounded-lg lg:border lg:shadow-lg lg:shadow-zinc-950/10">
                                <div className="w-full p-4 flex items-center justify-between bg-zinc-50 shadow-lg shadow-zinc-950/10 lg:hidden">
                                    <h2 className="text-xl">Ordernar por</h2>
                                    <button className="p-2 bg-zinc-200 rounded-lg" onClick={()=>setState_Modal_Order(!state_Modal_Order)}><GrFormClose size={30}/></button>
                                </div>
                                <ul id="OrderList" className="w-full px-12 py-4 flex flex-col items-center">
                                    <li className="py-4 w-full border-b text-center cursor-pointer" onClick={()=>ResetOrder()}>Rescem adicionado</li>
                                    <li className="py-4 w-full border-b text-center cursor-pointer" onClick={()=>OrderPriceMin()}>Menor valor</li>
                                    <li className="py-4 w-full border-b text-center cursor-pointer" onClick={()=>OrderPriceMax()}>Maior valor</li>
                                    <li className="py-4 w-full border-b text-center cursor-pointer" onClick={()=>OrderKmMin()}>Menor KM</li>
                                    <li className="py-4 w-full text-center cursor-pointer" onClick={()=>YearMin()}>Ano mais Rescente</li>
                                </ul>
                                <div className="pb-8 border-t-2 w-full p-4 lg:pt-0 lg:pb-4 lg:border-none">
                                    <button id="BtnOrder" className="w-full py-4 bg-orange-500 text-zinc-50 rounded-lg lg:p-2" onClick={()=>{Filtered(), setState_Modal_Order(!state_Modal_Order)}}>Ordenar</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                {!state_CurrentCar && <Loading/>}
                {Number(state_CurrentCar) < 1 && <NotFound/>}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" id="Grid" ref={ref}> 
                    {state_CurrentCar}
                </div>
                
                <div className="w-full max-w-6xl flex items-center justify-center gap-4 mt-10">
                    <Link to="Catalogo" smooth={true} offset={-85} duration={500} onClick={()=>{setState_currentPage(state_currentPage -1)}} className="p-2 bg-zinc-200 rounded-lg text-orange-500 cursor-pointer"><BsChevronLeft size={32}/></Link>
                        <div className="flex items-center gap-2">
                            {state_btnsPagination}
                        </div>
                    <Link to="Catalogo" smooth={true} offset={-85} duration={500} onClick={()=>{setState_currentPage(state_currentPage +1)}} className="p-2 bg-zinc-200 rounded-lg text-orange-500 cursor-pointer"><BsChevronRight size={32}/></Link>
                </div>
            </div>
        
        </section>
    )
}
export default Catalog
