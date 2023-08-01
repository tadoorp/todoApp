import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private name: string = 'userName';
  constructor() { }

  setLocalStorage(item: any, name: string = this.name) {
    localStorage.setItem(name, JSON.stringify(item));
    return true;
  }

  getLocalStorage(name: string = this.name){
    let storageValue = localStorage.getItem(name);
    if(storageValue)
      return JSON.parse(storageValue);

    return null;
  }

  removeLocalStorage(name: string = this.name){
    localStorage.removeItem(name);
    return true;
  }

  clearLocalStorage(){
    localStorage.clear()
    return true;
  }
}
