let timelineData = [
    {
        date: 'August 15, 2019',
        text: 'Hello world! of my first React app',
        category: {
            tag: 'coding',
            color: '#018f69'
        }
    },
    {
        date: 'August 29, 2019',
        text: 'Test new date filter',
        category: {
          tag: 'testing',
          color: '#aabbcc'
        },
        img: {
            url:'',
        }
    }
];

let todayData = timelineData.filter(function(item){
  let itemDate = new Date(item.date);
  let today = new Date();
  return itemDate.setHours(0,0,0,0) === today.setHours(0,0,0,0);
});

export default todayData;
