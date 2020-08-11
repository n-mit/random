const kuji = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

var key = 0;
var max_len = kuji.length -1;
var randStart;
var speed = 10;

// 文字列シャッフル関数
// 10ミリ秒ごとに文字列をシャッフルし、#textに表示
var randShuffle = function() {
    if(key > max_len) key = 0;
    document.getElementById('text').textContent = kuji[key];
    key++;
}

// 非表示関数
function hide(array) {
    array.forEach(function(id) {
        document.getElementById(id).style.display = 'none';
    });
}

// 表示関数
function show(array) {
    array.forEach(function(id) {
        document.getElementById(id).style.display = 'block';
    });
}

// 抽選スタート
document.getElementById('start-btn').onclick = function() {
    randStart = setInterval(randShuffle, speed);
    hide(['start-btn']);
    show(['stop-btn']);
}

// 抽選を止める
document.getElementById('stop-btn').onclick = function() {
    clearInterval(randStart);
    hide(['stop-btn']);
    show(['start-btn']);
}
