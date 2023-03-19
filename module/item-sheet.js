export class MySystemItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["my-system", "sheet", "item"],
            template: "my-system/module/item-template.hbs",
            width: 400,
            height: 200,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
        });
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.MySystem;
        return data;
    }
}
