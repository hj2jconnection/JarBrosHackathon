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
        record: '11-3',
        ranking: '#6',
        colors: ['#BA0C2F', '#D4AF37']
    },
    'ohio-state': {
        name: 'Ohio State Buckeyes',
        conference: 'Big Ten',
        record: '14-2',
        ranking: '#1',
        colors: ['#BB0000', '#FFFFFF']
    },
    'michigan': {
        name: 'Michigan Wolverines',
        conference: 'Big Ten',
        record: '8-5',
        ranking: 'Unranked',
        colors: ['#00274C', '#FFCB05']
    },
    'clemson': {
        name: 'Clemson Tigers',
        conference: 'ACC',
        record: '10-3',
        ranking: '#12',
        colors: ['#F66733', '#522D80']
    },
    'texas': {
        name: 'Texas Longhorns',
        conference: 'SEC',
        record: '13-3',
        ranking: '#3',
        colors: ['#BF5700', '#FFFFFF']
    },
    'florida': {
        name: 'Florida Gators',
        conference: 'SEC',
        record: '8-5',
        ranking: 'Unranked',
        colors: ['#0021A5', '#FA4616']
    },
    'lsu': {
        name: 'LSU Tigers',
        conference: 'SEC',
        record: '9-4',
        ranking: 'Unranked',
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
// Real 2024 season game results for all teams
const teamGameResults = {
    'alabama': [
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
    }],
    'georgia': [
        {
            home: 'georgia',
            away: 'clemson',
            homeScore: 34,
            awayScore: 3,
            date: '2024-08-31'
        },
        {
            home: 'georgia',
            away: 'tennessee-tech',
            homeScore: 48,
            awayScore: 3,
            date: '2024-09-07'
        },
        {
            home: 'kentucky',
            away: 'georgia',
            homeScore: 12,
            awayScore: 13,
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
            home: 'georgia',
            away: 'auburn',
            homeScore: 31,
            awayScore: 13,
            date: '2024-10-05'
        },
        {
            home: 'georgia',
            away: 'mississippi-state',
            homeScore: 41,
            awayScore: 31,
            date: '2024-10-12'
        },
        {
            home: 'texas',
            away: 'georgia',
            homeScore: 15,
            awayScore: 30,
            date: '2024-10-19'
        },
        {
            home: 'georgia',
            away: 'florida',
            homeScore: 34,
            awayScore: 20,
            date: '2024-11-02'
        },
        {
            home: 'ole-miss',
            away: 'georgia',
            homeScore: 28,
            awayScore: 10,
            date: '2024-11-09'
        },
        {
            home: 'georgia',
            away: 'tennessee',
            homeScore: 31,
            awayScore: 17,
            date: '2024-11-16'
        },
        {
            home: 'georgia',
            away: 'massachusetts',
            homeScore: 59,
            awayScore: 21,
            date: '2024-11-23'
        },
        {
            home: 'georgia',
            away: 'georgia-tech',
            homeScore: 44,
            awayScore: 42,
            date: '2024-11-29'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'georgia',
            awayTeam: 'texas',
            homeScore: 22,
            awayScore: 19,
            date: '2024-12-07',
            bowlGame: 'SEC Championship'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'georgia',
            awayTeam: 'notre-dame',
            homeScore: 10,
            awayScore: 23,
            date: '2025-01-02',
            bowlGame: 'Sugar Bowl'
        }
    ],
    'ohio-state': [
        {
            home: 'ohio-state',
            away: 'akron',
            homeScore: 52,
            awayScore: 6,
            date: '2024-08-31'
        },
        {
            home: 'ohio-state',
            away: 'western-michigan',
            homeScore: 56,
            awayScore: 0,
            date: '2024-09-07'
        },
        {
            home: 'ohio-state',
            away: 'marshall',
            homeScore: 49,
            awayScore: 14,
            date: '2024-09-21'
        },
        {
            home: 'michigan-state',
            away: 'ohio-state',
            homeScore: 7,
            awayScore: 38,
            date: '2024-09-28'
        },
        {
            home: 'ohio-state',
            away: 'iowa',
            homeScore: 35,
            awayScore: 7,
            date: '2024-10-05'
        },
        {
            home: 'oregon',
            away: 'ohio-state',
            homeScore: 32,
            awayScore: 31,
            date: '2024-10-12'
        },
        {
            home: 'ohio-state',
            away: 'nebraska',
            homeScore: 21,
            awayScore: 17,
            date: '2024-10-26'
        },
        {
            home: 'penn-state',
            away: 'ohio-state',
            homeScore: 13,
            awayScore: 20,
            date: '2024-11-02'
        },
        {
            home: 'ohio-state',
            away: 'purdue',
            homeScore: 45,
            awayScore: 0,
            date: '2024-11-09'
        },
        {
            home: 'northwestern',
            away: 'ohio-state',
            homeScore: 7,
            awayScore: 31,
            date: '2024-11-16'
        },
        {
            home: 'ohio-state',
            away: 'indiana',
            homeScore: 38,
            awayScore: 15,
            date: '2024-11-23'
        },
        {
            home: 'ohio-state',
            away: 'michigan',
            homeScore: 10,
            awayScore: 13,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'ohio-state',
            awayTeam: 'tennessee',
            homeScore: 42,
            awayScore: 17,
            date: '2024-12-21',
            bowlGame: 'College Football Playoff'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'ohio-state',
            awayTeam: 'oregon',
            homeScore: 41,
            awayScore: 21,
            date: '2025-01-01',
            bowlGame: 'Rose Bowl'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'ohio-state',
            awayTeam: 'texas',
            homeScore: 28,
            awayScore: 14,
            date: '2025-01-10',
            bowlGame: 'Cotton Bowl'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'ohio-state',
            awayTeam: 'notre-dame',
            homeScore: 34,
            awayScore: 23,
            date: '2025-01-20',
            bowlGame: 'CFP National Championship'
        }
    ],
    'michigan': [
        {
            home: 'michigan',
            away: 'fresno-state',
            homeScore: 30,
            awayScore: 10,
            date: '2024-08-31'
        },
        {
            home: 'michigan',
            away: 'texas',
            homeScore: 12,
            awayScore: 31,
            date: '2024-09-07'
        },
        {
            home: 'michigan',
            away: 'arkansas-state',
            homeScore: 28,
            awayScore: 18,
            date: '2024-09-14'
        },
        {
            home: 'michigan',
            away: 'usc',
            homeScore: 27,
            awayScore: 24,
            date: '2024-09-21'
        },
        {
            home: 'michigan',
            away: 'minnesota',
            homeScore: 27,
            awayScore: 24,
            date: '2024-09-28'
        },
        {
            home: 'washington',
            away: 'michigan',
            homeScore: 27,
            awayScore: 17,
            date: '2024-10-05'
        },
        {
            home: 'illinois',
            away: 'michigan',
            homeScore: 21,
            awayScore: 7,
            date: '2024-10-19'
        },
        {
            home: 'michigan',
            away: 'michigan-state',
            homeScore: 24,
            awayScore: 17,
            date: '2024-10-26'
        },
        {
            home: 'michigan',
            away: 'oregon',
            homeScore: 17,
            awayScore: 38,
            date: '2024-11-02'
        },
        {
            home: 'indiana',
            away: 'michigan',
            homeScore: 20,
            awayScore: 15,
            date: '2024-11-09'
        },
        {
            home: 'michigan',
            away: 'northwestern',
            homeScore: 50,
            awayScore: 6,
            date: '2024-11-23'
        },
        {
            home: 'ohio-state',
            away: 'michigan',
            homeScore: 10,
            awayScore: 13,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'michigan',
            awayTeam: 'alabama',
            homeScore: 19,
            awayScore: 13,
            date: '2024-12-31',
            bowlGame: 'ReliaQuest Bowl'
        }
    ],
    'texas': [
        {
            home: 'texas',
            away: 'colorado-state',
            homeScore: 52,
            awayScore: 0,
            date: '2024-08-31'
        },
        {
            home: 'michigan',
            away: 'texas',
            homeScore: 12,
            awayScore: 31,
            date: '2024-09-07'
        },
        {
            home: 'texas',
            away: 'utsa',
            homeScore: 56,
            awayScore: 7,
            date: '2024-09-14'
        },
        {
            home: 'texas',
            away: 'louisiana-monroe',
            homeScore: 51,
            awayScore: 3,
            date: '2024-09-21'
        },
        {
            home: 'texas',
            away: 'mississippi-state',
            homeScore: 35,
            awayScore: 13,
            date: '2024-09-28'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'texas',
            awayTeam: 'oklahoma',
            homeScore: 34,
            awayScore: 3,
            date: '2024-10-12'
        },
        {
            home: 'texas',
            away: 'georgia',
            homeScore: 15,
            awayScore: 30,
            date: '2024-10-19'
        },
        {
            home: 'vanderbilt',
            away: 'texas',
            homeScore: 24,
            awayScore: 27,
            date: '2024-10-26'
        },
        {
            home: 'texas',
            away: 'florida',
            homeScore: 49,
            awayScore: 17,
            date: '2024-11-09'
        },
        {
            home: 'arkansas',
            away: 'texas',
            homeScore: 10,
            awayScore: 20,
            date: '2024-11-16'
        },
        {
            home: 'texas',
            away: 'kentucky',
            homeScore: 31,
            awayScore: 14,
            date: '2024-11-23'
        },
        {
            home: 'texas-am',
            away: 'texas',
            homeScore: 7,
            awayScore: 17,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'georgia',
            awayTeam: 'texas',
            homeScore: 22,
            awayScore: 19,
            date: '2024-12-07',
            bowlGame: 'SEC Championship'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'texas',
            awayTeam: 'clemson',
            homeScore: 38,
            awayScore: 24,
            date: '2024-12-21',
            bowlGame: 'College Football Playoff'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'texas',
            awayTeam: 'arizona-state',
            homeScore: 39,
            awayScore: 31,
            date: '2025-01-01',
            bowlGame: 'Peach Bowl'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'ohio-state',
            awayTeam: 'texas',
            homeScore: 28,
            awayScore: 14,
            date: '2025-01-10',
            bowlGame: 'Cotton Bowl'
        }
    ],
    'clemson': [
        {
            home: 'georgia',
            away: 'clemson',
            homeScore: 34,
            awayScore: 3,
            date: '2024-08-31'
        },
        {
            home: 'clemson',
            away: 'appalachian-state',
            homeScore: 66,
            awayScore: 20,
            date: '2024-09-07'
        },
        {
            home: 'clemson',
            away: 'nc-state',
            homeScore: 59,
            awayScore: 35,
            date: '2024-09-21'
        },
        {
            home: 'clemson',
            away: 'stanford',
            homeScore: 40,
            awayScore: 14,
            date: '2024-09-28'
        },
        {
            home: 'florida-state',
            away: 'clemson',
            homeScore: 13,
            awayScore: 29,
            date: '2024-10-05'
        },
        {
            home: 'clemson',
            away: 'wake-forest',
            homeScore: 49,
            awayScore: 14,
            date: '2024-10-12'
        },
        {
            home: 'clemson',
            away: 'virginia',
            homeScore: 48,
            awayScore: 31,
            date: '2024-10-19'
        },
        {
            home: 'louisville',
            away: 'clemson',
            homeScore: 33,
            awayScore: 21,
            date: '2024-11-02'
        },
        {
            home: 'virginia-tech',
            away: 'clemson',
            homeScore: 17,
            awayScore: 24,
            date: '2024-11-09'
        },
        {
            home: 'clemson',
            away: 'pittsburgh',
            homeScore: 24,
            awayScore: 20,
            date: '2024-11-16'
        },
        {
            home: 'clemson',
            away: 'south-carolina',
            homeScore: 17,
            awayScore: 14,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'clemson',
            awayTeam: 'smu',
            homeScore: 34,
            awayScore: 31,
            date: '2024-12-07',
            bowlGame: 'ACC Championship'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'texas',
            awayTeam: 'clemson',
            homeScore: 38,
            awayScore: 24,
            date: '2024-12-21',
            bowlGame: 'College Football Playoff'
        }
    ],
    'florida': [
        {
            home: 'florida',
            away: 'miami',
            homeScore: 41,
            awayScore: 17,
            date: '2024-08-31'
        },
        {
            home: 'florida',
            away: 'samford',
            homeScore: 45,
            awayScore: 7,
            date: '2024-09-07'
        },
        {
            home: 'texas-am',
            away: 'florida',
            homeScore: 33,
            awayScore: 20,
            date: '2024-09-14'
        },
        {
            home: 'mississippi-state',
            away: 'florida',
            homeScore: 45,
            awayScore: 28,
            date: '2024-09-21'
        },
        {
            home: 'florida',
            away: 'ucf',
            homeScore: 24,
            awayScore: 13,
            date: '2024-10-05'
        },
        {
            home: 'tennessee',
            away: 'florida',
            homeScore: 23,
            awayScore: 17,
            date: '2024-10-12'
        },
        {
            home: 'florida',
            away: 'kentucky',
            homeScore: 48,
            awayScore: 20,
            date: '2024-10-19'
        },
        {
            home: 'georgia',
            away: 'florida',
            homeScore: 34,
            awayScore: 20,
            date: '2024-11-02'
        },
        {
            home: 'texas',
            away: 'florida',
            homeScore: 49,
            awayScore: 17,
            date: '2024-11-09'
        },
        {
            home: 'lsu',
            away: 'florida',
            homeScore: 27,
            awayScore: 16,
            date: '2024-11-16'
        },
        {
            home: 'florida',
            away: 'ole-miss',
            homeScore: 24,
            awayScore: 17,
            date: '2024-11-23'
        },
        {
            home: 'florida-state',
            away: 'florida',
            homeScore: 24,
            awayScore: 31,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'florida',
            awayTeam: 'tulane',
            homeScore: 33,
            awayScore: 8,
            date: '2024-12-20',
            bowlGame: 'Gasparilla Bowl'
        }
    ],
    'lsu': [
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'lsu',
            awayTeam: 'usc',
            homeScore: 20,
            awayScore: 27,
            date: '2024-09-01',
            bowlGame: 'Vegas Kickoff Classic'
        },
        {
            home: 'lsu',
            away: 'nicholls',
            homeScore: 44,
            awayScore: 21,
            date: '2024-09-07'
        },
        {
            home: 'south-carolina',
            away: 'lsu',
            homeScore: 33,
            awayScore: 36,
            date: '2024-09-14'
        },
        {
            home: 'lsu',
            away: 'ucla',
            homeScore: 34,
            awayScore: 17,
            date: '2024-09-21'
        },
        {
            home: 'lsu',
            away: 'south-alabama',
            homeScore: 42,
            awayScore: 10,
            date: '2024-09-28'
        },
        {
            home: 'ole-miss',
            away: 'lsu',
            homeScore: 29,
            awayScore: 26,
            date: '2024-10-12'
        },
        {
            home: 'arkansas',
            away: 'lsu',
            homeScore: 13,
            awayScore: 34,
            date: '2024-10-19'
        },
        {
            home: 'lsu',
            away: 'texas-am',
            homeScore: 38,
            awayScore: 23,
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
            home: 'lsu',
            away: 'florida',
            homeScore: 27,
            awayScore: 16,
            date: '2024-11-16'
        },
        {
            home: 'vanderbilt',
            away: 'lsu',
            homeScore: 17,
            awayScore: 24,
            date: '2024-11-23'
        },
        {
            home: 'lsu',
            away: 'oklahoma',
            homeScore: 37,
            awayScore: 17,
            date: '2024-11-30'
        },
        {
            home: 'neutral',
            away: 'neutral',
            homeTeam: 'lsu',
            awayTeam: 'baylor',
            homeScore: 44,
            awayScore: 31,
            date: '2024-12-31',
            bowlGame: 'Texas Bowl'
        }
    ]
};

// Backward compatibility - keep gameResults for Alabama
const gameResults = teamGameResults.alabama;
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
                // If switching to game results tab, update with current team
                if (targetId === 'game-results') {
                    displayGameResults(currentSelectedTeam);
                }
            }
        });
    });
}

// Global variable to track selected team
let currentSelectedTeam = null;

// Team selector functionality
function initializeTeamSelector() {
    const teamSelect = document.getElementById('teamSelect');
    const teamInfo = document.getElementById('teamInfo');

    teamSelect.addEventListener('change', function() {
        const selectedTeam = this.value;
        currentSelectedTeam = selectedTeam; // Update global variable

        if (selectedTeam && teamData[selectedTeam]) {
            displayTeamInfo(teamData[selectedTeam]);
            teamInfo.style.display = 'block';
            // Update game results if we're on that tab
            if (document.getElementById('game-results').style.display === 'block') {
                displayGameResults(selectedTeam);
            }
        } else {
            teamInfo.style.display = 'none';
            currentSelectedTeam = null;
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
// Display game results for selected team
function displayGameResults(selectedTeam = null) {
    const resultsContainer = document.getElementById('game-results-container');
    if (!resultsContainer) return;

    // If no team selected, show prompt
    if (!selectedTeam || !teamGameResults[selectedTeam]) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>🏈 Game Results & Season Stats</h3>
                <p style="font-size: 16px; margin: 20px 0;">Select a team from the Dashboard to view their complete 2024 season results!</p>
                <p style="color: #666;">Available teams: Alabama, Georgia, Ohio State${Object.keys(teamGameResults).length > 3 ? ', and more' : ''}</p>
            </div>
        `;
        return;
    }

    const team = teamData[selectedTeam];
    const games = teamGameResults[selectedTeam];

    resultsContainer.innerHTML = `<h3>${team.name} 2024 Season Results (${team.record})</h3>`;

    games.forEach(game => {
        // Handle different game formats (regular games vs neutral site)
        let homeTeam, awayTeam, homeTeamName, awayTeamName;

        if (game.homeTeam && game.awayTeam) {
            // Neutral site game
            homeTeam = teamData[game.homeTeam];
            awayTeam = teamData[game.awayTeam];
            homeTeamName = homeTeam ? homeTeam.name : game.homeTeam.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            awayTeamName = awayTeam ? awayTeam.name : game.awayTeam.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        } else {
            // Regular game
            homeTeam = teamData[game.home];
            awayTeam = teamData[game.away];
            homeTeamName = homeTeam ? homeTeam.name : game.home.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            awayTeamName = awayTeam ? awayTeam.name : game.away.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-result');

        // Determine if selected team won
        let teamWon = false;
        if (game.homeTeam && game.awayTeam) {
            // Neutral site
            teamWon = (game.homeTeam === selectedTeam && game.homeScore > game.awayScore) ||
                     (game.awayTeam === selectedTeam && game.awayScore > game.homeScore);
        } else {
            // Regular game
            teamWon = (game.home === selectedTeam && game.homeScore > game.awayScore) ||
                     (game.away === selectedTeam && game.awayScore > game.homeScore);
        }

        gameDiv.style.backgroundColor = teamWon ? '#e8f5e8' : '#ffe8e8';
        gameDiv.style.border = teamWon ? '2px solid #4caf50' : '2px solid #f44336';
        gameDiv.style.margin = '10px 0';
        gameDiv.style.padding = '10px';
        gameDiv.style.borderRadius = '5px';

        let gameTitle = game.bowlGame ? `${game.bowlGame}: ` : '';
        let locationLabel = '';

        if (game.homeTeam && game.awayTeam) {
            locationLabel = ' (Neutral Site)';
        } else if (game.home === selectedTeam) {
            locationLabel = ' (Home)';
        } else {
            locationLabel = ' (Away)';
        }

        gameDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">
                ${gameTitle}<strong>${homeTeamName}</strong> ${game.homeScore} - ${game.awayScore} <strong>${awayTeamName}</strong>
                <span style="float: right; color: ${teamWon ? 'green' : 'red'};">${teamWon ? 'W' : 'L'}</span>
            </div>
            <small style="color: #666;">${new Date(game.date).toLocaleDateString()}${locationLabel}</small>
        `;

        resultsContainer.appendChild(gameDiv);
    });

    // Add season summary based on team
    const summaryDiv = document.createElement('div');
    summaryDiv.style.marginTop = '20px';
    summaryDiv.style.padding = '15px';
    summaryDiv.style.backgroundColor = '#f0f0f0';
    summaryDiv.style.borderRadius = '5px';

    let summaryContent = `
        <h4>Season Summary:</h4>
        <p><strong>Final Record:</strong> ${team.record}</p>
        <p><strong>Conference:</strong> ${team.conference}</p>
        <p><strong>Final Ranking:</strong> ${team.ranking}</p>
    `;

    // Add specific achievements based on team
    if (selectedTeam === 'alabama') {
        summaryContent += `<p><strong>Bowl Game:</strong> ReliaQuest Bowl vs Michigan (Loss 13-19)</p>`;
    } else if (selectedTeam === 'georgia') {
        summaryContent += `
            <p><strong>SEC Champions</strong> - Beat Texas 22-19 in SEC Championship</p>
            <p><strong>Bowl Game:</strong> Sugar Bowl vs Notre Dame (Loss 10-23)</p>
        `;
    } else if (selectedTeam === 'ohio-state') {
        summaryContent += `
            <p><strong>🏆 NATIONAL CHAMPIONS!</strong></p>
            <p><strong>College Football Playoff Path:</strong></p>
            <p>• Beat Tennessee 42-17 (First Round)</p>
            <p>• Beat Oregon 41-21 (Rose Bowl Semifinal)</p>
            <p>• Beat Texas 28-14 (Cotton Bowl Semifinal)</p>
            <p>• Beat Notre Dame 34-23 (Championship Game)</p>
        `;
    } else if (selectedTeam === 'michigan') {
        summaryContent += `
            <p><strong>Upset victories:</strong> Beat Ohio State 13-10 (4th straight win vs OSU)</p>
            <p><strong>Bowl Game:</strong> ReliaQuest Bowl vs Alabama (Win 19-13)</p>
            <p><strong>Historic Achievement:</strong> Only program to beat Alabama twice in same calendar year</p>
        `;
    } else if (selectedTeam === 'texas') {
        summaryContent += `
            <p><strong>SEC Debut Season</strong> - First year in SEC (7-1 conference record)</p>
            <p><strong>Ranked #1 in September</strong> - First time since 2008</p>
            <p><strong>College Football Playoff:</strong></p>
            <p>• Beat Clemson 38-24 (First Round)</p>
            <p>• Beat Arizona State 39-31 (Peach Bowl)</p>
            <p>• Lost to Ohio State 14-28 (Cotton Bowl)</p>
        `;
    } else if (selectedTeam === 'clemson') {
        summaryContent += `
            <p><strong>ACC Champions</strong> - Beat SMU 34-31 in ACC Championship</p>
            <p><strong>College Football Playoff:</strong> Lost to Texas 24-38 (First Round)</p>
        `;
    } else if (selectedTeam === 'florida') {
        summaryContent += `
            <p><strong>Bowl Game:</strong> Gasparilla Bowl vs Tulane (Win 33-8)</p>
            <p><strong>Rivalry Victory:</strong> Beat Florida State 31-24</p>
        `;
    } else if (selectedTeam === 'lsu') {
        summaryContent += `
            <p><strong>Bowl Game:</strong> Texas Bowl vs Baylor (Win 44-31)</p>
            <p><strong>Season opener:</strong> Vegas Kickoff Classic vs USC (Loss 20-27)</p>
        `;
    }

    summaryDiv.innerHTML = summaryContent;
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
