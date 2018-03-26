export default class Monzo {
  get BASE_URL() {
    return 'https://api.monzo.com'
  }

  async whoAmI() {
    const response = await fetch(new Request(this.BASE_URL + '/ping/whoami'))

    return response.json()
  }
}
