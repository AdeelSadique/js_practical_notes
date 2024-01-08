const promise1 = new Promise((resolve, reject) => {
  //   console.log('promise is running');
  if (0) {
    resolve({ name: 'Adeel', contact: 341 });
  } else {
    reject({ error: 'something went wrong' });
  }
});

// promise1
//   .then((res) => {
//     // console.log('promise is consumed');
//     return console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.error);
//   })
//   .finally(() => {
//     console.log('promise is at final stage');
//   });
// or we can use try catch instead of then catch
func = async () => {
  try {
    const data = await promise1;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
func();
