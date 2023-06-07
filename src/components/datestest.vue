<template>
    <div>
      <ul>
        <li v-for="date in filteredDates" :key="date">{{ date }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orderRegistration: {
          product_period: {
            available_dates: [
              "2023-03-07", "2023-03-08", "2023-03-09", "2023-03-10", "2023-03-13", "2023-03-14",
              // Rest of the available_dates
            ]
          }
        }
      };
    },
    computed: {
      filteredDates() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        // const currentMonth = currentDate.getMonth() + 1;
  
        const generatedDates = [];
        for (let year = currentYear; year <= currentYear + 1; year++) {
          const maxMonth = year === currentYear + 1 ? 9 : 12;
          for (let month = 1; month <= maxMonth; month++) {
            const daysInMonth = new Date(year, month, 0).getDate();
            for (let day = 1; day <= daysInMonth; day++) {
              const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              if (!this.orderRegistration.product_period.available_dates.includes(formattedDate) || this.isDateOlderThanToday(formattedDate)) {
                generatedDates.push(formattedDate);
              }
            }
          }
        }
  
        return generatedDates;
      }
    },
    methods: {
      isDateOlderThanToday(date) {
        const currentDate = new Date().toISOString().split('T')[0];
        return date < currentDate;
      }
    }
  };
  </script>
  