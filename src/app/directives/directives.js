//LayoutToggle
layoutToggleDirective.$inject = ['$interval'];
export function layoutToggleDirective($interval) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){

            var bodyClass = localStorage.getItem('body-class');

            if ((element.hasClass('layout-toggler') || element.hasClass('sidebar-close')) && angular.element('body').hasClass('sidebar-off-canvas')) {
                angular.element('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)

            } else if (element.hasClass('layout-toggler') && (angular.element('body').hasClass('sidebar-nav') || bodyClass == 'sidebar-nav')) {
                angular.element('body').toggleClass('sidebar-nav');
                localStorage.setItem('body-class', 'sidebar-nav');
                if (bodyClass == 'sidebar-nav') {
                    localStorage.clear();
                }

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }

            if (element.hasClass('aside-toggle')) {
                angular.element('body').toggleClass('aside-menu-open');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }
        });
    }
}

// Toggle submenu 
export function navigationDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if(element.hasClass('nav-dropdown-toggle') && angular.element('body').hasClass('sidebar-nav') && angular.element('body').width() > 782) {
            element.on('click', function(){
                if(!angular.element('body').hasClass('compact-nav')) {
                    element.parent().toggleClass('open').find('.open').removeClass('open');
                }
            });
        } else if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() < 783) {
            element.on('click', function(){
                element.parent().toggleClass('open').find('.open').removeClass('open');
            });
        }
    }
}