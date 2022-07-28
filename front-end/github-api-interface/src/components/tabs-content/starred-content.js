import React from "react";
import * as S from "../bemi-tabs/tabs-styled";

const Starred = () => {
    return {
        id: "tab-1",
        title: "Starred",
        content:
        <>
            <S.TabTitle>Starred</S.TabTitle>
            <S.TabText>
                Here is the starred
            </S.TabText>
        </>,
    };
}

export default Starred;