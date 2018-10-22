import rp from 'request-promise';
class indexModel {
  constructor(ctx) {
    this.ctx = ctx;
  }
  updateNum() {
    const options = {
      uri: 'http://localhost/basic/fontend/praise.php',
      method: 'GET'
    };
    return new Promise((res, rej) => {
      rp(options)
        .then(function (result) {
          console.log(111, result)
          res({
            data: result
          })
          // const info = JSON.parse(result);
          // if (info) {
          //   res({
          //     data: info.result
          //   })
          // } else {
          //   rej({})
          // }
          // console.log(info)
        })
        .catch(function (err) {
          console.log(222)
          console.log(err)
        });
    })
  }
}
export default indexModel