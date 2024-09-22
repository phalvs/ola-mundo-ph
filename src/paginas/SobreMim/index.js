import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"

        >
            <h3 className={styles.subtitulo}>
                Óla, eu sou o PH!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do PH"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Desenvolvedor Front-end Jr e estou muito feliz que esteja aqui comigo.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou em 2010 entrei em uma escola de cursos proficionalizantes, sem nem saber o curso que iria fazer, escolhi de programação, e nem sabia o que era.
            </p>
            <p className={styles.paragrafo}>
                Acabou que nem cheguei a terminar o curso, mas me lembro bem de estudar HTML e CSS e fazer uns projetinhos, me recordo até do programa que usei para escrever, era o Dreamweaver
            </p>
            <p className={styles.paragrafo}>
                Como não cheguei a termianr o curso, deixei para lá essa ideia de programação e resolvi seguir a profissão do meu pai, Mêcanico
            </p>
            <p className={styles.paragrafo}>
               Porem, meu irmão mais velho, anos depois entrou na profissão, se proficionalizou, e com o passar do tempo eu também me interessei e voltei a estudar, e aqui estou eu fazendo essa página.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprendizados atrás de aprendizados, quero me proficionalizar cada vez mais, peguei gosto por codar, e pretendo levar isso para a vida!
            </p>

        </PostModelo>
    )

}