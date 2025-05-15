package gm.inventarios.controlador;


import gm.inventarios.excepcion.RecursosNoEncontradoExcepcion;
import gm.inventarios.modelo.Producto;
import gm.inventarios.servicio.ProductoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("inventario-app") //http://localhost:8080/inventario-app
@CrossOrigin(value = "http://localhost:4200") // Puerto por default de Angular
public class ProductoControlador {
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping("/productos") //http;//localhost:8080/inventario-app/productos
    public List<Producto> obtenerProductos() {
        List<Producto> productos = this.productoServicio.listarProductos();
        logger.info("Productos obtenidos:");
        productos.forEach(producto -> logger.info(producto.toString()));
        return productos;
    }

    @PostMapping("/productos")
    public Producto agregarProducto(@RequestBody Producto producto) {
        logger.info("Producto a agregar: " + producto);
        return this.productoServicio.guardarProducto(producto);
    }

    // Buscar producto por ID
    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(
                                    @PathVariable int id){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if (producto != null){
            return ResponseEntity.ok(producto);
        }else {
            throw new RecursosNoEncontradoExcepcion("No se encontro el id: " + id);
        }
    }

    // Actualizar producto
    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable int id,
                                                       @RequestBody Producto productoRecibido){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setPrecio(productoRecibido.getPrecio());
        producto.setExistencia(productoRecibido.getExistencia());
        // Guardamos la informacion
        this.productoServicio.guardarProducto(producto);
        return ResponseEntity.ok(producto);
    }

    // Metodo para eliminar un objeto de producto ya existente
    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarProducto(@PathVariable int id){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if (producto == null){
            throw new RecursosNoEncontradoExcepcion("No se encontro el id: " + id);
        }
        this.productoServicio.eliminarProductoPorId(producto.getIdProducto());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
