interface State {
  data: any;
  listeners: any;
  getState: any;
  setState: any;
  suscribe: any;
  notify: any;
  addItem: any;
}

export const state: State = {
  data: {
    list: {},
  },
  listeners: [],
  getState() {
    return this.data.list;
  },
  setState(newState: any) {
    this.addItem(newState);
    this.notify();
  },
  suscribe(callback: any) {
    this.listeners.push(callback);
  },
  notify() {},
  addItem(newItem: any) {
    console.log(this.data.list);
    const newState = {
      ...this.data.list,
      ...newItem,
    };
    this.data.list = newState;
  },
};
