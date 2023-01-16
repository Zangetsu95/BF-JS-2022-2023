--
-- DRL (Data Retrieval Language)
--

USE DBSlide

-- Les jointures

-- 
-- [INNER] JOIN
--

SELECT
    *
FROM student
    JOIN section
        ON student.section_id = section.section_id

SELECT
    student_id
    , last_name
    , first_name
    , year_result
    , section.section_id
    , section_name
FROM student
    JOIN section
        ON student.section_id = section.section_id

SELECT
    student_id
    , last_name
    , first_name
    , year_result
    , section.section_id
    , section_name
FROM student
    JOIN section
        ON student.section_id = section.section_id

SELECT
    student_id
    , last_name
    , first_name
    , year_result
    , s.section_id
    , section_name
FROM student st
    JOIN section s
        ON st.section_id = s.section_id

SELECT
    student_id
    , last_name
    , first_name
    , year_result
    , s.section_id
    , section_name
FROM student st
    JOIN section s
        ON st.section_id = s.section_id
WHERE
    last_name LIKE 'r%' AND st.section_id = 1120

--
-- LEFT [OUTER] JOIN
--

SELECT
    s.section_id
    , section_name
    , p.professor_id
    , p.professor_name
    , p.professor_surname
FROM section s
    LEFT JOIN professor p
        ON s.section_id = p.section_id

--
-- RIGHT [OUTER] JOIN
--

-- Récupération de tous les étudiants, même ceux qui ne sont pas délégués d'une section
SELECT
    s.section_id
    , section_name
    , st.last_name
    , st.first_name
    , st.birth_date
    
FROM section s
    RIGHT JOIN student st
        ON st.student_id = s.delegate_id

--
-- FULL [OUTER] JOIN
-- 

-- Récupération de toutes les sections même celles sans délégué et de tous les étudiants même ceux sans être délégués

SELECT
    s.section_id
    , section_name
    , st.last_name
    , st.first_name
    , st.birth_date
    
FROM section s
    FULL JOIN student st
        ON st.student_id = s.delegate_id


-- 
-- SELF JOIN
--

DROP TABLE IF EXISTS Personne
CREATE TABLE Personne (
    id INT IDENTITY(1,1) PRIMARY KEY
	, nom VARCHAR(50)
	, prenom VARCHAR(50)

    , pere INT
    , mere INT

    , CONSTRAINT FK_pere FOREIGN KEY (pere)
        REFERENCES Personne (id)
    , CONSTRAINT FK_mere FOREIGN KEY (mere)
        REFERENCES Personne (id)
)

INSERT INTO Personne (nom, prenom, pere, mere)
VALUES
    ('Hainaut', 'Julia', NULL, NULL)
    , ('Geerts', 'Jean-Pierre', NULL, NULL)
    , ('Descamps', 'Béatrice', NULL, 1)
    , ('Geerts', 'Quentin', 2, 3)

SELECT * FROM Personne


SELECT 
    p1.nom
    , p1.prenom
    , maman.nom [Maman]
    , maman.prenom [Maman]
    , papa.nom [Papa]
    , papa.prenom [Papa]
    -- , mami.nom [mami]
    -- , mami.prenom [mami]

FROM Personne p1
    LEFT JOIN Personne papa
        ON p1.pere = papa.id
    LEFT JOIN Personne maman
        ON p1.mere = maman.id
    LEFT JOIN Personne mami
        ON maman.mere = mami.id