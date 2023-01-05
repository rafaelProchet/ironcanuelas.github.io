//var cad = 
//`<H1>IRON</H1>
//<H3>Your Projects are possible</H3>
//<nav>
//
//        <img src="./Img/kb.png" alt="Logo" width="30">
//        Inicio
//    </a>
//    <a href="./wod.html">WOD</a>
//    <a href="./Sedes.html">Sedes</a>
//    <a href="./Staff.html">Staff</a>
//    <a href="./contacto.html">Contacto</a>
//</nav>` 

//document.getElementById("header").innerHTML=cad;
//
if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            productos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://localhost:5000/productos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(producto) {
                const url = 'http://localhost:5000/productos/' + producto;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}
