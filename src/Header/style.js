import styled from 'styled-components'

export const HeaderContainer = styled.div `
    background-color: ${props => props.color};
    border-bottom: 2px solid #0062cc;
`
export const HeaderRow = styled.div`
 max-width: 1400px;
 padding: 10px;
 width: 100%;
 display: flex;
 align-items: center;
 margin: 0 auto;
`

export const HeaderLeft = styled.div`
    width: 33.333%;
`

export const HeaderMiddle = styled.div`
    width: 33.333%;
`

export const HeaderRight = styled.div`
    text-align: right;
    width: 33.333%;
    @media (max-width: 950px) {
        a {
          display: none;
        };
`
export const HamburgerContainer = styled.div`
    width: 40px;
    height: 25px;
    position: relative;
    display: none;
    margin-left: auto;
    @media (max-width: 950px) {
    display: block;
    }
`
export const HamburgerBar = styled.div`
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: black;
    &:nth-child(2) {
    top: 6px
    }
    &:last-child {
    top: 12px
    }
`