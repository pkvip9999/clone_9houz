
var iconMenu = document.getElementsByClassName('icon-menu')[0];
var l = true;
iconMenu.onclick = function () {
    if (l) {
        document.body.style.transition = 'all 0.3s';
        document.body.style.transform = ' translateX(70%)';
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
    iconSearch.parentElement.onclick = function () {
        search.classList.add('search-click')
        document.body.style.overflowY = 'hidden'
        mc.style.display = 'block'
    }
    mc.onclick = function () {
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
var dropdownArray = Array.prototype.slice.call(dropdown,0);
var tabslidebar =document.querySelectorAll('.tab-slidebar')
var tabList = Array.prototype.slice.call(tabslidebar,0)
function drop(a){
    a.forEach(function(el){
        var button = el.querySelector('span'),
            menu = el.querySelector('.list')
        // arrow = button.querySelector('i.icon-arrow');
        console.log(button)
        button.onclick = function(event) {
            if(!menu.hasClass('show')) {
                menu.classList.add('show');
                menu.classList.remove('hide');
                // arrow.classList.add('open');
                // arrow.classList.remove('close');
                event.preventDefault();
            }
            else {
                menu.classList.remove('show');
                menu.classList.add('hide');
                // arrow.classList.remove('open');
                // arrow.classList.add('close');
                event.preventDefault();
            }
        };
    })
}
drop(dropdownArray)
drop(tabList)
Element.prototype.hasClass = function(className) {
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


