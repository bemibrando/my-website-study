import React, { useState } from "react";
import * as S from "./tabs-styled";

export function Tabs( props ){
    const [ items, setItems ] = useState( props.items );

    function toggleTab(items, currentTab){
        let tabs = items;

        tabs.maps( (item, currentTab) => {
            if(item.id === currentTab){
                item.is_active = true;
            } else {
                item.is_active = false;
            }

            return tabs;
        })

        setItems([...tabs]);
    }

    return (
        <S.TabPanelContainer>
            <S.TabsContainer>
                <S.TabsList>
                    {
                        items.map( ( item, index ) => {
                            return (
                                <S.TabName onClick={(event) => toggleTab(event, index)} key={ index }>
                                    <S.TabTitle>{ item.title }</S.TabTitle>
                                </S.TabName>
                            );
                        })
                    }
                </S.TabsList>
            </S.TabsContainer>
            <S.TabPanel>
                {
                    items.map( ( item, index ) => {
                        return (
                            <S.TabContent key={ index }>
                                { item.content }
                            </S.TabContent>
                        );
                    })
                }
            </S.TabPanel>
        </S.TabPanelContainer>
    );
}  