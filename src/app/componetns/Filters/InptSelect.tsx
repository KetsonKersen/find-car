'use client'
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

interface InptSelectType{
    img: string
    value: string
    func:any
}

let arr_active_Category:any[];
let arr_active_Brand:any[];
let arr_active_Cambio:any[];

const InptSelect = (props:InptSelectType)=>{
    const {img,value,func} = props
    const searchParams = useSearchParams()

    useEffect(()=>{
        const Active = (item:any,inpt:any) =>{
            if(item == inpt.value){
                inpt.checked = true
                inpt.parentNode.classList.add('activeImput')
            }
        }
        const inpt:any = document.querySelector(`#${value}`)
        
        const stringArrayCategory = searchParams.get('Category')
        stringArrayCategory == undefined ? arr_active_Category = [] :  arr_active_Category = stringArrayCategory.split(',')
        arr_active_Category.map((item:any)=>{
            Active(item,inpt)
        })

        const stringArrayBrand = searchParams.get('Brand')
        stringArrayBrand == undefined ? arr_active_Brand = [] :  arr_active_Brand = stringArrayBrand.split(',')
        arr_active_Brand.map((item:any)=>{
            Active(item,inpt)
        })

        const stringArrayCambio = searchParams.get('Cambio')
        stringArrayCambio == undefined ? arr_active_Cambio = [] :  arr_active_Cambio = stringArrayCambio.split(',')
        arr_active_Cambio.map((item:any)=>{
            Active(item,inpt)
        })
    },[])

    return(
        <label htmlFor={value} className="bg-zinc-100 w-full rounded-lg border flex flex-col items-center cursor-pointer">
            <Image width={64} height={64} quality={100} src={img} alt={value}/>
            <p>{value}</p>
            <input id={value} type="checkbox" value={value} className="hidden" onClick={(e)=>{func(e.currentTarget)}}></input>
        </label>
    )
}
export default InptSelect