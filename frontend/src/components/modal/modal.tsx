import React, { MouseEventHandler } from "react"
import styled from "styled-components"
import { FlightTypes } from "../../types"
import { Overlay, ModalContainer, LogoImage, CloseBtn, Content, BtnContainer } from "./styles"

type Props = {
    openModal: boolean
    onClose: MouseEventHandler
    uuid:string
}

const Modal = ({ openModal, onClose, uuid }: Props) => {
    if (!openModal) return null
    return (
        <Overlay onClick={onClose}>
            <ModalContainer>
                <LogoImage src='https://cdn.vectorstock.com/i/1000x1000/27/30/plane-logo-vector-23272730.webp' alt=""/>
                <Content><p>{uuid}</p></Content>
                <CloseBtn className="closeBtn" onClick={onClose}>X</CloseBtn>
                <BtnContainer>
                    <strong className="book_flight__button">Close</strong>
                </BtnContainer>
            </ModalContainer>
        </Overlay>
    )
}
export default Modal