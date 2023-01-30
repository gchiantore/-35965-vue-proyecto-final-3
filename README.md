# proyecto-final

## Funcionalidades de la app

El proyecto consta de dos tipos de aplicaciones, una para el administrador y otra para el cliente, el administrador encontrará las siguientes foncionalidades
```
Dashboard del Administrador 
```
En esta seccion que se abre ni bien sel usuario administrador se loguea con exito, muestra informacion relevante a cerca de los usuarios, las ordenes y los productos activos.

```
Altas, Bajas y Modificaciones de Productos 
```
En esta seccion de la app, el Administrador podra cargar un nuevo producto, modificar uno existene o eliminar cualquier producto de la base de datos.

```
Informacion de Usuarios
```
Aqui el Administrador va a poder ver un listado de todos los usiarios registrados 

```
Informacion de Ordenes 
```
En esta seccion, el administrador va a poder ver las ordenes pendientes de envio, a las cuales va a poder marcarlas como enviadas o cancelarlas, también va a poder visualizar todas las ordenes que han sido enviadas.

En la parte de clientes, el usuario encontrará lo siguiente

```
Dashboard de Cliente
```
Es la parte que se muestra a inicio de la app despues del logo-in correcto, el usuario podrá ver informacion referia a su historial de compras, el monto por el que lleva comprado, las ordenes realizadas y la cantidad de productos. 

```
Productos a comprar 
```
Aqui esta el listado completo de productos a comprar, pudiendo agregar dichos productos al carrito de compras o bien obtener mas detalles sobre el mismo.

```
Carrito de Compras 
```
Aqui esta el detalle de los productos incluidos en el carrito, aqui se pueden eliminar algun producto, modificar las cantidades, cancelar la operacion y vaciar el carrito, seguir comprando, o bien formalizar la compra. 

## Usuatios y contraseñas

```
Administrador :
usuario: admin@example.net
contraseña: 1234
```

```
Cliente :
usuario: cleinte@example.net
contraseña: 1234
```
# Instalacion para desarrolladores 

Esta App esta hecha en Vue, se han usado ademas 
* Bootstrap para los estilos
* Axios Para el manejo de asincronias 
* Vuex para el store
* Sweet Alert 2 para los mensajes y alertas
* Vue Router para el manejo de rutas 

* Se utilizo Mockapi.io para simular el Back end.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
