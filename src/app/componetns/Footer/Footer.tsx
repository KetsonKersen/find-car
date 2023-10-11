const Footer = () =>{
    return	(
        <section id="Contact" className="w-full bg-zinc-950 text-zinc-50 font-bold flex flex-col items-center gap-4 p-4">
            <div className="w-full max-w-6xl flex flex-col gap-4 md:flex-row md:justify-between"> 
                <div className="flex flex-col justify-center text-center md:text-left md:border-l-4 md:border-orange-500 md:p-4">
                    <p>Endereço: <span className="font-light">Alameda dos Cisnes, 184 - Cabral, Contagem - MG, 32146-027</span></p>
                    <p>Telefone: <span className="font-light">(31) 9 9999 - 9999</span></p>
                    <p>Email: <span className="font-light">FindCar@gmail.com</span></p>
                </div>

                <div className="flex flex-col text-center md:text-right md:border-r-4 md:border-orange-500 md:p-4">
                    <p>Horário de Funcionamento</p>
                    <span className="font-light">Segunda-Feira a Sexta-Feira: 08:00h ás 18:00h</span>
                    <span className="font-light">Sabado: FECHADO</span>
                    <span className="font-light">Domingo: FECHADO</span>
                </div>
            </div>
            <p className="text-center font-light">© FindCar 2023 - Desenvolvido por: Ketson Kersen</p>          
        </section>
    )
}
export default Footer