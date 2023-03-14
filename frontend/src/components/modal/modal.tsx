import axios from "axios"
import React, { MouseEventHandler, useState } from "react"
import styled from "styled-components"
import { Bound, FlightTypes } from "../../types"
import { Overlay, ModalContainer, LogoImage, CloseBtn, Content, BtnContainer } from "./styles"

type Props = {
    openModal: boolean
    onClose: MouseEventHandler
    uuid:string
    bounds: Bound[]
}

const Modal = ({ openModal, onClose, uuid, bounds }: Props) => {
    if (!openModal) return null
    return (
        <Overlay onClick={onClose}>
            <ModalContainer>
                <LogoImage src='https://cdn.vectorstock.com/i/1000x1000/27/30/plane-logo-vector-23272730.webp' alt=""/>
                <Content>
                    <strong>Flight NO.: </strong>
                    <p>{uuid}</p>
                    <strong>Flying to: </strong>
                <p>{bounds[0].departure.name}</p>
                </Content>
                <CloseBtn className="closeBtn" onClick={onClose}>X</CloseBtn>
                <BtnContainer>
                    <strong className="book_flight__button">Close</strong>
                </BtnContainer>
            </ModalContainer>
        </Overlay>
    )
}
export default Modal