--
-- DRL (Data Retrieval Language)
-- Fonctions
--

-- CONVERT (TYPE_CIBLE, VALEUR_A_CONVERTIR, FORMAT_DATE)
-- GETDATE()

SELECT
    CONVERT(VARCHAR, 1) + ' Ma valeur'

SELECT
    GETDATE()
    , CONVERT(VARCHAR, GETDATE())
    , CONVERT(VARCHAR, GETDATE(), 106)
    , CONVERT(VARCHAR, GETDATE(), 108)

-- DATEPART(partie_a_extraire, date)

SELECT 
    DATEPART(dd, GETDATE()) [Jour]
    , DATEPART(mm, GETDATE()) [Mois]
    , DATEPART(YYYY, GETDATE()) [Année]

SELECT 
    DAY(GETDATE()) [Jour]
    , MONTH(GETDATE()) [Mois]
    , YEAR(GETDATE()) [Année]

-- CHARINDEX (valeur_recherchée, chaine_de_caracteres)
-- L'indice commence à 1

SELECT
    CHARINDEX('JS', 'Hello les fullstack JS!') -- 21

-- LEN (chaine_de_caracteres)

SELECT
    LEN('Hello les fullstack JS!')