import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2Anfm0Z06aqRR8pF3SsNzyXye3FTIrfZ3qF9WpXbOQiFQ-jh_37E3DMeOJ-fH2d_P5SPKv8VTFX9ca2c0ECnWmpr1GZAhqVTsUR-89LdVsu0pxn4NtlhaBYcwUEGZHYx",
  },
});
