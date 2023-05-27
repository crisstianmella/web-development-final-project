const blog_post = [
    {
        title: "1- ¿Qué es la Programación Orientada a Objetos?",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "18 de septiembre de 2021",
        content:
            "Empecemos con una definición formal, aunque no te preocupes si no lo entiendes todo, porque luego vamos a ir detallando más cada punto. La programación Orientada a objetos se define como un paradigma de la programación, una manera de programar específica, donde se organiza el código en unidades denominadas clases, de las cuales se crean objetos que se relacionan entre sí para conseguir los objetivos de las aplicaciones. Podemos entender la programación Orientada a objetos (POO) como una forma especial de programar, más cercana a como expresaríamos las cosas en la vida real que otros tipos de programación, que permite diseñar mejor las aplicaciones, llegando a mayores cotas de complejidad, sin que el código se vuelva inmanejable. Al programar orientado a objetos tenemos que aprender a pensar cómo resolver los problemas de una manera distinta a como se realizaba anteriormente, en la programación estructurada. Ahora tendremos que escribir nuestros programas en términos de clases, objetos, propiedades, métodos y otras cosas que veremos rápidamente para aclarar conceptos y dar una pequeña base que permita soltarnos un poco con los conceptos de este tipo de programación.",
    },
    {
        title: "2- Motivación de la programación orientada a objetos",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "19 de septiembre de 2021",
        content:
            "Durante años, los programadores se han dedicado a construir aplicaciones muy parecidas que resolvían una y otra vez los mismos problemas. Para conseguir que los esfuerzos de los programadores puedan ser reutilizados se creó la posibilidad de utilizar módulos. El primer módulo existente fue la función, que somos capaces de escribir una vez e invocar cualquier número de veces. Sin embargo, la función se centra mucho en aportar una funcionalidad dada, pero no tiene tanto interés con los datos. Es cierto que la función puede recibir datos como parámetros y puede devolverlos, pero los trata de una estructura muy volatil, centrada en las operaciones. Simplemente hace su trabajo, procesando los parámetros recibidos y devuelve una respuesta. En las aplicaciones en realidad los datos están muy ligados a la funcionalidad. Por ejemplo podemos imaginar un punto que se mueve por la pantalla. El punto tiene unas coordenadas y podemos trasladarlo de una posición a otra, sumando o restando valores a sus coordenadas. Antes de la programación orientada a objetos ocurría que cada coordenada del punto tenía que guardarse en una variable diferente (dos variables para ser exacto: x, y) y las funciones de traslación estaban almacenadas por otra parte. Esta situación no facilitaba la organización del código ni tampoco su reutilización. Con la Programación Orientada a Objetos se buscaba resolver estas situaciones, creando unas mejores condiciones para poder desarrollar aplicaciones cada vez más complejas, sin que el código se volviera un caos. Además, se pretendía dar una de pautas para realizar las cosas de manera que otras personas puedan utilizarlas y adelantar su trabajo, lo que deriva en mayores facilidades para la reutilización del código. La POO no es difícil, pero es una manera especial de pensar, a veces subjetiva de quien la programa, de manera que la forma de hacer las cosas puede ser diferente según el programador. Aunque podamos hacer los programas de formas distintas, no todas ellas son correctas, lo difícil no es programar orientado a objetos sino programar bien. Y programar bien es fundamental porque así podemos aprovechar de todas las ventajas de la POO.",
    },
    {
        title: "3- Cómo se piensa en objetos",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "20 de septiembre de 2021",
        content:
            "Pensar en términos de objetos es muy parecido a cómo lo haríamos en la vida real. Por ejemplo vamos a pensar en un coche para tratar de modelizarlo en un esquema de POO. Diríamos que el coche es el elemento principal que tiene una serie de características, como podrían ser el color, el modelo o la marca. Además tiene una serie de funcionalidades asociadas, como pueden ser ponerse en marcha, parar o aparcar. Por tanto, pensar en objetos requiere analizar qué elementos vas a manejar en tus programas, tratando de identificar sus características y funcionalidades. Una vez tengamos un ecosistema de objetos, éstos colaborarán entre sí para resolver los objetivos de las aplicaciones. Quizás al principio puede ser un poco complejo dar ese salto, para pensar en objetos, pero con el tiempo será una tarea que realizarás automáticamente.",
    },
    {
        title: "4- Manejando el concepto de clase",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "21 de septiembre de 2021",
        content:
            'En un esquema de programación orientada a objetos "el coche" sería lo que se conoce como "Clase". La clase contiene la definición de las características de un modelo (el coche), como el color o la marca, junto con la implantación de sus funcionalidades, como arrancar o parar. Las características definidas en la clase las llamamos propiedades y las funcionalidades asociadas las llamamos métodos. Para entender este concepto tan importante dentro de la Programación Orientada a Objetos, podemos pensar que la clase es como un libro, que describe como son todos los objetos de un mismo tipo. La clase coche describe cómo son todos los coches del mundo, es decir, qué propiedades tienen y qué funcionalidades deben poder realizar y, por supuesto, cómo se realizan.',
    },
    {
        title: "5- Manejando el concepto de objetos",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "22 de septiembre de 2021",
        content:
            'A partir de una clase podemos crear cualquier número de objetos de esa clase. Por ejemplo, a partir de la clase "el coche" podemos crear un coche rojo que es de la marca Ford y modelo Fiesta, otro verde que es de la marca Seat y modelo Ibiza. Por tanto, los objetos son ejemplares de una clase, o elementos concretos creados a partir de una clase. Puedes entender a la clase como el molde y a los objetos como concreciones creadas a partir del molde de clase.',
    },
    {
        title: "6- Otros ejemplos concretos de clases y objetos",
        author: "Miguel Angel Alvarez",
        source: "https://desarrolloweb.com/articulos/499.php",
        date: "23 de septiembre de 2021",
        content:
            'Por poner otro ejemplo vamos a ver cómo modelizaríamos en un esquema POO una fracción, es decir, esa estructura matemática que tiene un numerador y un denominador que divide al numerador, por ejemplo 3/2. La fracción será la clase y tendrá dos propiedades, el numerador y el denominador. Luego podría tener varios métodos como simplificarse, sumarse con otra fracción o número, restarse con otra fracción, etc. A partir de la definición de una fracción (la clase) podremos construir un número indeterminado de objetos de tipo fracción. Por ejemplo podemos tener el objeto fracción 2/5 o 3/9, 4/3, etc. Todos esos son objetos de la clase fracción de números enteros. Nuestra clase fracción la podríamos utilizar en cualquier número de programas, por ejemplo en un programa de matemáticas hará uso de la clase fracción y construirá muchos objetos de tipo fracción para hacer cuentas diversas. Pero podrías usar esa misma clase fracción en un programa de contabilidad o facturación. Otro ejemplo podría ser la clase coordenada, que tiene dos propiedades, el valor x e y. Podrías tener otra clase "coordenada 3D" que necesitaría 3 propiedades x, y y z. Las coordenadas se podrían sumar a otra coordenada, mostrarse en un gráfico, encontrar el camino más corto entre dos coordenadas, etc. Estos son simplemente ejemplos simples de clases, que también nos sirven para destacar la reutilización que podemos conseguir con los objetos. La clase coordenada la podremos usar en infinidad de programas de gráficos, mapas, etc. Por su parte, la clase coche la podrás utilizar en un programa de gestión de un taller de coches o en un programa de gestión de un parking. A partir de clase coche y crearán diversos objetos de tipo coche para hacer las operativas tanto en la aplicación del taller como en la del parking.',
    },
];

export { blog_post };
