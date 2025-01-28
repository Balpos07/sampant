// Read More Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const extendedText = document.querySelector('.extended-text');

    readMoreBtn.addEventListener('click', () => {
        extendedText.classList.toggle('show');
        readMoreBtn.textContent = extendedText.classList.contains('show') ? 'Read Less' : 'Read More';
    });

    // Generate additional profile cards
    const teamGrid = document.querySelector('.team-grid');
    const additionalTeamMembers = [
        {
            name: 'Jane Smith',
            position: 'Chief Technology Officer',
            image: '/api/placeholder/300/300',
            description: 'Jane leads our technical initiatives with expertise in emerging technologies and innovation.',
        },
        {
            name: 'Michael Johnson',
            position: 'Head of Operations',
            image: '/api/placeholder/300/300',
            description: 'Michael ensures smooth operations and efficient processes across all departments.',
        },
        {
            name: 'Sarah Williams',
            position: 'Head of Marketing',
            image: '/api/placeholder/300/300',
            description: 'Sarah drives our marketing strategies with creativity and data-driven insights.',
        },
        {
            name: 'David Brown',
            position: 'Head of Finance',
            image: '/api/placeholder/300/300',
            description: 'David manages our financial planning and ensures sustainable growth.',
        },
        {
            name: 'Emily Davis',
            position: 'Head of Human Resources',
            image: '/api/placeholder/300/300',
            description: 'Emily fosters our company culture and leads talent development initiatives.',
        }
    ];

    additionalTeamMembers.forEach(member => {
        teamGrid.innerHTML += `
            <div class="profile-card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p>${member.position}</p>
                    </div>
                    <div class="card-back">
                        <h3>${member.name}</h3>
                        <p>${member.description}</p>
                        <div class="social-links">
                            <a href="#" class="social-icon">📱</a>
                            <a href="#" class="social-icon">📧</a>
                            <a href="#" class="social-icon">💼</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
});