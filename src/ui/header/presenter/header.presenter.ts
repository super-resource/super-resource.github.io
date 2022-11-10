import { action, makeObservable, observable } from "mobx";


export class HeaderPresenter {
  open: boolean = false;

  constructor() {
    makeObservable(this, {
      open: observable,
      updateOpen: action.bound,
    });
  }


  updateOpen(open: boolean) {
    this.open = open
  }

}
