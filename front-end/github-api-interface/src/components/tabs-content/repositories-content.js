import React from "react";
import * as S from "../bemi-tabs/tabs-styled";

const Repositories = () => {
    return {
        label: "Repositories",
        content: 
        <>
            <S.TabTitle>Repositories</S.TabTitle>
            <S.TabText>
                Here is the repositories
            </S.TabText>
        </>
    };
}

export default Repositories;