import styled from "styled-components";


const theme = {
    text_color_main: "#000",
    text_color_button_main:"#ff3131", 
    background_main:"#fff",
    background_td_appointment:"#ebecff",
    border_color_main:"#e6e6e6",
    control_background_main: "#f6f6f6",
    background_button_main: "#ff3131",
    background_popup_window_main:"#e6e6e7",
    background_picked_main:"#b3b7ff",
    border_popup_button:"#69697d",
    color_button_popup:"#007aff"
}


export const HeaderStyled = styled.header`
    width: 100%;
    position: sticky;
    top:0;
    display: flex;
    height: 7.11rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background_main};
    border-bottom: 2px solid ${theme.border_color_main};
    z-index: 50;
`;
export const WrapperStyled = styled.div`
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    @media screen and (min-width: 740px) {
      width: 740px;
    }
`;
export const TitleStyled = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
`;
export const SectionStyled = styled.section`
    width: 100%;
    @media screen and (min-width: 740px) {
      width: 740px;
    }
`;
interface ButtonStyledProps{
    fontSize?: string;
    width?:string;
}

export const ButtonStyled =  styled.button`
    color: red;
    background-color: transparent;
    border: 0;
    padding: 0.5rem;
    line-height: 50%;
    cursor: pointer;
    font-size: ${(props:ButtonStyledProps) => props.fontSize? props.fontSize:"inherit"};
    width: ${(props: ButtonStyledProps) => props.width? props.width:"auto"};
`;
export const WeekStyled = styled.div`
    width: 100%;
    padding-top: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left:4rem;
    position:sticky;
    top:0;
    box-sizing:border-box;
`;
export const WeekDayStyled = styled.div`
    font-weight: 200;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin:0;
    width: 14.285%;
`;
export const WeekDayNumberStyled = styled.div`
    font-weight: 200;
    font-size: 1.8rem;
    padding: 0.6rem 0.6rem;
    box-sizing:content-box;
`;
export const ControlsStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0.5rem 4rem;
    font-family: Nunito,sans-serif;
    font-size: 2rem;
`;
export const ControlsCurrentStyled = styled.div`
    font-size: 1.5rem;
`;
export const TableStyled = styled.table`
    margin-top: 1rem;
    width: 100%;
    @media screen and (min-width: 740px) {
        width: 740px;
    }
    border-spacing: 0;
`;
export const TableTimeStyled = styled.span`
    display: inline;
    color:${theme.border_color_main};
    position: relative;
    top:-0.5rem;
`;
export const TableTdStyled = styled.td`
    border-style:solid;
    border-color:${theme.border_color_main};
    background-clip: content-box;
    background-color: ${(props:{hasAppointment:boolean, picked: boolean})=>{
            if(props.picked) return theme.background_picked_main;
            if(props.hasAppointment) return theme.background_td_appointment;
        }
    };
    border-width: 2px 2px 0 0;
    padding: 2px;
    position:relative;
    width: 14.285%;
    height: 100%;
`;
export const TableTrStyled = styled.tr`
    height: 4rem;
`;
export const TableThStyled = styled.th`
    box-sizing:border-box;
    width: 4rem;
    min-width: 4rem;
    vertical-align: top;
`;

export const FooterStyled = styled.footer`
    position:sticky;
    bottom:0;
    background-color:${theme.background_main}; 
    height:4.44rem;
    display: flex;
    font-size: 1.1rem;
    justify-content: center;
    //TODO theme
    border-top: 2px solid ${theme.border_color_main};
    width: 100%;
`;
export const FooterWrapperStyled = styled.footer`
    display: flex;
    width: 100%;
    @media screen and (min-width: 740px){
        width: 740px;
    }
    box-sizing:border-box;
    padding: 0 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
// POPUP
export const PopupStyled = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.3);
    width: 100vw;
    height: 100vh;
    top:0;
    padding: 5%;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PopupWindowStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.background_popup_window_main};
    padding: 2.55rem 0 0;
    border-radius: 1rem;
    width: 30rem;
`;
export const PopupInputStyled = styled.input`
    font-size: 2rem;
    caret-color: ${theme.color_button_popup};
    width: 90%;
    height: 2.7rem;
    margin: 1.3rem 5% 0;
    border:1px solid ${theme.border_color_main};
    &:focus{
        outline: #8e8e93 solid 1px;
    }
`;
export const PopupTitleStyled = styled.h1`
    margin: 0;
    font-size: 1.8rem;
`;
export const PopupTextStyled = styled.div`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0.5rem;
`;
export const PopupFormStyled = styled.form`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
`;
export const PopupStyledError = styled.div`
    padding:0 5%;
    width: 100%;
    color:red;
`;
export const PoupButtonStyled = styled.button`
    margin-top: 1rem;
    width: 50%;
    font-size: 1.5rem;
    padding: 2.05rem 0rem;
    border-color:${theme.border_popup_button};
    border-style: solid;
    border-width: 1px 0 0 0;
    &+&{
        border-left: 1px solid ${theme.border_popup_button}
    }
    color: #007aff;
    background-color: transparent;
    line-height: 50%;
    cursor: pointer;
`;