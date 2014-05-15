  console.log('\'Allo \'Allo!');


  var xml = '<?xml version="1.0" encoding="utf-8" ?><entries><entry><uosName>Graduation Studio</uosName><AlphaDigit>MARC5001</AlphaDigit><start_day>1/8/2014</start_day><end_day>31/10/2014</end_day><start_time>13:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Architecture Studio 101</uosName><AlphaDigit>BDES1010</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Art Workshop 1</uosName><AlphaDigit>BDES1024</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Architecture Studio 201</uosName><AlphaDigit>BDES2010</AlphaDigit><start_day>3/3/2014</start_day><end_day>2/6/2014</end_day><start_time>13:00</start_time><end_time>18:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Architecture Studio 202</uosName><AlphaDigit>BDES2020</AlphaDigit><start_day>28/7/2014</start_day><end_day>20/10/2014</end_day><start_time>13:00</start_time><end_time>17:30</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Architecture Studio 302</uosName><AlphaDigit>BDES3020</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>16:00</start_time><end_time>18:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Architectural Communications 3</uosName><AlphaDigit>BDES3012</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>16:00</start_time><end_time>18:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry><entry><uosName>Art Workshop 2</uosName><AlphaDigit>BDES2024</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>10:00</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 262 General Access Laboratory           </venue_name></entry></entries>'
  var json = $.xml2json(xml);

  var noEvent = true,
      flag = false;


  var xmlData = [],
      results = json.entry,
      days = ['MON', 'TUE', 'WED', 'THU', 'FRI'],
      times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      week = [];


  getEvents();


  function getEvents() {

      for (var i = results.length - 1; i >= 0; i--) {
          var result = results[i];

          var thisweek = moment().startOf('week');
          var thisweek2 = moment().startOf('week');
          var day = dayToDayNumber(result.day_of_week);
          var dayThisWeek = thisweek.weekday(day);
          var dayThisWeek2 = thisweek2.weekday(day);

          var sT = result.start_time.split(":");
          var eT = result.end_time.split(":");

          sT = dayThisWeek.hours(sT[0]).minutes(sT[1]);
          eT = dayThisWeek2.hours(eT[0]).minutes(eT[1]);

          var a = moment(sT),
              b = moment(eT),
              len = b.diff(a, 'hours');



          var startDate = moment(result.start_day, "DDMMYYYY");
          var endDate = moment(result.end_day, "DDMMYYYY");
          var dateRange = moment().range(startDate, endDate);


          if (dateRange.contains(thisweek)) {


              xmlData.push({
                  uosName: result.uosName,
                  alphaDigit: result.AlphaDigit,
                  startDate: moment(result.start_day, "DDMMYYYY"),
                  endDate: moment(result.end_day, "DDMMYYYY"),
                  startTime: sT,
                  endTime: eT,
                  length: len,
                  frequency: result.frequency,
                  venue: result.venue_name,
                  dayOfWeek: result.day_of_week,
                  computedDay: dayThisWeek,
                  range: moment().range(sT, eT)
              });
          }

      };
      getEventsByDay(days[0]);


  }



  function dayToDayNumber(day) {
      switch (day) {
          case "SUN":
              return 0;
              break;
          case "MON":
              return 1;
              break;
          case "TUE":
              return 2;
              break;
          case "WED":
              return 3;
              break;
          case "THU":
              return 4;
              break;
          case "FRI":
              return 5;
              break;
          case "SAT":
              return 6;
              break;


      }
  }

  createWeek()


  function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function(a, b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  function createWeek() {
      for (var i = 0; i < days.length; i++) {
          for (var x = 0; x < times.length; x++) {
              var day = {};
              day.day = days[i];
              day.time = times[x];
              week.push(day);

          };
      };
  }


  function getEventsByDay(day) {
      var tempArray = [];


      for (var i = 0; i < xmlData.length; i++) {
          if (xmlData[i].dayOfWeek === days[0]) {
              tempArray.push(xmlData[i]);
          }
      };
      createTimeLineForDay(days[0], tempArray);
  }









  function createTimeLineForDay(day, events) {


      console.log(events);
      var daySegments = 12,
          startTime = 9,
          curBlockNo = 0,
          dayTimeLine = [];

      //Get Starting Time
      var thisweek = moment().startOf('week');
      var day = dayToDayNumber(day);
      var currentTime = thisweek.weekday(day);
      currentTime.set('hours', 9);
      console.log(currentTime);
      var lastTime = currentTime;

      //Sort Events by Time
      events = events.sort(compareMilli);


      // Create Blocks
      do {
          var block = {}, currentEvent = null,
              nextTime = 1;
          block.starTime = currentTime.get('hours');

          //make last block the end time
          if (daySegments != 12) {
              var a = dayTimeLine[curBlockNo - 1];
              a.endTime = currentTime.get('hours');
          }

          for (var x = 0; x < events.length; x++) {
              //Check to see if an event starts now
              if (currentTime.isSame(events[x].startTime)) {
                  currentEvent = events[x];
              }
          }

          if (currentEvent != null) {
              block.ev = currentEvent;
              nextTime = currentEvent.length;

          } else {
              nextTime = 1;
          }


          // Go Next Time
          currentTime.add('hours', nextTime);
          curBlockNo = curBlockNo + 1;
          daySegments = daySegments - nextTime
          dayTimeLine.push(block);

      }
      while (daySegments > 0);
      console.log(dayTimeLine);



  }


  function createHtmlForDay(dayTimeLine) {
      var html = ""
      for (var i = 0; i < dayTimeLine.length; i++) {
          html += '<div class="block">'
          //html += '<h1>'+dayTimeLine.currentTime.format('H ');+' to '+dayTimeLine.endTime
          dayTimeLine[i]
      };
  }





  function compareMilli(a, b) {
      if (a.startTime._d < b.startTime._d) return 0;
      if (a.startTime._d > b.startTime._d) return 1;
      return 0;
  }