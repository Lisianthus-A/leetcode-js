/* Write your T-SQL query statement below */
SELECT p.FirstName, p.LastName, a.City, a.State 
FROM Person as p left join Address as a
ON p.PersonId = a.PersonId