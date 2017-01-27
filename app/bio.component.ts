import { 
	Component,
	OnInit,
	HostBinding,
	HostListener,
	trigger,
	transition,
	animate,
    style,
    state 
} from '@angular/core';
@Component({
  templateUrl: 'dist/app/templates/bio.html',
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]
})
export class BioComponent {
	@HostBinding('@routeAnimation') get routeAnimation() {
    	return true;
  	}

	@HostBinding('style.display') get display() {
    	return 'block';
  	}

  	@HostBinding('style.position') get visibility() {
    	return 'absolute';
  	}
}