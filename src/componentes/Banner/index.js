import style from './Banner.module.css'
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.jpg"

export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.apresentacao}>
                <h1 className={style.titulo}>Olá Mundo!
                </h1>
                <p className={style.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou PH Alves, Desenvolvedor Front-End. Nesse projeto vou compartilhar conhecimentos de progrmação muito valiosos, espero que aprenda algo novo 🧡
                </p>
            </div>
            <div className={style.imagens}>
                <img className={style.circuloColorido} src={circuloColorido}
                aria-hidden={true} alt='ciculo colorido'/>

                <img 
                    className={style.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do PH"
                />

            </div>
        </div>
    )
}