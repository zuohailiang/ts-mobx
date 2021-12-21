import State from './store'
class rootStore {
    constructor() {
        this.stateStore = new State(this);
    }
}

export default rootStore