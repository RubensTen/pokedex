class HttpProvider {
    constructor() {
        if (!HttpProvider.instance) {
            HttpProvider.instance = this;
        }
        return HttpProvider.instance;
    }

    /**
     * Send http request
     * @param {string} url to endpoint
     * @param {Object} body of request
     */
    request(method, url) {
        const promise = new Promise((resolve, reject) => {
            fetch(url, {
                method: method
            })
            .then(response => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
        return promise;
    }
    
    /**
     * Send Get Http request
     * @param {string} url of endpoint or resource
     */
    get(url) {
        return this.request('GET', url);
    }
}

const httpProvider = new HttpProvider();

// prevent new properties from being added to the object
Object.freeze(httpProvider);

export default httpProvider;
