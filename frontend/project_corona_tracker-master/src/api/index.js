import axios from 'axios';

const url = 'http://localhost:8080/global/';
const url1 = 'http://localhost:8080/countries';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url1}/${country}`;
  }

  try {
    const { data } = await axios.get(changeableUrl);

    if(country) {

      var arr1 = data;
      console.log("arr1 ");
      console.log(arr1);

      return arr1; 
    } else {

      var arr2 = data["Global"];
      arr2["date"] = data["Date"];
      console.log(arr2);

      return arr2;
    }
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async (country) => {
  try {
    const { data } = await axios.get(`${url1}/${country}`);

    let arr = data["countryAllData"];
    console.log("countryAllData")
    console.log(arr);

    return arr;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {

    const { data } = await axios.get(url);
    var arr = data["Countries"];
    
    console.log(arr);
    return arr;

  } catch (error) {
    return error;
  }
};
