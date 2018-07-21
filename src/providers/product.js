import HttpProvider from './http';

const API = '/api/';

export class ProductProvider {
    getRecentProducts() {
        return HttpProvider.get(`${api}data/fake-recent-products.json`);
    }
}