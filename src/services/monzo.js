export default class Monzo {
  get BASE_URL() {
    return process.env.API_URL
  }

  /**
   * create a fetch request for URL
   * @param {String} url where to go
   * @returns {Promise} request
   */
  _request(url) {
    let request = new Request(this.BASE_URL + url)

    if (this.headers) {
      request.headers.append(...this.headers)
    }

    return fetch(request)
  }

  async whoAmI() {
    const response = await this._request('/ping/whoami')

    return response.json()
  }

  async auth() {
    if (process.env.NODE_ENV === 'dev') {
      this.headers = ['authorization', 'Bearer ' + process.env.ACCESS_TOKEN]
    } else {
      // oauth login goes here
      this.headers = null
    }
  }
}
