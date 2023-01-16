-- Ceci est un commentaire

-- Création d'une table en TSQL
DROP TABLE IF EXISTS Personne
CREATE TABLE Personne (

	numero_national CHAR(13)
	, nom VARCHAR(50)
	, prenom VARCHAR(50)
	, date_naissance DATETIME2
	, permis BIT -- booléen => false -> 0 et true -> 1
	, salaire SMALLMONEY
	, taille DECIMAL(3,2) -- Nombre à virgule avec 3 chiffres dont 2 après la virgule
	, nombre_enfants TINYINT -- 0 à 255

)


-- 
-- IDENTITY + DEFAULT
--

DROP TABLE IF EXISTS Personne
CREATE TABLE Personne (

    -- IDENTITY => Permet de mettre en place le système d'auto-incrémentation
    -- Par défaut (1,1) => commence à 1 et s'incrémente de 1
    id INT IDENTITY(1,1)
    , guid UNIQUEIDENTIFIER DEFAULT newid()
	, numero_national CHAR(13)
	, nom VARCHAR(50)
	, prenom VARCHAR(50)
	, date_naissance DATETIME2
	, permis BIT DEFAULT 0
	, salaire SMALLMONEY
	, taille DECIMAL(3,2)
	, nombre_enfants TINYINT

)

-- 
-- CONSTRAINT
-- 
USE bf_js
GO

DROP TABLE IF EXISTS Personne
CREATE TABLE Personne (

    id INT IDENTITY(1,1) PRIMARY KEY
    , guid UNIQUEIDENTIFIER DEFAULT newid()
	, numero_national CHAR(13) NOT NULL CONSTRAINT UK_numero_national UNIQUE
	, nom VARCHAR(50)
	, prenom VARCHAR(50)
	, date_naissance DATETIME2
	, permis BIT DEFAULT 0
	, salaire SMALLMONEY
	, taille DECIMAL(3,2)
	, nombre_enfants TINYINT
    , pere INT
    , mere INT

    , CONSTRAINT CK_date_naissance CHECK (YEAR(date_naissance) > 1900)
    , CONSTRAINT FK_pere FOREIGN KEY (pere)
        REFERENCES Personne (id)
    , CONSTRAINT FK_mere FOREIGN KEY (mere)
        REFERENCES Personne (id)

    -- Pour supprimer un parent, le mieux serait de mettre en place un 
	-- trigger pour changer la référence du pere et mere
	-- Impossible de faire de ON DELETE et ON UPDATE sur une récursive

)