var str = window.location.href;
        var cps = str.split("?").pop();

        document.getElementById("demo").innerHTML = cps;

        var userCPS = JSON.parse(localStorage.getItem("names"));

        // Check if the user is on a mobile device
        function isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }

        // Create a function to conditionally remove the chart element if on mobile
        function removeChartIfMobile() {
            if (isMobileDevice()) {
                var chartContainer = document.getElementById("chartContainer");
                if (chartContainer) {
                    chartContainer.parentNode.removeChild(chartContainer);
                }
            }
        }

        // Call the function to remove the chart if on mobile
        removeChartIfMobile();

        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from(Array(userCPS.length).keys()),
                datasets: [{
                    label: 'Your CPS Records',
                    data: userCPS,
                    borderWidth: 0.3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                layout: {
                    marginTop: 20,
                    padding: {
                        left: 10,
                        right: 10,
                        top: 0,
                        bottom: 20
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2.9, // This is the aspect ratio (width/height). Adjust as needed.
            }
        });