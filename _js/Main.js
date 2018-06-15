Main = {
    init: function(){
        this.charts();
	},

	charts: function(){
		$.each(this.chart, function(){this()})
    },
    
    chart: {
        chartOne: function() {
            var ctx = document.getElementById("chartOne");
            var chartOne = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        },
        chartTwo: function(){
            var ctx = document.getElementById("chartTwo");
            var chartTwo = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                    datasets: [{
                        label: '',
                        data: [12, 19, 3, 5, 2, 3, 3, 3, 9, 10, 11, 12],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        },
        chartThree: function(){
            var ctx = document.getElementById("chartThree");
            var chart3 = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Option 1", "Option 2", "Option 3"],
                    datasets: [{
                        label: '',
                        data: [12, 3, 11],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderWidth: 1
                    }]
                },
            });
        }   
    },

                                         
}
$(document).ready(function(){
    Main.init();
})