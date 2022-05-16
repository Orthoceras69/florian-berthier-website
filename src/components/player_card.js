import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid , brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function PlayerCard () {
    return (
        <div className="player_card">
            <img src="/img/Florian_Berthier.jpeg" alt="Florian Berthier" className="profil_picture"/>
            <div className="player_info">
                <h1><strong>FLORIAN BERTHIER</strong><br/>Développeur & Intégrateur Web</h1>
                <nav className="Columns social_nav">
                    <div className="Column1_6">
                        <a href='https://www.linkedin.com/in/%E2%98%91-florian-berthier-105ba2179/' className='linkedin'>
                            <FontAwesomeIcon icon={brands("linkedin-in")} />
                        </a>
                    </div>
                    <div className="Column1_6">
                        <a href='https://www.twitch.tv/orthoceras_' className='twitch'>
                        <FontAwesomeIcon icon={brands("twitch")} />
                        </a>
                    </div>
                    <div className="Column1_6">
                        <a href='https://www.instagram.com/flo_brthr/' className='instagram'>
                            <FontAwesomeIcon icon={brands("instagram")} />
                        </a>
                    </div>
                    <div className="Column1_6">
                        <a href='https://www.facebook.com/florianbrthr' className='facebook'>
                            <FontAwesomeIcon icon={brands("facebook-square")} />
                        </a>
                    </div>
                    <div className="Column1_6">
                        <a href='https://www.discordapp.com/users/Orthoceras#6318' className='discord'>
                            <FontAwesomeIcon icon={brands("discord")} />
                        </a>
                    </div>
                    <div className="Column1_6">
                        <a href='mailto:florian.berthier@hotmail.com' className='envelope'>
                            <FontAwesomeIcon icon={solid("envelope")} />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default PlayerCard;