export class MySystemActor extends Actor {
    prepareData() {
        super.prepareData();
        this.data.items = this.data.items || [];
    }
}
