var filterFoldable =  document.querySelectorAll('.filter-drawer-content-foldable')

var filterFoldableArray = Array.prototype.slice.call(filterFoldable,0);

filterFoldableArray.forEach(function (el) {
    var items = el.querySelectorAll('.filter-drawer-item'),
        item = el.querySelector('.filter-drawer-item'),
        toggle=el.querySelector('.filter-drawer-toggle'),
        drop = el.querySelector('.filter-drawer-drop')
    toggle.onclick = function(){
        var text = toggle.innerText,
            heightItem = item.offsetHeight,
            heightDrop = Math.ceil(items.length / 2) * heightItem
        if(text === 'Xem thêm'){
            drop.classList.remove('filter-drawer-closed')
            drop.classList.add('filter-drawer-open')
            drop.style.height=heightDrop+'px'
            toggle.innerHTML = 'Thu gọn'
        }
        if (text === 'Thu gọn'){
            drop.classList.remove('filter-drawer-open')
            drop.classList.add('filter-drawer-closed')
            drop.style.removeProperty('height')
            toggle.innerHTML = 'Xem thêm'
        }
    }

})
var items = document.querySelectorAll('.filter-drawer-item'),
    itemsArray = Array.prototype.slice.call(items,0)
itemsArray.forEach(function (el) {
    var itemInner = el.querySelector('.filter-drawer-item-inner')
    itemInner.onclick = function () {
        if (itemInner.classList.contains('filter-drawer-item-checked')){
            itemInner.classList.remove('filter-drawer-item-checked')
        }
        else{
            itemInner.classList.add('filter-drawer-item-checked')
        }
    }
})
var filter = document.getElementById('filter')
filter.style.height = window.innerHeight + 'px';
window.onresize = function () {
    filter.style.height = window.innerHeight + 'px';
}
var iconFilter = document.getElementsByClassName('icon-filter')[0]
iconFilter.onclick = function () {
    document.body.style.transition = 'all 0.3s';
    document.body.style.transform = ' translateX(-80%)';
    document.body.style.overflowY = ' hidden';
    mc.style.display = 'block'
}
