import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position:fixed;
    width: 100%;
    height: 100%;`
export const ModalContainer = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    border-radius: 8px;`
export const LogoImage = styled.img`
    width: 250px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;`
export const CloseBtn = styled.p`
    position: fixed;
    top: 8px;
    right: 8px;`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;`
  export const BtnContainer = styled.button`
    top: 212px;
    left: 548px;
    width: 260px;
    height: 48px;
    background: #008EFF 0% 0% no-repeat padding-box;
    border-radius: 24px;
    opacity: 1;
    margin-top: 24vh;`