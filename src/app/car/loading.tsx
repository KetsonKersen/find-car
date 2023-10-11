import {BiLeftArrowAlt} from "react-icons/bi"

const Loading = ()=>{
    return(
        <section className="w-full flex items-center justify-center px-4">
            <div className="w-full max-w-6xl flex flex-col gap-4 modalCar">
                <h3 className="w-full max-w-6xl bg-zinc-800 text-center py-2 text-3xl font-bold text-zinc-50">Catálogo</h3>
                <div className="flex gap-4 items-center justify-between">
                    <button className="flex gap-4 px-4  py-2 bg-orange-500 text-zinc-50 rounded-lg shadow-lg shadow-zinc-950/10 cursor-pointer"><BiLeftArrowAlt size={24}/>VOLTAR</button>
                    <h3 className="w-full text-zinc-600 text-xl font-semibold text-right px-4  py-2 rounded-lg bg-zinc-50 shadow-lg shadow-zinc-950/10">Sobre o veiculo</h3>
                </div>
                <div className="h-96 xl:flex gap-4 bg-zinc-50 rounded-lg shadow-lg shadow-zinc-950/10 p-4"></div>
                <div className="w-fll h-12 p-4 rounded-lg bg-zinc-50 shadow-lg shadow-zinc-950/10 text-center">
                    <p className="text-zinc-500"></p>
                </div>
            </div>
        </section>
    )
}
export default Loading