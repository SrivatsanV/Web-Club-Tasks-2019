// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

let $info = $("#info");
let $wea = $("#wea");
let Weather;
navigator.geolocation.getCurrentPosition(position => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&APPID=e9748f3f89410e0e40d1b2185c2d9b46`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        let city = data.city;
        let weather = data.list;
        chrome.storage.local.set({ city: city, weather: weather }, function() {
          chrome.storage.local.get(["city"], function(result) {
            let city = result.city;
            //console.log(result.data);
            let html = "<h4>" + city.name + "</h4>";
            $info.append(html);
            //   changeColor.style.backgroundColor = data.color);
            // changeColor.setAttribute("value", data.color);
          });
          chrome.storage.local.get(["weather"], function(result) {
            let i = 0;
            let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

            weather.forEach(w => {
              let cardId = "card" + i;
              let card = document.createElement("div");
              card.setAttribute("id", cardId);
              card.setAttribute("class", "cardUI");

              let icon = document.createElement("img");
              icon.setAttribute("class", "icon");

              let t_cel = Math.floor(w.main.temp - 273);
              let h = "<h5>" + t_cel + "<span>&#8451;</span></h5>";

              let url = `http://openweathermap.org/img/wn/${
                w.weather[0].icon
              }@2x.png`;
              icon.src = url;
              let date = new Date(w.dt_txt);
              let day = "<h4>" + days[date.getDay()] + "</h4>";
              let time = date.getHours() + ":00 hrs";
              let timeHtml = "<h6>" + time + "</h6>";
              $(card).append(day);
              $(card).append(icon);
              $(card).append(h);
              $(card).append(timeHtml);
              $wea.append(card);
              i++;
            });
          });
        });
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
});
