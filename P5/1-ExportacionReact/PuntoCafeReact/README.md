# Punto Café React

## Ejecutar sin `npm install` (rápido)

El proyecto ya incluye una versión compilada en `dist/`.

```bash
cd dist
python3 -m http.server 5173
```

Abre:

```text
http://localhost:5173
```

## Modo desarrollo

```bash
npm install --no-audit --no-fund
npm run dev
```

Si venías de un ZIP anterior, borra antes `node_modules` y reinstala:

```bash
rm -rf node_modules
npm install --no-audit --no-fund
npm run dev
```
