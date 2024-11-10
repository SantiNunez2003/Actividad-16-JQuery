$(document).ready(function incializarEventos(){
    
    //Act. 2
    let p =  $("#parrafo1");
    p.click(presionParrafo)

    function presionParrafo() {
        alert("Se presionó el párrafo");
    }

    //Act. 3
    function colorearFondo(){
        let x = $(this)
        x.css("background-color", "blue");
        x.css("color", "white");
    };

    let f1 = $("#fila1");
    f1.click(colorearFondo);

    let f2 = $("#fila2");
    f2.click(colorearFondo);

    //Act. 4
    let li = $("li");
    li.click(ocultar);

    function ocultar() {
        let x = $(this);
        x.hide();
    }

    //Act. 5
    let t1 = $("#tabla1 tr");
    t1.click(colorearFondo)

    //Act. 6
    let noticia = $(".noticia")

    let btn = $("#boton1");
    btn.click(tamañoPequeño)
    btn = $("#boton2");
    btn.click(tamañoMediano)
    btn = $("#boton3");
    btn.click(tamañoGrande)
    
    function tamañoPequeño(){
        noticia.css("font-size", "10px");
    }
    function tamañoMediano(){
        noticia.css("font-size", "15px");
    }
    function tamañoGrande(){
        noticia.css("font-size", "20px");
    }

    //Act. 7
    let t3 = $("#tabla3 td");
    let tbtn = $("#tbtn");
    tbtn.click(function cambiarcadena(){ t3.text("-")});

    //Act. 8
    let urlbtn = $("#urlbtn1");
    urlbtn.click(hipervinculoGoogle)
    urlbtn = $("#urlbtn2");
    urlbtn.click(hipervinculoYahoo)
    urlbtn = $("#urlbtn3");
    urlbtn.click(hipervinculoMsn)

    
    function hipervinculoGoogle() {
        let hipervinculo = $("a")

        hipervinculo.attr("href", "http://www.google.com");
        hipervinculo.text("Google");
    }
    
    function hipervinculoYahoo() {
        let hipervinculo = $("a")

        hipervinculo.attr("href", "http://www.yahoo.com");
        hipervinculo.text("Yahoo");
    }
    
    function hipervinculoMsn() {
        let hipervinculo = $("a")

        hipervinculo.attr("href", "http://www.msn.com");
        hipervinculo.text("Msn");
    }

    //Act. 10
    btn = $("#clasebtn1")
    btn.click(function asociarClase(){
        let th = $("#tabla4 th");
        let td = $("#tabla4 td");

        th.addClass("titulo");
        td.addClass("cuerpo")
    })
    btn = $("#clasebtn2")
    btn.click(function desAsociarClase(){
        let th = $("#tabla4 th");
        let td = $("#tabla4 td");

        th.removeClass("titulo");
        td.removeClass("cuerpo")
    })

    //Act. 11
    let stg = $("strong")
    stg.click(ocultar)

    //Act. 12
    function limpiarFondo(){
        let x = $(this)
        x.css("background-color", "white");
        x.css("color", "black");
    };

    //Act. 13
    let td = $("#tabla6 td");
    td.hover(colorearFondo , limpiarFondo);

    //Act. 14
    let recuadro = $("#recuadro");
    recuadro.mousemove(function moverMouse(event){
        let coo = $("#coordenada");
        coo.text("(" + event.clientX + "," + event.clientY + ")")
    })
    recuadro.mouseout(function salioRecuadro(){
        let coo = $("#coordenada");
        coo.text("salio del recuadro")
    })

    //Act. 15
    let btnColor = $("#btncolor1");
    btnColor.mousedown(colorearFondo)
    btnColor.mouseup(limpiarFondo)

    btnColor = $("#btncolor2");
    btnColor.mousedown(colorearFondo)
    btnColor.mouseup(limpiarFondo)

    //Act. 16
    let recuadro2 = $("#recuadro2")
    let estado = "grande";
    recuadro2.dblclick(function dobleClic() {
        if (estado == "grande") {
          $(this).css("width", "250px");
          $(this).css("height", "250px");
          estado = "chico";
        }
        else {
          $(this).css("width", "800px");
          $(this).css("height", "70px");
          estado = "grande";
        }
      })

    //Act. 17
    function colorTexto(){
        $(this).css("color", "#f00");
    }

    let texto = $("#texto1");
    texto.focus(colorTexto)
    texto = $("#texto2");
    texto.focus(colorTexto)

    //Act. 18
    function pierdeFoco() {
        let x = $(this);
        let cadena = x.val();
        if (cadena.length == 0)
          alert("No ingresó datos");
      }

    texto = $("#texto3");
    texto.blur(pierdeFoco)

    //Act. 20
    function ocultarRecuadroHide() {
        let desc1 = $("#descripcion1");
        desc1.hide("slow", mostrarRecuadroShow);
      }
      
    function mostrarRecuadroShow() {
        let desc2 = $("#descripcion2");
        desc2.show("slow");
    }

    let desc = $("#descripcion1")
    desc.click(ocultarRecuadroHide)

    //Act. 21
    function ocultarRecuadroFadeout() {
        let desc = $("#descripcion3");
        desc.fadeOut("slow", mostrarRecuadroFadein);
      }
      
    function mostrarRecuadroFadein() {
        let desc = $("#descripcion4");
        desc.fadeIn("slow");
    }

    desc = $("#descripcion3")
    desc.click(ocultarRecuadroFadeout)

    //Act. 22
    function mostrarRecuadro() {
        let desc = $("#descripcion6");
        desc.show("slow");
    }

    function reducirOpacidadRecuadro() {
        desc = $("#descripcion5");
        desc.fadeTo("slow",0.20,mostrarRecuadro);
    }
    
    desc = $("#descripcion5")
    desc.click(reducirOpacidadRecuadro)

    //Act. 24
    let url = $("a");
    url.each(resaltarParrafos);
    
    function resaltarParrafos() {
    let x = $(this);
    let url=x.attr("href");
    url = url.toLowerCase();
    if (url.indexOf(".ar")!=-1)
    {
        x.css("background-color","#ff0");
    }}

});