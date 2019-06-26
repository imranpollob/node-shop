const fs = require('fs');
const path = require('path');

const dataFIle = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json',
);

const getProductsFromFile = (callback) => {
  fs.readFile(dataFIle, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataFIle, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
