import { StyledCard, StyledAligned, StyledBgColor } from "./StyledFeatures"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faTag, faPencil } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/button/Button";


export default function Features() {

    return (
        <StyledBgColor>
            <div className="tc pt5 b f1">
                <h2>Guarde suas memórias</h2>
            </div>

            <div className="flex-l mt6">
                <StyledAligned className="tc w-50 w-30-l">
                    <StyledCard src='/images/img-teste1.png' width={300} height={300} alt="teste" />
                    <p>Escreva suas memórias</p>
                </StyledAligned>
                <StyledAligned className="tc w-50 w-30-l">
                    <div className="mt4-m">
                        <StyledCard src='/images/img-teste1.png' width={300} height={300} alt="teste" />
                        <p>Compartilhe com seus amigos</p>
                    </div>
                </StyledAligned>
            </div>

            <div className="flex-l mt6 mt0-m">
                <StyledAligned className="tc w-50 w-30-l">
                    <div className="mt4-m">
                        <StyledCard src='/images/img-teste1.png' width={300} height={300} alt="teste" />
                        <p>Insira imagens</p>
                    </div>
                </StyledAligned>

                <StyledAligned className="tc w-50 w-30-l">
                    <div className="mt4-m">
                        <StyledCard src='/images/img-teste1.png' width={300} height={300} alt="teste" />
                        <p>Tenha seu próprio calendário</p>
                    </div>
                </StyledAligned>
            </div>

            <div className="mt5 tc">
                <StyledCard src='/images/img-2.jpg' width={500} height={300} alt="teste" />
                <p>Escreva de qualquer lugar!</p>
            </div>

            <div className="mw9 tc center ph3-ns mt5 pb4">
                <div className="cf ph2-ns">
                    <div className="fl w-100 w-third-ns pa2">
                        <FontAwesomeIcon icon={faLock} className="f1"></FontAwesomeIcon>
                        <p className="mt2">SEGURO E CRIPTOGRAFADO</p>
                    </div>
                    <div className="fl w-100 w-third-ns pa2">
                        <FontAwesomeIcon icon={faTag} className="f1"></FontAwesomeIcon>
                        <p className="mt2">ADICIONE PESSOAS, LUGARES E TAGS</p>
                    </div>
                    <div className="fl w-100 w-third-ns pa2">
                        <FontAwesomeIcon icon={faPencil} className="f1"></FontAwesomeIcon>
                        <p className="mt2">CUSTOMIZE SEU DIÁRIO</p>
                    </div>
                </div>
            </div>

            <div className="pt4 pb5 tc">
                <Button buttonName="Cadastre-se agora"/>
            </div>


        </StyledBgColor>

    )
}