var slideTop = document.getElementById('slide-top');
var slider = document.getElementsByClassName('slider')[0];
var start = 0;
var a = slider.clientWidth;
var b = parseInt(-a / 6);
var c = b
var move = 0;

function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(function (e) {
        return el.addEventListener(e, fn, false);
    });
}

function removeListenerMulti(el, s, fn) {
    s.split(' ').forEach(function (e) {
        return el.removeEventListener(e, fn, false);
    });
}

function swipeStart(e) {
    if (e.target.tagName === 'DIV') {
        start = e.clientX;
        if (e.type === 'touchstart') {
            start =  e.targetTouches[0].pageX
        }
        addListenerMulti(slideTop, 'mousemove touchmove ', swipeMove);
        addListenerMulti(slideTop, 'mouseup touchend', swipeEnd);
    }
}

function swipeMove(e) {
    move = e.clientX;
    if (e.type === 'touchmove') {
        move =  e.targetTouches[0].pageX
    }
    slider.style.transform = 'translateX(' + (c + move - start) + 'px)';
    if (c == (b * 5)) {
        slider.style.transform = 'translateX(' + b + 'px)'
        c = b;
    }
    if (c === 0) {
        slider.style.transform = 'translateX(' + b * 4 + 'px)'
        c = b * 4
    }

}

function swipeEnd() {
    if (c != (b * 5)) {
        if (move - start > 100) {
            c -= b;
            slider.style.transition = "all 1s";
            slider.style.transform = 'translateX(' + c + 'px)'
        } else if (Math.abs((move - start)) <= 100) {
            slider.style.transition = "all 1s";
            slider.style.transform = 'translateX(' + c + 'px)'
        } else if (move - start < 0) {

            c += b;
            slider.style.transition = "all 1s";
            slider.style.transform = 'translateX(' + c + 'px)'
        }

        setTimeout(function () {
            slider.style.removeProperty("transition");
        }, 900)
        removeListenerMulti(slideTop, 'mousemove touchmove', swipeMove);
        removeListenerMulti(slideTop, 'mouseup touchend', swipeEnd);
        start = 0;
        move = 0;
    }
}
addListenerMulti(slideTop, 'mousedown touchstart', swipeStart);
slider.style.transform = 'translateX(' + b + 'px)';


var pros = document.getElementsByClassName('pros')[0];
var pro = document.querySelectorAll('.pro')
var ideas = document.getElementsByClassName('ideas')[0];
var idea = document.querySelectorAll('.idea');

function kc(p, c, mg) {

    var wp = p.clientWidth;
    console.log(wp)
    var wc =0
    var x = 0;
    var m = 0;
    if(wp<=500){
        wc =(wp - (mg * 2)) / 3
        x = -wc * 3 - mg * 3;
    }
    else {
        wc =(wp - (mg * 3)) / 4
        x = -wc * 4 - mg * 4;
    }
    var y = x;
    var slidebot = document.getElementById('slide-bot')
    p.style.width = wc * c.length + mg * (c.length - 1) + 'px'
    for (var i = 0; i < c.length; i++) {
        c[i].style.width = wc + 'px'
        var v = c[i].children[0]
        v.style.height = wc + 'px'
        v.style.width = wc + 'px'
    }
    slidebot.onclick = function (e) {
        console.log(e.target.className)
        if (e.target.className === 'prev') {
            y += wc + mg
            p.style.transition = "all 0.5s";
            p.style.transform = 'translateX(' + y + 'px)'
        }
        if (e.target.className === 'next') {
            y -= wc + mg
            p.style.transition = "all 0.5s";
            p.style.transform = 'translateX(' + y + 'px)'
        }
        setTimeout(function () {
            p.style.removeProperty("transition");
        }, 250)
    }
    addListenerMulti(p, 'mousedown touchstart',function (e) {
        start = e.clientX;
        if (e.type === 'touchstart') {
            start =  e.targetTouches[0].pageX
        }
        if (e.target.tagName !== 'BUTTON') {
            addListenerMulti(p, 'mousemove touchmove', k);
            addListenerMulti(document.body, 'mouseup touchend', th);
        }
    } );
    function k(e) {
        m = e.clientX;
        if (e.type === 'touchmove') {
            m =  e.targetTouches[0].pageX
        }
        p.style.transform = 'translateX(' + (y + m - start) + 'px)';
    }

    function th() {
        if (Math.abs((m - start)) > wc / 2) {
            var g = parseInt(Math.abs((m - start)) / (wc + mg))
            if (m - start > 0) {
                y += g * wc + mg * g;
                p.style.transition = "all 0.5s";
                p.style.transform = 'translateX(' + y + 'px)'
            } else {
                y -= g * wc + mg * g;
                p.style.transition = "all 0.5s";
                p.style.transform = 'translateX(' + y + 'px)'
            }
        } else {
            p.style.transition = "all 0.5s";
            p.style.transform = 'translateX(' + y + 'px)'
        }
        setTimeout(function () {
            p.style.removeProperty("transition");
        }, 500)
        removeListenerMulti(p, 'mousemove touchmove', k);
        removeListenerMulti(document.body, 'mouseup touchend', th);
        start = 0;
        m = 0;
    }

    p.style.transform = 'translateX(' + x + 'px)';
}

kc(pros, pro, 20);
kc(ideas, idea, 0)







