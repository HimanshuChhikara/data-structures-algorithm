function format(date) {
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      var formatDate = day + '-' + monthNames[monthIndex] + '-' + year;
      return formatDate
  }
  var dm = format('December 25, 1995 23:15:00')
  console.log("Changed Date" + dm);