import axios from "axios";
const APIKey = process.env.REACT_APP_WEATHERBIT_API;
const dataURL = process.env.REACT_APP_WEATHERBIT_ENDPOINT;

const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
const daysShort = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"];
const daysLong = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

export const search = async (cityName) => {
  try {
    const getData = await axios.get(
      `${dataURL}&city=${cityName}&days=8&key=${APIKey}`
    );

    const dailyForecastList = getData.data.data.map((dailyForecast) => {
      const d = new Date(dailyForecast.datetime);
      const dayShort = daysShort[d.getDay()];
      const dayLong = daysLong[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();

      return {
        temp: dailyForecast.temp,
        maxTemp: dailyForecast.max_temp,
        minTemp: dailyForecast.min_temp,
        dayShort: dayShort,
        dayLong: dayLong,
        date: date,
        month: month,
        year: year,
        iconCode: dailyForecast.weather.icon,
        description: dailyForecast.weather.description,
      };
    });
    return dailyForecastList;
  } catch (e) {
    console.log(e);
  }
};
