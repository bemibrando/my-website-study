import React from "react";
import * as S from "./bemi-tabs-styled";

const BemiTabs = () => {
    return (
        <S.TabPanelContainer>
            <S.TabsContainer>
                <S.TabsList>
                    <S.TabName>Repositories</S.TabName>
                    <S.TabName>Starred</S.TabName>
                </S.TabsList>
            </S.TabsContainer>
            <S.TabPanel>
                <S.TabContent>
                </S.TabContent>
            </S.TabPanel>
        </S.TabPanelContainer>
    );
};

export default BemiTabs;