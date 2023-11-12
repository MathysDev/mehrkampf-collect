import { Injectable } from '@angular/core';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  ngOnInit(): void {
	
    
    this.checkNetworkStatus();
    }
    ngOnDestroy(): void {
      this.networkStatus$.unsubscribe();
      }
	networkStatus: boolean = false;
	networkStatus$: Subscription = Subscription.EMPTY;
  constructor() { }

  checkNetworkStatus() {
		this.networkStatus = navigator.onLine;
		this.networkStatus$ = merge(
		  of(null),
		  fromEvent(window, 'online'),
		  fromEvent(window, 'offline')
		)
		  .pipe(map(() => navigator.onLine))
		  .subscribe(status => {
			console.log('status', status);
			this.networkStatus = status;
      return this.networkStatus
		  });
      return this.networkStatus;}
}
