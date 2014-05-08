console.log('\'Allo \'Allo!');


var xml = '<?xml version="1.0" encoding="utf-8" ?><entries><entry><uosName>Honours Studio</uosName><AlphaDigit>MARF5201</AlphaDigit><start_day>7/3/2014</start_day><end_day>6/6/2014</end_day><start_time>9:00</start_time><end_time>11:00</end_time><frequency>Weekly</frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Honours Studio</uosName><AlphaDigit>MARF5201</AlphaDigit><start_day>7/3/2014</start_day><end_day>6/6/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Honours Studio</uosName><AlphaDigit>MARF5201</AlphaDigit><start_day>1/8/2014</start_day><end_day>31/10/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Urban Architecture Research Studio</uosName><AlphaDigit>MARC4001</AlphaDigit><start_day>6/3/2014</start_day><end_day>5/6/2014</end_day><start_time>13:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>THU</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Urban Architecture Research Studio</uosName><AlphaDigit>MARC4001</AlphaDigit><start_day>6/3/2014</start_day><end_day>5/6/2014</end_day><start_time>9:00</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>THU</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Urban Architecture Research Studio</uosName><AlphaDigit>MARC4001</AlphaDigit><start_day>31/7/2014</start_day><end_day>30/10/2014</end_day><start_time>13:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>THU</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Urban Architecture Research Studio</uosName><AlphaDigit>MARC4001</AlphaDigit><start_day>31/7/2014</start_day><end_day>30/10/2014</end_day><start_time>9:00</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>THU</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Sustainable Architecture Research Studio</uosName><AlphaDigit>MARC4002</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>9:00</start_time><end_time>11:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Sustainable Architecture Research Studio</uosName><AlphaDigit>MARC4002</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>13:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Sustainable Architecture Research Studio</uosName><AlphaDigit>MARC4002</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>9:00</start_time><end_time>10:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Sustainable Architecture Research Studio</uosName><AlphaDigit>MARC4002</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>12:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>9:00</start_time><end_time>11:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>11:00</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>4/3/2014</start_day><end_day>3/6/2014</end_day><start_time>13:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>9:00</start_time><end_time>10:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>12:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Digital Architecture Research Studio</uosName><AlphaDigit>MARC4003</AlphaDigit><start_day>29/7/2014</start_day><end_day>28/10/2014</end_day><start_time>11:00</start_time><end_time>12:00</end_time><frequency>Weekly                        </frequency><day_of_week>TUE</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Graduation Studio</uosName><AlphaDigit>MARC5001</AlphaDigit><start_day>7/3/2014</start_day><end_day>6/6/2014</end_day><start_time>9:00</start_time><end_time>11:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Graduation Studio</uosName><AlphaDigit>MARC5001</AlphaDigit><start_day>7/3/2014</start_day><end_day>6/6/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Graduation Studio</uosName><AlphaDigit>MARC5001</AlphaDigit><start_day>1/8/2014</start_day><end_day>31/10/2014</end_day><start_time>9:00</start_time><end_time>11:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Graduation Studio</uosName><AlphaDigit>MARC5001</AlphaDigit><start_day>1/8/2014</start_day><end_day>31/10/2014</end_day><start_time>11:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>FRI</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Advanced Technologies 2</uosName><AlphaDigit>MARC5101</AlphaDigit><start_day>28/7/2014</start_day><end_day>27/10/2014</end_day><start_time>11:00</start_time><end_time>12:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Advanced Technologies 2</uosName><AlphaDigit>MARC5101</AlphaDigit><start_day>28/7/2014</start_day><end_day>27/10/2014</end_day><start_time>12:00</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Advanced Technologies 2</uosName><AlphaDigit>MARC5101</AlphaDigit><start_day>28/7/2014</start_day><end_day>27/10/2014</end_day><start_time>13:00</start_time><end_time>14:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Modern Architectural Theory</uosName><AlphaDigit>MARC4102</AlphaDigit><start_day>30/7/2014</start_day><end_day>29/10/2014</end_day><start_time>11:30</start_time><end_time>13:00</end_time><frequency>Weekly                        </frequency><day_of_week>WED</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Modern Architectural Theory</uosName><AlphaDigit>MARC4102</AlphaDigit><start_day>30/7/2014</start_day><end_day>29/10/2014</end_day><start_time>13:00</start_time><end_time>14:30</end_time><frequency>Weekly                        </frequency><day_of_week>WED</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Modern Architectural Theory</uosName><AlphaDigit>MARC4102</AlphaDigit><start_day>30/7/2014</start_day><end_day>29/10/2014</end_day><start_time>14:30</start_time><end_time>16:00</end_time><frequency>Weekly                        </frequency><day_of_week>WED</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Modern Architectural History</uosName><AlphaDigit>MARC4201</AlphaDigit><start_day>5/3/2014</start_day><end_day>4/6/2014</end_day><start_time>13:00</start_time><end_time>14:00</end_time><frequency>Weekly                        </frequency><day_of_week>WED</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Modern Architectural History</uosName><AlphaDigit>MARC4201</AlphaDigit><start_day>5/3/2014</start_day><end_day>4/6/2014</end_day><start_time>14:00</start_time><end_time>15:00</end_time><frequency>Weekly                        </frequency><day_of_week>WED</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Contract Documentation</uosName><AlphaDigit>MARC5102</AlphaDigit><start_day>15/9/2014</start_day><end_day>27/10/2014</end_day><start_time>14:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry><entry><uosName>Contract Documentation</uosName><AlphaDigit>MARC5102</AlphaDigit><start_day>28/7/2014</start_day><end_day>8/9/2014</end_day><start_time>16:00</start_time><end_time>17:00</end_time><frequency>Weekly                        </frequency><day_of_week>MON</day_of_week><venue_name>Wilkinson 209 Studio                              </venue_name></entry></entries>'
    var json = $.xml2json(xml);



var xmlData = [], results = json.entry, days = ['Mon','Tue','Wed','Thu','Fri'], times = [9,10,11,12,13,14,15,16,17,18,19,20], week = [];


getEvents();


function getEvents(){

for (var i = results.length - 1; i >= 0; i--) {
  var result = results[i];

  var thisweek = moment().startOf('week');
  var day = dayToDayNumber(result.day_of_week);
  var dayThisWeek = thisweek.weekday(day);

  var sT = result.start_time.split(":");
  var eT = result.end_time.split(":");

  var startTime = dayThisWeek.hour(sT[0]).minute(sT[1]);
  var endTime = dayThisWeek.hour(eT[0]).minute(eT[1]);


  xmlData.push({
      uosName: result.uosName
    , alphaDigit: result.AlphaDigit
    , startDate: moment(result.start_day,"DDMMYYYY")
    , endDate : moment(result.end_day,"DDMMYYYY")
    , startTime: startTime
    , endTime : endTime
    , frequency: result.frequency
    , venue: result.venue_name
    , dayOfWeek : result.day_of_week
    , computedDay : dayThisWeek
  });

};

}



function dayToDayNumber(day){
  switch(day){
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



function createWeek(){
  for (var i = 0; i < days.length; i++) {
    for (var x = 0; x < times.length; x++) {
      var day = {};
      day.day = days[i];
      day.time = times[x];
      week.push(day);
      
    };
  };
  console.log(week);

}