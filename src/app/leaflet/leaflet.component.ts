// import 'style-loader!leaflet/dist/leaflet.css';

// import * as L from 'leaflet';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';

import { BrowserModuleLoaderService } from '../browserModuleLoader.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-leaflet',
    styleUrls: ['./leaflet.component.scss'],
    template: `
      <div  *ngIf="isBrowser">
        <div leaflet [leafletOptions]="options"></div>
        </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeafletComponent {
    isBrowser: boolean;
    options = {};

    constructor(private cdr: ChangeDetectorRef,
        @Inject(PLATFORM_ID) platformId: Object,
        private browserModuleLoaderService: BrowserModuleLoaderService
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        console.log('this.isBrowser ', this.isBrowser);
        if (this.isBrowser) {
            const L = this.browserModuleLoaderService.getL();
            this.options = {
                layers: [
                    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                ],
                zoom: 5,
                center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
            };
        }
        this.cdr.detach();
    }

}
