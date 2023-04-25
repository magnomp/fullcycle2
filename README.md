# Executando
docker-compose up -d

# Listando nomes
GET http://localhost:8080/people

# Novo nome
POST http://localhost:8080/people

Obs: Como o exercicio não especifica para receber o nome por parâmetro, este endpoint não recebe nenhum input e insere sempre o mesmo nome