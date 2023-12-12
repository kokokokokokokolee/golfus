const text1 = "우리는 더 크게 환호할 미래를 위해서";
const text2 = "더 큰 꿈을 꿉니다";
const text = document.querySelector(".text");
// i변수는 현재 문자열을 타이핑 할 때 사용될 인덱스 값으로 초기화
let i = 0;

// setInterval함수로 100ms마다 호출 
function typing() {
    if (i < text1.length) {
    	// i인덱스에 해당하는 문자를 가져옴
        let txt = text1.charAt(i);
        text.innerHTML += txt;
    } else if (i === text1.length) {
        text.innerHTML += "<br>";
        text.innerHTML += "<span id='text-bg'></span>";
    } else if (i - text1.length <= text2.length) {
    	
        let txt = text2.charAt(i - text1.length);
        document.getElementById("text-bg").innerHTML += txt;
    }
    i += 1;

    if (i > text1.length + text2.length) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(typing, 100);