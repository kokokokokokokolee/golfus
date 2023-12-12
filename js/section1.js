var typeText = document.querySelector(".mainText")
var textToBeTypedArr = ["나를 위한\n나로 가득한,\n스마트한 골프 라이프", "골프는 다르니까,\n우리는 다르니까,\n우리는 달라야 하니까", "GOLF US는\n새로운 골프 세상을\n만들어갑니다."]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        typeText.classList.add("showAnim")
        //break: wait 2s before playing again
        setTimeout(function () {
            typeText.classList.remove("showAnim")
            playAnim()
        }, 1500)  
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    
    // call itself
    playAnim()
  }, isAdding ? 120 : 60) // 쓰여지는 시간 : 지워지는 시간
  
}
// start animation
playAnim()



