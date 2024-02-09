# 04 - Testing

Principalmente hay dos tipos de pruebas:

- Pruebas unitarias: Bloque de código que verifica la precisión de un bloque más pequeño y aislado de código de aplicación, normalmente una función o un método. Enfocado en pequeñas funcionalidades.

- Pruebas de integración: Aquellas que lo que prueban es que toddos los elementos unitarios que componen el software, funcionen juntos correctamente probándolos en grupo.

## La regla de las tres A's o Patrón AAA
La regla de las tres A's o Patrón AAA sugiere dividir una prueba unitaria en tres secciones:

1. Arrange (Organizar / Inicializar): Inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.

2. Act (Actuar): Realiza la llamada al método a probar con los parámetros preparados para tal fin.

3. Assert (Confirmar / Comprobar): Comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.

Ejemplo: 

```
// Arrange
const person = new Person("Jorge", 18);
// Act
const personName = person.GetName();
// Assert
personName.Should().Equals("Jorge");
```