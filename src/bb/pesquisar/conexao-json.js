async function listaPessoas(){
    const conexao = await fetch("http://localhost:3000/users");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
  listaPessoas
}