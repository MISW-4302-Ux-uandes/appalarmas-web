import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '../../../@fuse/services/media-watcher/media-watcher.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AjustesComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    panels: any[] = [];
    selectedPanel: string = 'ajustes-perfil';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
      private _changeDetectorRef: ChangeDetectorRef,
      private _fuseMediaWatcherService: FuseMediaWatcherService ) { }


    ngOnInit(): void
    {
        // Setup available panels
        this.panels = [
            {
                id         : 'ajustes-perfil',
                icon       : 'heroicons_outline:user-circle',
                title      : 'Mi Perfil',
                description: 'Actualice sus datos personales o inicie sesión'
            },
            {
                id         : 'ajustes-sonido',
                icon       : 'heroicons_outline:music-note',
                title      : 'Sonido y Vibración',
                description: 'Establezca el volumen y otras configuraciones'
            },
            {
                id         : 'ajustes-tema',
                icon       : 'heroicons_outline:eye',
                title      : 'Tema',
                description: 'Defina el contraste de la aplicación'
            },
            {
                id         : 'ajustes-calificacion',
                icon       : 'heroicons_outline:star',
                title      : 'Valore esta aplicación',
                description: 'Califícanos y déjanos tus comentarios para así mejorar'
            }
        ];

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }


    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getPanelInfo(id: string): any
    {
        return this.panels.find(panel => panel.id === id);
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    goToPanel(panel: string): void
    {
        this.selectedPanel = panel;
        if ( this.drawerMode === 'over' )
        {
            this.drawer.close();
        }
    }

}
