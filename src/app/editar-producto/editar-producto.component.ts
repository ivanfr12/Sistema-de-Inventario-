import { ProductoService } from './../producto.service';
import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent {
  producto: Producto = new Producto(); // Inicializa un objeto Producto vacío
  id!: number; // Variable para almacenar el ID del producto a editar

  private ProductoServicio = inject(ProductoService); // Inyección del servicio ProductoService
  private ruta = inject(ActivatedRoute); // Inyección del servicio ActivatedRoute para obtener parámetros de la ruta
  private enrutador: Router = inject(Router); // Inyección del servicio Router para la navegación

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id']; // Obtiene el ID del producto de los parámetros de la ruta
    this.ProductoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => this.producto = datos,
      error: (errores: any) => console.error(errores)
    });
  } 

  onSubmit() {
    // Editar producto
    this.guardarProducto();
  }

  guardarProducto() {
    this.ProductoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) => this.irProductoLista(),
      error: (errores) => console.error(errores)
    });
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']); // Navega a la lista de productos después de editar
  }

}
