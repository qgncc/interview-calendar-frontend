import "./Header.scss"
import {ReactComponent as PlusIcon} from "../../img/icons/plus-icon.svg";
interface HeaderProps{
    openPopup:()=>void,
}

export function Header({openPopup}:HeaderProps) {
    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="header__title">Interview Calendar</div>
                <button onClick={openPopup} className="button"><PlusIcon/></button>
            </div>    
            
        </header>

    )
}