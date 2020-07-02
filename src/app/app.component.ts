import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';
import { NgModule } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public tareas: Tarea[];
	public modelTarea: Tarea
	public tarea: Tarea[] = []
	constructor(
		public service: AppService,
	) {
		this.modelTarea = new Tarea(0, "", 0);
	}

	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}
	async addTareas() {
		this.tareas.push(new Tarea(this.modelTarea.id, this.modelTarea.titulo, this.modelTarea.minutos))
		console.log('hola', this.modelTarea);
		console.log(this.tareas)
		//this.tareas = await this.service.obtenerTareas()
	}
	async delteTarea(id) {
		this.tareas = this.tareas.filter(item => item.id !== id)
		//this.tareas.splice(item,1)
		console.log(this.tareas)

	}

	async orderbyMinits() {

		this.tareas.sort(function (a, b) {
			var aSize = a.minutos;
			var bSize = b.minutos;
			var aLow = a.minutos;
			var bLow = b.minutos;
			console.log(aLow + " | " + bLow);

			if (aSize == bSize) {
				return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
			}
			else {
				return (aSize < bSize) ? -1 : 1;
			}
		});
	}



}