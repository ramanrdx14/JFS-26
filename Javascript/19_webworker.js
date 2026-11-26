let arr = Array.from({ length: 1000 }, (value, idx) => idx + 1);

const wbwork = new Worker("./19_worker.js");
wbwork.postMessage(arr);

wbwork.onmessage = (data) => {
  console.log("Sum :: ", data.data);
};
