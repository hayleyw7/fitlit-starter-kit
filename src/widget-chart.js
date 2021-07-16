// COLORS - DELETE LATER

// GREEN - rgb(172, 224, 117)
// RED - rgb(224, 117, 129)
// YELLOW - rgb(245, 200, 127)
// BLUE - rgb(127, 182, 245)
// PURPLE - rgb(195, 177, 225)
// WHITE - rgb(255,255,255)
// BLACK - rgb(0, 0, 0)

// GOALS - SINGLE USER GOAL CHART //
export const userStepGoal = (currentUser) => {

  let steps = currentUser.dailyStepGoal;
  const stepGoal = {
    labels: ['Steps'],
    datasets: [{
      label: 'My First Dataset',
      data: [steps],
      backgroundColor: 'rgb(224, 117, 129)',
      color: 'blue'
    }]
  };

  const stepGoalDay = {
    type: 'doughnut',
    data: stepGoal,
  };

  let stepGoalChart = new Chart(
    document.getElementById('mySetGoalChart'),
    stepGoalDay
  );
  return steps
}


/// GOALS - USER GOAL VS OTHER USERS ///
export const userAvgStepGoalVsOthers = (usersData, stepGoal) => {

  let avgStepGoal = usersData.getAvgStepGoalOfAllUsers()
  const data = {
    labels: ['Community', 'You'],
    datasets: [{
      backgroundColor: 'rgb(224, 117, 129)',
      data: [avgStepGoal, stepGoal],
    }]
  };

  const config = {
    type: 'horizontalBar',
    data,
    options: {
      tooltips: {
        enabled: false
      },
      hover: {
        mode: null
      },
      legend: {
        display: false
      }
    }
  };

  var myChart = new Chart(
    document.getElementById('myGoalChart'),
    config
  );
}


// ACTIVITY - USER STEPS/MILES/MINUTESACTIVE FOR A DAY WIDGET/////
export const stepMilesMinutesForDay = (currentUser, activityData, property, date, usersData) => {

  let numSteps = currentUser.numSteps(activityData, property, date);
  let minsActive = currentUser.activeMinutes(activityData, 'minutesActive', date);
  let miles = currentUser.stepsCountInMiles(activityData, usersData, date);

  const stepsMinsMiles = {
    labels: [
      'Steps',
      'Miles',
      'Active Minutes'
    ],
    datasets: [{
      label: 'Latest day steps, miles, active minutes',
      data: [numSteps, miles, minsActive],
      backgroundColor: [
        'rgb(245, 200, 127)',
        'rgb(224, 117, 129)',
        'rgb(255, 205, 86'
      ],
      hoverOffset: 4
    }]
  };

  const allActivityConfig = {
    type: 'doughnut',
    data: stepsMinsMiles,
  };



  let activeChart = new Chart(
    document.getElementById('activity-chart'),
    allActivityConfig
  )

}



// / HYDRATION - USER HYDRATION CHART /////
export const waterConsumptionDay = (currentUser, hydrationData, property, date) => {

  let water = currentUser.dailyTrackOfData(hydrationData, 'numOunces', date)
  const waterInDay = {
    labels: [
      'Oz water consumed today'
    ],
    datasets: [{
      label: 'Oz of Water',
      data: [11],
      backgroundColor: 'rgb(54, 162, 235)'
    }]
  };

  const waterConfig = {
    type: 'polarArea',
    data: waterInDay,
  };

  let waterChart = new Chart(
    document.getElementById('hydration-chart'),
    waterConfig
  )
}


export const waterOverLatestWeek = (currentUser, hydrationData, property) => {
  let weeklyArray = currentUser.trackOfDataOverWeek(hydrationData, property)
  let spliced = weeklyArray.slice(194, -1)
  let date = spliced.map(date => date.date);
  let values = spliced.map(date => date.numOunces);
  const labels = date
  const waterOverWeek = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: values,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const configWater = {
    type: 'bar',
    data: waterOverWeek,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  let waterOverWeekChart = new Chart(
    document.getElementById('hydration-chart1'),
    configWater
  )
}




// SLEEP WIDGETS //////


const hoursQualitySleep = {
  labels: [
    'Hours of Sleep',
    'Quality of Sleep'
  ],
  datasets: [{
    label: 'Sleep',
    data: [11, 8],
    backgroundColor: [
      'rgb(75, 192, 192)',
      'rgb(201, 203, 207)'
    ]
  }]
};

const sleepConfig = {
  type: 'polarArea',
  data: hoursQualitySleep,
};

let sleepChart = new Chart(
  document.getElementById('sleep-chart'),
  sleepConfig
)


const allTimeSleepQuality = {
  labels: [
    'All Time Avg Sleep Quality',
    'All Time Avg Sleep Hours',
  ],
  datasets: [{
    label: 'Data',
    data: [4, 9],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    hoverOffset: 4
  }]
};

const allConfig = {
  type: 'doughnut',
  data: allTimeSleepQuality,
};

let sleepChart1 = new Chart(
  document.getElementById('sleep-chart2'),
  allConfig
)