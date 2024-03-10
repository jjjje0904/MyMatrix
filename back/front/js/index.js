setHeader();

async function setHeader(){
    //�슖�돦裕뉛쭚袁ъ삕占쎈츩�뜝�럥苑낉옙逾놂옙�뵃�삕�뜝�룞�삕�굢占� �뜝�럥苑끻뜝�럡荑� �댖怨뺣샍占쎌궨�뜝�럥�뿰占쎄껀�뜝占� �뇦猿볦삕�뜝�럡�뀬
    const token = localStorage.getItem("x-access-token");
    //�뜝�럥苑끻뜝�럡荑껃뜝�럩逾� �뜝�럥�뵪�뜝�럥堉꾤춯濡녹삕 signed�뜝�럥�뱺 hidden �뜝�럡源삣뜝�럩�굥�뜝�럥裕� 占쎄껀占쎈듌占쎈턄�뼨��먯삕
    if(!token){
        const signed = document.querySelector(".signed");
        signed.classList.add("hidden");
        return;
    }
    const config={
        method:"get",
        url : url+"/jwt",
        headers:{
            "x-access-token":token
        }
    };
    const res = await axios(config);

    if(res.data.code !=200){
        console.log("�뜝�럩�굥嶺뚮쪇沅좑쭕占� �뜝�럥苑끻뜝�럡荑껃뜝�럩肉��뜝�럥鍮띶뜝�럥堉�.");
        return;
    }

    const nickname = res.data.result.nickname;
    const spanNickname = document.querySelector("span.nickname");
    spanNickname.innerText = nickname;
    //�뜝�럥苑끻뜝�럡荑껃뜝�럩逾� �뜝�럩肉녑뜝�럥堉꾤춯濡녹삕 unsigned�뜝�럥�뱺 hidden �뜝�럡源삣뜝�럩�굥�뜝�럥裕� 占쎄껀占쎈듌占쎈턄�뼨��먯삕
    const unsigned =document.querySelector(".unsigned");
    unsigned.classList.add("hidden");

}


//########### �슖�돦裕꾬옙�쟽�뜝�럥�닡�뜝�럩�쐨 �뼨轅명�∽옙裕�
const buttonSignout = document.getElementById("sign-out");
buttonSignout.addEventListener("click",signout);

function signout(){
    localStorage.removeItem("x-access-token");
    location.reload();
};
