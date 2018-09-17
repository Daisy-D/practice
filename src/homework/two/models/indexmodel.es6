import rp from 'request-promise';
class indexModel {
  constructor(ctx) {
    this.ctx = ctx;
  }
  updateNum() {
    const options = {
      uri: 'http://localhost/praise.php',
      method: 'GET'
    };
    return new Promise((res, rej) => {
      rp(options)
        .then(function (result) {
          const info = JSON.parse(result);
          if (info) {
            resolve({
              data: info.result
            })
          } else {
            rej({})
          }
          console.log(info)
        })
        .catch(function (err) {
          console.log(err)
        });
    })
  }
}
export default indexModel