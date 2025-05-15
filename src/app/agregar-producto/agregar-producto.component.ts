import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html'
})
export class AgregarProductoComponent {
  producto: Producto = new Producto(); // Inicializa un nuevo objeto Producto

  private productoServicio = inject(ProductoService); // Inyección del servicio ProductoService
  private enrutador = inject(Router); // Inyección del servicio Router

  onSubmit() {
    this.guardarProducto(); // Llama al método para guardar el producto
}

  guardarProducto(){
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datos) => {
        this.irListaProductos(); // Redirige a la lista de productos después de guardar
      },
      error: (error) => {console.log(error); // Maneja errores en la solicitud
      }
    })
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']); // Redirige a la ruta de la lista de productos
  }
}
