import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { async } from '@angular/core/testing';

@Injectable()
export class AppService { 
    constructor(
        
    ) { }

    public async obtenerTareas() {
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
           // tareas.push(new Tarea(this.addTarera()));
            //console.log('service', tareas)
            return tareas;
        } catch (error) {
            return null;
        }
    } 
    addTarera:(tareas:Tarea) =>Promise<any>= async()=>{
        console.log('entro');
        try{
            var tarea: Tarea[] = []; 
            tarea.push(new Tarea(0, "hola",10))
            console.log('service', tarea)
            return tarea
        }catch(error){
            console.log(error)
            return null
        }
    }
}