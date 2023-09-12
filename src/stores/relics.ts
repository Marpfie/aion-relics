import { makeAutoObservable } from "mobx"

class RelicsStore{
    constructor(){
        makeAutoObservable(this)
    }
} 

export const relics = new RelicsStore()