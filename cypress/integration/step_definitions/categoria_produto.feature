Feature: Busca de Produto por categoria
  Scenario: Usuário realiza a busca por categoria
    Given que o usuário está na página inicial do site Advantage Online Shopping
    When o usuário digita "laptop" no campo de busca e clica na lupa
    Then o sistema apresenta os produtos com esse nome disponivel
    