import React from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/molecules/Card";
import { Container } from "../../components/atoms/Container";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";

const FakeDataCharacteres = [
  {
    id: 0,
    image_url:
      "https://play-lh.googleusercontent.com/3uBdCYP7gT8Uvnqqdvdxa3shr4anQBw4t_rsebsmJvl6XuQvBpv7TJpsOuoUk8OgeaY",
    title: "Naruto Uzumaki",
    subtitle: "Jinchuuriki da Kurama",
    descripition:
      "Naruto Uzumaki é um shinobi de Konohagakure do clã Uzumaki e protagonista homônimo da franquia Naruto. Desde seu nascimento, ele se tornou jinchuuriki das Nove-Caudas, um destino que o levou a ser condenado e negligenciado por toda a aldeia durante sua infância. Depois de entrar para o Time 7, ao lado de Sakura Haruno, Sasuke Uchiha e sob comando de Kakashi Hatake, Naruto trabalhou duro para ganhar o respeito e o reconhecimento da aldeia, com o sonho de se tornar Hokage. Nos anos seguintes, Naruto passa a ser um ninja reconhecido pela aldeia, que é eventualmente considerado como um herói pelas pessoas, e mais tarde, pelo mundo shinobi em geral, renomado como o Herói da Vila Oculta da Folha, Konohagakure no Eiyū). Posteriormente, Naruto descobre ser a reencarnação do espírito de Ashura e anos depois da Quarta Guerra Mundial Shinobi, Naruto realiza seu sonho e se torna o Sétimo Hokage (七代目火影, Nanadaime Hokage; literalmente significa: Sétima Sombra do Fogo. Naruto se casa com Hinata Hyuuga e tem dois filhos com ela, Boruto Uzumaki e Himawari Uzumaki, e mais tarde adota Kawaki Uzumaki.",
  },
  {
    id: 1,
    image_url:
      "https://m.media-amazon.com/images/S/pv-target-images/1de9f16753abc812b432627a10dc66f48428cf0c5165c66dc3c73c97870a43fc.jpg",
  },
];
export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Hero
        item={{
          image_url:
            "https://e1.pxfuel.com/desktop-wallpaper/804/696/desktop-wallpaper-best-naruto-group.jpg",
          title: "Epsódio I",
          subtitle: "Voltando para Casa",
          type: "Filme",
        }}
      />
      <HomeList title="Filmes e Séries" data={FakeDataCharacteres} />
      <HomeList title="Personagens" data={FakeDataCharacteres} />
    </ScrollView>
  );
}
