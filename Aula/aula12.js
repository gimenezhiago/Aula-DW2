async function buscarDados() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

buscarDados();
