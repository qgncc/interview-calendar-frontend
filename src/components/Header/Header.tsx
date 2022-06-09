import {} from "../styled";
import { ReactComponent as PlusIcon } from "../../img/icons/plus-icon.svg";
import {
    HeaderStyled,
    ButtonStyled,
    WrapperStyled,
    TitleStyled,
} from "../styled";

interface HeaderProps {
    openPopup: () => void;
}

export function Header({ openPopup }: HeaderProps) {
    return (
        <HeaderStyled>
            <WrapperStyled>
                <TitleStyled>Interview Calendar</TitleStyled>
                <ButtonStyled onClick={openPopup}>
                    <PlusIcon />
                </ButtonStyled>
            </WrapperStyled>
        </HeaderStyled>
    );
}
