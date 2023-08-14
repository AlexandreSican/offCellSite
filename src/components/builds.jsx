import { Link } from "react-router-dom"
import { cat } from "../datas/data"

export const Builds = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full max-w-7xl">
      <div className="flex w-full max-w-7xl">
        <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt="Avatar OffCell"
          className="w-[250px]" />
      </div>
      <div className="bg-gray-300 h-10 flex px-6 items-center w-full">
        <h1 className="font-bold text-xl">Categorias de Builds</h1>
      </div>

      {cat.map((e) => (
        <div
          key={e.id}
          className="flex w-full bg-gray-900 my-2 rounded-md p-4 hover:bg-gray-500 transition-colors"
        >
            <Link to={e.para}>
            <div className="flex items-center gap-9">
              {e.icone}
              <h1 className="text-gray-100 uppercase">{e.nome}</h1>
            </div>
              <p className="mt-4 text-gray-100">{e.desc}</p>
            </Link>
        </div>
      ))}

    </div>
  )
}