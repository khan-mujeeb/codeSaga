export const sqlGameQuestions = [
    {
        level: 1,
        name: "Rookie Detective 🕵️",
        scenario:
            "You've just joined the SQL Police Department. Your first task is to retrieve basic information from the department's database.",
        question:
            "Using the SELECT statement, retrieve the all basic information of all officers in the 'Officers' table.",
        answer: "SELECT * FROM officers;",
    },
    {
        level: 2,
        name: "🗃️ Data Analyst ",
        scenario:
            "You've been promoted to analyze crime statistics. You need to filter specific data based on conditions.",
        question:
            "Retrieve the name and age of all officers who are older than 30 years.",
        answer: "SELECT * FROM officers WHERE > 30;",
    },
    {
        level: 3,
        name: "Investigation Specialist 🔍",
        scenario:
            "A new case involves multiple suspects. You need to identify the suspects associated with a specific crime.",
        question:
            "List the names and ages of all suspects related to the case ID 5678 in the 'Suspects' table.",
        answer: "SELECT name, age FROM Suspects WHERE case_id = 5678;",
    },
];

