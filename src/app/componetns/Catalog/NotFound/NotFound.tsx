import Filters from "../../Filters/Filters"
import { useRouter } from "next/navigation"
const NotFound = ()=>{
    const Router = useRouter()
    return(
        <div className="w-full h-96 p-4 bg-zinc-50 rounded-lg shadow-lg shadow-zinc-950/10 flex items-center justify-center">
            <div className="text-center">
                <h4>Ops, não encontramos nenhum veículo similar!</h4>
                <p>Mas não desanime, temos outras opções esperando por você ;)</p>
                <button onClick={()=>Router.push('/?clear=true',{scroll:false})} className="px-4 py-2 bg-orange-500 text-zinc-50 rounded-lg mt-4">Voltar ao catálogo</button>
            </div>
        </div>
    )
}
export default NotFound