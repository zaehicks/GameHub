import axios from "axios";

export default axios.create ({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6a6ff08519474f1fb5f60cbcada794aa'
  }
})