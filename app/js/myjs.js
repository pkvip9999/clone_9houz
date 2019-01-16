var iconMenu = document.getElementsByClassName('icon-menu')[0];
var l = true;
iconMenu.onclick = function () {
    if (l) {
        document.body.style.transition = 'all 0.3s';
        document.body.style.transform = ' translateX(80%)';
        document.body.style.overflowY = ' hidden';
        mc.style.display = 'block'
        l = false
    } else {
        document.body.style.removeProperty("transform");
        document.body.style.removeProperty("overflow-y");
        mc.style.removeProperty('display')
        setTimeout(function () {
            document.body.style.removeProperty("transition");
        }, 400)
        l = true
    }
}

var menu = document.getElementsByClassName('menu')[0];
var iconSearch = document.getElementsByClassName('icon-search')[0];
var mc = document.getElementsByClassName('mc')[0];
var search = document.getElementsByClassName('search')[0];
if (window.innerWidth < 768) {
    menu.style.height = window.innerHeight + 'px';
    // filterFooter.style.height = window.innerHeight + 'px';
    iconSearch.parentElement.onclick = function () {
        search.classList.add('search-click')
        document.body.style.overflowY = 'hidden'
        mc.style.display = 'block'
    }
    mc.onclick = function () {
        var filter = document.getElementById('filter')
        filter.style.removeProperty('right')
        search.classList.remove('search-click');
        document.body.style.removeProperty('overflow-y')
        document.body.style.removeProperty("transform");
        setTimeout(function () {
            document.body.style.removeProperty("transition");
        }, 400)
        l = true
        mc.style.removeProperty('display')
    }
}
window.onresize = function () {
    if (window.innerWidth < 768) {
        menu.style.height = window.innerHeight + 'px'

    } else {
        menu.style.removeProperty('height')
        document.body.style.removeProperty("transform");
        document.body.style.removeProperty("overflow-y");
        setTimeout(function () {
            document.body.style.removeProperty("transition");
        }, 400)
        l = true
    }
}
var dropdown = document.querySelectorAll('.drop-menu');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
var mcm = document.getElementsByClassName('mcm')[0]

function drop(a) {
    a.forEach(function (el) {
        var button = el.querySelector('span'),
            menu = el.querySelector('.list')
        // arrow = button.querySelector('i.icon-arrow');
        button.onclick = function (event) {
            if (!menu.hasClass('show')) {
                menu.classList.add('show');
                menu.classList.remove('hide');
                // arrow.classList.add('open');
                // arrow.classList.remove('close');
                event.preventDefault();
            } else {
                menu.classList.remove('show');
                menu.classList.add('hide');
                // arrow.classList.remove('open');
                // arrow.classList.add('close');
                event.preventDefault();
            }
        };

        el.onmousemove = function () {
            mcm.style.display = 'block'
        }
        el.onmouseout = function () {
            mcm.style.removeProperty('display')
        }
    })
}

drop(dropdownArray)

Element.prototype.hasClass = function (className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

var mainMenu = document.getElementsByClassName('main-menu')[0]
var t = 0

function dmenuChild(n) {
    var elm = document.getElementById('drop-menu-child-' + n);
    elm.style.transform = 'translateX(0)'
    setTimeout(function () {
        mainMenu.classList.add('display')
        if (t) {
            var g = document.getElementById('drop-menu-child-' + t);
            g.classList.add('display')
        }
        t = n
    }, 300)
}

function back(n) {
    var elm = document.getElementById('drop-menu-child-' + t);
    if (n) {
        var g = document.getElementById('drop-menu-child-' + n)
        g.classList.remove('display')
    } else {
        mainMenu.classList.remove('display')
    }

    elm.style.transform = 'translateX(-100%)'
    t = n
}


var loginbox = document.querySelector('#login-box')
var form = loginbox.querySelector('.form')
var selected = loginbox.querySelector('.modal-border')
var user = document.getElementsByClassName('icon-user')[0]
if (window.innerWidth < 768) {
    user.innerHTML = ''
}
user.onclick = function (e) {
    e.preventDefault();
    selected = loginbox.querySelector('.modal-border')
    loginbox.style.display = 'block'
    document.body.style.overflow = 'hidden'
    if (selected.innerText === 'Sign in') {
        heightForm('.sign-in-form')
    } else if (selected.innerText === 'Sign up') {
        heightForm('.sign-up-form')
    }

}

function heightForm(a) {
    var sign = form.querySelector(a)
    form.style.height = sign.offsetHeight + 'px'
}
var modalContent = loginbox.querySelector('.modal-authen-content')
loginbox.onclick = function (e) {
    if (e.target.id === 'login-box' || e.target.classList.contains('modal-authen')) {
        document.body.style.removeProperty('overflow')
        form.style.height='0'
        setTimeout(function (){
            loginbox.style.removeProperty('display')
            form.style.removeProperty('height')
        },300)

    }
}
var modalTabItem = loginbox.querySelectorAll('.modal-tabs-wrapper-item');
var tabItemArray = Array.prototype.slice.call(modalTabItem, 0);
tabItemArray.forEach(function (el) {
    el.onclick = function (e) {

        var selected = loginbox.querySelector('.modal-border'),
            signin = loginbox.querySelector('.sign-in-form'),
            signup = loginbox.querySelector('.sign-up-form')
        selected.classList.remove('modal-border');
        el.classList.add('modal-border')
        if (el.innerText === 'Sign in') {
            signin.style.removeProperty('display')
            heightForm('.sign-in-form')
            signin.style.left = '0'
            signup.style.right = '100%'
            signup.style.display = 'none'
        } else if (el.innerText === 'Sign up') {
            signup.style.removeProperty('display')
            heightForm('.sign-up-form')
            signup.style.right = '0'
            signin.style.left = '100%'
            signin.style.display = 'none'
        }
    }
})
var modalInput = form.querySelectorAll('.modal-input-container');

var modalInputArray = Array.prototype.slice.call(modalInput, 0);
modalInputArray.forEach(function (el) {
    var input = el.querySelector('input')
    input.value = ''
    input.onfocus = function (e) {
        el.classList.add('modal-input-focus')
    }
    input.onblur = function () {
        if (input.value === '') {   
            el.classList.remove('modal-input-focus')
        }
    }
})
