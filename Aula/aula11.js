
function tarefaAssincrona(sucesso = true) {
  console.log("Executando tarefa");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) resolve("Tarefa concluída com sucesso");
      else reject("Erro na tarefa");      
    }, 2000);
  });
}

async function executar() {
  console.log('Antes do await');
  const resultado = await tarefaAssincrona()
  console.log('Depois do await');
  console.log(resultado);
}

executar();
// Saída:
// "Antes do await"
// "Executando tarefa"
// (2 segundos de espera)
// "Depois do await"
// "Tarefa concluída com sucesso"

