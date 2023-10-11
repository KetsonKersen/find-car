interface ButtonType{
    txt:string
    func?:any
}

const Button = (props:ButtonType)=>{
    const {txt,func} = props
    event?.preventDefault()
    return(
        <button className="w-28 py-2 bg-orange-500 text-zinc-50 rounded-lg mx-auto" onClick={()=>{func()}}>{txt}</button>
    )
}
export default Button