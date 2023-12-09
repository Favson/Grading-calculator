var playSong = new Audio("audios/songA.mp3")
var playSong1 = new Audio("audios/songB.mp3")
var playSong2 = new Audio("audios/songC.mp3")
var playSong3 = new Audio("audios/songD.mp3")
var playSong4 = new Audio("audios/songE.mp3")
var playSong5 = new Audio("audios/songF.mp3")
var playSong6 = new Audio("audios/songX.mp3")

var scorr = document.getElementById("score").value
function checkValue() {
    if (scorr.value!="") {
        if (scorr >= 0 && scorr <40) {
            displayResult.innerHTML = "F Fail"
            displayResult.style.color= "Red"
            playSong5.play()
            playSong.pause()
            playSong1.pause()
            playSong2.pause()
            playSong3.pause()
            playSong4.pause()
            playSong6.pause()
        }else if (scorr >=40 && scorr <45) {
            displayResult.innerHTML ="E - Pass"
            displayResult.style.color= "Orange"
            playSong3.play()
            playSong5.pause()
            playSong.pause()
            playSong1.pause()
            playSong2.pause()
            playSong4.pause()
            playSong6.pause()
        }else if (scorr >=45 && scorr <50){
            displayResult.innerHTML = "D - Average"
            displayResult.style.color = "Yellow"
            playSong6.play()
            playSong5.pause()
            playSong.pause()
            playSong1.pause()
            playSong2.pause()
            playSong3.pause()
            playSong4.pause()
        }else if (scorr >=50 && scorr <60) {
            displayResult.innerHTML ="C - credit"
            displayResult.style.color = "Greenyellow"
            playSong2.play()
            playSong5.pause()
            playSong.pause()
            playSong1.pause()
            playSong3.pause()
            playSong4.pause()
            playSong6.pause()
        }else if (scorr >=60 && scorr <70) {
            displayResult.innerHTML = "B - Good"
            displayResult.style.color = "Green"
            playSong1.play()
            playSong5.pause()
            playSong.pause()
            playSong2.pause()
            playSong3.pause()
            playSong4.pause()
            playSong6.pause()
        }else if (scorr>=70 && scorr <=100) {
            displayResult.innerHTML = "A - Excellent"
            displayResult.style.color = "White"
            playSong.play()
            playSong5.pause()
            playSong1.pause()
            playSong2.pause()
            playSong3.pause()
            playSong4.pause()
            playSong6.pause()
        }else if (scorr >100){
            displayResult.innerHTML = "Not recognize"
            playSong4.play()
        }else if (scorr <0) {
            displayResult.innerHTML= "Not recognize"
            playSong6.play()
            playSong5.pause()
            playSong.pause()
            playSong1.pause()
            playSong2.pause()
            playSong3.pause()
            playSong4.pause()
        }
    } else {
        displayResult.innerHTML = "Input the grade"
    }
}