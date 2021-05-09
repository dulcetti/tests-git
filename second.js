((win, doc) => {
  win.alert("Oie");

  function secondMethod(name) {
    return `My name is ${name}`;
  }

  secondMethod("Bruno");
})(window, document);
