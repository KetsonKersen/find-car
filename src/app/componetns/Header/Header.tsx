'use client'
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import {useEffect, useState} from "react"
import {Link} from 'react-scroll'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Find Car',
  description: 'Seu semi novo esta aqui',
}

const Header = ()=>{
    //MODAL MENU
    const [state,setState] = useState(false)
    useEffect(()=>{ 
        const menu:Element | null = document.querySelector('#containerMenu')
        state ? menu?.classList.remove("-translate-y-full") : menu?.classList.add("-translate-y-full")
        const ListBtn = document.querySelectorAll('#containerMenu > a')    
        ListBtn.forEach((item)=>{
            item.addEventListener('click',()=>{
                setState(false)
            })
        })
    })
    
    //TOGGLE BTN MENU
    const Clear = ()=>{
        const ListBtn = document.querySelectorAll('#containerMenu > a')    
        ListBtn.forEach((item)=>{
            item.classList.remove('BTN_Menu_Active')
        })
    }

    useEffect(()=>{
        const Hero:any = document.querySelector('#Hero')
        const Catalogo:any = document.querySelector('#Catalogo')
        const Location:any = document.querySelector('#Location')
        const Contact:any = document.querySelector('#Contact')
        const ListBtn = document.querySelectorAll('#containerMenu > a')
        window.addEventListener('scroll',()=>{
            if(scrollY < Hero.offsetHeight/2){
                Clear()
                ListBtn[0].classList.add('BTN_Menu_Active')
            }
            if(scrollY > Catalogo.offsetTop / 2){
                Clear()
                ListBtn[1].classList.add('BTN_Menu_Active')
            }
            if(scrollY > (Location.offsetTop - 200) - window.innerHeight / 2){
                Clear()
                ListBtn[2].classList.add('BTN_Menu_Active')
            }
            if(scrollY >= Contact.offsetTop - Contact.offsetHeight - window.innerHeight+400){
                Clear()
                ListBtn[3].classList.add('BTN_Menu_Active')
            }      
        })
    })

    return(
        <section className="w-full h-20 flex items-center justify-center px-4 bg-zinc-900 fixed top-0 left-0 z-50">
            <div className="max-w-6xl w-full flex justify-between items-center">
                <Link to="Hero" smooth={true} offset={-100} duration={500} className="text-zinc-50 text-3xl font-bold cursor-pointer">FindCar</Link>

                <div id="containerMenu" className="w-full grid grid-flow-row gap-8 text-center py-12 pt-24 absolute top-0 left-2/4 bg-zinc-900 text-zinc-50 transition-transform -translate-x-2/4 -translate-y-full -z-10 md-Header">
                    <Link to="Hero" smooth={true} offset={-100} duration={500} className="BTN_Menu_Active cursor-pointer">INICIO</Link>
                    <Link to="Catalogo" smooth={true} offset={-85} duration={500} className="cursor-pointer ">CATALOGO</Link>
                    <Link to="Location" smooth={true} offset={-350} duration={500} className="cursor-pointer">LOCALIZAÇÃO</Link>
                    <Link to="Contact" smooth={true} offset={0} duration={500} className="cursor-pointer">CONTATO</Link>
                </div>
                <button className="inline-block md:hidden text-zinc-50 " onClick={()=>{setState(!state)}}>{state ? <AiOutlineClose size={30}/> : <FiMenu size={30}/>}</button>
            </div>
        </section>
    )
}
export default Header