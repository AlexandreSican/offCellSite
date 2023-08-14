import { dataTools } from "../datas/data"

export const Ferramentas = () => {
  return(
    <div className="flex flex-col justify-center items-center w-full max-w-7xl">
      <div className="flex max-w-7xl h-[200px] w-full mt-9">
        <div className="flex max-w-7xl">
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt="Avatar OffCell"
            className="w-[350px]" />
        </div>
        <div className="bg-gray-300 h-[80%] flex px-6 items-center w-full rounded-lg">
          <h1 className="font-bold text-xl">Sites e Ferramentas Úteis</h1>
        </div>
      </div>
      <div className="bg-gray-300 w-full rounded-lg">
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
        <h1 className="text-white uppercase">Ferramentas</h1>
          <hr />
          {dataTools.map((e) => (
            <div key={e.id} className="mt-4">
              {
                e.tipo == "Ferramentas" &&
                <div className="flex">
                  <h1 className="text-white">{e.nome}</h1>
                  <a href={e.link} className="text-blue-400 uppercase" target="_blank"> Acesse</a>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
        <h1 className="text-white uppercase">Sites</h1>
          <hr />
          {dataTools.map((e) => (
            <div key={e.id} className="mt-4">
              {
                e.tipo == "Sites" &&
                <div className="flex">
                  <h1 className="text-white">{e.nome}</h1>
                  <a href={e.link} className="text-blue-400 uppercase" target="_blank"> Acesse</a>
                </div>
              }
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}