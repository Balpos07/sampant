// Header content with theme toggle
const headerContent = `
    <nav>
        <div class="nav-content">
            <a href="#" class="logo">Sampant</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="fuzzy.html">Fuzzy Delivery Services</a>
                <a href="farm.html">Farms</a>
                <a href="tech.html">Tech & Finance</a>
                <a href="about.html">About us</a>
                <a href="#contact">Contact</a>
            </div>
            <button class="theme-toggle" aria-label="Toggle theme">
                <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
            <div class="menu-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
        </div>
    </nav>
`;

// Footer content
const footerContent = `
   <footer>
    <div class="footer-content">
        <div class="footer-left">
            <h3>Sampant</h3>
            <p>1234 Street Name, City, State, 12345</p>
            <p>Phone: (123) 456-7890</p>
        </div>
        <div class="footer-links">
            <div class="footer-column">
                <h4>Company</h4>
                <a href="about.html">About Us</a>
                <a href="fuzzy.html">Fuzzy Delivery Services</a>
                <a href="farm.html">Farm</a>
                <a href="tech.html">Tech & Finance</a>
            </div>
            <div class="footer-column">
                <h4>Socials</h4>
                <a href="/facebook">Facebook</a>
                <a href="/twitter">Twitter</a>
                <a href="/instagram">Instagram</a>
            </div>
            <div class="footer-column">
                <h4>Others</h4>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/faq">FAQ</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Your Website. All rights reserved.</p>
    </div>
</footer>
`;

// Insert header and footer into the page
document.getElementById('header-container').innerHTML = headerContent;
document.getElementById('footer-container').innerHTML = footerContent;