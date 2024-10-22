Feature: Busca de Produto

  Scenario: Usuário realiza a busca por um produto com o nome completo
    Given que o usuário está na página inicial do site Advantage Online Shopping
    When o usuário clica na lupa e digita "HP Pavilion 15t Touch Laptop" no campo de busca
    Then o sistema deve exibir uma lista de produtos relacionados ao termo "HP Pavilion 15t Touch Laptop"
    And a lista deve conter produtos com o nome exato "HP Pavilion 15t Touch Laptop" no título ou descrição


    