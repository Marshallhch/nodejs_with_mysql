# Coronaboard Tutorial

- In this project, Will learn nodejs using MySQL server.
- And Find and Solving Custom Issues.

### 1. Setting Dev. Env.

- Installing Nodejs for MacOS
- Installing Homebrew for MacOS(1 Issue Found : m1 macbook Issue No.1)
- Installing MySQL for MacOS(1 Issue Found : m1 macbook Issue No.2)

### 2. API Server Dev. - Backend Programming

- Init package.json
- Coding Nodejs for API Server
- Install Express
- Create MySQL Database
- Install MySQL Connector and Sequelize ORM
- Define Sequelize Object Model
- Create Table Scheme
- Syncronize Object Model with Database

### 3. Create API

- Router and Controller

* Making Controller
* connect Controller and Routing(2 issue found : issue No.3, issue No.4)

```c
 // terminal open and insert code below
 $ node index.js(open browser) : http://localhost:8080
 // another terminal open and insert code below
 $ curl --request GET 'http://localhost:8080/global-stats'
 // => {result : []}

 // Insert Data using Terminal Code below :
 $ curl --location --request POST 'http://localhost:8080/global-stats' \
 --header 'Content-Type:application/json' \
 --data-raw '{"cc":"KR", "date":"2020-12-12", "confirm":28, "death":0, "negative":6676, "released":7, "tested":7678, "testing":535}'
```

### N. Trouble Shutting

- Issue No.1:
- Issue No.2:
- Issue No.3: Not working 'auto inclement' option in Sequilize. 'Field 'id' doesn't have a default value' message is seen on the terminal.
- Issue No.4: Not working 'timestamps : false' option. 'createAt', 'updatedAt' fields are not disappear.

### N. Solving Problems

- Issue No.3, Issue No.4 : After modify error text in code, remove table and recreate table.

#### Source Code By 코로나보드로 배우는 실전 웹 서비스 개발
