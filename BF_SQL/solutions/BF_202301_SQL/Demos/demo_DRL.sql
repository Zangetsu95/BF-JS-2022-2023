--
-- DRL (Data Retrieval Language)
--

USE DBSlide
GO

-- SELECT ... FROM ...

SELECT 
    first_name
    , last_name
    , year_result
    , student_id
FROM student

SELECT
    * -- Permet de récupérer toutes les colonnes dans l'ordre définit dans la base de données
FROM student

-- Alias => AS facultatif
SELECT
    student_id AS "Identifiant"
    , first_name AS 'Prénom'
    , last_name AS [Nom de famille]
    , birth_date [Date de naissance]
    , login AS Login
    , section_id "ID Section"
    , year_result 'Résultat annuel'
    , course_id CoursID
FROM student

-- Opérations arithmétiques
SELECT
    student_id
    , year_result + 2 "Incrémenté de 2"
    , year_result * 5 "Sur 100"
    , year_result
FROM student

-- Concaténation

SELECT
    last_name + ' ' + first_name [Nom complet]
    , last_name + student_id [quelque chose] -- Ne fonctionne pas
FROM student

-- Version fonctionnelle
SELECT
    last_name + ' ' + first_name [Nom complet]
    , last_name + CONVERT(VARCHAR, student_id)
    , last_name + CAST(student_id AS VARCHAR)
FROM student

-- DISTINCT = Retirer les valeurs doublons de la ligne affichées par rapport aux colonnes sélectionnées
SELECT DISTINCT
    first_name
    , year_result
FROM student

SELECT DISTINCT
    year_result
    , course_id
FROM student

-- SANS FROM

SELECT 
    'Coucou'
    , 'les'
    , 'FS'
    , 'Javascript !'

SELECT 
    GETDATE()

--
-- SELECT ... FROM ... WHERE ... ORDER BY ...
--



-- WHERE

-- Opérateurs de comparaison
SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
FROM student
WHERE year_result >= 16

-- BETWEEN ... AND ... (compris)
SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE YEAR(birth_date) BETWEEN 1962 AND 1967

-- IN (au minimum 2 valeurs)

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , section_id
FROM student
WHERE section_id IN (1110, 1320)

-- LIKE
-- % : masque entre 0 à N caractères
-- _ : masque 1 seul caractère

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE first_name LIKE 'robert'

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE last_name LIKE 'niro'

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE last_name LIKE '%niro'

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE last_name LIKE '%e%'

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE last_name LIKE '%oo_'

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE first_name LIKE '__e%'

-- NOT (BETWEEN | LIKE | IN)

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE YEAR(birth_date) NOT BETWEEN 1962 AND 1967

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , section_id
FROM student
WHERE section_id NOT IN (1110, 1320)

SELECT
    student_id
    , last_name
    , first_name
    -- , year_result
    , YEAR(birth_date)
FROM student
WHERE last_name NOT LIKE '%e%'

-- 
-- ORDER BY ...
--

-- ASC  : ASCENDING => Croissant (Par défaut)
-- DESC : DESCENDING => Décroissant

SELECT
    student_id
    , last_name
    , first_name
    , year_result
FROM student
ORDER BY 
    year_result ASC
    , last_name DESC

SELECT
    student_id
    , last_name
    , first_name
    , year_result
FROM student
WHERE year_result BETWEEN 5 AND 15
ORDER BY 
    year_result ASC
    , last_name DESC