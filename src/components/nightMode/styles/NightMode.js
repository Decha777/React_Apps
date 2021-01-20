import React from 'react'
import styled from 'styled-components/macro';

const StyledNightMode = styled.div`
    font-family:"Hind", sans-serif;
    font-weight: 800;
    font-size:1.6rem;
    color:${props => props.theme.color};
    padding: 0;
    margin: .2rem;


    .swith{
        position: relative;
        display:inline-block;
        width: 4rem;
        height:2.4rem;
    }
    .switch input{
        opacity:0;
    }

`;


const NightMode = ({ nightModeCallback, nightMode }) => {
    return <StyledNightMode>
        <span>NightMode:</span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
            <span className="slider around" />
        </label>

    </StyledNightMode>
}

export default NightMode

