var slideIndex = 1;

window.onload = function () {
    showSlides(1);
}

// Next/previous controls
function plusSlides(n) {
    if(n == 1 && slideIndex == 10 && document.querySelector("#api_key").value.length == 0){
        alert("다음 단계로 넘어가기 전에 아래 입력칸에 생성된 API 키를 입력해주세요!");
    } else showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    if(n == 1){
        document.getElementsByClassName("prev")[0].style.display = "none";
        document.getElementsByClassName("next")[0].style.display = "block";
    } else if(n == 12){
        document.getElementsByClassName("prev")[0].style.display = "block";
        document.getElementsByClassName("next")[0].style.display = "none";
    } else {
        document.getElementsByClassName("prev")[0].style.display = "block";
        document.getElementsByClassName("next")[0].style.display = "block";
    }
}

function setAPIkey() {
    var api_key = document.querySelector("#api_key").value.trim();
    document.querySelector("#fix_link").href = "javascript:if(!window.location.href.includes(\"://plug.dj/\") || typeof gapi == \"undefined\"){alert(\"plug.dj 음악 감상 페이지 내에서 사용하세요.\");} else {gapi.client.setApiKey(\"" + api_key + "\"); gapi.client.load(\"youtube\", \"v3\"); alert(\"플디픽스 적용 성공!!\");}";
}

// function copy(){
//     if(document.querySelector("#fix_url").textLength == 0){
//         alert("복사할 내용이 없습니다.");
//     } else {
//         document.querySelector("#fix_url").select();
//         document.querySelector("#fix_url").focus();
//         document.execCommand("copy");
//         alert("URL 복사 완료");
//     }
// }