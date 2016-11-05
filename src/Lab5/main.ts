/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

$ = jQuery;

class BaseService<T> {
    baseUrl: string;

    constructor(public type: string) {
        this.baseUrl = 'http://sk-ts-api.azurewebsites.net';
    }

    GetList(): JQueryXHR {
        var url = `${this.baseUrl}/api/${this.type}`;

        return $.get(url);
    }

    Create(data: T) {
        var url = `${this.baseUrl}/api/${this.type}`;

        return $.post(url, data);
    }
}

interface Post {
    Id: number;

    Title: string;

    Content: string;
}

interface Product {
    Id: number;

    Name: string;

    Price: number;
}

class ProductService extends BaseService<Product> {
    constructor() {
        super('Product');
    }
}
class PostService extends BaseService<Post> {
    constructor() {
        super('Posts');
    }
}

var productService = new ProductService();

/*
productService.Create({
    Id: undefined,
    Name: 'New Product~~~~',
    Price: 100
});
*/

var p = new PostService();
p.Create({
    Id: 1111,
    Title: 'My Title',
    Content: 'blah'
});

p.GetList().then(ret => {
    console.log(ret);
});