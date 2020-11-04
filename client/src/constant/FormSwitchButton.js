import React from 'react'
import styled from 'styled-components'


const FormSwitchButton = ({isHired, handleSwitch}) => {

    return (
        <Container>
            <Description>
               Not yet hired
            </Description>
            <Toggle
                checked={isHired}
                onChange={handleSwitch}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <Label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                style={{ background: isHired && 'green' }}
            >
                <Button className={`react-switch-button`} />
            </Label>
            <Description>
               Hired
            </Description>
        </Container>
    )
}

export default FormSwitchButton

const Container=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`

const Toggle = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    &.react-switch-checkbox:checked + .react-switch-label .react-switch-button{
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`

const Label =styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background:red;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    &.react-switch-label:active .react-switch-button {
        width: 60px;
      }
`

const Button = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`

const Description = styled.label`
    color: #000000;
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: bold;
    margin:0 5px;
`