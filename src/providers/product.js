import HttpProvider from './http';

const api = 'http://localhost:3000/';

export class ProductProvider {
    constructor() {
    }

    getRecentProducts() {
        return HttpProvider.get(`${api}/data/fake-recent-products.json`);
    }

}