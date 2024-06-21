# Que es HTML?
    - Hypertex Markup Languaje
    - Lenguaje de Marcado de Hypertexto
    - Lenguaje Interpretado
    - Sirve Para Armar La Estructura de Una Web

## Lenguaje de marcado
    - Toman texto y lo presentan de una forma diferente
    - Necesitan un programa que interprete que es lo que quieren decir y mostrarlo

## Etiquetas En HTML
    - `<etiqueta>Contenido</etiqueta>`
        * Las etiquetas pueden tener atributos, por ejemplo:
            `<a href="www.google.com">Enlace a Google</a>`
        * El atributo `href` indica la dirección hacia donde se dirigirá el enlace al hacer clic sobre él.
    
## Elementos Principales De HTML
    1. `<!DOCTYPE html>`: Declaración del tipo de documento (HTML5)
    2. `<html></html>`: Contenedor principal del Documento en HTML
    3. `<head></head>`: Contiene la información generada por el navegador (metadatos)
    4. `<title></title>`: Define el título de la página web
    5. `<body></body>`: Contiene todo el contenido visible de la página
    6. `<div></div>`: Agrupa elementos para dar formato o organizar el contenido
    7. `<span></span>`: Agrupa varios elementos para darles estilo o organización
    8. `<h1>, <h2>, ..., <h6>`: Se utiliza para definir títulos (nivel de importancia)
    9. `<p>`: Define un párrafo
    10. `<ul>, <ol>, <li>`: Son para listados no ordenados (`<ul>`) e ordered lists (`<ol>`). Los items de lista se def
    10. `<ul>, <ol>, <li>`: Son listados no ordenados (`<ul>`), ordendos (`<ol>`), y los items de estas listas respectivamente (`<li>`)

# Que es CSS?
    - Cascading Style Sheets
    - Hojas de Estilo en Cascada
    - Permite agregar estilos al contenido HTML
    - Es separado del contenido HTML

    ## Sintaxis de CSS
    css = "Cascading Style Sheets"

    css = lenguaje + estructura

    css se escribe entre comillas dobles "" o simples ''

    css se aplica a las etiquetas HTML

## Selectores de CSS
    - Todas las etiquetas tienen un selector asociado
    - Los selectores son como los nombres de las personas
      css = {selector} {propiedad}:{valor};

## Propiedades y Valores de CSS
    - Las propiedades son lo que se va a cambiar
    - Los valores son las cosas que vamos a hacer con esa propiedad

## Tipos de Selectores en CSS
    - Etiqueta (`<tagname>`)
    - Clase (.classname)
    - Id (#idname)
    - Atributo ([attributename="value"])
    - PseudoClases (:hover :active :focus ...)

## Como se Veria?
    .CUBO {
        Color: Azul;
        Tamaño:16px;
        Fuente: Arial;
        Margen:20px;
        Borde:Negro;
    }

`.CUBO = Selector` \
`{} = Bloque de declaraciones`
