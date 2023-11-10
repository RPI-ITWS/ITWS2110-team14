\*Issues stemmed from mySQL storage issue, where the server would gradually shut down quicker and quicker, not allowing the user to create the necessary features
There were also a number of issue making the php. When there was an error in the code it would jsut return a 500 error without much of a description.
Found a way to print those errors and figure out what was going on and fix them. There were also some server connection issues in the proccess that slowed everything down but those usually had a simple fix. Another large issue was returning a json object from the database. Took a while to figure out but with a bunch of googling, we found a stack exchange post detailign a fix and it worked for us. Overall we learned a lot in the process of making this lab and it was a good experience.


1. Assumption that section is a two digit number

Part 2:
------COMMAND LOG-----


# Sources:

https://mariadb.com/kb/en/json-functions/ - used to learn about json functions with mariaDB
https://www.w3schools.com/php/php_mysql_insert.asp - used to learn about basic mysql functions
https://dba.stackexchange.com/questions/192208/mysql-return-json-from-a-standard-sql-query - used to debug issues with returning a json object
