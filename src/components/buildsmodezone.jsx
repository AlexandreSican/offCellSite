import { Database, Video, VideoCamera, VideoCameraSlash } from "@phosphor-icons/react"
import { dataBuilds } from "../datas/data"

export const Buildsmodezone = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl">
      <div className="flex max-w-7xl h-[200px] w-full mt-9">
        <div className="flex max-w-7xl">
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt="Avatar OffCell"
            className="w-[350px]" />
        </div>
        <div className="bg-gray-300 flex px-6 items-center w-full rounded-lg">
          <h1 className="font-bold text-xl">Builds Mod Zone</h1>
        </div>
      </div>
      <div className="bg-gray-300 w-full rounded-lg mt-4">

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100 text-white">
          <h1>Mirage Builds</h1>
          <hr />
          {dataBuilds.map((e) => (
            <div key={e.id} className="flex flex-col justify-center">
              {e.func == "mirage" && e.type == "alltype" &&
                <div className="bg-gray-600 rounded-lg p-4 flex items-center mt-4 gap-8 flex-row justify-between">
                  <h1>{e.nome} / {e.maker}</h1>
                  <div className="flex gap-12 justify-center items-center">
                    <div className="flex justify-center items-center">
                      <a href={e.pob}><Database size={52} color="#e50b0b" weight="fill" /></a>
                      <h1>PoB</h1>
                    </div>
                    {e.video != "null" &&
                      <div className="flex justify-center items-center gap-2">
                        <a href={e.video} target="_blank"><VideoCamera size={52} color="#e50b0b" weight="fill" /></a>
                        <h1>Vídeo / Guide</h1>
                      </div>
                    }
                    {e.video == "null" &&
                      <div className="flex justify-center items-center gap-2">
                      <VideoCameraSlash size={52} color="#e50b0b" weight="fill" />
                      <h1>Vídeo / Guide</h1>
                    </div>
                    }
                  </div>
                </div>
              }
            </div>
          ))}
        </div>


        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100 text-white">
          <h1>Nekko Zone</h1>
          <hr />
          {dataBuilds.map((e) => (
            <div key={e.id} className="flex flex-col justify-center">
              {e.func == "neeko" && e.type == "neeko" &&
                <div className="bg-gray-600 rounded-lg p-4 flex items-center mt-4 gap-8 flex-row justify-between">
                  <h1>{e.nome} / {e.maker}</h1>
                  <div className="flex gap-12 justify-center items-center">
                    <div className="flex justify-center items-center">
                      <a href={e.pob}><Database size={52} color="#e50b0b" weight="fill" /></a>
                      <h1>PoB</h1>
                    </div>
                    {e.video != "null" &&
                      <div className="flex justify-center items-center gap-2">
                        <a href={e.video} target="_blank"><VideoCamera size={52} color="#e50b0b" weight="fill" /></a>
                        <h1>Vídeo / Guide</h1>
                      </div>
                    }
                    {e.video == "null" &&
                      <div className="flex justify-center items-center gap-2">
                        <VideoCameraSlash size={52} color="#e50b0b" weight="fill" />
                        <h1>Vídeo / Guide</h1>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          ))}
        </div>

        

      </div>
    </div>
  )
}