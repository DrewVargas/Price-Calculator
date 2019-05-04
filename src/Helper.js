function totalPrice(arr) {
  const num = arr.map(item => {
    return {
      name: item.name,
      price: parseFloat(item.price)
    };
  });
  return num.reduce((curr, item) => curr + item.price, 0);
}

export { totalPrice };
