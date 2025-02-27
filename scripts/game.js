window.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.field_cell');
    const hp_units = document.querySelectorAll('.hp_unit');
    let snakey = [262, 282, 302];
    let direction = 'up';
    let nextDirection = 'up';
    let gameInterval;
    let intervalTime;
    let applePosition;
    let hp;
    let score = 0;

    // Установка количества жизней в зависимости от настроек
    if (preferences.crash == 0) {
        hp = 1;
    } else if (preferences.crash == 1) {
        hp = 3;
    }

    // Функция для генерации яблока на случайной свободной клетке
    function generateApple() {
        let freeCells = [];
        for (let i = 0; i < cells.length; i++) {
            if (!cells[i].classList.contains('wall_cell') && !snakey.includes(i)) {
                freeCells.push(i);
            }
        }

        if (freeCells.length === 0) {
            return; // Нет свободных клеток для размещения яблока
        }

        applePosition = freeCells[Math.floor(Math.random() * freeCells.length)];
        cells[applePosition].classList.add('apple_cell');
    }

    // Функция для шага змейки
// Функция для шага змейки
    function step() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('snake_cell');
        }

        // Обновление индикаторов жизней
        if (hp === 3) {
            hp_units[0].classList.remove('hp_unit_empty');
            hp_units[1].classList.remove('hp_unit_empty');
            hp_units[2].classList.remove('hp_unit_empty');
        } else if (hp === 2) {
            hp_units[0].classList.add('hp_unit_empty');
            hp_units[1].classList.remove('hp_unit_empty');
            hp_units[2].classList.remove('hp_unit_empty');
        } else if (hp === 1) {
            hp_units[0].classList.add('hp_unit_empty');
            hp_units[1].classList.add('hp_unit_empty');
            hp_units[2].classList.remove('hp_unit_empty');
        }

        let head = snakey[0];
        let newHead;

        direction = nextDirection;

        // Определение новой позиции головы змейки в зависимости от направления
        if (direction === 'up') {
            newHead = head - 20;
            if (newHead < 0) {
                newHead = preferences.teleport == 0 ? newHead + 400 : 0;
            }
        } else if (direction === 'down') {
            newHead = head + 20;
            if (newHead >= 400) {
                newHead = preferences.teleport == 0 ? newHead - 400 : 399;
            }
        } else if (direction === 'left') {  
            newHead = head - 1;
            if (newHead % 20 === 19 || newHead < 0) {
                newHead = preferences.teleport == 0 ? newHead + 20 : head;
            }
        } else if (direction === 'right') { 
            newHead = head + 1;
            if (newHead % 20 === 0) {
                newHead = preferences.teleport == 0 ? newHead - 20 : head;
            }
        }

        // Проверка на столкновение с самой собой
        if (snakey.includes(newHead)) { 
        if (hp === 1) {
            gameOver();
            return;
        } else {
            hp--;
            if (score >= 10) {
                score -= 10;
                document.querySelector('.score').innerHTML = score;
            } else {
                score = 0;
                document.querySelector('.score').innerHTML = score;
            }
            // Удаление последнего элемента, чтобы змейка не исчезала полностью
            while (snakey.length > 1 && snakey[snakey.length - 1] !== newHead) {
                snakey.pop();
            }
        }
        }

        // Проверка на столкновение с стеной
        if (cells[newHead].classList.contains('wall_cell')) {   
        gameOver();
        return;
        }

        snakey.unshift(newHead);

        // Проверка на съедание яблока
        if (snakey[0] === applePosition) {  
        score++;
        document.querySelector('.score').innerHTML = score;
        cells[applePosition].classList.remove('apple_cell');
        cells[applePosition].classList.remove('apple_anim');
        generateApple();
        } else {    
        snakey.pop();
        }

        // Отрисовка змейки на поле
        for (let i = 0; i < snakey.length; i++) {   
        cells[snakey[i]].classList.add('snake_cell');
        }
    }


    function setupWalls(mapType) {
        const map1Walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 39, 40, 59, 60, 79, 80, 99, 100, 119, 120, 139, 140, 159, 160, 179, 180, 199, 200, 219, 220, 239, 240, 259, 260, 279, 280, 299, 300, 319, 320, 339, 340, 359, 360, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399];
        const map2Walls = [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 39, 40, 59, 60, 69, 70, 79, 80, 89, 90, 99, 100, 109, 110, 119, 120, 129, 130, 139, 140, 149, 150, 159, 169, 170, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 229, 230, 240, 249, 250, 259, 260, 269, 270, 279, 280, 289, 290, 299, 300, 309, 310, 319, 320, 329, 330, 339, 340, 359, 360, 379, 380, 381, 382, 383, 384, 385, 386, 387, 392, 393, 394, 395, 396, 397, 398, 399];

        let wallsToUse = [];
        if (mapType === 1) {
            wallsToUse = map1Walls;
        } else if (mapType === 2) {
            wallsToUse = map2Walls;
        }

        wallsToUse.forEach(index => {
            cells[index].classList.add('wall_cell');
        });
    }

    // Функция завершения игры
    function gameOver() {
        document.querySelector('.game-quit').classList.remove('none');
        clearInterval(gameInterval);
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('wall_cell', 'apple_cell', 'snake_cell');
        }
        // Отображение стенок на проигранной игре
        const loseCells = [82, 83, 84, 87, 88, 90, 91, 93, 96, 97, 98, 101, 106, 108, 110, 112, 114, 116, 121, 123, 124, 126, 128, 130, 132, 134, 136, 137, 141, 144, 146, 147, 148, 150, 152, 154, 156, 162, 163, 164, 166, 168, 170, 172, 174, 176, 177, 178, 202, 203, 206, 209, 211, 212, 213, 215, 216, 217, 221, 224, 226, 229, 231, 235, 238, 241, 244, 246, 249, 251, 252, 255, 256, 257, 261, 264, 266, 269, 271, 275, 278, 282, 283, 287, 288, 291, 292, 293, 295, 298];
        for (let i = 0; i < loseCells.length; i++) {
            cells[loseCells[i]].classList.add('wall_cell');
        }
    }

    // Обработчик нажатия клавиш для изменения направления движения змейки
    window.addEventListener('keydown', (key) => {
        if ((key.code == 'ArrowUp' && direction !== 'down') ||
            (key.code == 'ArrowDown' && direction !== 'up') ||
            (key.code == 'ArrowLeft' && direction !== 'right') ||
            (key.code == 'ArrowRight' && direction !== 'left')) {
            nextDirection = key.code.substring(5).toLowerCase();
        }
    });

    // Функция начала игры
    window.startGame = function () {
        if (gameInterval) {
            clearInterval(gameInterval);
        }
        snakey = [262, 282, 302];
        direction = 'up';
        nextDirection = 'up';
        hp = preferences.crash == 0 ? 1 : 3

        // загрузка карты
        setupWalls(preferences.map);

        // Генерация яблока в начале игры
        generateApple();

        // Установка интервала обновления игры в зависимости от уровня сложности
        switch (preferences.difficulty) {
            case 0:
                intervalTime = 700;
                break;
            case 1:
                intervalTime = 500;
                break;
            case 2:
                intervalTime = 300;
                break;
            case 3:
                intervalTime = 100;
                break;
            default:
                intervalTime = 800;
        }

        // Запуск игрового цикла
        gameInterval = setInterval(() => {
            step();
        }, intervalTime);
    };
});


setInterval(()=>{
    document.querySelector('.apple_cell').classList.add('apple_anim')
    setTimeout(() => {
        document.querySelector('.apple_cell').classList.remove('apple_anim')
    }, 700);
}, 1400)