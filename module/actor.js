export class MySystemActor extends Actor {
    prepareData() {
        super.prepareData();
        this.data.items = this.data.items || [];
    }

    async _onDrop(event) {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        if (data.type === "Item") {
            const item = await Item.fromDropData(data);
            if (item) {
                this.createEmbeddedDocuments("Item", [item.data]);
            }
        }
    }
}
