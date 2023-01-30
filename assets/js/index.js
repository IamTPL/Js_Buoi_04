var btns = document.getElementsByClassName('title');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active-title');
        if(current.length != 0) {
            current[0].className = current[0].className.replace(
                ' active-title',
                ''
            );
        }
        this.className += ' active-title';
    });
}

function sort() {
    var num1 = document.getElementById('num-1').value * 1;
    var num2 = document.getElementById('num-2').value * 1;
    var num3 = document.getElementById('num-3').value * 1;
    var a = [];
    a.push(num1);
    a.push(num2);
    a.push(num3);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    let result = a.join(', ');
    document.getElementById('rs-sort').innerHTML = result;
}

function sayHi() {
    var result = document.getElementById('family-member').value;
    var displayElement = document.getElementById('sayHello');

    switch (result) {
        case 'F':
            displayElement.innerHTML = 'Xin chào: Bố';
            break;
        case 'M':
            displayElement.innerHTML = 'Xin chào: Mẹ';
            break;
        case 'S':
            displayElement.innerHTML = 'Xin chào: Anh trai';
            break;
        case 'D':
            displayElement.innerHTML = 'Xin chào: Em gái';
            break;
        default:
            displayElement.innerHTML = 'Xin chào: người lạ ơi!';
            break;
    }
}

function count() {
    var even = 0;
    var odd = 3;
    var num1 = document.getElementById('num_1').value;
    var num2 = document.getElementById('num_2').value;
    var num3 = document.getElementById('num_3').value;

    if (num1 % 2 === 0) {
        even++;
    }

    if (num2 % 2 === 0) {
        even++;
    }

    if (num3 % 2 === 0) {
        even++;
    }

    document.getElementById('even').innerHTML = even;
    document.getElementById('odd').innerHTML = odd - even;
}

function triangle() {
    var edge1 = document.getElementById('edge1').value * 1;
    var edge2 = document.getElementById('edge2').value * 1;
    var edge3 = document.getElementById('edge3').value * 1;
    var result = 'thường';

    if (
        edge1 + edge2 > edge3 &&
        edge1 + edge3 > edge2 &&
        edge2 + edge3 > edge1
    ) {
        if (edge1 === edge2 && edge2 === edge3) {
            result = 'đều';
        } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
            result = 'cân';
        } else if (
            edge1 ** 2 + edge2 ** 2 === edge3 ** 2 ||
            edge1 ** 2 + edge3 ** 2 === edge2 ** 2 ||
            edge3 ** 2 + edge2 ** 2 === edge1 ** 2
        ) {
            result = 'vuông';
        }
    } else {
        alert('Dữ liệu không hợp lệ');
    }

    document.getElementById(
        'typeof-triangle'
    ).innerHTML = `Hình tam giác: ${result}`;
}

var date, month, year, isNhuan;

function getDate(selector) {
    var dmy = document.getElementById(selector).value;
    var arr = dmy.split('-');
    year = arr[0] * 1;
    month = arr[1] * 1;
    date = arr[2] * 1;
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        isNhuan = true;
    } else {
        isNhuan = false;
    }
}

function yesterday() {
    getDate('dmy');
    date -= 1;
    if (date === 0) {
        switch (month) {
            case 1:
                year -= 1;
                date = 31;
                break;
            case 3:
                if (isNhuan) {
                    date = 29;
                } else {
                    date = 28;
                }
                break;
            case 5:
            case 7:
            case 10:
            case 12:
                date = 30;
                break;
            default:
                date = 31;
                break;
        }

        month -= 1;
        if (month === 0) {
            month = 12;
        }
    }
    document.getElementById('rsDMY').innerHTML = `${date}/${month}/${year}`;
}

function tomorrow() {
    getDate('dmy');
    date += 1;
    if (date >= 31 && month != 2) {
        switch (month) {
            case 12:
                year += 1;
                date = 1;
                break;
            default:
                date = 1;
                break;
        }
        month += 1;
        if (month === 13) {
            month = 1;
        }
    }

    if (date >= 28 && month === 2) {
        if (isNhuan && date >= 30) {
            date = 1;
            month += 1;
        }
        if (!isNhuan && date >= 29) {
            date = 1;
            month += 1;
        }
    }

    document.getElementById('rsDMY').innerHTML = `${date}/${month}/${year}`;
}

function days() {
    getDate('dmy2');
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            date = 30;
            break;
        case 2:
            if (isNhuan) {
                date = 29;
            } else {
                date = 28;
            }
            break;
        default:
            date = 31;
            break;
    }
    document.getElementById(
        'rsDays'
    ).innerHTML = `Tháng ${month} năm ${year} có ${date} ngày`;
}

function readNumber() {
    var n = document.getElementById('number').value * 1;
    if (n >= 1000 || n.toString().length < 3)
        alert('Vui lòng nhập số có 3 chữ số');

    var ones = n % 10;
    var tens = Math.floor(n / 10) % 10;
    var hundred = Math.floor(Math.floor(n / 10) / 10);

    var o = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    var t = [
        'lẻ',
        'mười',
        'hai mươi',
        'ba mươi',
        'bốn mươi',
        'năm mươi',
        'sáu mươi',
        'bảy mươi',
        'tám mươi',
        'chín mươi',
    ];
    var h = [
        '',
        'một trăm',
        'hai trăm',
        'ba trăm',
        'bốn trăm',
        'năm trăm',
        'sáu trăm',
        'bảy trăm',
        'tám trăm',
        'chín trăm',
    ];

    if (ones === 0 && tens === 0) {
        document.getElementById('rsReadDays').innerHTML = h[hundred];
    } else {
        document.getElementById('rsReadDays').innerHTML =
            h[hundred] + ' ' + t[tens] + ' ' + o[ones];
    }
}

function tinhQuangDuong(_x, _y, xS, yS) {
    var x = document.getElementById(_x).value * 1;
    var y = document.getElementById(_y).value * 1;
    return Math.sqrt((xS - x) ** 2 + (yS - y) ** 2);
}

function find() {
    var xS = document.getElementById('xS').value * 1;
    var yS = document.getElementById('yS').value * 1;

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var sv1 = tinhQuangDuong('x1', 'y1', xS, yS);
    var sv2 = tinhQuangDuong('x2', 'y2', xS, yS);
    var sv3 = tinhQuangDuong('x3', 'y3', xS, yS);

    var max = sv1;
    if (sv2 > sv1) max = sv2;
    else max = sv3;

    var name;

    switch (max) {
        case sv1:
            name = name1;
            break;
        case sv2:
            name = name2;
            break;
        default:
            name = name3;
            break;
    }

    document.getElementById('rsFind').innerHTML = `Sinh viên xa trường nhất ${name}`;
}
