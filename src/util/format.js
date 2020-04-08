// renomeando a função/instância format contida no objeto Intl.
// a classe Intl serve para internacionalização, nesse caso a utilizaremos para formatar o preço com o padrão "R$"
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
