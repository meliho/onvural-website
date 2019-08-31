let timelineData = [
    {
        date: 'August 31, 2019',
        text: 'Hello world! of my first React app',
        category: {
            tag: 'coding',
            color: '#018f69'
        }
    }
];

let todayData = timelineData.filter(function(item){
  let itemDate = new Date(item.date);
  let today = new Date();
  return itemDate.getMonth() === today.getMonth() && itemDate.getDate() === today.getDate();
});

todayData.sort(function(a,b) {
  let aDate = new Date(a.date);
  let bDate = new Date(b.date);
  return aDate > bDate;
});

export default todayData;
