Feature: : Navegación en la página de Universidad CENFOTEC

  Scenario: : Verificar el título de la página
    Given el navegador Chrome está abierto
    When el usuario navega a "https://ucenfotec.ac.cr/"
    Then debería mostrar la página de inicio de "Inicio - Universidad CENFOTEC"

  Scenario: : Verificar la barra de opciones
    Given el navegador Chrome está abierto
    When el usuario navega a "https://ucenfotec.ac.cr/"
    Then la barra de opciones debería contener los siguientes elementos
      | Oferta académica    |
      | Escuelas            |
      | Admisión y registro |
      | Bienestar estudiantil |
      | Investigación y extensión |

  Scenario: Verificar la existencia de la Maestría Profesional en Ingeniería del Software con énfasis en Inteligencia Artificial Aplicada
    Given el navegador Chrome está abierto
    When el usuario navega a "https://ucenfotec.ac.cr/carreras/"
    Then debería existir la maestría en "Ingeniería del Software con énfasis en Inteligencia Artificial Aplicada"


  Scenario: Verificar la existencia de la Maestría Profesional en Bases de Datos
    Given el navegador Chrome está abierto
    When el usuario navega a "https://ucenfotec.ac.cr/carreras/"
    Then debería existir la maestría en "Bases de Datos con Analítica"
