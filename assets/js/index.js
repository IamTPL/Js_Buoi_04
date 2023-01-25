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
                [a[j],a[j+1]] = [a[j+1],a[j]];
            }
        }
    }
    let result = a.join(', ');
    document.getElementById('rs-sort').innerHTML = result;
}
