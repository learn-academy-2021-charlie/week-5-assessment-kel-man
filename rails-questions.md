# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
    Stands for "Structured Query Language." SQL is a query language that interacts with SQL based relational databases. It is used to extract specific information from indefinitely large
    databases. When used properly, it can also be used to create entirely new structures that can then be accessed with yet more SQL queries. It is likely the most popular query language.


2. What the PostgreSQL query that would return all the content in a particular table?
    SELECT * FROM table

3. What is the command to create a new Rails application with a PostgreSQL database?
    rails new project_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
    rails g model Meals breakfast:string lunch:string dinner:string
    # Replace string with another datatype if appropriate

5. What is a migration? Why would you use one?
    A migration is an edit to a schema and database. You use a migration because tampering with a schema directly is dangerous and can cause relational issues. Databases are extremely
    abstract and can be infinitely large, so when restructuring or adding associations/tables/models to a database you may be interacting with millions of entries at once. In order
    to keep things clean and consistent, a migration will interact with the database on a large scale for you. Humans are good at doing a lot of different things once. Use computers
    when you want to do one thing a million times.

6. What is the command to generate a migration file?
    rails g migration add_this_to_that

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
    As models are classes, you would use PascalCase for a model name. In the schema, however, the table produced is in snake_case. Only classes ever use PascalCase. Everything else
    in Ruby uses snake_case.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
    The schema is the blueprint/director of the database structure. The schema holds all table names, as well as column names and datatypes. Never modify a schema directly. Modifying
    a schema manually will not magically edit your database to match the desired structure. A migration is required to modify both a schema and its corresponding database correctly. If
    you edit your schema directly, your database will break and Rails will yell at you. The database server will fail to load and your endpoint will not be accessible.

9. What is the Rails console?
    The Rails console is a development environment specific to a currently running Rails server. It allows the user to interact with the database directly, as well as write Ruby scripts
    to automate such interactions. It is very useful for reviewing validations and retroactively correcting mismanaged data.

10. What is the Rails console command to see all the content in a particular table?
      Table.all
