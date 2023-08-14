import { Cards, Coins, Lightbulb, MagicWand } from "phosphor-react"
import { Link } from "react-router-dom"

export const Categorias = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] max-w-7xl">
      <div className="flex w-full max-w-7xl">
        <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt=""
          className="w-[300px]" />
      </div>
      <div className="bg-gray-300 h-12 flex px-6 items-center w-full">
        <h1 className="font-bold text-xl">Categorias</h1>
      </div>
      <div className=" flex gap-12 mt-24">
        <Link to="/farms">
          <div className="flex justify-center items-center gap-7 bg-gray-700 h-[200px] w-[300px] rounded-xl hover:bg-gray-400 transition-colors">
            <Coins size={52} color="#fbfe34" weight="fill" />
            <h2 className="uppercase font-bold">Farms</h2>
          </div>
        </Link>
        <Link to="/builds">
          <div className="flex justify-center items-center gap-7 bg-gray-700 h-[200px] w-[300px] rounded-xl hover:bg-gray-400 transition-colors">
            <MagicWand size={52} color="#fe3485" weight="fill" />
            <h2 className="uppercase font-bold">Builds</h2>
          </div>
        </Link>
        <Link to="/dicas">
          <div className="flex justify-center items-center gap-7 bg-gray-700 h-[200px] w-[300px] rounded-xl hover:bg-gray-400 transition-colors">
            <Lightbulb size={52} color="#eff312" weight="fill" />
            <h2 className="uppercase font-bold ">Dicas</h2>
          </div>
        </Link>
        <Link to="/ferramentas">
          <div className="flex justify-center items-center gap-7 bg-gray-700 h-[200px] w-[300px] rounded-xl hover:bg-gray-400 transition-colors">
            <Cards size={52} color="#d987f7" weight="fill" />
            <h2 className="uppercase font-bold">Ferramentas</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}