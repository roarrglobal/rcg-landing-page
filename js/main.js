const reportParts = [
    {
        part: 1,
        title: "SaaS Market Evolution & Growth Trends",
        available: true,
        releaseDate: "Available Now",
        description: "Essential insights into 2025 SaaS trends, sales evolution, and regional market analysis."
    },
    {
        part: 2,
        title: "Investment & Market Analysis",
        available: false,
        releaseDate: "Coming February 10, 2025",
        description: "Deep dive into industry-wise trends and investment patterns."
    },
    {
        part: 3,
        title: "Technology & Innovation Forecast",
        available: false,
        releaseDate: "Coming February 20, 2025",
        description: "Analysis of emerging technologies and AI-driven innovations."
    },
    {
        part: 4,
        title: "Customer Experience & Implementation",
        available: false,
        releaseDate: "Coming March 2, 2025",
        description: "Strategic frameworks for product-market fit and customer success."
    },
    {
        part: 5,
        title: "Future Outlook & Recommendations",
        available: false,
        releaseDate: "Coming March 12, 2025",
        description: "Strategic roadmap for SaaS success in 2025 and beyond."
    }
];

function renderReportCards() {
    const container = document.getElementById('reportCards');
    container.innerHTML = reportParts.map(report => `
        <div class="report-card bg-white p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-medium px-3 py-1 rounded-full ${
                    report.available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                }">
                    ${report.releaseDate}
                </span>
                <span class="text-2xl font-bold rcg-blue">Part ${report.part}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 rcg-blue">${report.title}</h3>
            <p class="text-gray-600">${report.description}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderReportCards();
});const reportParts = [
    {
        part: 1,
        title: "SaaS Market Evolution & Growth Trends",
        available: true,
        releaseDate: "Available Now",
        description: "Essential insights into 2025 SaaS trends, sales evolution, and regional market analysis."
    },
    {
        part: 2,
        title: "Investment & Market Analysis",
        available: false,
        releaseDate: "Coming February 10, 2025",
        description: "Deep dive into industry-wise trends and investment patterns."
    },
    {
        part: 3,
        title: "Technology & Innovation Forecast",
        available: false,
        releaseDate: "Coming February 20, 2025",
        description: "Analysis of emerging technologies and AI-driven innovations."
    },
    {
        part: 4,
        title: "Customer Experience & Implementation",
        available: false,
        releaseDate: "Coming March 2, 2025",
        description: "Strategic frameworks for product-market fit and customer success."
    },
    {
        part: 5,
        title: "Future Outlook & Recommendations",
        available: false,
        releaseDate: "Coming March 12, 2025",
        description: "Strategic roadmap for SaaS success in 2025 and beyond."
    }
];

function renderReportCards() {
    const container = document.getElementById('reportCards');
    container.innerHTML = reportParts.map(report => `
        <div class="report-card bg-white p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-medium px-3 py-1 rounded-full ${
                    report.available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                }">
                    ${report.releaseDate}
                </span>
                <span class="text-2xl font-bold rcg-blue">Part ${report.part}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 rcg-blue">${report.title}</h3>
            <p class="text-gray-600">${report.description}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderReportCards();
});const reportParts = [
    {
        part: 1,
        title: "SaaS Market Evolution & Growth Trends",
        available: true,
        releaseDate: "Available Now",
        description: "Essential insights into 2025 SaaS trends, sales evolution, and regional market analysis. Featuring exclusive data from 100+ SaaS leaders."
    },
    {
        part: 2,
        title: "Investment & Market Analysis",
        available: false,
        releaseDate: "Coming February 10, 2025",
        description: "Deep dive into industry-wise trends, competitive landscape, and investment patterns shaping the SaaS sector in 2025."
    },
    {
        part: 3,
        title: "Technology & Innovation Forecast",
        available: false,
        releaseDate: "Coming February 20, 2025",
        description: "Comprehensive analysis of emerging technologies, GTM strategies, and AI-driven innovations transforming SaaS businesses."
    },
    {
        part: 4,
        title: "Customer Experience & Strategic Implementation",
        available: false,
        releaseDate: "Coming March 2, 2025",
        description: "Strategic frameworks for product-market fit, customer success, and experience optimization in the evolving SaaS landscape."
    },
    {
        part: 5,
        title: "Future Outlook & Strategic Recommendations",
        available: false,
        releaseDate: "Coming March 12, 2025",
        description: "Action-oriented recommendations, risk analysis, and strategic roadmap for SaaS success in 2025 and beyond."
    }
];

// Render report cards
function renderReportCards() {
    const container = document.getElementById('reportCards');
    container.innerHTML = reportParts.map(report => `
        <div class="report-card bg-white p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-medium px-3 py-1 rounded-full ${
                    report.available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                }">
                    ${report.releaseDate}
                </span>
                <span class="text-2xl font-bold rcg-blue">Part ${report.part}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 rcg-blue">${report.title}</h3>
            <p class="text-gray-600">${report.description}</p>
        </div>
    `).join('');
}

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (validateEmail(email)) {
        alert('Thank you for your interest! You will receive access to Part 1 shortly.');
        // Add your email processing logic here
    } else {
        alert('Please enter a valid business email address.');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderReportCards();
});
