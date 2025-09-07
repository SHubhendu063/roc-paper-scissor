let roc_btn=document.getElementById("r")
let paper_btn=document.getElementById("p")
let scissor_btn=document.getElementById("s")
let choice_div=document.querySelector('#choice_move')
let comp_choise_arr=[roc_btn,paper_btn,scissor_btn]
let user_score=document.querySelector('#user-score')
let comp_score=document.querySelector('#computer-score')
let u_score=0
let c_score=0

choice_div.addEventListener('click',(e)=>{
    if (e.target == roc_btn || e.target==paper_btn || e.target==scissor_btn) {
        choiseYourMove(e);
    }
})

function choiseYourMove(e){
    let random_num=Math.floor(Math.random()*3);
    let user_choise=e.target;
    let comp_choise=comp_choise_arr[random_num]
    console.log(comp_choise);
    choiceVerification(user_choise,comp_choise);
}

function choiceVerification(user_choise,comp_choise){
    if (user_choise==roc_btn && comp_choise==roc_btn ||
        user_choise==paper_btn && comp_choise==paper_btn ||
        user_choise==scissor_btn && comp_choise==scissor_btn
    ) {
        console.log("match is draw.");
    }
    otherVerification(user_choise,comp_choise);
}

function otherVerification(user_choise,comp_choise){
    if (user_choise==roc_btn && comp_choise==scissor_btn ||
        user_choise==paper_btn && comp_choise==roc_btn ||
        user_choise==scissor_btn && comp_choise==paper_btn 
    ) {
        u_score=u_score+1
        user_score.innerText=u_score
    }
    if (comp_choise==roc_btn && user_choise==scissor_btn ||
        comp_choise==paper_btn && user_choise==roc_btn ||
        comp_choise==scissor_btn && user_choise==paper_btn 
    ) {
        c_score=c_score+1
        comp_score.innerText=c_score
    }
}