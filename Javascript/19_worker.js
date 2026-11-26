onmessage = (data) => {
  let sum = data.data.reduce((acc, value) => acc + value, 0);
  postMessage(sum);
};
