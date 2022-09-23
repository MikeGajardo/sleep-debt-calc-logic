const getSleepHours = (day) => {
    if (day === "Monday") {
      return 8
    } if (day === "Tuesday") {
      return 6
    } if (day === "Wednesday") {
      return 6
    } if (day === "Thursday") {
      return 7
    } if (day === "Friday") {
      return 5
    } if (day === "Saturday") {
      return 6
    } if (day === "Sunday") {
      return 6
    } else {
      console.log('you have an error')
    }
  }
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    let idealHours = 7 
    return (idealHours * 7)
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
      console.log('the user got the perfect amount of sleep')
    } if (actualSleepHours > idealSleepHours) {
      console.log('the user got ' + (actualSleepHours - idealSleepHours) + ' more than needed')
    } if (actualSleepHours < idealSleepHours) {
      console.log('the user should get ' + (idealSleepHours - actualSleepHours) + ' more hours of rest')
    } else {
      console.log('you have an error again')
    }
  }
  
  console.log(calculateSleepDebt())