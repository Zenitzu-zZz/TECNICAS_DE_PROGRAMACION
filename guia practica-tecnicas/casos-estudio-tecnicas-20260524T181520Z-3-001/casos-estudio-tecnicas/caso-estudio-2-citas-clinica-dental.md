# Caso de Estudio 2: Monitoreo de Turnos y Citas por Especialidad en Clínica Dental

## Enunciado
Una clínica dental clasifica sus citas en 7 especialidades diferentes (ortodoncia, periodoncia, endodoncia, estética dental, implantes, urgencias y limpieza). El administrador quiere analizar cuántas citas corresponden a cada especialidad para equilibrar la carga de trabajo y detectar especialidades con atención baja.

## Requerimientos
- Usar dos vectores de 7 elementos:
  - un vector numérico para almacenar las citas por especialidad.
  - un vector de texto paralelo para almacenar los nombres de las especialidades.
- No se permiten funciones de ordenamiento predefinidas.
- Utilizar ciclos `Para` y estructuras condicionales.
- Usar variables auxiliares, acumuladores y contadores.

## Actividades solicitadas
1. Contar cuántas especialidades superaron el promedio de citas.
2. Contar cuántas especialidades tuvieron demanda crítica (menos de 100 citas).
3. Representar en porcentaje cada valor del vector respecto al total de citas.

## Datos de entrada
Vector de 7 valores enteros que representan citas por especialidad:
- [85, 102, 98, 180, 98, 175, 150]
Vector paralelo de 7 textos que representa las especialidades:
- ["Ortodoncia", "Periodoncia", "Endodoncia", "Estética", "Implantes", "Urgencias", "Limpieza"]
Cada índice del vector numérico se corresponde con la misma posición en el vector de texto.

## Actividades para el estudiante
- Definir dos vectores paralelos y recorrerlos con un ciclo `Para`.
- Calcular el total y el promedio de citas con un acumulador.
- Contar las especialidades con citas superiores al promedio.
- Contar las especialidades con demanda crítica (menos de 100 citas).
- Calcular el porcentaje que representa cada especialidad respecto al total de citas.
  - Ejemplo: si la especialidad Estética tiene 180 sobre un total de 888, el porcentaje es (180 / 888) * 100 = 20.27%.

## Resultado esperado
- Especialidades superiores al promedio: 3
- Especialidades con demanda crítica: 3
- Porcentaje de cada especialidad respecto al total: [9.6%, 11.5%, 11.0%, 20.3%, 11.0%, 19.7%, 16.9%]

## Preguntas de reflexión
- ¿Cómo ayuda analizar citas por especialidad en lugar de por día?
- ¿Qué acciones debe tomar la clínica si una especialidad es crítica?
- ¿Qué ventajas tiene usar un ciclo `Para` para recorrer el vector?
