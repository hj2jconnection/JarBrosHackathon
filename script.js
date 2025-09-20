// College Football Stats Tracker - Main JavaScript

// Team data for the dashboard
const teamData = {
    'alabama': {
        name: 'Alabama Crimson Tide',
        conference: 'SEC',
        record: '9-4',
        ranking: '#17',
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
    },
    'western-kentucky': {
        name: 'Western Kentucky Hilltoppers',
        conference: 'C-USA',
        record: '8-5',
        ranking: 'Unranked',
        colors: ['#C5002F', '#000000']
    },
    'south-florida': {
        name: 'South Florida Bulls',
        conference: 'American',
        record: '4-8',
        ranking: 'Unranked',
        colors: ['#00723E', '#CFC493']
    },
    'wisconsin': {
        name: 'Wisconsin Badgers',
        conference: 'Big Ten',
        record: '5-7',
        ranking: 'Unranked',
        colors: ['#C5002F', '#FFFFFF']
    },
    'vanderbilt': {
        name: 'Vanderbilt Commodores',
        conference: 'SEC',
        record: '6-7',
        ranking: 'Unranked',
        colors: ['#866D4B', '#000000']
    },
    'south-carolina': {
        name: 'South Carolina Gamecocks',
        conference: 'SEC',
        record: '9-4',
        ranking: '#18',
        colors: ['#73000A', '#000000']
    },
    'tennessee': {
        name: 'Tennessee Volunteers',
        conference: 'SEC',
        record: '10-3',
        ranking: '#7',
        colors: ['#FF8200', '#FFFFFF']
    },
    'missouri': {
        name: 'Missouri Tigers',
        conference: 'SEC',
        record: '9-4',
        ranking: '#19',
        colors: ['#F1B82D', '#000000']
    },
    'mercer': {
        name: 'Mercer Bears',
        conference: 'SoCon',
        record: '9-4',
        ranking: 'Unranked',
        colors: ['#FF7900', '#000000']
    },
    'oklahoma': {
        name: 'Oklahoma Sooners',
        conference: 'SEC',
        record: '6-7',
        ranking: 'Unranked',
        colors: ['#841617', '#FDF9C7']
    },
    'auburn': {
        name: 'Auburn Tigers',
        conference: 'SEC',
        record: '5-7',
        ranking: 'Unranked',
        colors: ['#0C2340', '#DD550C']
    }
};

// Dad added ↓
// Real Alabama 2024 season game results
const gameResults = [
    {
        home: 'alabama',
        away: 'western-kentucky',
        homeScore: 63,
        awayScore: 0,
        date: '2024-08-31'
    },
    {
        home: 'alabama',
        away: 'south-florida',
        homeScore: 42,
        awayScore: 16,
        date: '2024-09-07'
    },
    {
        home: 'wisconsin',
        away: 'alabama',
        homeScore: 10,
        awayScore: 42,
        date: '2024-09-14'
    },
    {
        home: 'alabama',
        away: 'georgia',
        homeScore: 41,
        awayScore: 34,
        date: '2024-09-28'
    },
    {
        home: 'vanderbilt',
        away: 'alabama',
        homeScore: 40,
        awayScore: 35,
        date: '2024-10-05'
    },
    {
        home: 'alabama',
        away: 'south-carolina',
        homeScore: 27,
        awayScore: 25,
        date: '2024-10-12'
    },
    {
        home: 'tennessee',
        away: 'alabama',
        homeScore: 24,
        awayScore: 17,
        date: '2024-10-19'
    },
    {
        home: 'alabama',
        away: 'missouri',
        homeScore: 34,
        awayScore: 0,
        date: '2024-10-26'
    },
    {
        home: 'lsu',
        away: 'alabama',
        homeScore: 13,
        awayScore: 42,
        date: '2024-11-09'
    },
    {
        home: 'alabama',
        away: 'mercer',
        homeScore: 52,
        awayScore: 7,
        date: '2024-11-16'
    },
    {
        home: 'oklahoma',
        away: 'alabama',
        homeScore: 24,
        awayScore: 3,
        date: '2024-11-23'
    },
    {
        home: 'alabama',
        away: 'auburn',
        homeScore: 28,
        awayScore: 14,
        date: '2024-11-30'
    },
    {
        home: 'michigan',
        away: 'alabama',
        homeScore: 19,
        awayScore: 13,
        date: '2024-12-31',
        bowlGame: 'ReliaQuest Bowl'
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
    const resultsContainer = document.getElementById('game-results-container');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = '<h3>Alabama Crimson Tide 2024 Season Results (9-4)</h3>'; // clear old results and add header

    gameResults.forEach(game => {
        const homeTeam = teamData[game.home];
        const awayTeam = teamData[game.away];

        // Handle case where team might not be in our database
        const homeTeamName = homeTeam ? homeTeam.name : game.home.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        const awayTeamName = awayTeam ? awayTeam.name : game.away.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-result');

        // Determine if Alabama won
        const alabamaWon = (game.home === 'alabama' && game.homeScore > game.awayScore) ||
                          (game.away === 'alabama' && game.awayScore > game.homeScore);

        gameDiv.style.backgroundColor = alabamaWon ? '#e8f5e8' : '#ffe8e8';
        gameDiv.style.border = alabamaWon ? '2px solid #4caf50' : '2px solid #f44336';
        gameDiv.style.margin = '10px 0';
        gameDiv.style.padding = '10px';
        gameDiv.style.borderRadius = '5px';

        let gameTitle = game.bowlGame ? `${game.bowlGame}: ` : '';

        gameDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">
                ${gameTitle}<strong>${homeTeamName}</strong> ${game.homeScore} - ${game.awayScore} <strong>${awayTeamName}</strong>
                <span style="float: right; color: ${alabamaWon ? 'green' : 'red'};">${alabamaWon ? 'W' : 'L'}</span>
            </div>
            <small style="color: #666;">${new Date(game.date).toLocaleDateString()}</small>
        `;

        resultsContainer.appendChild(gameDiv);
    });

    // Add season summary
    const summaryDiv = document.createElement('div');
    summaryDiv.style.marginTop = '20px';
    summaryDiv.style.padding = '15px';
    summaryDiv.style.backgroundColor = '#f0f0f0';
    summaryDiv.style.borderRadius = '5px';
    summaryDiv.innerHTML = `
        <h4>Season Summary:</h4>
        <p><strong>Final Record:</strong> 9-4 (5-3 SEC)</p>
        <p><strong>Final Ranking:</strong> #17 AP Poll</p>
        <p><strong>Bowl Game:</strong> ReliaQuest Bowl vs Michigan (Loss 13-19)</p>
    `;
    resultsContainer.appendChild(summaryDiv);
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
