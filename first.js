((win, doc) => {
  console.info("Olar, vem sempre aqui?");
  console.info("Mais um console");

  function myMethod(text) {
    return `Tá tudo bem${text}`;
  }

  myMethod(", meu nobre?");
})(window, document);
