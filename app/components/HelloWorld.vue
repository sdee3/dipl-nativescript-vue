<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Weather App"></ActionBar>

    <StackLayout class="hello-world">
      <TextField
        v-model="textFieldValue"
        @textChange="fetchWeatherInformation"
        hint="Enter city name..."
      />
      <TextView editable="false" class="body" textWrap="true" v-model="weatherInformation"/>
    </StackLayout>
  </Page>
</template>

<script>
import { API_KEY } from "../utils/APIKey";

export default {
  data() {
    return {
      textFieldValue: "",
      cityName: "",
      countryCode: "",
      temperature: 0,
      weatherInformation: ""
    };
  },

  watch: {
    temperature: function() {
      this.weatherInformation = `It's currently ${
        this.temperature
      } degrees Celsius in ${this.cityName}, ${this.countryCode}.`;
    }
  },

  methods: {
    fetchWeatherInformation() {
      if (this.textFieldValue.length > 3) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${
            this.textFieldValue
          }&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            if (json.main) {
              this.temperature = parseInt(json.main.temp);
              this.cityName = json.name;
              this.countryCode = json.sys.country;
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
