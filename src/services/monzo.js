import devSettings from '../devSettings'
export default class Monzo {
  get BASE_URL() {
    return 'https://api.monzo.com'
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
    if (devSettings.devMode) {
      this.headers = ['authorization', 'Bearer ' + devSettings.accessToken]
    } else {
      // oauth login goes here
      this.headers = null
    }
  }
}
