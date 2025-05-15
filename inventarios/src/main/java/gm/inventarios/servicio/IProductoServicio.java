package gm.inventarios.servicio;

import gm.inventarios.modelo.Producto;

import java.util.List;

public interface IProductoServicio {
    // Metodos
    public List<Producto> listarProductos();

    public Producto buscarProductoPorId(Integer idProducto);

    Producto guardarProducto(Producto producto);

    public void eliminarProductoPorId(Integer idProducto);
}
