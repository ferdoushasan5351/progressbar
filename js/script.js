let progressWidth = 0;

function plusFunction(){
    if(progressWidth >= 0 && progressWidth < 100) {
        progressWidth += 10;
    }
    document.getElementById('percentage').style.width=`${progressWidth}%`;
    console.log(progressWidth);
}
function minusFunction(){
    if(progressWidth > 0 && progressWidth <= 100){
        progressWidth -= 10;
    }
    document.getElementById('percentage').style.width=`${progressWidth}%`
}

