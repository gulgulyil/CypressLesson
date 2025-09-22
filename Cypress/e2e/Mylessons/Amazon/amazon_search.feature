Feature: Amazon ürün arama

  Background:
    Given Amazon anasayfasına gidilir
    And Çerezler kabul edilir

  Scenario: Alcatel ürün arama
    When Arama kutusuna "alcatel 20196" yazılır ve enter’a basılır
    Then En az 4 sonuç listelenmeli