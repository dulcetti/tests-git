((win, doc) => {
  win.alert("Oie");

  function secondMethod(name, lastName) {
    return `My name is ${name} ${lastName}`;
  }

  secondMethod("Bruno");
})(window, document);
