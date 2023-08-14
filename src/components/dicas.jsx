export const Dicas = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl">
      <div className="flex max-w-7xl h-[200px] w-full mt-9">
        <div className="flex max-w-7xl">
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/offAvatarInv.png?raw=true" alt="Avatar OffCell"
            className="w-[350px]" />
        </div>
        <div className="bg-gray-300 h-[80%] flex px-6 items-center w-full rounded-lg">
          <h1 className="font-bold text-xl">Dicas para iniciar</h1>
        </div>
      </div>
      <div className="bg-gray-300 w-full rounded-lg">
        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Vendor Recipes</h1>
          <hr />
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="mt-4 text-xl text-white">Base de Anéis</h2>
            <img src="https://github.com/AlexandreSican/offCellSite/blob/main/baseanel.png?raw=true" alt="ring bases"
              className="mt-8" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="my-4 mt-8 text-xl text-white">Arma Melee para Lvling</h2>
            <p className="text-xl text-white">A raridade do Rustic Sash usado no craft da arma determina o poder do MOD de dano e o level necessário para equipar a arma: </p>
            <div className="flex justify-start w-[85%]">
              <ul className="list-disc">
                <li className="text-white">Magic  - (40-49%) Increased Physical Damage</li>
                <li className="text-white">Rare -  (50-64%) Increased Physical Damage</li>
              </ul>
            </div>
            <p className="my-4 text-xl text-white">Se você deseja maximizar a receita você pode usar 4 Blacksmith's Whetstone enquanto a arma ainda for Normal (cinza), para aumentar a qualidade da arma para 20% e logo depois fazer a receita conforme informação abaixo: </p>
            <img src="https://github.com/AlexandreSican/offCellSite/blob/main/meleeweapon.png?raw=true" alt="weapons base" />
            <a href="https://www.poewiki.net/wiki/Vendor_recipe_system" target="_blank">Clique aqui para ver mais exemplos de receitas</a>
          </div>
        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Flask Crafting (Bestiary)</h1>
          <hr />


          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/flasks.png?raw=true" alt=""
            className="w-full mt-4" />


        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Chaos Recipe</h1>
          <hr />
          <p className="text-white mt-8">Para realizar a Chaos Recipe, você precisará trocar com qualquer vendedor um set completo de itens RAROS 
            entre o item level 60 a 74 (para checar o item level de um item basta segurar a tecla “ALT” e passar o mouse sobre o item), 
            se todos os itens estiverem NÃO identificados você ganha 2 Chaos Orbs, caso contrário, você ganha apenas 1 Chaos Orb.</p> 
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/chaos.png?raw=true" alt="" className="w-full mt-4"/>
        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Heist no League Start</h1>
          <hr />
          <p className="text-white mt-8">Para fazer Heist no League Start é importante que você compre todos os contratos de Perception, 
          Lockpicking e Demolition a partir do level 53, para fazer isso basta usar um Rogue’s Marker para criar um portal para a Rogue 
          Harbor. Chegando lá converse com Whakano, the Barber e compre todos os contratos de Perception, 
          Lockpicking e Demolition que ele tem para vender, você vai repetir esse processo todas vez que upar. 
          Quando chegar no ato 10, PARE antes de matar o Kitava, volte na Rogue Harbor e faça todos os contratos que você comprou 
          até agora, comprando mais contratos toda vez que upar!</p> 
          <ul className="mt-4 list-inside list-disc">
            <li className="text-white">Highlight de contratos na loja: lockpi|percep|demoli</li>
          </ul>
          
        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Chromatic Calculator</h1>
          <hr />
          <p className="text-white mt-8">Antes de começar a colorir qualquer item sempre usar a calculadora no:  
          <a href="http://siveran.github.io/calc.html" target="_blank" className="text-blue-400 underline"> Siveran</a>, colocar os requerimentos para equipar o item (Dex, Str e Int) na calculadora e quais 
          as cores que você quer nos sockets e clique em “Calculate”</p> 
          
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/colorc.png?raw=true" alt="" className="w-full mt-4"/>
          
        </div>

      </div>

    </div>
  )
}