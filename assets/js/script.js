document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('showAside').addEventListener('click', function() {
        var aside = document.getElementById('asideBar');
        if (aside.style.width === '250px') {
            aside.style.width = '0';
        } else {
            aside.style.width = '250px';
        }
    });

    document.getElementById('lateralAside').addEventListener('click', function() {
        var lateralAside = document.getElementById('lateralSidebar');
        if (lateralAside.style.width === '320px') {
            lateralAside.style.width = '0';
        } else {
            lateralAside.style.width = '320px';
        }
    });

    document.getElementById('showEarmenta').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.submenu__profile').classList.toggle('active');
    });

    function showSelects() {
        var selectItems = document.querySelectorAll('.select-li');
        
        selectItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    selectItems.forEach(function(el) {
                        el.classList.remove('active');
                    });
                    item.classList.add('active');
                }
            });
        });
    }

    showSelects();

    function removeInlineStyles() {
        var screenWidth = window.innerWidth;
        var aside = document.getElementById('asideBar');
        var lateralAside = document.getElementById('lateralSidebar');

        if (screenWidth > 1080) {
            aside.style.removeProperty('width');
            lateralAside.style.removeProperty('width');
        }
    }

    removeInlineStyles();
    window.addEventListener('resize', removeInlineStyles);

    document.getElementById('closeSidebaresp').addEventListener('click', function() {
        var aside = document.getElementById('asideBar');
        aside.style.width = '0';
    });

    document.getElementById('closelateralSidebar').addEventListener('click', function() {
        var lateralAside = document.getElementById('lateralSidebar');
        lateralAside.style.width = '0';
    });

});
