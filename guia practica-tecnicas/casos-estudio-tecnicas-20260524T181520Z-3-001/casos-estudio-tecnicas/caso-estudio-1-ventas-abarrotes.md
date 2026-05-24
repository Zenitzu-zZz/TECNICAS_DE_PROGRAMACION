# Caso de Estudio 1: Control de Ventas por Categoría en Tienda de Abarrotes

## Enunciado
Una tienda de abarrotes registra la cantidad de artículos vendidos para 7 categorías de productos diferentes (arroz, azúcar, leche, aceite, pan, bebidas y galletas). El gerente desea analizar estas ventas para conocer la categoría más fuerte, la más débil y si hay categorías con ventas críticas. El ejercicio debe resolverse con un vector unidimensional y estructuras de control básicas.

## Requerimientos
- El sistema debe usar dos vectores de 7 elementos:
  - un vector numérico para almacenar las ventas por categoría.
  - un vector de texto paralelo para almacenar las descripciones de las categorías.
- No se permiten funciones de ordenamiento predefinidas.
- Solo se deben usar ciclos `Para` y estructuras condicionales.
- Emplear variables auxiliares, acumuladores y contadores.

## Actividades solicitadas
1. Contar cuántas categorías superaron el promedio de ventas.
2. Contar cuántas categorías tuvieron ventas críticas (menos de 100 artículos).
3. Representar en porcentaje cada valor del vector respecto al total de ventas.

## Datos de entrada
Vector de 7 valores enteros que representan artículos vendidos por categoría:
- [120, 95, 140, 170, 210, 130, 105]
Vector paralelo de 7 textos que representa la descripción de cada categoría:
- ["Arroz", "Azúcar", "Leche", "Aceite", "Pan", "Bebidas", "Galletas"]
Cada índice del vector numérico se corresponde con la misma posición en el vector de texto.

## Actividades para el estudiante
- Definir dos vectores paralelos y recorrerlos con un ciclo `Para`.
- Calcular el total y el promedio de ventas con un acumulador.
- Contar las categorías con ventas superiores al promedio.
- Contar las categorías con ventas críticas (menos de 100 artículos).
- Calcular el porcentaje que representa cada categoría respecto al total de ventas.
  - Ejemplo: si la categoría Bebidas tiene 210 sobre un total de 970, el porcentaje es (210 / 970) * 100 = 21.65%.

## Resultado esperado
- Categorías superiores al promedio: 4
- Categorías con ventas críticas: 1
- Porcentaje de cada categoría respecto al total: [12.4%, 9.8%, 14.4%, 17.5%, 21.7%, 13.4%, 10.8%]

## Preguntas de reflexión
- ¿Por qué es útil analizar ventas por categoría y no solo ventas totales?
- ¿Qué implica que una categoría tenga ventas críticas?
- ¿Cómo cambiaría la lógica si el vector representara tiendas en vez de categorías?
