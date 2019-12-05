let data = decodeURI(location.search).replace('?json=', '');

let presents = JSON.parse(data);

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
        document.getElementById('present').innerHTML = presents[random].name;
    }, 1000);
    setTimeout(() => {
        openBall();
    }, 1000);
    $('.fixed-bottom').removeClass('display-none')
    presents[random].number--;
    if (presents[random].number == 0) {
        // if (presents.length == 1) {
        //     presents = [];
        // }
        presents.splice(random, 1);
    }

}

let showBall = function(){
    $('.ball').addClass('fall');
}

let openBall = function(){
    $('#up').addClass('up');
    $('#down').addClass('down');
}

let hideBall = function(){
    $('#start').prop('disabled', false);
    $('.ball').addClass('display-none');
    setTimeout(() => {
        $('.ball').removeClass('display-none');
    }, 300);
    $('.ball').removeClass('fall');
    $('#up').removeClass('up');
    $('#down').removeClass('down');
    document.getElementById('present').innerHTML = '';
    $('.fixed-bottom').addClass('display-none')
}