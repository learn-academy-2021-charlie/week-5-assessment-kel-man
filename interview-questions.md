# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
    Model, View, Controller. MVC is the structure adopted by Ruby on Rails. It represents the three axes of a full stack application. The model represents the shape of data held in the database. The view
    is the way data is presented to the user when called upon. The controller dictates which data to reveal when a server is queried.

  Researched answer:
    MVC is an architectural pattern that separates the back-end server logic from the UI logic. Backend logic includes models to determine the structure of data held in the database, while View represents
    the actual GUI in the browser that the end user sees. Meanwhile, the controller represents the logic behind handling the data being passed between the user and the database, or vice versa. The user(view)
    sends a request to the server, which is passed through a controller. The controller reads the request and determines which data it needs from the model based on developer-set rules and guidelines. The
    model holds the data and is able to serve it up to the controller, which then passes it back to the view. The view is then re-loaded with this new data and displays it to the user.



2. What is a relational database? Are there other kinds of databases?

  Your answer:
    A relational database is structured such that entries are able to be associated with each other in many ways. Objects can be grouped together in tables. Those tables can belong to other tables, belong to
    tables that belong to tables, be associated with tables through other tables, etc. This allows for intricate mapping of structure in a database.

  Researched answer:
    In a relational database the data is structured into a hierarchy. Data entries are organized such that they have definite associations/relationships with others in order to streamline access and group like
    data together without sacrificing the separation/distinction between those entries. Relational databases enhance the sorting and extraction of data, allowing for greater manipulation and analysis of trends and
    patterns. A non-relational database does not use rows and columns like a relational database does. They are much more limited, optimizing for specific types of data. This limit does, however, have its uses
    for when a database will only be housing one particular type of entry and does not need the dynamic structure of a relational database.



3. What is object-relational mapping?

  Your answer:
    ORM refers to communication between a server that speaks one language and another resource that speaks an incompatible language. ORM allows these two entities to communicate and interact using translation.
    It also allows for database structures that are otherwise difficult to interpret by human eyes to be presented in more legible ways. ActiveRecord is a wonderful example of ORM implemented in real life.

  Researched answer:
    ORM is a technique for allowing cohesion between incompatible type systems and object-oriented languages in particular. Using ORM to create a virtual object database, a programming language can then be used
    to access the data store without compromising the nature of that database. This reduces the overall amount of code that needs to be written to interact with a database, but also produces a level of abstraction
    that can hide the actual goings-on within the database. The code actually implemented and the code written by the developer can be vastly different.



4. What is a gem?

  Your answer:
    In Ruby, a gem is what would be referred to as a module or plugin in Javascript. Typically open-source. They add tools or behavior to a project. Some gems can conflict, so a developer should exercise caution
    when installing multiple gems that may not work together. If you can think of something you want your project to do, there's probably a gem for it. Rails itself is essentially a collection of gems.

  Researched answer:
    Ruby has a built-in package manager called RubyGems in which a user can download, install, and implement individual modules within their software with a single command. Each gem is a self-contained piece
    of custom functionality that, when packaged with other compatible gems, can create a powerful framework or build. Some gems are under-the-hood in that they simply operate in silence, while others actually
    modify the behavior of the command line or add optional methods to use.



5. What are primary keys? Why are they important?

  Your answer:
    A primary key is the unique identifier for an entry in a database. In Rails these keys are simply an incrementing integer. However, they can be anything as long as they are unique and do not repeat anywhere
    throughout the database. Primary keys are important because they are the only thing that is always unique about an entry. They are what distinguishes between otherwise identical pieces of data.

  Researched answer:
    On a fundamental level, the primary key is a column within a table. It contains only unique values that are used to identify each row within a table. CRUD actions are based off the existence of a primary key
    within a table. Primary keys are typically as minimal as possible in their values, often existing simply as a unique integer within the table. Without a primary key it can be impossible to distinguish between
    separate entries, or locate a specific value within a database.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
    REST stands for Representational State Transfer. REST is a software architectural paradigm that specifically defines the behavior and architecture of the world wide web. RESTful routes refer to
    a pattern of behavior that is exercised whenever interacting with a server with an HTTP request. These routes separate the client from the server while still allowing communication and interaction thereof.
    RESTful routes use HTTP methods to send requests to the server and receive responses. They determine which requests end up where and how they are handled to an extent.

2. JSON:
    JavaScript Object Notation is a data structure that mimicks the typical JavaScript object, with some reservations. Modern JavaScript allows for some syntax that would be invalid in JSON; however, for the most part,
    a JSON object mirrors precisely with a JS object. Typically when sending a request, the response is expected to be in JSON.

3. ERB:
    ERB is a specific implementation of embedded Ruby that is used in Ruby on Rails. ERB allows for template generation with variable values that can be output to an HTML webpage in Ruby on Rails. This allows for
    consistent presentation of data and HTML even when certain data or behavior is modified. Unlike string interpolation, ERB does not need to know the values of the variables it uses prior to being written.

4. Params:
    Short for "parameters," params are key:value pairs contained within an HTTP request. They can be supplied by the user, the router, or the request as a default. Params are used to dictate what type of request
    is being sent, as well as what data is contained therein if applicable. They can be accessed by the controller in Rails to determine how to consume and respond to a request.

5. API:
    API stands for Application Programming Interface. APIs are essentially middleware that allow two applications to communicate. In contrast with a UI, the API is not meant to be used directly by a user, but instead
    must be implemented within the applications to define how and when the two applications should communicate. APIs can be public or private, with the owner of the API determining how to expose it.
