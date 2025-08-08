function buscarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Usuário encontrado');
      resolve();
    }, 1000);
  });
}

function buscarPerfil() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Perfil do usuário encontrado');
      resolve();
    }, 1000);
  });
}

function exibirMensagem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Bem-vindo ao sistema!');
      resolve();
    }, 1000);
  });
}

buscarUsuario()
  .then(buscarPerfil)
  .then(exibirMensagem)
  .then();
