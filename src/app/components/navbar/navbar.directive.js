export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
            creationDate: '=',
            activeMenu:'='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class NavbarController {
    constructor($location,$log, moment) {
        'ngInject';

        // "this.creation" is avaible by directive option "bindToController: true"
        this.relativeDate = moment(this.creationDate).fromNow();
        this.activeLi=this.activeMenu;
        this.li=['','',''];
        $log.log(this.li);
        this.li[this.activeMenu]="active";
        $log.log(this.li);
    }

}
