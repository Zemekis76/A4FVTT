export class MySystemActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["my-system", "sheet", "actor"],
            template: "my-system/module/template.hbs",
            width: 600,
            height: 400,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
        });
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.MySystem;
        return data;
    }
}
