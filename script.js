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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTeamSelector();
    initializeTeamComparison();
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

// Team comparison functionality
function initializeTeamComparison() {
    const teamASelect = document.getElementById('teamA');
    const teamBSelect = document.getElementById('teamB');
    const comparisonResults = document.getElementById('comparisonResults');
    
    if (teamASelect && teamBSelect) {
        teamASelect.addEventListener('change', updateComparison);
        teamBSelect.addEventListener('change', updateComparison);
    }
}

function updateComparison() {
    const teamAKey = document.getElementById('teamA').value;
    const teamBKey = document.getElementById('teamB').value;
    const comparisonResults = document.getElementById('comparisonResults');
    
    if (teamAKey && teamBKey && teamAKey !== teamBKey) {
        const teamA = teamData[teamAKey];
        const teamB = teamData[teamBKey];
        
        displayComparisonResults(teamA, teamB);
        comparisonResults.style.display = 'flex';
    } else {
        comparisonResults.style.display = 'none';
    }
}

function displayComparisonResults(teamA, teamB) {
    // Update Team A
    document.getElementById('teamAName').textContent = teamA.name;
    document.getElementById('teamARecord').textContent = teamA.record;
    document.getElementById('teamAConference').textContent = teamA.conference;
    document.getElementById('teamARanking').textContent = teamA.ranking;
    
    // Update Team B
    document.getElementById('teamBName').textContent = teamB.name;
    document.getElementById('teamBRecord').textContent = teamB.record;
    document.getElementById('teamBConference').textContent = teamB.conference;
    document.getElementById('teamBRanking').textContent = teamB.ranking;
    
    // Apply team colors
    const teamACard = document.getElementById('teamACard');
    const teamBCard = document.getElementById('teamBCard');
    
    teamACard.style.background = `linear-gradient(135deg, ${teamA.colors[0]}15 0%, ${teamA.colors[1]}15 100%)`;
    teamACard.style.borderLeftColor = teamA.colors[0];
    
    teamBCard.style.background = `linear-gradient(135deg, ${teamB.colors[0]}15 0%, ${teamB.colors[1]}15 100%)`;
    teamBCard.style.borderLeftColor = teamB.colors[0];
    
    // Determine winner based on wins
    const teamAWins = parseInt(teamA.record.split('-')[0]);
    const teamBWins = parseInt(teamB.record.split('-')[0]);
    
    const winnerText = document.getElementById('winnerText');
    if (teamAWins > teamBWins) {
        winnerText.textContent = `${teamA.name} has more wins`;
        winnerText.style.color = teamA.colors[0];
    } else if (teamBWins > teamAWins) {
        winnerText.textContent = `${teamB.name} has more wins`;
        winnerText.style.color = teamB.colors[0];
    } else {
        winnerText.textContent = 'Both teams have equal wins';
        winnerText.style.color = '#333';
    }
}

// Placeholder functions for future features
function addPlayerStats() {
    console.log('Player stats form will be implemented by Brother');
}

function displayGameResults() {
    console.log('Game results will be implemented by Dad');
}

// Export functions for potential use by other team members
window.FootballTracker = {
    teamData,
    addPlayerStats,
    displayGameResults,
    formatNumber,
    getCurrentSeason
};
