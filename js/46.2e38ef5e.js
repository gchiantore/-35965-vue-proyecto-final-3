"use strict";(self["webpackChunkproyecto_final_tres"]=self["webpackChunkproyecto_final_tres"]||[]).push([[46],{7046:function(t,i,a){a.r(i),a.d(i,{default:function(){return _}});var r=function(){var t=this,i=t._self._c;return i("div",[null===t.getUsuActivo?i("div",[i("LogInComponent")],1):i("div",{staticClass:"contenedor"},[i("div",{staticClass:"container content"},[i("h1",{staticClass:"titulo"},[t._v("Proceso de compra")]),i("CheckOutComponent")],1)])])},e=[],o=a(408),s=a(3594),c=function(){var t=this,i=t._self._c;return i("div",[i("div",[1==t.carritovacio?i("div",[i("div",{staticClass:"check-out"},[i("div",{staticClass:"items-cart"},[i("table",{staticClass:"table"},[t._m(0),i("tbody",t._l(t.carritodetalle,(function(a,r){return i("tr",{key:r},[i("th",{attrs:{scope:"row"}},[t._v(t._s(a.prodid))]),i("td",[t._v(t._s(a.producto))]),i("td",{staticClass:"text-center"},[i("div",{staticClass:"cantidad"},[i("button",{staticClass:"restar",on:{click:function(i){return t.restarCantidad(r)}}},[t._v(" - ")]),t._v(" "+t._s(a.cantidad)+" "),i("button",{staticClass:"sumar",on:{click:function(i){return t.sumarCantidad(r)}}},[t._v(" + ")])])]),i("td",{staticClass:"text-end"},[t._v(t._s(parseInt(a.precio).toFixed(2).toLocaleString()))]),i("td",{staticClass:"text-end"},[t._v(t._s(parseInt(a.importe).toFixed(2).toLocaleString()))]),i("td",[i("i",{staticClass:"bi bi-trash3-fill",on:{click:function(i){return t.eliminarProducto(t.product.id)}}})])])})),0)])]),i("div",{staticClass:"total-cart"},[t._m(1),i("div",[i("table",{staticClass:"table"},[i("tbody",[i("tr",[i("td",[t._v("Sub Total :")]),i("td"),i("td",{staticClass:"text-end"},[t._v(" "+t._s(t.subtotalcarrito.toFixed(2).toLocaleString()))])]),i("tr",[i("td",[t._v("Propina 10% :")]),i("td"),i("td",{staticClass:"text-end"},[t._v(" "+t._s(t.propina.toFixed(2).toLocaleString()))])]),i("tr",[t._m(2),i("td"),i("td",[i("h6",{staticClass:"text-end"},[t._v(t._s(t.totalcarrito.toFixed(2).toLocaleString()))])])])])])]),i("div",[i("div",{staticClass:"compara col-md-12 text-center"},[i("button",{staticClass:"btn btn-success m-1",on:{click:function(i){return t.comprar()}}},[t._v("Compro !")])]),i("div",{staticClass:"col-md-12 text-center p-1"},[i("button",{staticClass:"btn btn-light m-1",on:{click:function(i){return t.seguirComprando()}}},[t._v("Me falto algo")]),i("button",{staticClass:"btn btn-danger m-1",on:{click:function(i){return t.cancelarCompra()}}},[t._v("Cancelo")])])])])])]):i("div",[i("div",{staticClass:"col-md-12 text-center p-3"},[i("h2",[t._v("No hay items en el carrito")]),i("button",{staticClass:"btn btn-success m-3",on:{click:function(i){return t.seguirComprando()}}},[t._v(" ir a comprar ...")])])])])])},l=[function(){var t=this,i=t._self._c;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("#")]),i("th",{attrs:{scope:"col"}},[t._v("Producto")]),i("th",{attrs:{scope:"col"}},[t._v("Cantidad")]),i("th",{attrs:{scope:"col"}},[t._v("Precio")]),i("th",{attrs:{scope:"col"}},[t._v("Importe")]),i("th",{attrs:{scope:"col"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"titulo"},[i("h4",[t._v("Resumen a Pagar")])])},function(){var t=this,i=t._self._c;return i("td",[i("h6",[t._v("Total a Pagar:")])])}],n=(a(7658),{name:"CheckOutComponent",data(){return{carritovacio:0,totalcarrito:0,subtotalcarrito:0,propina:0,compra:!1,carritodetalle:Object,usuario:Object,carrito:{fecha:"",userid:"",username:"",useremail:"",direnvio:"",items:Object,subtotal:0,propina:0,total:0,formadepago:1,pendiente:!0}}},created(){this.usuario=this.getUsuActivo(),this.actualizarListaStore()},beforeUpdate(){this.actualizarListaStore()},methods:{...(0,o.Se)("usersModule",["getUsuActivo"]),...(0,o.nv)("ordersModule",["postOrdenApi"]),...(0,o.Se)("carritoModule",["getCantidadCarrito"]),...(0,o.OI)("carritoModule",["inicializarItems","sacaritem"]),...(0,o.nv)("ordersModule",["getOrdenApi"]),actualizarListaStore(){if(this.subtotalcarrito=0,this.carritodetalle={},JSON.parse(localStorage.getItem("items"))){this.carritodetalle=JSON.parse(localStorage.getItem("items")),this.carritovacio=1,this.subtotalcarrito=0;for(let t=0;t<this.carritodetalle.length;t++)this.subtotalcarrito=this.subtotalcarrito+this.carritodetalle[t].importe}else this.carritovacio=0;this.propina=.1*this.subtotalcarrito,this.totalcarrito=this.subtotalcarrito+this.propina},eliminarProducto(t){this.$swal.fire({title:"Estas Seguro??",text:"Se va a eliminar el producto "+t+", del carrito",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si!, Borralo"}).then((i=>{i.isConfirmed&&(this.carritodetalle=this.carritodetalle.filter((i=>i.prodid!=t)),localStorage.setItem("items",JSON.stringify(this.carritodetalle)),this.actualizarListaStore(),this.sacaritem(),this.$swal.fire("El producto "+t+".","Ha sido eliminado","success"))}))},sumarCantidad(t){this.carritodetalle[t].cantidad++,this.carritodetalle[t].importe=this.carritodetalle[t].precio*this.carritodetalle[t].cantidad,localStorage.setItem("items",JSON.stringify(this.carritodetalle)),this.actualizarListaStore()},restarCantidad(t){1==this.carritodetalle[t].cantidad?this.eliminarProducto(this.carritodetalle[t].prodid):(this.carritodetalle[t].cantidad--,this.carritodetalle[t].importe=this.carritodetalle[t].precio*this.carritodetalle[t].cantidad,localStorage.setItem("items",JSON.stringify(this.carritodetalle)),this.actualizarListaStore())},comprar(){let t=0;for(let i=0;i<this.carritodetalle.length;i++)t+=this.carritodetalle[i].importe;this.carrito.fecha=new Date,this.carrito.userid=this.usuario.id,this.carrito.username=this.usuario.nombre,this.carrito.useremail=this.usuario.email,this.carrito.items=this.carritodetalle,this.carrito.total=this.totalcarrito,this.carrito.propina=this.propina,this.carrito.subtotal=this.subtotalcarrito,this.carrito.direnvio=this.usuario.direccion,this.carrito.pendiente=!0,this.carrito.activa=!0,this.postOrdenApi(this.carrito),this.$swal.fire({position:"top-end",icon:"success",title:`Gracias ${this.carrito.username}, tu pedido se esta procesando, te mantedremos informado en tu casilla de correo ${this.carrito.useremail}`,showConfirmButton:!1,timer:5e3}),localStorage.removeItem("items"),this.inicializarItems(0),this.$router.push("/productos")},seguirComprando(){this.$router.push("/productos")},cancelarCompra(){this.$swal.fire({position:"top-end",icon:"success",title:`${this.carrito.username}, tu compra ha sido cancelada`,showConfirmButton:!1,timer:5e3}),localStorage.removeItem("items"),this.inicializarItems(0),this.$router.push("/")}}}),d=n,u=a(1001),h=(0,u.Z)(d,c,l,!1,null,"d7047c92",null),m=h.exports,p={name:"CarritoView",components:{LogInComponent:s.Z,CheckOutComponent:m},computed:{...(0,o.Se)("usersModule",["getUsuActivo"])}},v=p,C=(0,u.Z)(v,r,e,!1,null,"64e9f39c",null),_=C.exports}}]);
//# sourceMappingURL=46.2e38ef5e.js.map