# Documentación de componentes UI · Punto Café

La documentación se ha realizado de forma textual en lugar de Storybook, ya que el guion actualizado de la práctica prioriza la evaluación y evita exigir Storybook como entrega obligatoria.

| Componente | Uso | Evidencia en React |
| ---------- | --- | ------------------ |
| Header | Cabecera con identidad y navegación principal. | `src/components/Header.jsx` |
| ProductCard | Tarjeta de producto con imagen, precio, etiquetas y acciones. | `src/components/ProductCard.jsx` |
| LocationCard | Tarjeta de local con imagen, dirección y horario. | `src/components/LocationCard.jsx` |
| Botón principal | Acciones críticas como ver productos, añadir al carrito o finalizar pedido. | `.btn` en `src/styles.css` |
| Formulario | Campos de pago, dirección o datos de usuario. | Pantalla `Checkout` en `src/App.jsx` |
| Resumen de carrito | Muestra productos, subtotal, envío y total. | Pantalla `Cart` en `src/App.jsx` |
| Filtros/buscador | Facilita la exploración de la tienda. | Pantalla `Shop` en `src/App.jsx` |

## Relación con el diseño atómico

- **Átomos:** botones, inputs, etiquetas, enlaces y badges.
- **Moléculas:** tarjetas de producto, tarjetas de local, filas de carrito y grupos de filtros.
- **Organismos:** cabecera, hero, tienda, resumen de compra y área de cuenta.
- **Pantallas:** inicio, tienda, detalle, carrito, pago, locales y cuenta.

Esta documentación permite identificar los elementos reutilizables de la interfaz aunque no se haya montado un Storybook completo.
