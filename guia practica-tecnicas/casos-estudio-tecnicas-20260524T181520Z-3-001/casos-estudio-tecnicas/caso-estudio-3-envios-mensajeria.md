# Caso de Estudio 3: Control de Envíos por Zona en Agencia de Mensajería

## Enunciado
Una agencia de mensajería clasifica sus envíos por 7 zonas diferentes de la ciudad. El coordinador desea comparar la cantidad de envíos por zona, conocer qué zonas son más activas y detectar zonas con niveles bajos de servicio. El análisis debe realizarse con un vector unidimensional y estructuras básicas.

## Requerimientos
- Usar dos vectores de 7 elementos:
  - un vector numérico para almacenar envíos por zona.
  - un vector de texto paralelo para almacenar los nombres de las zonas.
- No se permiten funciones de ordenamiento predefinidas.
- Solo se pueden usar ciclos `Para` y estructuras condicionales.
- Emplear variables auxiliares, acumuladores y contadores.

## Actividades solicitadas
1. Contar cuántas zonas superaron el promedio de envíos.
2. Contar cuántas zonas tuvieron servicio crítico (menos de 100 envíos).
3. Representar en porcentaje cada valor del vector respecto al total de envíos.

## Datos de entrada
Vector de 7 valores enteros que representan envíos por zona:
- [140, 140, 110, 125, 160, 190, 110]
Vector paralelo de 7 textos que representa las zonas de entrega:
- ["Norte", "Sur", "Este", "Oeste", "Centro", "Noroeste", "Sureste"]
Cada índice del vector numérico se corresponde con la misma posición en el vector de texto.

## Actividades para el estudiante
- Definir dos vectores paralelos y recorrerlos con un ciclo `Para`.
- Calcular la suma total y el promedio de envíos con un acumulador.
- Contar las zonas con envíos superiores al promedio.
- Contar las zonas con servicio crítico (menos de 100 envíos).
- Calcular el porcentaje que representa cada zona respecto al total de envíos.
  - Ejemplo: si la zona Noroeste tiene 190 sobre un total de 975, el porcentaje es (190 / 975) * 100 = 19.49%.

## Resultado esperado
- Zonas superiores al promedio: 3
- Zonas con servicio crítico: 0
- Porcentaje de cada zona respecto al total: [14.4%, 14.4%, 11.3%, 12.8%, 16.4%, 19.5%, 11.3%]

## Preguntas de reflexión
- ¿Qué ventajas ofrece analizar envíos por zona en lugar de por día?
- ¿Cómo usaría el equipo los resultados para mejorar la cobertura?
- ¿Por qué es útil detectar valores repetidos en los envíos por zona?
