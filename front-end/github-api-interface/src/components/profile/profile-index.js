import React from "react";
import * as S from "./profile-styled";

const Profile = () => {
    return (
    <S.Wrapper>
        <S.WrapperFigure>
          <S.WrapperImage src="" alt="User's avatar"/>
        </S.WrapperFigure>
        <S.WrapperInfoUser>
          <S.WrapperUserName>
            <h1>User Name </h1>
            <S.WrapperAccountName>
              <a 
                href="" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>@username</span>
              </a>
            </S.WrapperAccountName>
          </S.WrapperUserName>
          <S.WrapperUserBio>
            <p>User Bio</p>
          </S.WrapperUserBio>
          <S.WrapperUserStats>
            <S.WrapperStats1>
              <h4>Followers</h4><span>0</span>
            </S.WrapperStats1>
            <S.WrapperStats2>
              <h4>Starreds</h4><span>0</span>
            </S.WrapperStats2>
            <S.WrapperStats3>
              <h4>Followings</h4><span>0</span>
            </S.WrapperStats3>
          </S.WrapperUserStats>
         </S.WrapperInfoUser>
    </S.Wrapper>
    );
  };

export default Profile;