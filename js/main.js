var main_calendar = function (id, year, month) {

    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }

    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }

    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = D.getFullYear() + ' ' + month[D.getMonth()];
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();

};

var markup = function () {
    a = document.querySelectorAll('#calendar tbody td[class="today"]').length;

    if (a == 0) {
        this.className = 'today';
    } else {
        var b = document.querySelector('#calendar tbody td[class="today"]').innerHTML;

        for (var i = 0; i < active.length; i++) {
            if (active[i].innerHTML == b) {
                active[i].classList.remove('today');
            }
        }
        this.className = 'today';
    }
};


main_calendar("calendar", new Date().getFullYear(), new Date().getMonth());

var a = 0;
var active = document.querySelectorAll('#calendar tbody td');
for (var i = 0; i < active.length; i++) {
    active[i].onclick = markup;
}


document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    main_calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
    active = document.querySelectorAll('#calendar tbody td');

    for (var i = 0; i < active.length; i++) {
        active[i].onclick = markup;
    }
};


document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    main_calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
    active = document.querySelectorAll('#calendar tbody td');

    for (var i = 0; i < active.length; i++) {
        active[i].onclick = markup;
    }
};






