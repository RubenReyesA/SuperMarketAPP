# SuperMarketAPP
Basic Progressive-Web-App (PWA) of a small SuperMarket developed with Angular Framework.

Progressive-Web-App básica de un pequeño supermercado desarrollada con Angular Framework.

<h3> Usage - Funcionamiento </h3>

<p align="justify">
This application consists in the supermarket’s title, a brief list of products, a button to buy them, and a minor form to add a product to the list. The button to buy is enabled if there are some products on the list, otherwise the button is disabled. This is done using and “ngModel” directive.
When you add a product, the input texts are linked to two attributes using the same directive. Once someone clicks one button, an alert appears to say that you have bought all the products successfully or to say that the new product has been added to your shopping list if you have filled in all the input texts correctly, otherwise an error alert will appear.
Products list is done in a TypeScript array. Then, to render the list using HTML elements, the “ngFor” directive is also used. To implement the functionality of an empty text when there are no products on the list, the directive “ngIf” is used to show or hide the text.
Finally, the title color is specified using the “ngStyle” directive, as well as, the “Add a new product” one.
</p>
<p align="justify">
Esta aplicación consiste en el título del supermercado, una breve lista de productos, un botón para comprarlos y un formulario menor para añadir un producto a la lista. El botón para comprar está habilitado si hay algunos productos en la lista, de lo contrario el botón está deshabilitado. Esto se hace usando la directiva "ngModel".
Cuando se añade un producto, los textos de entrada están vinculados a dos atributos utilizando la misma directiva. Una vez que se hace clic en un botón, aparece una alerta para decir que ha comprado todos los productos con éxito o para decir que el nuevo producto se ha añadido a su lista de compras si ha rellenado todos los textos de entrada correctamente, de lo contrario aparecerá una alerta de error.
La lista de productos se hace en una matriz de TypeScript. Luego, para renderizar la lista utilizando elementos HTML, se utiliza también la directiva "ngFor". Para implementar la funcionalidad de un texto vacío cuando no hay productos en la lista, se utiliza la directiva "ngIf" para mostrar u ocultar el texto.
Finalmente, el color del título se especifica usando la directiva "ngStyle", así como la de "Add a new product".
</p>

<img width=100% src="https://raw.githubusercontent.com/RubenReyesA/SuperMarketAPP/master/demo1.png" alt="Visual Studio Code"></img>
<img width=35% src="https://raw.githubusercontent.com/RubenReyesA/SuperMarketAPP/master/demo2.png" alt="PWA"></img>

<h3> References - Referencias </h3>

<ul>
  <li> <a href="https://code.visualstudio.com/">Visual Studio Code</a> </li>
  <li> <a href="https://angular.io/">Angular</a> </li>
  <li> <a href="https://rubenreyesa.github.io/SuperMarketAPP-Live/">PWA: SuperMarketAPP - Release</a> </li>
</ul>
