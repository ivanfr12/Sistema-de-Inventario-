import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.component.html',
  
})
export class ProductoListaComponent {
  productos!: Producto[];

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  ngOnInit() {
    // Cargar los productos al inicializar el componente
    this.obtenerProductos();
  }
  // Método para obtener la lista de productos
    private obtenerProductos(): void {
      this.productoServicio.obtenerProductosLista().subscribe( 
        {
          // Se ejecuta cuando la llamada es exitosa
          next: (datos) => {
            this.productos = datos;
          },
          // Se ejecuta cuando hay un error
          error: (error) => {
            console.error('Error al obtener los productos:', error);
          },
        }
      )
    };
  // Método para editar un producto
    editarProducto(id: number){
      this.enrutador.navigate(['editar-producto', id]);
    }

  // Método para eliminar un producto
  eliminarProducto(id: number){
    if (confirm('¿Estás seguro que deseas eliminar?')) {
      this.productoServicio.eliminarProducto(id).subscribe({
      next: () => this.obtenerProductos(),
      error: (errores) => console.error(errores)
      });
    }
  }
}
