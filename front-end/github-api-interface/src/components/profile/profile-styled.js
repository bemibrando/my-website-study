import styled from 'styled-components';

export const Wrapper  = styled.section`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: .25em 0;
    margin: 0;
    background-color: #fafafa;

    a {
        text-decoration: none;
    }
`;

export const WrapperFigure = styled.figure`
    justify-self: center;
`;

export const WrapperImage = styled.img`
    height: 10em;
    width: 10em;
    border-radius: 50%;
`;

export const WrapperInfoUser = styled.section`
    justify-content: flex-start;
    margin .5em;
    padding: .5em 0;

    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    h2, h3 {
        font-size: 1.25em;
    }
    h4, h5, h6, a, p, span {
        font-size: 1em;
    }
`;

export const WrapperUserName = styled.div`
    margin-left: .8em;
`;

export const WrapperAccountName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const WrapperUserBio = styled.div`
    margin-left: .8em;
`;

export const WrapperUserStats = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;

    h4 {
        font-weight: normal;
        margin: .2em;
    }

    span {
        font-weight: bold;
    }
`;

export const WrapperStats1 = styled.div`
    border-right: .1em solid #e6e6e6;
    padding: 0 .5rem 0.25em;

    
`;
export const WrapperStats2 = styled.div`
    border-right: .1em solid #e6e6e6;
    border-left: .1em solid #e6e6e6;
    padding: 0 .5rem 0.25em;

    h4 {
        font-weight: normal;
        margin: .2em;
    }

    span {
        font-weight: bold;
    }
`;
export const WrapperStats3 = styled.div`
    border-left: .1em solid #e6e6e6;
    padding: 0 .5rem 0.25em;

    h4 {
        font-weight: normal;
        margin: .2em;
    }

    span {
        font-weight: bold;
    }
`;