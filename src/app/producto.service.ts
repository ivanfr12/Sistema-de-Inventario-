import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8080/inventario-app/productos'; // URL base de la API
  private clienteHttp = inject(HttpClient); // Inyección del servicio HttpClient

  // Método para obtener todos los productos
  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase); // Realiza una solicitud GET a la API
  }

  // Metodo para agregar un nuevo producto
  agregarProducto(producto: Producto) : Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto); // Realiza una solicitud POST a la API para agregar un nuevo producto
  }

  // Método para obtener un producto por su ID
  obtenerProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`); // Realiza una solicitud GET a la API para obtener un producto por su ID
  }

  editarProducto(id:number, producto: Producto){
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto); // Realiza una solicitud PUT a la API para editar un producto existente
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`); // Realiza una solicitud DELETE a la API para eliminar un producto por su ID
  }
}
