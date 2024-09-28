import './painel.css';

export default function Painel({setArea}: Props){
    let options = [{name: "Dashboard", opt: 2}, {name: "Produtos", opt: 3},
        {name: "Usuários", opt: 4}, {name: "Notificações", opt: 5}
    ]

    let optH: any = options.map((opt)=>{
        return (
        <div onClick={(e=>setArea(opt.opt))}className="panelOptions bg-slate-900 rounded-lg h-48 hover:bg-slate-700">
            <p>{opt.name}</p>
        </div>)
        })

    return(
        <div className="flex flex-wrap gap-3 p-6 justify-evenly">
            {optH}
        </div>
    )
}

type Props = {
    setArea: any
  }