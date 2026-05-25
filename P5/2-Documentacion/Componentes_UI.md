# Documentación de componentes UI · Punto Café

La documentación de componentes se ha realizado de forma textual, tomando como referencia la versión React de **Punto Café**. El objetivo es identificar los componentes reutilizables de la interfaz y explicar su función dentro del sistema.

## Componentes principales

| Componente | Uso en la interfaz |
| ---------- | ------------------ |
| `Header` | Cabecera superior con navegación, identidad visual y acceso de usuario. |
| `GoldButton` | Botón principal para acciones importantes como ver productos, añadir al carrito o finalizar pedido. |
| `ProductCard` | Tarjeta de producto con imagen, nombre, tipo de café, precio y acceso al detalle. |
| `LocalCard` | Tarjeta de local con imagen, nombre y horario. |
| `CartItem` | Elemento del carrito con producto, cantidad y controles de modificación. |
| `InputBox` | Campo de formulario reutilizado en cuenta, dirección y pago. |
| `PaymentCard` | Tarjeta visual para métodos de pago. |
| `OrderCard` | Tarjeta de pedido dentro del área de usuario. |
| `FilterOption` | Opción seleccionable dentro de la pantalla de filtros. |
| `FloatingNav` | Navegación inferior para cambiar entre secciones principales. |

## Relación con diseño atómico

| Nivel | Elementos |
| ----- | --------- |
| Átomos | Botones, iconos, textos, inputs y enlaces. |
| Moléculas | Tarjetas de producto, campos agrupados, opciones de filtro y elementos de carrito. |
| Organismos | Cabecera, tienda, carrito, bloque de cuenta y navegación inferior. |
| Pantallas | Inicio, tienda, detalle de producto, carrito, pago, cuenta, pedidos y direcciones. |
