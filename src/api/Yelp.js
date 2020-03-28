import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer y6nrGV2s0UWeMRXD7GtHuJJU0LTpM4g_mn1pY8EK7wOs7jaPEQQ65WrPthaC2EtI3D35hk6ReXKagOE3f-8KWtYjG01vXSFNBPcQeaXLnkYS4LNVsdl6rFAH7Hd6XnYx"
  }
});
