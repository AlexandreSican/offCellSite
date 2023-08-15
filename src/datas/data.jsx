import { Cross, Radioactive, Toolbox } from "@phosphor-icons/react";
import { EggCrack, MapTrifold, Skull } from "phosphor-react";

export const cat = [
  { id: 1, para: "/buildsmapper", nome: "Mapper", desc: "Build altamente eficiente em limpar rapidamente mapas / grandes grupos de monstros, usando habilidades que possuem uma grande área de efeito, por isso costumam dar menos dano em Bosses / Monstros Raros.", icone: <MapTrifold size={52} color="#3977db" weight="fill" /> },
  { id: 2, para: "/buildsbosser", nome: "Bosser", desc: "Build focada em eliminar um único inimigo por vez, como Bosses do jogo, devido a natureza de como o dano é aplicado a build acaba sofrendo um pouco quando o assunto é limpar mapas / grandes grupos de monstros com eficiência.", icone: <Skull size={52} color="#ffffff" weight="fill" /> },
  { id: 3, para: "/buildsallrounder", nome: "All-Rounder", desc: "Uma build que se encontra entre um Mapper é um Bosser, possui as qualidades de ambos os playstyles mas não são tão eficientes em lidar com desafios específicos quanto as builds altamente especializadas.", icone: <Toolbox size={52} color="#e50b0b" weight="fill" /> },
  { id: 4, para: "/buildsnewbiefriendly", nome: "Newbie friendly", desc: "Build pra quem AINDA não tem DEDO!", icone: <EggCrack size={52} color="#eae31f" weight="fill" /> },
  { id: 5, para: "/buildsmodezone", nome: "Mode Zone", desc: "Offcell não se responsabiliza por pessoas que usarem essas builds!", icone: <Radioactive size={52} color="#ff7e29" weight="fill" /> },
  { id: 5, para: "/buildproblemaseu", nome: "Your Problem", desc: "Para builds que se você não leu, é PAU no SEU!", icone: <Cross size={52} color="#29fff1" weight="fill" /> },
]

export const dataFarms = [
  { id: 1, nome: "Harb / Strongbox / Essence", link: "https://poeplanner.com/a/jQX", tipo: "PebaLord" },
  { id: 2, nome: "Strongbox / Essence / Expedition", link: "https://poeplanner.com/a/jcW", tipo: "PebaLord" },
  { id: 3, nome: "Strongbox / Essence / ToRmEnTeD SpIiIiIirIIiIIiiiTs", link: "https://poeplanner.com/a/jcy", tipo: "PebaLord" },
  { id: 4, nome: "Essence / Expedition", link: "https://poeplanner.com/a/EtH", tipo: "Early Game" },
  { id: 5, nome: "Essence / Metamorph", link: "https://poeplanner.com/a/jZp", tipo: "Early Game" },
  { id: 6, nome: "Blight / Essence", link: "https://poeplanner.com/a/jgP", tipo: "Early Game" },
  { id: 7, nome: "Legion / Delirium", link: "https://poeplanner.com/a/j5m", tipo: "Early Game" },
  { id: 8, nome: "Beyond / Essence / Delirium / Heist", link: "https://poeplanner.com/a/j5M", tipo: "Early Game" },
  { id: 9, nome: "Essence / Heist / Strongbox", link: "https://poeplanner.com/a/jRL", tipo: "Early Game" },
  { id: 10, nome: "Essence / Bestiary / Harvest (Rock Lee)", link: "https://poeplanner.com/a/jJp", tipo: "Late Game" },
  { id: 11, nome: "Essence / Bestiary / Harvest", link: "https://poeplanner.com/a/jZD", tipo: "Late Game" },
  { id: 12, nome: "Ritual / Essence / Bestiary", link: "https://poeplanner.com/a/jZI", tipo: "Late Game" },
  { id: 13, nome: "Breach / Bestiary", link: "https://poeplanner.com/a/DJA", tipo: "Late Game" },
  { id: 14, nome: "Breach / Delirium", link: "https://poeplanner.com/a/DJU", tipo: "Late Game" },
  { id: 15, nome: "Breach / Expedition", link: "https://poeplanner.com/a/DJq", tipo: "Late Game" },
  { id: 16, nome: "Blight / Strongbox / Essence", link: "https://poeplanner.com/a/G71", tipo: "Late Game" },
  { id: 17, nome: "Blight / Strongbox", link: "https://poeplanner.com/a/DJK", tipo: "Late Game" },
  { id: 18, nome: "Blight / Essence / Strongbox", link: "https://poeplanner.com/a/GAm", tipo: "Late Game" },
  { id: 19, nome: "Legion / Breach", link: "https://poeplanner.com/a/DJv", tipo: "Late Game" },
  { id: 20, nome: "Ritual / Metamorph", link: "https://poeplanner.com/a/DJI", tipo: "Late Game" },
  { id: 21, nome: "Ritual / Expedition", link: "https://poeplanner.com/a/DJb", tipo: "Late Game" },
  { id: 22, nome: "Ritual / Bestiary", link: "https://poeplanner.com/a/DJa", tipo: "Late Game" },
  { id: 23, nome: "Expedition / Essence / Betrayal", link: "https://poeplanner.com/a/DZD", tipo: "Late Game" },
  { id: 24, nome: "Expedition / Essence / Stongbox", link: "https://poeplanner.com/a/GN3", tipo: "Late Game" },
  { id: 25, nome: "Breach / Abyss", link: "https://poeplanner.com/a/DZ7", tipo: "Late Game" },
  { id: 26, nome: "Heist / Strongbox / Essence", link: "https://poeplanner.com/a/DiF", tipo: "Late Game" },
  { id: 27, nome: "Harvest / Strongbox / Harbinger / Essence", link: "https://poeplanner.com/a/DwK", tipo: "Late Game" },
]

export const dataTools = [
  { id: 1, nome: "Path of Building - Planejador de Buildings", link: "https://pathofbuilding.community", tipo: "Ferramentas" },
  { id: 2, nome: "Leveling Guide Master - Assistente de Leveling", link: "https://github.com/JusKillmeQik/PoE-Leveling-Guide", tipo: "Ferramentas" },
  { id: 3, nome: "Awakened PoE Trade - Assistente de Trade e Price Check", link: "https://snosme.github.io/awakened-poe-trade/download", tipo: "Ferramentas" },
  { id: 4, nome: "PoE Overlay - Overlay com Map Check, Atalhos e Comandos", link: "https://github.com/PoE-Overlay-Community/PoE-Overlay-Community-Fork/releases", tipo: "Ferramentas" },
  { id: 5, nome: "Chaos Recipe Enhancer - Overlay para ajudar  a fazer chaos recipe", link: "https://github.com/ChaosRecipeEnhancer/EnhancePoEApp/releases", tipo: "Ferramentas" },
  { id: 6, nome: "PoE Lurker - Facilita o trade de compra e venda", link: "https://github.com/C1rdec/Poe-Lurker", tipo: "Ferramentas" },
  { id: 7, nome: "Exilence Next - Programa que ajuda a verificar o preço dos itens na stash", link: "https://github.com/viktorgullmark/exilence-next#download", tipo: "Ferramentas" },
  { id: 8, nome: "Exile Tools Gem Planner (Site que gera colinha de gemas para lvling)", link: "https://exile-tools.com/gemplanner/", tipo: "Sites" },
  { id: 9, nome: "PoE Wiki(Contém muita informação do jogo)", link: "https://www.poewiki.net/wiki/Path_of_Exile_Wiki", tipo: "Sites" },
  { id: 10, nome: "PoE Leveling(Um guia de leveling escrito baseado no guia do Zizaran)", link: "https://poe-leveling.com", tipo: "Sites" },
  { id: 11, nome: "Craft of Exile(Ajuda a simular e escolher os melhores crafts)", link: "https://www.craftofexile.com", tipo: "Sites" },
  { id: 12, nome: "PoE Lab(Exibe o layout atual de cada Labirinto e outras informações)", link: "https://www.poelab.com", tipo: "Sites" },
  { id: 13, nome: "PoE Map.Trade(Te ajuda a fazer bulk trade de mapas)", link: "https://poemap.trade", tipo: "Sites" },
  { id: 14, nome: "PoE Ninja(Overview de Builds e Economia)", link: "https://poe.ninja", tipo: "Sites" },
  { id: 15, nome: "PoE Antiquary(Basicamente um poe ninja voltado para economia, exibe gráficos dos preços de diversos itens)", link: "https://poe-antiquary.xyz", tipo: "Sites" },
  { id: 16, nome: "Hideout Showcase(Contém vários modelos prontos de hideouts para vc copiar e colar) ", link: "https://hideoutshowcase.com", tipo: "Sites" },
]

export const dataBuilds = [
  { id: 1, nome: "Explosive Arrow Elementalist", maker: "Palsteron", type: "totem", func: "allrounder", pob: "https://pobb.in/nmIGoPsBmvO2", video: "https://youtu.be/x2U0lKR1HvQ", newbie: false },
  { id: 2, nome: "Toxic Rain Pathfinder", maker: "Palsteron", type: "totem", func: "allrounder", pob: "https://pobb.in/p7oXr0Waxywc", video: "https://youtu.be/KAcrchacF8g", newbie: true },
  { id: 3, nome: "Explosive Arrow Champion", maker: "Ziz", type: "totem", func: "allrounder", pob: "https://pobb.in/-FuxgC3WT2fO", video: "https://youtu.be/9PSAQdTHAL0", newbie: false },
  { id: 4, nome: "Divine Ire Totem Heirophant", maker: "Tatiantel2", type: "totem", func: "allrounder", pob: "https://pobb.in/Rpvj4sTT2vdS", video: "https://pobb.in/Rpvj4sTT2vdS", newbie: true },
  { id: 5, nome: "Storm Burst Totem Heirophant", maker: "Tatiantel2", type: "totem", func: "allrounder", pob: "https://pobb.in/Fr_0rDUmXvUW", video: "null", newbie: true },
  { id: 6, nome: "Creeping Frost Totem Heirophant", maker: "Tatiantel2", type: "totem", func: "allrounder", pob: "https://pobb.in/m4g9DqBB5o9l", video: "null", newbie: true },

  { id: 7, nome: "Lightning Conduit Elementalist", maker: "Enki", type: "spell", func: "mapper", pob: "https://www.pathofexile.com/forum/view-thread/3410006", video: "https://www.pathofexile.com/forum/view-thread/3410006", newbie: true },
  { id: 8, nome: "Spark Inquisitor", maker: "Goratha", type: "spell", func: "mapper", pob: "https://pobb.in/JEbz2CaWqr8k", video: "https://youtu.be/2v2tblTWPxA", newbie: true },
  { id: 9, nome: "Ice Nova Inquisitor", maker: "RelaxaGuto", type: "spell", func: "allrounder", pob: "https://pobb.in/wQd4trogkwcz", video: "https://youtu.be/RttgaOvENe4", newbie: false },

  { id: 10, nome: "Corrupting Fever Champion Wand", maker: "Ruetoo", type: "dot", func: "mapper", pob: "https://pobb.in/76Et32qnRj-C", video: "https://youtu.be/G32EhMi5oRk", newbie: false },
  { id: 11, nome: "Corrupting Fever Champion Dagger", maker: "Ruetoo", type: "dot", func: "mapper", pob: "https://pobb.in/scA0LiGJsPyv", video: "https://youtu.be/OErWujhNmto", newbie: false },
  { id: 12, nome: "Poison Concoction", maker: "Snobae", type: "dot", func: "mapper", pob: "https://pobb.in/XyzKt9tx_rTH", video: "https://youtu.be/QLV4kYhPcdk", newbie: true },
  { id: 13, nome: "Exsanguinate Poison", maker: "Ruetoo", type: "dot", func: "mapper", pob: "https://pobb.in/QQlwgqZcf3fU", video: "https://youtu.be/IF_QxQCr-uY", newbie: false },
  { id: 14, nome: "Exsanguinate Scion", maker: "pawelos13", type: "dot", func: "mapper", pob: "https://pobb.in/T5VUC5C1pc_t", video: "https://www.pathofexile.com/forum/view-thread/3324458", newbie: false },
  { id: 15, nome: "Poison Blade Vortex Pathfinder", maker: "Lolcohol", type: "dot", func: "mapper", pob: "https://pobb.in/lnx1r8BGbuQS", video: "https://youtu.be/EGumdpl52U4", newbie: false },
  { id: 16, nome: "Cold DoT Elementalist", maker: "Tripolarbear", type: "dot", func: "allrounder", pob: "https://pobb.in/C_FAnm5LzRcy", video: "https://youtu.be/lXu78B7AohU", newbie: true },
  { id: 17, nome: "Wave of Conviction Elementalist", maker: "null", type: "dot", func: "mapper", pob: "https://pobb.in/f2EtswfdsAZM", video: "null", newbie: true },

  { id: 18, nome: "Ice Trap Occultist", maker: "Lolcohol", type: "trap", func: "allrounder", pob: "https://pobb.in/n5pzJbHnV0qx", video: "https://youtu.be/TpiUhYg0bjg", newbie: false },
  { id: 19, nome: "Explosive Trap Trickster", maker: "Peuget2", type: "trap", func: "allrounder", pob: "https://pobb.in/1NFtVJX37kFb", video: "https://youtu.be/gNo1my3Y2gU", newbie: false },
  { id: 20, nome: "Explosive Trap Trickster", maker: "FearlessDumb0", type: "trap", func: "bosser", pob: "https://pobb.in/xnCnRS-Esalq", video: "https://youtu.be/RZsj0sV1wx8", newbie: false },
  { id: 21, nome: "Lightning Trap", maker: "Tuticore", type: "trap", func: "mapper", pob: "https://pobb.in/m_7Hsk2HAPVP", video: "null", newbie: false },
  { id: 22, nome: "Pyroclast Mine (EM BREVE)", maker: "Achten", type: "trap", func: "bosser", pob: "null", video: "null", newbie: false },

  { id: 23, nome: "Zoomancer Necro", maker: "Ghazzy", type: "minion", func: "allrounder", pob: "https://pobb.in/Hogye-vVHzI5", video: "https://www.poe-vault.com/guides/zoomancer-necromancer-build-guide", newbie: false },
  { id: 24, nome: "Absolution Necro", maker: "Ghazzy", type: "minion", func: "bosser", pob: "https://pobb.in/iRjTpuxKbttG", video: "https://www.poe-vault.com/guides/absolution-necromancer-build-guide", newbie: true },
  { id: 26, nome: "Dark Pact Necro", maker: "Ghazzy", type: "minion", func: "bosser", pob: "https://pobb.in/LPBIxzmqZp4f", video: "https://www.poe-vault.com/guides/dark-pact-necromancer-build-guide", newbie: false },
  { id: 27, nome: "Skelly Mage Necro", maker: "Ghazzy", type: "minion", func: "allrounder", pob: "https://pobb.in/R2yjdaBfqLXL", video: "https://www.poe-vault.com/guides/mage-skeleton-necromancer-build-guide", newbie: true },
  { id: 28, nome: "SRS Necro", maker: "Ghazzy", type: "minion", func: "allrounder", pob: "https://pobb.in/9Y9wpUdui3CW", video: "https://www.poe-vault.com/guides/ghazzy-summon-raging-spirits-necromancer-build-guide", newbie: true },
  { id: 36, nome: "Soulwrest Necro", maker: "Editado", type: "minion", func: "allrounder", pob: "https://pobb.in/mdZs9LcA-GGO", video: "null", newbie: false },

  { id: 29, nome: "Lightning Arrow Champion", maker: "Goratha", type: "bow", func: "mapper", pob: "https://pobb.in/T1MArvyDU1Af", video: "https://youtu.be/4d8mmEf0xLc", newbie: false },

  { id: 30, nome: "Boneshatter Slayer", maker: "cArn_", type: "melee", func: "allrounder", pob: "https://pobb.in/Kqd8Lj8R26Ph", video: "https://youtu.be/ATfD7vfcmzc", newbie: true },
  { id: 31, nome: "Boneshatter Jugg", maker: "Goratha", type: "melee", func: "allrounder", pob: "https://pobb.in/DzhXz0GQoO4o", video: "https://youtu.be/u86_1qW8AZQ", newbie: true },
  
  { id: 32, nome: "Mirage Builds", maker: "Mirage#7216", type: "alltype", func: "mirage", pob: "https://docs.google.com/document/d/1ntFuecqOeg6v3YM9XChd8-y-bbp6t31Ie_aOpDwb_4o/edit", video: "https://docs.google.com/document/d/1ntFuecqOeg6v3YM9XChd8-y-bbp6t31Ie_aOpDwb_4o/edit", newbie: false },
  
  { id: 33, nome: "Ice Crash Ignite", maker: "PinguinTorpedo", type: "neeko", func: "neeko", pob: "https://pobb.in/HskxQEaoKKNV", video: "https://www.pathofexile.com/forum/view-thread/3324340", newbie: false },
  { id: 34, nome: "Cold BV Elementalist", maker: "Chronic_Painless", type: "neeko", func: "neeko", pob: "https://pobb.in/p1eU_BLdZcs8", video: "https://youtu.be/RU5QjQ7bkxw", newbie: false },
  { id: 35, nome: "Frost Blades Trickster", maker: "Behind Eyes Gaming", type: "neeko", func: "neeko", pob: "https://pastebin.com/wNnUhLa6", video: "https://www.youtube.com/watch?v=WWCsK5ZJzQM", newbie: false },
  
  { id: 35, nome: "Summon Holy Relic Ascendant", maker: "Captainlance9", type: "yourp", func: "allrounder", pob: "https://pastebin.com/wNnUhLa6", video: "https://www.youtube.com/watch?v=WWCsK5ZJzQM", newbie: false },


]