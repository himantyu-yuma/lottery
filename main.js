// let data = decodeURI(location.search).replace('?json=', '');
let data = localStorage.getItem('present')

if (data == "") {
    presents = []
} else {
    presents = JSON.parse(data);
}



let showPresent = function () {
    $('#start').prop('disabled', true);
    if (presents.length == 0) {
        alert('抽選は終了しました．')
        return;
    }
    let random = Math.floor(Math.random() * presents.length);

    while (presents[random].number == 0) {
        random = Math.floor(Math.random() * presents.length);
    }
    showBall();
    setTimeout(() => {
        presents[random].number--;
        if (presents[random].number == 0) {
            // if (presents.length == 1) {
            //     presents = [];
            // }
            presents.splice(random, 1);
        }
        localStorage.setItem('present', JSON.stringify(presents));
    }, 1000);
    setTimeout(() => {
        rotateBall();
    }, 500);
    setTimeout(() => {
        openBall();
        document.getElementById('present').innerHTML = presents[random].name;
    }, 2000);
    $('.fixed-bottom').removeClass('display-none')

}

let showBall = function () {
    $('.ball').addClass('fall');

}

let openBall = function () {
    $('#up').addClass('up');
    $('#down').addClass('down');
}

let rotateBall = function(){
    $('.balls').addClass('rotate');
}

let hideBall = function () {
    $('#start').prop('disabled', false);
    $('.balls').addClass('display-none');
    setTimeout(() => {
        $('.balls').removeClass('display-none');
    }, 600);
    $('.balls').removeClass('rotate');
    $('.ball').removeClass('fall');
    $('#up').removeClass('up');
    $('#down').removeClass('down');
    document.getElementById('present').innerHTML = '';
    $('.fixed-bottom').addClass('display-none')
}