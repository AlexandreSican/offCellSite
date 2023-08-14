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
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/chaos.png?raw=true" alt="" className="w-full mt-4" />
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

          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/colorc.png?raw=true" alt="" className="w-full mt-4" />

        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Colorindo Off-Color com Jeweller’s Orb</h1>
          <hr />
          <p className="text-white mt-8">Existem casos onde você precisar colorir itens com cores diferentes dos
            requerimentos dos itens, por exemplo 3 sockets azuis em um bota com base de Evasion.</p>

          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/colorc.png?raw=true" alt="" className="w-full mt-4" />

          <p className="text-white mt-8">Usando a calculadora ela recomenda usar Vorici 3B, para colocar 3 sockets
            azuis ao mesmo tempo, e como a base é de Dexterity a chance do quarto socket ser Verde é muito grande mas não é
            garantida, sem contar que a quantidade de Chromatic Orbs necessarios para fazer o craft é muito alta, para casos
            que nem esse a melhor opção é usar Jeweller’s Orb quem é bem mais comum para ajeitar os sockets. Para começar use
            o craft de “At Least Two Blue Sockets”, para colocar 2 sockets azuis, se você conseguir os 3º socket azul GG, se sua
            bota ficar que nem a bota abaixo, vamos mudar as cores usando Jeweller’s Orb economizar Chromatic Orbs.</p>

          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/shoeoncrafting.png?raw=true" alt="" className="w-[50%] mt-4" />

          <p className="text-white mt-8">Como queremos 3 sockets azuis, começe usando a opção “Two Sockets”</p>
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/shoesfirst.png?raw=true" alt="" className="w-[50%] mt-4" />

          <p className="text-white mt-8">A partir daqui você usa a opção de “Three Sockets” para adicionar um socket
            que não modificará os sockets atuais do item, se o socket tiver uma cor indesejada basta usar a opção de “Two Sockets”
            para voltar o item e tentar de novo, cada tentativa nessa situação custará 4 Jeweller’s Orb, e não correr o risco de apagar
            o progresso que já fizemos no item.</p>
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/shoesecond.png?raw=true" alt="" className="w-[50%] mt-4" />

          <p className="text-white mt-8">Assim que conseguir o 3º sockets azul basta finalizar o item usando a opção de “Four Sockets”
            para pegar o último socket como nosso item tem uma base de Evasion (dexterity), a chance de ver Verde é muito grande como dito
            anteriormente. Agora é so linkar o item.</p>
          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/shoesthirt.png?raw=true" alt="" className="w-[50%] mt-4" />
        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Prioridade de Stash Tabs</h1>
          <hr />
          <p className="text-white mt-8">Uma pergunta que todo player de PoE tem que se fazer em algum momento de
            sua carreira é, <span className="font-bold">qual stash tab eu devo comprar?</span></p>
          <p className="text-white mt-8">Quero passar para vocês um rank das melhores stash tabs que você
            precisa para poder famar em paz, lembrando que todo mês acontece uma liquidação de todas as tabs, então <span className="text-red-500">NUNCA </span>
            compre as tabs fora da promoção.</p>

          <ul className="list-disc list-inside text-gray-300">
            <li>#1: Currency Stash Tab</li>
            <li>#1: Fragment Stash Tab</li>
            <li>#1: Map Stash Tab</li>
            <li>#1: Pelo menos uma Premium Stash Tab, para venda de itens</li>
            <li>#2: Divination Card Stash Tab</li>
          </ul>

          <p className="text-white mt-8">As tabs acima eu considero absolutamente essenciais se você pretende levar o PoE a
            sério, enquanto as stashes abaixo são mais utilizadas quando você foca em farms específicos, algumas vão ter mais
            utilidade do que outras, devido a utilidade dos farms que elas representam:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>#3:Essence #4:Blight  #5:Delve #6:Metamorph #7:Delirium</li>
            <li>Opcionais: Flask, Skill Gems e Uniques</li>

          </ul>

        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Coletando as Voidstones</h1>
          <hr />
          <p className="text-white mt-8">As Voidstone são usadas para aumentar o tier de todos os mapas do seu Atlas, além de aumentar o
            tier dos mapas, elas também aumentam a chance de você dropar mapas de tiers mais altos. O que as tornaram imprescindíveis em
            farms no Late Game.
            <br /><br />
            Para conseguir as Voidstone você precisa eliminar 4 Pinnacle Boses, Searing Exarch, Eater of Worlds, Maven e Uber Elder.
            <br /><br />
            As Voidstone mais fáceis de serem adquiridas são:</p>

          <img src="https://github.com/AlexandreSican/offCellSite/blob/main/voidstones.png?raw=true" alt="" className="w-[50%] mt-4" />

          <p className="text-white mt-8">Para consegui-las você precisa completar duas questlines,
            <a href="https://www.poewiki.net/wiki/The_Eater_of_Worlds_(quest)" target="_blank" className="text-blue-400 underline"> The Eater of Worlds</a>
            e
            <a href="https://www.poewiki.net/wiki/The_Searing_Exarch_(quest)" target="_blank" className="text-blue-400 underline"> The Searing Exarch</a>
            , que começam com a
            exploração de mapas tier 6+, ao começar a quest você precisa rodar mapas influenciados pelos bosses, em tiers
            cada vez mais elevados, no tier 11 a quest pedirá para você matar o mini boss de cada uma das influências, o
            <a href="https://www.poewiki.net/wiki/The_Infinite_Hunger" target="_blank" className="text-blue-400 underline"> Infinite Hunger</a> e a
            <a href="https://www.poewiki.net/wiki/The_Black_Star" target="_blank" className="text-blue-400 underline"> Black Star</a>.
            Continue a quest rodando mapas de tiers cada vez mais altos, até finalmente quando matar um boss de mapa tier 16 você
            receberá uma
            <a href="https://www.poewiki.net/wiki/Screaming_Invitation_(quest_item)" target="_blank" className="text-blue-400 underline"> Screaming Invitation</a>
            e uma
            <a href="https://www.poewiki.net/wiki/Incandescent_Invitation_(quest_item)" target="_blank" className="text-blue-400 underline"> Incandescent Invitation</a>
            , chegando aqui, se virá Peão, ao matar o boss você receberá
            a sua Voidstone, caso você falhe, basta repetir uma mapa tier 16 para conseguir outra Invitation.</p>

          <p className="text-white mt-8">
            Para conseguir a
            <a href="https://www.poewiki.net/wiki/Ceremonial_Voidstone" className="text-blue-400 underline" target="_blank"> Ceremonial Voidstone</a>
            , você precisa progredir na quest
            <a href="https://www.poewiki.net/wiki/The_Maven_(quest)" className="text-blue-400 underline" target="_blank"> The Maven</a>
            , ao fazer uma certa quantidade de mapas influenciados por ela, você receberá uma
            <a href="https://www.poewiki.net/wiki/Maven%27s_Invitation:_The_Atlas#Quest_Version" className="text-blue-400 underline" target="_blank"> Maven's Invitation: The Atlas</a>
            ao capturar uma certa quantidade de bosses usando a influência dela, lembrando que você não poder capturar
            o mesmo boss mais de uma vez, pois a invitation precisar conter uma certa quantidade de bosses diferentes,
            ao finalizar a última invitation que precisa conter 10 bosses de mapas diferentes de tier 14+,
            você pode desafiar a Maven usando um
            <a href="https://www.poewiki.net/wiki/The_Maven%27s_Writ" className="text-blue-400 underline" target="_blank"> The Maven's Writ</a>
            , que é formado por 10
            <a href="https://www.poewiki.net/wiki/Crescent_Splinter" className="text-blue-400 underline" target="_blank"> Crescent Splinters</a>
            que são dropados ao finalizar as
            <a href="https://www.poewiki.net/wiki/Maven%27s_Invitation:_The_Atlas#Quest_Version" className="text-blue-400 underline" target="_blank"> Maven's Invitation: The Atlas</a>
            , apòs matar ela você terá a sua
            <a href="https://www.poewiki.net/wiki/Ceremonial_Voidstone" className="text-blue-400 underline" target="_blank"> Ceremonial Voidstone</a>.
          </p>

          <p className="text-white mt-8">
            Por último temos a
            <a href="https://www.poewiki.net/wiki/Decayed_Voidstone" className="text-blue-400 underline" target="_blank"> Decayed Voidstone</a>
            , que é dropada pelo
            <a href="https://www.poewiki.net/wiki/Uber_Elder" className="text-blue-400 underline" target="_blank"> Uber Elder</a>
            , para chegar nele você tem 2 opções você pode simplesmente comprar os fragmentos necessários para lutar contra ele que são:
          </p>

          <ul className="text-white list-disc list-inside">
            <li><a href="https://www.poewiki.net/wiki/Fragment_of_Knowledge" target="_blank" className="text-blue-400 underline">Fragment of Knowledge</a></li>
            <li><a href="https://www.poewiki.net/wiki/Fragment_of_Shape" target="_blank" className="text-blue-400 underline">Fragment of Shape</a></li>
            <li><a href="https://www.poewiki.net/wiki/Fragment_of_Terror" target="_blank" className="text-blue-400 underline">Fragment of Terror</a></li>
            <li><a href="https://www.poewiki.net/wiki/Fragment_of_Emptiness" target="_blank" className="text-blue-400 underline">Fragment of Emptiness</a></li>
          </ul>

          <p className="text-white mt-8">Caso opte pela outra forma, você precisar matar os 4 guardiões do Shaper em seus respectivos mapas:</p>
          <ul className="text-white list-disc list-inside">
            <li><a href="https://www.poewiki.net/wiki/Map:Lair_of_the_Hydra_Map_(The_Forbidden_Sanctum)" target="_blank" className="text-blue-400 underline">Fragment of Knowledge </a> que dropa um Fragment of the Hydra</li>
            <li><a href="https://www.poewiki.net/wiki/Map:Pit_of_the_Chimera_Map_(The_Forbidden_Sanctum)" target="_blank" className="text-blue-400 underline">Fragment of Shape </a>que dropa um Fragment of the Chimera</li>
            <li><a href="https://www.poewiki.net/wiki/Forge_of_the_Phoenix_Map" target="_blank" className="text-blue-400 underline">Fragment of Terror </a>que dropa um Fragment of the Phoenix</li>
            <li><a href="https://www.poewiki.net/wiki/Map:Maze_of_the_Minotaur_Map_(The_Forbidden_Sanctum)" target="_blank" className="text-blue-400 underline">Fragment of Emptiness </a>que dropa um Fragment of the Minotaur</li>
          </ul>

          <p className="text-white mt-8">Ao conseguir os fragmentos necessários basta lutar contra o Shaper e dropar um Fragment of Knowledge e um
            Fragment of Shape, cada luta contra o Shaper garante o drop de um dos fragmentos. O mesmo processo precisa
            ser repetido com os 4 guardiões do Elder que se encontram nos seguintes mapas:</p>

          <ul className="text-white list-disc list-inside">
            <li>Mapa tier 14+ ocupado pelo
              <a href="https://www.poewiki.net/wiki/The_Purifier" target="_blank" className="text-blue-400 underline"> The Purifier</a> que dropa um
              <a href="https://www.poewiki.net/wiki/Fragment_of_Purification" target="_blank" className="text-blue-400 underline"> Fragment of Purification</a></li>
            <li>Mapa tier 14+ ocupado pelo
              <a href="https://www.poewiki.net/wiki/The_Constrictor" target="_blank" className="text-blue-400 underline"> The Constrictor</a> que dropa um
              <a href="https://www.poewiki.net/wiki/Fragment_of_Constriction" target="_blank" className="text-blue-400 underline"> Fragment of Constriction</a></li>
            <li>Mapa tier 14+ ocupado pelo
              <a href="https://www.poewiki.net/wiki/The_Enslaver" target="_blank" className="text-blue-400 underline"> The Enslaver</a> que dropa um
              <a href="https://www.poewiki.net/wiki/Fragment_of_Enslavement" target="_blank" className="text-blue-400 underline"> Fragment of Enslavement</a></li>
            <li>Mapa tier 14+ ocupado pelo
              <a href="https://www.poewiki.net/wiki/The_Eradicator" target="_blank" className="text-blue-400 underline"> The Eradicator</a> que dropa um
              <a href="https://www.poewiki.net/wiki/Fragment_of_Eradication" target="_blank" className="text-blue-400 underline"> Fragment of Eradication</a></li>
          </ul>

          <p className="text-white mt-8">Ao conseguir os fragmentos do Elder basta derrotá-lo e dropar um Fragment of
            Terror e um Fragment of Emptiness, cada luta contra o Elder garante o drop de um dos fragmentos.</p>
          <p className="text-white mt-4">Feito essa suruba toda junte seus fragmentos, lute contra o Uber Elder,
            provavelmente morra e quite ao lembrar de
            ter que fazer esse processo todo de novo, caso seja vitorioso meus parabéns você ganhou
            a sua Decayed Voidstone.</p>
        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Editar filtro</h1>
          <hr />

          <ul className="list-disc list-inside text-white mt-4">
            <li><a href="https://br.pathofexile.com/forum/view-thread/263" target="_blank" className="text-blue-400 underline">Editar filtro original do poe, direto na pasta</a></li>
            <li>Usar um filtro “terceiro” (neversink, etc…) <a href="https://www.youtube.com/watch?v=Ka03VWru5KY" target="_blank" className="text-blue-400 underline"> Clique aqui</a></li>
          </ul>

        </div>

        <div className="bg-gray-700 p-4 m-4 rounded-lg opacity-100">
          <h1 className="text-white uppercase text-xl font-bold">Editar filtro</h1>
          <hr />

          <p className="text-white mt-8">
            Para desbloquear o quinto slot de map device, você precisa concluir um encontro Domain of Timeless Conflict (legion ou 4way)
            <br /><br />
            Todos os jogadores da party terão o quinto slot desbloqueado.
            <br /><br />
            O encontro pode ser iniciado ativando o map device com 4 ou mais Timeless Emblems:

          </p>

          <div className="flex gap-8 justify-center mt-8 items-center">
            <img src="https://github.com/AlexandreSican/offCellSite/blob/main/timeless.png?raw=true" alt="timeless image" />
            <ul className="text-white list-disc list-inside">
              <li>Timeless Karui Emblem</li>
              <li>Timeless Vaal Emblem</li>
              <li>Timeless Eternal Emblem</li>
              <li>Timeless Maraketh Emblem</li>
              <li>Timeless Templar Emblem</li>
            </ul>
          </div>

          <p className="text-white mt-8">Depois que o tempo acaba todos vivos na party desbloqueiam o quinto slot no map device.
            Você pode usar o quinto slot para colocar um scarab extra ou fragmento de mapa para “runs” de mapa "Juiced"
          </p>

          <ul className="list-disc list-inside text-white mt-4">
          </ul>

        </div>

      </div>

    </div>
  )
}