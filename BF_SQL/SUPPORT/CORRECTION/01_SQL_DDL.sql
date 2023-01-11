-- 
-- SQL Déclaratif 
-- BF - Javascript - 05/01/2023
-- 


-- MODULE I :
-- DDL (Data Definition Language - Langage de définition de données)


-- Exercice 1.1
-- La syntaxe des ordres suivants est-elle correcte ? Si non, pourquoi ? 
-- Attention, les tables sont peut-être liées… ! 
-- N’hésitez pas à tester les requêtes directement ! 

USE bf_js
GO

-- OK
CREATE TABLE T_office ( 
    office_id INTEGER
    , office_address VARCHAR(30)
    , CONSTRAINT PK_office PRIMARY KEY (office_id)
)

-- KO
CREATE TABLE T_course ( 
    crs_code CHAR(8) PRIMARY KEY -- NOT NULL non nécessaire car PK = UK + NN
    , crs_name VARCHAR(30) CONSTRAINT UK_crs UNIQUE (crs_name) -- Underscore manquant
)

CREATE TABLE T_professor (
    prf_id INTEGER PRIMARY KEY -- NOT NULL non nécessaire car PK = UK + NN
    , prf_name VARCHAR(30)
    , prf_course CHAR(8) 
        CONSTRAINT FK_course -- PK => FK
        REFERENCES T_course (crs_code) 
        ON DELETE SET NULL
    , office_id INT REFERENCES T_office -- CHAR(2) => INT
    , CONSTRAINT prf_name UNIQUE (prf_name)
)

-- Exercice 1.2
-- A partir des données présentées dans le tableau suivant, proposer le code de la table T_MAINTENANCE_MTN.
-- Cette table devra contenir les 4 contraintes suivantes : contrainte de clé primaire, 
-- contrainte d’unicité, contrainte check et contrainte NOT NULL. Ces contraintes porteront 
-- sur 4 colonnes ou combinaisons de colonnes distinctes. 

CREATE TABLE T_MAINTENANCE_MTN (

    jour CHAR(3) NOT NULL
    , machine VARCHAR(20) NOT NULL
    , numero SMALLINT
    , vitesse INT
    , temperature INT
    , heure TIME NOT NULL
    , evenement VARCHAR(100) NOT NULL

    , CONSTRAINT PK_T_MAINTENANCE_MTN PRIMARY KEY (numero)
    , CONSTRAINT UK_MACHINE_HEURE UNIQUE (machine, heure)
    , CONSTRAINT CK_jour CHECK (jour IN ('Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'))

)

-- Exercice 1.3
-- Créer une table pour y stocker les produits à vendre, avec les rubriques 
-- suivantes : identifiant, référence magasin, référence fabricant, code EAN13, prix de vente. 
-- Cette table fera en outre référence aux tables T_TAUX_TVA, T_RAYON_RYN, 
-- T_FABRICANT_FBQ. 
-- Mettez en place toutes les contraintes nécessaires. La table produit contiendra au 
-- minimum les colonnes proposées, mais peut en contenir d’autres au besoin.
 
CREATE TABLE T_RAYON_RYN (
    ryn_id INT IDENTITY PRIMARY KEY
)

CREATE TABLE T_TAUX_TVA (
    tva_id INT IDENTITY PRIMARY KEY
)

CREATE TABLE T_FABRIQUANT_FBQ (
    fbq_id INT IDENTITY PRIMARY KEY
)

CREATE TABLE T_PRODUIT_PDT (
    pdt_id INT IDENTITY PRIMARY KEY
    , ref_mag VARCHAR(30) 
    , code CHAR(13)
    , prix_vente MONEY
    , ref_fbq INT
    , ref_tva INT
    , ref_ryn INT

    , CONSTRAINT FK_FBQ FOREIGN KEY (ref_fbq) REFERENCES T_FABRIQUANT_FBQ (fbq_id)
    , CONSTRAINT FK_TVA FOREIGN KEY (ref_tva) REFERENCES T_TAUX_TVA (tva_id)
    , CONSTRAINT FK_RYN FOREIGN KEY (ref_ryn) REFERENCES T_RAYON_RYN (ryn_id)

)


-- Exercice 1.4
-- Soit le code de création de table repris ci-après et pour lequel les 
-- annotations suivantes concernant les fonctions utilisées pourront être utiles (sous Oracle, 
-- demander le script et des explications au formateur) : 
-- - « RTRIM(…) » et « LTRIM(…) » enlèves les espaces blancs respectivement à droite et à 
-- gauche de l’élément entre parenthèses 
-- - « SUBSTRING(…,x,y) » renvoi la chaine de caractère commençant à « x » et se terminant 
-- « y » caractères après « x », à partir de la chaine de caractères donnée entre parenthèses 
-- - « CONVERT(TYPE,…) » renvoi la valeur fournie dans le « TYPE » demandé 
-- Parmi les lignes suivantes, lesquelles seront refusées et pourquoi ? 


-- Exercice 1.5
-- Deux scripts vous sont fournis : « DBSlide_LoadDB.sql » et « DBSlide_LoadData.sql ». 
-- Créer une base de données que l’on appellera « DBSlide ». Tenter d’exécuter les scripts 
-- fournis… Cela ne devrait pas fonctionner. A vous de les corriger ! 
 


-- Exercice 1.6
-- Une fois les scripts de l’exercice précédent corrigés, les tables créées et 
-- remplies, réaliser les modifications suivantes : 
-- - Autoriser la table « SECTION » à accepter des valeurs NULL pour la colonne 
-- « delegate_id » 
-- - Ajouter à la table « SECTION » une clé étrangère faisant pointer la colonne 
-- « delegate_id » vers la colonne « student_id » de la table « STUDENT » 
-- - Supprimer la colonne « course_id » de la table « STUDENT » 
-- - Faire en sorte que les données de la colonne « student_id » de la table 
-- « STUDENT » soient auto-incrémentées 
-- - En ne supprimant aucune donnée, modifier le type de la colonne « section_id » de 
-- la table « section » afin qu’il soit en CHAR(4). Cela impliquera peut-être d’autres 
-- modifications… 


-- Exercice 1.7
-- Améliorer le script « DBSlide_LoadDB.sql » afin qu’il commence par 
-- supprimer les tables, pour ensuite les recréer sans leurs clés étrangères. Une fois chaque 
-- table créée, leur rajouter les clés étrangères 


-- Exercice 1.8
-- Afin de partir sur des bases communes pour les exercices à venir, exécuter 
-- les scripts « DBSlide_LoadDB_OK.sql » et « DBSlide_loadData_OK.sql » (ou 
-- « DBSlide_LoadDB_Oracle.sql » et « DBSlide_LoadData_Oracle.sql », sous Oracle) 


