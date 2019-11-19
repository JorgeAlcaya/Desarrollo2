$("#formulario1").validate({
        rules: {
            "txtNombre": {
                required: true,
                minlength: 4
            },
            "txtRut": {
                required: true,
                minlength: 9,
                maxlength: 10
            },
            "txtEmail": {
                required: true,
                email: true
            },
            "fechaNacimiento": {
                required: true
            },
            "telefono": {
                required: true,
                minlength: 9,
                maxlength: 9
            },
            "Region": {
                required: true
            },
            "Ciudad": {
                required: true
            },
            "Tipo_juego": {
                required: true
            }
        },
        messages: {
            "txtNombre": {
                required: "Te falto el nombre",
                minlength: "Error, te falto el nombre"
            },
            "txtRut": {
                meesage: "si su rut termina en k reemplaze por 0",
                required: "Falta el Run, si su rut termina en k reemplaze por 0",
                minlength: "el rut debe tener 12 caracteres",
                maxlength: "El rut debe contener a lo mas 12 digitos"
            },
            "txtEmail": {
                required: "Ingrese el email valido",
                email: "Falto el email"
            },
            "fechaNacimiento": {
                required: "Digite su Fecha de Nacimiento"
            },
            "telefono": {
                required: "Digite su Número de Contacto",
                minlength: "el telefono debe tener 9 digitos",
                maxlength: "Su numero debe contener 9 digitos"
            },
            "Region": {
                required: "Seleccione su Región"
            },
            "Ciudad": {
                required: "Seleccione su Ciudad"
            },
            "Tipo_juego": {
                required: "Seleccione un tipo de juego"
            }
        }
    }

)

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function limpia() {
    var val = document.getElementById("miInput").value;
    var tam = val.length;
    for (i = 0; i < tam; i++) {
        if (!isNaN(val[i]))
            document.getElementById("miInput").value = '';
    }
}

function SoloNumeros(evt) {
    if (window.event) {
        keynum = evt.keyCode;
    } else {
        keynum = evt.which;
    }
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6) {
        return true;
    } else {
        return false;
    }
}

function checkRut(rut) {

    var valor = rut.value.replace('.', '');

    valor = valor.replace('-', '');

    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    rut.value = cuerpo + '-' + dv

    if (cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false; }

    suma = 0;
    multiplo = 2;

    for (i = 1; i <= cuerpo.length; i++) {

        index = multiplo * valor.charAt(cuerpo.length - i);

        suma = suma + index;
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    dvEsperado = 11 - (suma % 11);

    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    if (dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }

    rut.setCustomValidity('');

}
/*function validaRut(campo) {
    if (campo.length == 0) { return false; }
    if (campo.length < 8) { return false; }

    campo = campo.replace('-', '')
    campo = campo.replace(/\./g, '')

    var suma = 0;
    var caracteres = "1234567890kK";
    var contador = 0;
    for (var i = 0; i < campo.length; i++) {
        u = campo.substring(i, i + 1);
        if (caracteres.indexOf(u) != -1)
            contador++;
    }
    if (contador == 0) { return false }

    var rut = campo.substring(0, campo.length - 1)
    var drut = campo.substring(campo.length - 1)
    var dvr = '0';
    var mul = 2;

    for (i = rut.length - 1; i >= 0; i--) {
        suma = suma + rut.charAt(i) * mul
        if (mul == 7) mul = 2
        else mul++
    }
    res = suma % 11
    if (res == 1) dvr = 'k'
    else if (res == 0) dvr = '0'
    else {
        dvi = 11 - res
        dvr = dvi + ""
    }
    if (dvr != drut.toLowerCase()) { return false; } else { return true; }
}

/*La siguiente instrucción extiende las capacidades de jquery.validate() para que
	admita el método RUT, por ejemplo:

$('form').validate({
        rules: { rut: { required: true, rut: true } },
        messages: { rut: { required: 'Escriba el rut', rut: 'Revise que esté bien escrito' } }
    })
    // Nota: el meesage:rut sobrescribe la definición del mensaje de más abajo

// comentar si jquery.Validate no se está usando
jQuery.validator.addMethod("rut", function(value, element) {
    return this.optional(element) || validaRut(value);
}, "Revise el RUT");

$(".validar_form").submit(function(e) {
    var select = $("select").val();

    if (select == 0) {
        $('.error').text("Seleccione una Casa de Apuestas");
        return false;
    } else {
        $('.errors').hide();
        alert('OK');
    }
});*/
var RegionesYcomunas = {

    "regiones": [{
            "NombreRegion": "Arica y Parinacota",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            "NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "NombreRegion": "Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            "NombreRegion": "Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            "NombreRegion": "Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            "NombreRegion": "Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            "NombreRegion": "Región de O'Higgins",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            "NombreRegion": "Región del Maule",
            "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            "NombreRegion": "Región del Biobío",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
        },
        {
            "NombreRegion": "Región de la Araucanía",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
        },
        {
            "NombreRegion": "Región de Los Ríos",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            "NombreRegion": "Región de Los Lagos",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            "NombreRegion": "Región de Aysen",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            "NombreRegion": "Región de Magallanes",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            "NombreRegion": "Región Metropolitana",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }
    ]
}


jQuery(document).ready(function() {

    var iRegion = 0;
    var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
    var htmlComunas = '<option value="sin-region">Seleccione ciudad</option><option value="sin-region">--</option>';

    jQuery.each(RegionesYcomunas.regiones, function() {
        htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
        iRegion++;
    });

    jQuery('#Region').html(htmlRegion);
    jQuery('#Ciudad').html(htmlComunas);

    jQuery('#Region').change(function() {
        var iRegiones = 0;
        var valorRegion = jQuery(this).val();
        var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
        jQuery.each(RegionesYcomunas.regiones, function() {
            if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
                var iComunas = 0;
                jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function() {
                    htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
                    iComunas++;
                });
            }
            iRegiones++;
        });
        jQuery('#Ciudad').html(htmlComuna);
    });
})