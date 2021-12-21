import { action, computed, observable } from 'mobx'
class State {
    @observable price = 2;
    @observable amount = 1;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action.bound getPrice(value) {
        this.amount ++;
    }

    @computed get total() {
        return this.price * this.amount;
    }
}

export default State