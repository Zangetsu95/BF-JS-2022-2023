--
-- DRL (Data Retrieval Language)
-- Sous-requêtes
--

USE DBSlide


-- Récupérer les étudiants dont le résultat annuel est le résulat annuel de l'ensemble des étudiants
SELECT 
    student_id
    , last_name
    , first_name
FROM student
WHERE 
    year_result = MAX(year_result) -- ne fonctionne pas

SELECT 
    MAX(year_result)
FROM student

SELECT 
    student_id
    , last_name
    , first_name
FROM student
WHERE 
    year_result = (
        SELECT 
            MAX(year_result)
        FROM student
    )