import { Toolbox } from "@phosphor-icons/react";
import { EggCrack, MapTrifold, Skull} from "phosphor-react";

export const cat = [
  {id: 1,para: "/buildsmapper", nome: "Mapper", desc: "Build altamente eficiente em limpar rapidamente mapas / grandes grupos de monstros, usando habilidades que possuem uma grande área de efeito, por isso costumam dar menos dano em Bosses / Monstros Raros.", icone: <MapTrifold size={52} color="#3977db" weight="fill" />},
  {id: 2,para: "/buildsbosser", nome: "Bosser", desc: "Build focada em eliminar um único inimigo por vez, como Bosses do jogo, devido a natureza de como o dano é aplicado a build acaba sofrendo um pouco quando o assunto é limpar mapas / grandes grupos de monstros com eficiência.", icone: <Skull size={52} color="#ffffff" weight="fill" />},
  {id: 3,para: "/buildsallrounder", nome: "All-Rounder", desc: "Uma build que se encontra entre um Mapper é um Bosser, possui as qualidades de ambos os playstyles mas não são tão eficientes em lidar com desafios específicos quanto as builds altamente especializadas.", icone: <Toolbox size={52} color="#e50b0b" weight="fill" />},
  {id: 4,para: "/buildsnewbiefriendly", nome: "Newbie friendly", desc: "Build pra quem AINDA não tem DEDO!", icone: <EggCrack size={52} color="#eae31f" weight="fill"/>},
]

export const dataDicas = [
  
]
