cy.saucedemo = {
  sort: {
    LOW_TO_HIGH_PRICE: "LOW_TO_HIGH_PRICE",
  },
  sortProductsBy: (products, criteria) => {
    const criteriaDict = {
      LOW_TO_HIGH_PRICE: function (a, b) {
        return a.price - b.price;
      },
    };

    const productsSorted = [...products].sort(criteriaDict[criteria]);
    return productsSorted;
  },
};
