import React from 'react';

const Email = (props) => {
    return (
        <div class="frame1">
            <div class="frame2">
                <div style={{color:'rgb(105, 103, 103)', fontSize:"14px", fontWeight:'600'}}>
                    이메일 로그인
                </div>
                <div class='aa'></div>
                <h6 style={{color:'rgb(105, 103, 103)'}}>이메일을 입력해주세요</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <div class='aa'></div>
                <h6 style={{color:'rgb(105, 103, 103)'}}>비밀번호를 입력해주세요</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <button class='Eloginbutton'>로그인</button>
                <button class='findPW'>비밀번호 찾기</button>
            </div>
        </div>
    );
}

export default Email;