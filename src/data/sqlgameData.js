export const sqlGameQuestions = [
    {
        level: 1,
        name: "Rookie Detective 🕵️",
        scenario:
            "You've just joined the SQL Police Department. Your first task is to retrieve basic information from the department's database.",
        question:
            "write a sql query to retrieve all basic information of all officers in the 'Officers' table.",
        answer: "SELECT * FROM Officers;",
    },
    {
        level: 2,
        name: "Data Filterer 🔍",
        scenario:
            "After a successful start, you're asked to narrow down the search to officers with specific ranks.",
        question:
            "write a sql query to retrieve the first name and rank of officers ranked as 'Lieutenant' from the 'Officers' table.",
        answer: "SELECT first_name,rank FROM Officers WHERE rank = 'Lieutenant';",
    },
    {
        level: 3,
        name: "Rank Ascender 📈",
        scenario:
            "Your proficiency is noted, and now they want you to retrieve officers' information in alphabetical order by their last names.",
        question:
            "write a sql query to retrieve all details of officers, ordered alphabetically by their last names.",
        answer: "SELECT * FROM Officers ORDER BY last_name ASC;",
    },
    {
        level: 4,
        name: "Alias Apprentice 🎭",
        scenario:
            "To protect the officers' identities in sensitive reports, you need to start using aliases.",
        question:
            "Use the SELECT statement to retrieve officers' first names as 'Agent_FirstName' and last names as 'Agent_LastName' from the 'Officers' table.",
        answer: "SELECT first_name AS Agent_FirstName, last_name AS Agent_LastName FROM Officers;",
    },
    {
        level: 5,
        name: "Special Cases Investigator 🌟",
        scenario:
            "There are officers with distinguished honors. Retrieve the names and medals of officers who've received the 'Medal of Valor.'",
        question:
            "write a sql query to fetch the names and medals of officers who received the 'Medal of Valor' from the 'Awards' table.",
        answer: "SELECT name, medal FROM Awards WHERE medal = 'Medal of Valor';",
    },
    {
        level: 6,
        name: "Distinct Identifier 🌐",
        scenario:
            "You've mastered regular queries. Now, they want you to retrieve unique ranks held by officers.",
        question:
            "write a sql query to retrieve the unique ranks held by officers from the 'Officers' table.",
        answer: "SELECT DISTINCT rank FROM Officers;",
    },
    {
        level: 7,
        name: "String Decoder 🔠",
        scenario:
            "There's a need to decode encrypted messages in officer reports. Get the first three letters of the first names of all officers.",
        question:
            "write a sql query to fetch the first three letters of the first names from the 'Officers' table.",
        answer: "SELECT SUBSTRING(first_name, 1, 3) AS First_Three_Letters FROM Officers;",
    },
    {
        level: 8,
        name: "Code Breaker 🔓",
        scenario:
            "A specific letter is vital in decoding a suspect's messages. Find the position of the letter 't' in the name 'Detective' from the 'Officers' table.",
        question:
            "write a sql query to find the position of the letter 't' in the word 'Detective'.",
        answer: "SELECT POSITION('t' IN 'Detective') AS Letter_Position;",
    },
    {
        level: 9,
        name: "Space Trimmer 🚀",
        scenario:
            "There's a need to clean up some data. Retrieve officers' names after removing any trailing spaces.",
        question:
            "write a sql query to retrieve officers' first names without any trailing spaces from the 'Officers' table.",
        answer: "SELECT RTRIM(first_name) AS Trimmed_First_Name FROM Officers;",
    },
    {
        level: 10,
        name: "Department Whisperer 🏢",
        scenario:
            "Officers are often assigned to various departments. Fetch the unique department names along with their lengths.",
        question:
            "write a sql query to retrieve unique department names and their lengths from the 'Departments' table.",
        answer: "SELECT DISTINCT department, LENGTH(department) AS Department_Length FROM Departments;",
    },
    {
        level: 11,
        name: "Name Transformer 🦸‍♂️",
        scenario:
            "To ensure consistency, transform lowercase into uppercase in officers' first names.",
        question:
            "write a sql query to retrieve officers' first names in uppercase from the 'Officers' table.",
        answer: "SELECT UPPER(first_name) AS Uppercase_First_Name FROM Officers;",
    },
    {
        level: 12,
        name: "Full Name Concatenator 🤝",
        scenario:
            "Create a unified column displaying officers' full names for more effective reporting.",
        question:
            "write a sql query to create a column 'Full_Name' concatenating officers' first names and last names separated by a space from the 'Officers' table.",
        answer: "SELECT CONCAT(first_name, ' ', last_name) AS Full_Name FROM Officers;",
    },
    {
        level: 13,
        name: "Employment Historian 📅",
        scenario:
            "Track officers' entry into the department. Retrieve the details of officers who joined in January 2023.",
        question:
            "write a sql query to fetch details of officers who joined in January 2023 from the 'Officers' table.",
        answer: "SELECT * FROM Officers WHERE joining_date >= '2023-01-01' AND joining_date <= '2023-01-31';",
    },
    {
        level: 14,
        name: "Department Enumerator 📊",
        scenario: "Find out the count of officers working in each department.",
        question:
            "write a sql query to retrieve the department names along with the count of officers in each department from the 'Departments' table.",
        answer: "SELECT department, COUNT(*) AS Officer_Count FROM Officers GROUP BY department;",
    },
    {
        level: 15,
        name: "Rank Sorter 🥇",
        scenario:
            "Get details of officers ordered by their ranks in ascending order.",
        question:
            "write a sql query to fetch all officer details ordered by their ranks in ascending order from the 'Officers' table.",
        answer: "SELECT * FROM Officers ORDER BY rank ASC;",
    },
];
