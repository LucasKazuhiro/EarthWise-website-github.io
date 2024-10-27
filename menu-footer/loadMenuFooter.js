export function loadMenuFooter(elementId, fileHTML) {
  fetch(fileHTML)
    .then(resp => resp.text())
    .then(textHTML => {
      document.getElementById(elementId).innerHTML = textHTML;
    })
    .catch(error => console.error('Erro ao carregar conteúdo do elemento de ID ' + elementId, error));
}