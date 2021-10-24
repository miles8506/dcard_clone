class setLocalStorage {
  setItem = function (localName: string, value: string) {
    return window.localStorage.setItem(localName, value);
  };
  getItem = function (localName: string) {
    return window.localStorage.getItem(localName);
  };
  removeItem = function (localName: string) {
    return window.localStorage.removeItem(localName);
  };
}

const localStorage = new setLocalStorage();

export { localStorage };
