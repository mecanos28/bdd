Feature: Abrir Google en el Navegador Chrome

  Scenario: El usuario abre Google Chrome y navega a Google
    Given el navegador Chrome está abierto
    When el usuario navega a "https://www.google.com"
    Then debería mostrar la página de inicio de "Google"

  Scenario: El usuario busca "Cenfotec" en Google
    Given el navegador Chrome está abierto
    When el usuario navega a "https://www.google.com"
    And el usuario busca "Cenfotec"
    Then debería mostrar resultados para "Cenfotec"
