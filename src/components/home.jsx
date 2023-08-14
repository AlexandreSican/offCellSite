import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className=" flex justify-center items-center w-full h-screen flex-col">
      <img
        src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true"
        alt="Avatar offCell"
        className="" />
      <Link
        to="/categorias"
        className="bg-gray-200 p-5 w-64 flex justify-center items-center uppercase font-bold text-xl rounded-lg hover:opacity-60 transition-opacity"
      > acessar </Link>
    </div>
  )
}