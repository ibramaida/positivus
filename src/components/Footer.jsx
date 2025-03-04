import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-5 grid-rows-3">
        <div></div>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Use casess</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div>
          <i class="bx bxl-linkedin"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
        </div>
        <div>
          <h4>Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div>
          <input type="email" />
          <button className="btn">Subscribe to news</button>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div>
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
