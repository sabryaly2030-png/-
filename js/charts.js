// Charts Configuration and Management

let performanceChart;
let ratingChart;

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePerformanceChart();
    initializeRatingChart();
});

// Performance Chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['الطلاب', 'المعلمين', 'أولياء الأمور', 'الإداريين'],
            datasets: [{
                label: 'نسبة الرضا %',
                data: [95, 91, 93, 90],
                backgroundColor: [
                    '#0f4c81',
                    '#00a6d6',
                    '#1a6ba8',
                    '#09365b'
                ],
                borderColor: '#0f4c81',
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: '#00a6d6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: 'مقارنة مستويات الرضا بين الفئات',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 15
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'النسبة المئوية',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        drawBorder: false,
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

// Rating Distribution Chart
function initializeRatingChart() {
    const ctx = document.getElementById('ratingChart');
    if (!ctx) return;
    
    ratingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['ممتاز جداً', 'ممتاز', 'جيد جداً', 'جيد', 'مقبول'],
            datasets: [{
                data: [35, 30, 20, 12, 3],
                backgroundColor: [
                    '#28a745',
                    '#0f4c81',
                    '#00a6d6',
                    '#ffc107',
                    '#dc3545'
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 13,
                            weight: 'bold'
                        },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': ' + value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Update charts with new data
function updateCharts() {
    if (performanceChart) {
        performanceChart.update();
    }
    if (ratingChart) {
        ratingChart.update();
    }
}