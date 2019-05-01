function totalPrice(arr) {
  const num = arr.map(item => {
    return {
      name: item.name,
      price: parseInt(item.price)
    };
  });
  console.log(num);
  return num.reduce((curr, item) => curr + item.price, 0);
}

export { totalPrice };
