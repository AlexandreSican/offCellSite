import { dataFarms } from "../datas/data"

export const Farms = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl">
      <div className="flex max-w-7xl h-[200px] w-full mt-9">
        <div className="flex max-w-7xl">
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt="Avatar OffCell"
            className="w-[350px]" />
        </div>
        <div className="bg-gray-300 h-[80%] flex px-6 items-center w-full rounded-lg">
          <h1 className="font-bold text-xl">Builds</h1>
        </div>
      </div>



      <div className="bg-gray-300 w-full rounded-lg">
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase">Peba Lord</h1>
          <hr />
          {dataFarms.map((e) => (
            <div key={e.id} className="mt-4">
              {
                e.tipo == "PebaLord" &&
                <div className="flex">
                  <h1 className="text-white">{e.nome}</h1>
                  <a href={e.link} className="text-blue-400 uppercase" target="_blank"> Acesse o Atlas</a>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase">Early Game</h1>
          <hr />
          {dataFarms.map((e) => (
            <div key={e.id} className="mt-4">
              {
                e.tipo == "Early Game" &&
                <div className="flex">
                  <h1 className="text-white">{e.nome}</h1>
                  <a href={e.link} className="text-blue-400 uppercase" target="_blank"> Acesse o Atlas</a>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase">Late Game</h1>
          <hr />
          {dataFarms.map((e) => (
            <div key={e.id} className="mt-4">
              {
                e.tipo == "Late Game" &&
                <div className="flex">
                  <h1 className="text-white">{e.nome}</h1>
                  <a href={e.link} className="text-blue-400 uppercase" target="_blank"> Acesse o Atlas</a>
                </div>
              }
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  )
}