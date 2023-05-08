let tiles = document.getElementsByClassName("tile");
let timer = document.getElementById("timer");
let containers = document.getElementsByClassName("container");
let time = 50;
let clear_flag;

function init() {
    for (let index = 0; index < tiles.length; index++) {
        tiles[index].addEventListener("click",function(e){
            let i = Number(e.target.id);//タイルのindex番号
            click_tile(i);
            complete();   
        });
    }
}
function click_tile(i) {
}
function swap(i, j) {
    [tiles[i].dataset.index, tiles[j].dataset.index]
      =[tiles[j].dataset.index, tiles[i].dataset.index];
}
function click_tile(i) {
    if (i - 3 >= 0 && tiles[i - 3].dataset.index == 0) {//上と比較
        swap(i, i - 3);
    } else if (i + 3 < 9 && tiles[i + 3].dataset.index == 0) {//下と比較
        swap(i, i + 3);    
    } else if (i % 3 != 0 && tiles[i - 1].dataset.index == 0) {
        swap(i, i - 1);
    } else if (i % 3 != 2 && tiles[i + 1].dataset.index == 0) {
        swap(i, i + 1);
    }
}
function swap(i, j) {
    [tiles[i].dataset.index, tiles[j].dataset.index]
       = [tiles[j].dataset.index, tiles[i].dataset.index];
}
function shuffle(arr) {
    let i = 0
    while (500 + i) {
        const j = Math.floor(Math.random() * arr.length);
        click_tile(j);
        i -= 1;
    }
}
function count_down() {
    let count = setInterval(() => {
        time -= 1
        timer.textContent = time;
        if (time <= 0) {
            clearInterval(count)
            timer.textContent = "Game Over";
        }
        if (clear_flag && time > 0) {
            clearInterval(count)
            timer.textContent = "Game Clear";
        }
    }, 1000);
}
function complete() {
    let result = [];
    for (let i = 0; i < tiles.length; i++) {
        if(tiles[i].dataset.index == tiles[i].id) {
            result.push(true);
        } else {
            result = [];
        }
    }
    if (result.length == 9) { //全て揃った時
        clear_flag = true;
        setTimeout(() => {
            for (let i = 0; i < containers.length; i++) {
                containers[i].getElementsByClassName.backgroundColor = "pink";
            }
        }, 200);
    }
}

init();
shuffle(tiles);
count_down();
