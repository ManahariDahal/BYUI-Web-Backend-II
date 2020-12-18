const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProducts = (cb) => {
    fs.readFile(p, (err, file) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(file));
        }
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    static fetchAll(cb) {
        getProducts(cb);
    }

    static getItemsByTag(tag, cb) {
      getProducts(products => {
        const product = products.filter(prods => {
          for (let productTag of prods.tags) {
            if (tag === productTag) {
              return true;
                }
              }
            });
            cb(product);
        });
    }
};