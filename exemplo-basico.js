//Passando o id publico da planilha
var drive = require("drive-db")("1FbASFqxyMbKgz-qd0uFhlq-NdWQjdLmV9pOjE8SBiXg");

// Carregando todos os dados da planilha do google docs
drive.load(function(err, db){
  console.log(db);
});
