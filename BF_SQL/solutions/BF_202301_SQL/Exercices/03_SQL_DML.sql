-- 
-- SQL Déclaratif 
-- BF - Javascript - 05/01/2023
-- 


-- MODULE 3 :
-- DML (Data Manipulation Language - Langage de manipulation de données)



-- Exercice 3.1
-- Inscrivez-vous comme étudiant dans la base de données DBSlide sans 
-- spécifier les noms de colonnes dans lesquelles on insère les données 



-- Exercice 3.2
-- Inscrivez votre voisin comme étudiant dans la base de données DBSlide. 
-- Votre voisin n’aura ni nom de famille, ni login, ni résultat annuel (valeurs NULL) 



-- Exercice 3.3
-- Créer une table « section_archives » qui contiendra une copie des 
-- données contenues dans la table section 



-- Exercice 3.4
-- Insérer un nouvel étudiant dans la base de données. Cet étudiant sera 
-- inscrit dans la même section que Keanu Reeves, assistera au cours donné par le professeur 
-- Zidda (les lettres ‘EG’ suivies des 4 derniers caractères du cours en question) mais n’aura 
-- pas de login. Les valeurs de l’id de section et du cours devront être récupérées là où elles se 
-- trouvent dans la base de données, sans les renseigner directement 



-- Exercice 3.5
-- Insérer une nouvelle section dans la table section qui portera l’ID de 
-- section 1530, qui aura l’intitulé « Administration des SI » et qui aura le même délégué que 
-- la section dont l’ID et 1010 (vous ne connaissez pas la valeur de l’ID de ce délégué) 



-- Exercice 3.6
-- Mettre à jour vos propres données pour vous inscrire au cours EG2210 




-- Exercice 3.7
-- Mettre à jour les données de votre voisin pour qu’il ait un nom. Ensuite, 
-- refaire une mise à jour de la même ligne de données et attribuer à votre voisin un résultat 
-- de 18/20 et un login correspondant à la concaténation de la première lettre de son prénom 
-- et de la totalité de son nom, le tout en minuscules (sans connaître les valeurs réelles du 
-- nom et du prénom utilisés) 



-- Exercice 3.8
-- Mettre à jour les données de la table « student » pour que tous les 
-- étudiants de la section 1010 aient 15/20 



-- Exercice 3.9
-- Nommer Keanu Reeves délégué de la section 1530 (sans connaître la 
-- valeur réelle de l’ID de M. Reeves) 



-- Exercice 3.10
-- Donner à la section 1530 le même nom de section et le même délégué 
-- que la section 1320 (en allant rechercher ces valeurs via la requête, pas en les renseignant 
-- directement) 



-- Exercice 3.11
-- Nommer Alyssa Milano déléguée de sa section. On ne connait pas la 
-- valeur réelle de la section dans laquelle Mlle Milano est inscrite 



-- Exercice 3.12
-- Supprimer votre voisin de la base de données 



-- Exercice 3.13
-- Retirez-vous ainsi que Kim Basinger de la base de données. Comment se 
-- fait-il que le système accepte cette manipulation alors que Mlle. Basinger est déléguée de 
-- section ? 



-- Exercice 3.14
-- Supprimer tous les étudiants qui ont moins de 8/20 



-- Exercice 3.15
-- Supprimer tous les cours qui n’ont pas de professeur 



-- Exercice 3.16 (bonus DDL-DML)
-- Sans supprimer les clés étrangères au préalable, 
-- supprimer les données de toutes les tables dans l’ordre suivant : sections => professeurs => 
-- étudiants => cours => grades. Il est possible qu’il faille d’abord modifier la structure des 
-- tables (ALTER TABLE) afin d’accepter des valeurs nulles à certains endroits… Une 
-- modification des données des


