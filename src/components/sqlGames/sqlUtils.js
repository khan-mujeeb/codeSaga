const sqlUtils = {
    createTable : "CREATE TABLE Officers ( officer_id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, rank VARCHAR(20) NOT NULL, department VARCHAR(50) NOT NULL, hire_date DATE NOT NULL, badge_number INT UNIQUE );",

    insertData : "INSERT INTO Officers (first_name, last_name, rank, department, hire_date, badge_number) VALUES ('John', 'Doe', 'Captain', 'Police', '2020-01-01', 1234), ('Jane', 'Smith', 'Lieutenant', 'Police', '2019-01-01', 1235), ('Alex', 'Johnson', 'Sergeant', 'Police', '2018-01-01', 1236), ('Emily', 'Brown', 'Detective', 'Police', '2017-01-01', 1237), ('Michael', 'Davis', 'Officer', 'Police', '2016-01-01', 1238), ('Sophia', 'Wilson', 'Officer', 'Police', '2015-01-01', 1239), ('Daniel', 'Lee', 'Officer', 'Police', '2014-01-01', 1240), ('Olivia', 'Garcia', 'Officer', 'Police', '2013-01-01', 1241), ('William', 'Martinez', 'Officer', 'Police', '2012-01-01', 1242), ('Evelyn', 'Anderson', 'Officer', 'Police', '2011-01-01', 1243);"
}

export default sqlUtils;