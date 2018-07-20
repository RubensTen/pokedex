import HttpProvider from './http';

const api = 'http://localhost:3000/';

export class ProductProvider {
    getRecentProducts() {
        return HttpProvider.get(`${api}/data/fake-recent-products.json`);
    }
}