# DIU - Practica 4, entregables

- Usuarios:
  | Usuarios | Sexo/Edad | Ocupación | Exp.TIC | Personalidad | Plataforma | Caso |
  | -------- | --------- | --------- | ------- | ------------- | ---------- | ---- |
  | Laura | M / 21 | Estudiante universitaria | Alta | Visual y curiosa | Web | A |
  | Antonio | H / 52 | Administrativo | Media | Práctico e impaciente | Móvil | A |
  | Inés | M / 22 | Estudiante | Media | Organizada y observadora | Móvil | A |
  | Álvaro | H / 32 | Técnico freelance | Alta | Directo y orientado a tareas | Web | A |
  | Carmen | M / 45 | Trabajadora autónoma | Baja | Cauta | Móvil | A |
  | Marta | M / 34 | Profesora | Media | Reflexiva y organizada | Web | B |
  | Diego | H / 19 | Estudiante de grado | Alta | Impulsivo | Móvil | B |
  | Paula | M / 27 | Diseñadora | Alta | Visual y crítica | Web | B |
  | Sergio | H / 41 | Comercial | Media | Práctico | Móvil | B |
  | Nuria | M / 56 | Empleada pública | Baja | Cautelosa | Web | B |

- Diseño de las pruebas: [md](./2-Pruebas/readme.md)

- Realización del Cuestionario SUS para usuarios y casos A y B: [pdf](./3-Cuestionario/Cuestionario_SUS_PuntoCafe_Umai.pdf)

- Tabla A/B Testing con resultados para A y B:
  | Prueba | Métrica | Caso A: Punto Café | Caso B: Umai! |
  | ------ | ------- | ------------------ | ------------- |
  | Prueba 1 | Localizar producto/carta | 18.0 s / 100% éxito / 28.6% misclick | 15.5 s / 100% éxito / 37.5% misclick |
  | Prueba 2 | Consultar información/sección | 10.8 s / 100% éxito / 61.1% misclick | 14.2 s / 100% éxito / 48.0% misclick |
  | Prueba 3 | Iniciar compra/reserva | 6.1 s / 100% éxito / 11.8% misclick | 6.1 s / 100% éxito / 16.7% misclick |

- Informes Maze:
  - Caso A - Punto Café: [pdf](./4-ABTesting/Maze_Report_PuntoCafe.pdf)
  - Caso B - Umai!: [pdf](./4-ABTesting/Maze_Report_Umai.pdf)

- Eye Tracking para A y B: [pdf](./5-Eyetracking/EyeTracking.pdf)

- Usability Report del Caso B, con toda la información recabada del caso B: [pdf](./6-UsabilityReport/P4_UsabReport_Umai_donebyDIU2_LecheConCafe.pdf)

- Conclusiones

Al realizar esta práctica hemos comprobado la utilidad de combinar distintas técnicas de evaluación. El A/B Testing con Maze ha permitido comparar ambos casos con métricas concretas, mientras que el cuestionario SUS nos ha dado una valoración general de la percepción de los usuarios. Los resultados muestran que ambos casos permiten completar las tareas, aunque **Punto Café** resulta ligeramente más directo en navegación y clics erróneos. La evaluación del Caso B también nos ha ayudado a detectar la importancia de equilibrar estética visual y claridad funcional.
