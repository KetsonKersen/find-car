'use client'
const Loading = ()=>{
    let ArrLoading:any[] = []
    for(let i = 0; i < 20 ; i++){
        ArrLoading.push(<div className="w-full h-80 bg-zinc-300 rounded-lg shadow-lg shadow-zinc-950/10 loadingCard"></div>)        
    }
    return(
        <section className="w-full flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {ArrLoading}
            </div>
        </section>
    )
}
export default Loading