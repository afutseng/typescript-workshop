class LabOne {
    constructor(private dom: Element) {
    }

    Say() {
        this.dom.innerHTML = "Hello Typescript";
    }
}

var dom = document.querySelector("#content");
var lab = new LabOne(dom);
lab.Say();
lab.Say();

