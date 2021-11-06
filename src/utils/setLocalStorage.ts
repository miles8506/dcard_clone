class setLocalStorage {
  setItem = function (localName: string, value: any) {
    window.localStorage.setItem(localName, JSON.stringify(value));
  };
  getItem = function (localName: string) {
    const res: any = window.localStorage.getItem(localName);
    return JSON.parse(res);
  };
  removeItem = function (localName: string) {
    window.localStorage.removeItem(localName);
  };
  clearItem = function () {
    window.localStorage.clear();
  };
}

const localStorage = new setLocalStorage();

export { localStorage };
