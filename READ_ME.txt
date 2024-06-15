- Comando para executar o banco de dados MySQL usando Docker:

docker run -d -p 3306:3306 --name atividade04-db-1 -e MYSQL_ROOT_PASSWORD=passwd mysql:latest
----------------------------------------------------------------------------------	

- Comando para executar o container da sua aplicação Node.js:
docker run -d -p 3000:3000 --name atividade04-app-1 atividade04-app:latest

----------------------------------------------------------------------------------	
	
Entrar no console do MySQL dentro do contêiner
docker exec -it atividade04-db-1 mysql -uroot -proot

----------------------------------------------------------------------------------	
	
Comando para executar arquivo carga:

USE db_aula;
source /carga.sql;

Após executar ira a criar a tabela professores:

Endpoint: Abra a URL http://localhost:3000/consulta-dados/professores

----------------------------------------------------------------------------------

Endpoint da atividade 4:


Abra a URL http://localhost:3000/consulta-dados/alunos

----------------------------------------------------------------------------------	

- links do github e dockerhub

https://hub.docker.com/repository/docker/fuzetto/atividade04-app/general
https://github.com/fuzetto-pixel/Atividade04


