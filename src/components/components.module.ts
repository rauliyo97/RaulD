import { NgModule } from '@angular/core';
import { EquiposFutbolComponent } from './equipos-futbol/equipos-futbol';
import { InstagramComponent } from './instagram/instagram';
@NgModule({
	declarations: [EquiposFutbolComponent,
    InstagramComponent],
	imports: [],
	exports: [EquiposFutbolComponent,
    InstagramComponent]
})
export class ComponentsModule {}
