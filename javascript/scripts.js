


 
//  e-commerce casa de fitness


        let productos = [
            { id: 2, nombre: 'Proteina', categoria: 'Suplementacion', precio: 9500, stock: 30, imgUrl:'https://th.bing.com/th/id/OIP.UXqYNxzIrDhALMbTAZNxLgHaHa?pid=ImgDet&rs=1'},
            { id: 5, nombre: 'Isolada', categoria: 'Suplementacion', precio: 8600, stock: 20, imgUrl:'https://th.bing.com/th/id/OIP.5mD_rae5ANT7bhPaQ6r4kgHaHE?pid=ImgDet&rs=1'},
            { id: 8, nombre: 'Gainer', categoria: 'Suplementacion', precio: 120000, stock: 10, imgUrl:'https://www.costco.com.mx/medias/sys_master/products/ha3/h52/11022077755422.jpg' },
            { id: 7, nombre: 'Banda Elastica', categoria: 'Accesorios', precio:2200 , stock: 10, imgUrl:'https://th.bing.com/th/id/OIP.tXbAEbhc6KZTERO2RjCaWAHaHa?pid=ImgDet&rs=1' },
            { id: 12, nombre: 'Soga salto', categoria: 'Accesorios', precio: 1200, stock: 112, imgUrl:'https://th.bing.com/th/id/OIP.ai0hcYp-0u7i2WFIb5DwPQHaHa?pid=ImgDet&rs=1' },
            { id: 12, nombre: 'Pesa Rusa', categoria: 'Accesorios', precio: 1200, stock: 112, imgUrl:'https://th.bing.com/th/id/R.6c9ea6e010619b29b1ff41ceca3ac73b?rik=naeE06OrPUbTCg&pid=ImgRaw&r=0' },
            { id: 9, nombre: 'Caminadora', categoria: 'Equipos', precio: 200000, stock: 20, imgUrl:'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/344464de-1c07-4832-8405-249e52c46f4b.0bfcf6f1e2150d52f61294dc9a2f0385.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
            {id: 12, nombre: 'bicicleta', categoria: 'Equipos', precio: 140000, stock: 12, imgUrl:'https://th.bing.com/th/id/OIP.7urQmzcOZZ7OY405Yj9HOAHaHa?pid=ImgDet&rs=1' },
            {id: 15, nombre: 'eliptico', categoria: 'Equipos', precio: 200000, stock: 20, imgUrl:'https://th.bing.com/th/id/R.6bac626060288627cfb7926531959d64?rik=tBh42dFKLLOaTw&pid=ImgRaw&r=0' }
            
            ]
            let productosJSON=JSON.stringify(productos)
            console.log(productos.JSON)
            localStorage.setItem('productos',productosJSON)
            let productosRecuperados=localStorage.getItem('productos')
            console.log(productosRecuperados)
         let carrito=[]
            let contenedorProductos= document.getElementById('contenedorProductos')
            let buscador =document.getElementById('buscador')
            let buscar =document.getElementById('buscar')
            buscar.onclick=filtrar
            renderizarProductos(productos)
            
            function filtrar(e) {
            console.log('E', e.target.id)
            let productosFiltrados=productos.filter(producto=>producto.nombre.toLowerCase().includes(buscador.value.toLowerCase())
            ||  producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
            console.log(productosFiltrados)
            renderizarProductos(productosFiltrados)
           
            }
            
            function renderizarProductos(arrayDeProductos){
            contenedorProductos.innerHTML=''
            arrayDeProductos.forEach(producto => {
            let tarjetaProducto=document.createElement('div')
            tarjetaProducto.classList.add('producto')
            tarjetaProducto.id=`tarjeta${producto.id}`
            
            tarjetaProducto.innerHTML=`
            <h3>${producto.nombre}</h3> 
            <p>$${producto.precio}</p>
            <img src=${producto.imgUrl}/>
            <button id=${producto.id} <i class="fa-solid fa-cart-shopping">Agregar al carrito</button> 

            `
            contenedorProductos.append(tarjetaProducto);
            let boton= document.getElementById(producto.id)
            boton.onclick=agregarAlCarrito
        })
    }

    function agregarAlCarrito(e) { 
      let productoBuscado=productos.find(producto=>producto.id==e.target.id)
      console.log(productoBuscado)
    }


