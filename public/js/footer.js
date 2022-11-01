const createFooter = () => {
    let footer = document.querySelector('.footerclass');

    footer.innerHTML = `
    <div class="footer-main">
    <div class="footer-section">
        <div class="footer-content">
            <h4>Ressources</h4>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
        </div>
    </div>
    <div class="footer-section">
        <div class="footer-content">
            <h4>Legal</h4>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
        </div>
    </div>
    <div class="footer-section">
        <div class="footer-content">
            <h4>Contact us</h4>
            <div class="socials">
                <a href="#"><i class="fa fa-twitter-square" id="twitter" aria-label="Twitter"></i></i></a>
                <a href="#"><i class="fa fa-instagram" id="insta" aria-label="Instagram"></i></a>
                <a href="#"><i class="fa fa-facebook-square" id="facebook" aria-label="Facebook"></i></a>
                <a href="#"><i class="fa fa-twitch" id="twitch" aria-label="Twitch"></i></a>
            </div>
            <p class="copyright">© louvalman 2022</p>
        </div>
    </div>
</div>
    `;
}

createFooter();