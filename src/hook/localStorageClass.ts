class LocalStorage {
  getLocalItem(key: string) {
    let res = window.localStorage.getItem(key);
    res = JSON.parse(res!);
    return res;
  }
  setLocalItem(key: string, params: any) {
    const res = JSON.stringify(params);
    window.localStorage.setItem(key, res);
  }
  removeLocalItem(key: string) {
    window.localStorage.removeItem(key);
  }
  clearLocalItem() {
    window.localStorage.clear();
  }
}

const localStorage = new LocalStorage();
export { localStorage };
