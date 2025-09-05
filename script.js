// College Football Stats Tracker - Main JavaScript

// Team data for the dashboard
const teamData = {
    'alabama': {
        name: 'Alabama Crimson Tide',
        conference: 'SEC',
        record: '11-1',
        ranking: '#4',
        colors: ['#9E1B32', '#FFFFFF']
    },
    'georgia': {
        name: 'Georgia Bulldogs',
        conference: 'SEC',
        record: '12-0',
        ranking: '#1',
        colors: ['#BA0C2F', '#D4AF37']
    },
    'ohio-state': {
        name: 'Ohio State Buckeyes',
        conference: 'Big Ten',
        record: '11-1',
        ranking: '#2',
        colors: ['#BB0000', '#FFFFFF']
    },
    'michigan': {
        name: 'Michigan Wolverines',
        conference: 'Big Ten',
        record: '12-0',
        ranking: '#3',
        colors: ['#00274C', '#FFCB05']
    },
    'clemson': {
        name: 'Clemson Tigers',
        conference: 'ACC',
        record: '8-4',
        ranking: '#24',
        colors: ['#F66733', '#522D80']
    },
    'texas': {
        name: 'Texas Longhorns',
        conference: 'Big 12',
        record: '11-1',
        ranking: '#5',
        colors: ['#BF5700', '#FFFFFF']
    },
    'florida': {
        name: 'Florida Gators',
        conference: 'SEC',
        record: '5-7',
        ranking: 'Unranked',
        colors: ['#0021A5', '#FA4616']
    },
    'lsu': {
        name: 'LSU Tigers',
        conference: 'SEC',
        record: '9-3',
        ranking: '#13',
        colors: ['#461D7C', '#FDD023']
    }
};

// Dad added ↓
// Sample game results data
const gameResults = [
    {
        home: 'alabama',
        away: 'georgia',
        homeScore: 27,
        awayScore: 30,
        date: '2024-12-07'
    },
    {
        home: 'ohio-state',
        away: 'michigan',
        homeScore: 20,
        awayScore: 24,
        date: '2024-11-30'
    },
    {
        home: 'texas',
        away: 'lsu',
        homeScore: 31,
        awayScore: 28,
        date: '2024-11-23'
    }
];
// Dad added ↑

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTeamSelector();
    displayGameResults();  // Dad added
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
}

// Team selector functionality
function initializeTeamSelector() {
    const teamSelect = document.getElementById('teamSelect');
    const teamInfo = document.getElementById('teamInfo');
    
    teamSelect.addEventListener('change', function() {
        const selectedTeam = this.value;
        
        if (selectedTeam && teamData[selectedTeam]) {
            displayTeamInfo(teamData[selectedTeam]);
            teamInfo.style.display = 'block';
        } else {
            teamInfo.style.display = 'none';
        }
    });
}

// Display team information
function displayTeamInfo(team) {
    document.getElementById('teamName').textContent = team.name;
    document.getElementById('teamRecord').textContent = team.record;
    document.getElementById('teamConference').textContent = team.conference;
    document.getElementById('teamRanking').textContent = team.ranking;
    
    // Add some visual flair
    const teamInfo = document.getElementById('teamInfo');
    teamInfo.style.background = `linear-gradient(135deg, ${team.colors[0]}20 0%, ${team.colors[1]}20 100%)`;
    teamInfo.style.borderLeftColor = team.colors[0];
}

// Utility function to format numbers (for future use)
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Utility function to get current season (for future use)
function getCurrentSeason() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // If it's before August, we're in the previous year's season
    return month < 7 ? year - 1 : year;
}

// Placeholder functions for future features
function addPlayerStats() {
    console.log('Player stats form will be implemented by Brother');
}

// Dad added ↓
// Display recent game results
function displayGameResults() {
    const resultsContainer = document.getElementById('gameResults');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = ''; // clear old results

    gameResults.forEach(game => {
        const homeTeam = teamData[game.home];
        const awayTeam = teamData[game.away];

        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-result');

        gameDiv.innerHTML = `
            <strong>${homeTeam.name}</strong> (${game.homeScore}) 
            vs 
            <strong>${awayTeam.name}</strong> (${game.awayScore}) 
            <br><small>${new Date(game.date).toLocaleDateString()}</small>
        `;

        resultsContainer.appendChild(gameDiv);
    });
}
// Dad added ↑

// Export functions for potential use by other team members
window.FootballTracker = {
    teamData,
    gameResults, // Dad added
    addPlayerStats,
    displayGameResults, // Dad added
    formatNumber,
    getCurrentSeason
};
