var songToPlay = new Audio("audios/songF.mp3")
var songToPlay1= new Audio("audios/songX.mp3")
var songToPlay2 = new Audio("audios/songD.mp3")
var songToPlay3 = new Audio("audios/songC.mp3")
var songToPlay4 = new Audio("audios/songB.mp3")
var songToPlay5 = new Audio("audios/songA.mp3")
var songToPlay6 = new Audio("audios/songE.mp3")

function checkValue() {
    if(num.value != "") {
        if (num.value >= 0 && num.value <40) {
            display.innerHTML = "F - Fail "
            songToPlay.play()
            songToPlay2.pause()
            songToPlay1.pause()
            songToPlay3.pause()
            songToPlay4.pause()
            songToPlay5.pause()
            songToPlay6.pause()
        }else if (num.value >= 40 && num.value <45) {
            display.innerHTML = "E - Pass"
            songToPlay1.play()
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay3.pause()
            songToPlay4.pause()
            songToPlay5.pause()
            songToPlay6.pause()
        }else if (num.value >=45 && num.value <50) {
            display.innerHTML ="D - Average"
            songToPlay.pause()
            songToPlay2.play()
            songToPlay1.pause()
            songToPlay3.pause()
            songToPlay4.pause()
            songToPlay5.pause()
            songToPlay6.pause()
        }else if(num.value >=50 && num.value <60) {
            display.innerHTML = "C - Credit"
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay1.pause()
            songToPlay3.play()
            songToPlay4.pause()
            songToPlay5.pause()
            songToPlay6.pause()
        }else if (num.value >59 && num.value <70) {
            display.innerHTML = "B - Good"
            songToPlay4.play()
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay1.pause()
            songToPlay3.pause()
            songToPlay5.pause()
            songToPlay6.pause()
        }else if (num.value >=70 && num.value <=100){
            display.innerHTML = "A - Excellent"
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay1.pause()
            songToPlay3.pause()
            songToPlay4.pause()
            songToPlay5.play()
            songToPlay6.pause()
        }else if (num.value >100){
            display.innerHTML = "Not recongised"
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay1.pause()
            songToPlay3.pause()
            songToPlay4.pause()
            songToPlay5.pause()
            songToPlay6.play()
        }else if (num.value <0){
            display.innerHTML = "Input the grade"
            
        }
        document.getElementById("num")= ""
    }else{
        display.innerHTML = "INVALID"
        songToPlay1.play()
        songToPlay.pause()
        songToPlay2.pause()
        songToPlay3.pause()
        songToPlay4.pause()
        songToPlay5.pause()
    }
}