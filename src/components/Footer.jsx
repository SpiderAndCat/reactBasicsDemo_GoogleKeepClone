import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer>
                <p>A SpiderAndCat Demo</p>
                <p>Copyright &copy; {currentYear}</p>
            </footer>
        </div>
    );
}

export default Footer;