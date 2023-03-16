import axios from "axios";

// const getPrayerTimes = (city = "uşak") => {
//   // axios(`https://dailyprayer.abdulrcs.repl.co/api/${city}`)
//   axios(`https://api.collectapi.com/pray/all?data.city=istanbul`)
//     // .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

//   console.log("*******************************");
// };

// export default getPrayerTimes;

export default axios.create({
  baseURL: "https://dailyprayer.abdulrcs.repl.co/api",
});
