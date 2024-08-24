import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-img"></div> 
      <div className="bg-footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="https://oceana.org/marine-life/" target="_blank" rel="noopener noreferrer">Marine Life Encyclopedia</a></li>
            <li><a href="https://unsplash.com/s/photos/sea-animal" target="_blank" rel="noopener noreferrer">Unsplash.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Marine_life" target="_blank" rel="noopener noreferrer">Study Marine Life</a></li>
            <li><a href="https://www.treehugger.com/ocean-creatures-live-total-darkness-4869267" target="_blank" rel="noopener noreferrer">16 Deep Sea Creatures That Live in Total Darkness</a></li>
            <li><a href="https://www.youtube.com/watch?v=u67T3SLhcvw" target="_blank" rel="noopener noreferrer">Learn Sea Animals for Kids </a></li>
            <li><a href="https://www.natgeokids.com/uk/discover/animals/sea-life/strange-sea-creatures/" target="_blank" rel="noopener noreferrer">The Ocean’s Weirdest Creatures!</a></li>
                        
          </ul>
        </div>

        <div className="footer-info">
        <h4>About Us</h4>
        <p>We are dedicated to sharing knowledge about the incredible life beneath the waves. Explore our resources on ocean conservation, sea animals, and how you can contribute to protecting our oceans.</p>
        <p>Join us in learning and spreading awareness about the marine world and its conservation.</p>
        <h5>SAHIL SHARMA</h5>
      </div>
        <div className="footer-socials">
          <h4> </h4>
          {/* <h4>Follow Us</h4> */}
          <div className="social-icons">
          
          <a href="https://www.instagram.com/ssahilsharma_/" target="_blank" rel="noopener noreferrer">          
            <button class="button">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
            </button>
          </a> 

          <a href="https://www.linkedin.com/in/sahil-sharma-34989519a/" target="_blank" rel="noopener noreferrer">          
             <button class="button">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
             </button>
          </a>
          <a href="https://medium.com/@krsahilsharma07" target="_blank" rel="noopener noreferrer">          
             <button class="button">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M 18.998047 15 A 17.002 17.002 0 0 0 18.998047 49.003906 A 17.002 17.002 0 0 0 18.998047 15 z M 45.498047 16 A 8.502 16.002 0 0 0 45.498047 48.003906 A 8.502 16.002 0 0 0 45.498047 16 z M 58.5 17 A 3.5 15.002 0 1 0 58.5 47.003906 A 3.5 15.002 0 1 0 58.5 17 z"></path>
</svg>  
           </button>
           </a>


        <a href="mailto:krsahilsharma07@gmail.com" target="_blank" rel="noopener noopener">
        <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<ellipse cx="32" cy="61" opacity=".3" rx="23" ry="3"></ellipse><path fill="#98c900" d="M58,24l-12,8v17c0,1.105,0.895,2,2,2h4c3.314,0,6-2.686,6-6l0-20.999L58,24z"></path><path fill="#37d0ee" d="M7,24l12,8v17c0,1.105-0.895,2-2,2h-4c-3.314,0-6-2.686-6-6l0-20.999L7,24z"></path><path fill="#ffce29" d="M58,16.362c0-3.513-3.961-5.566-6.831-3.54L46,16.471V32l12-7.999L58,16.362z"></path><path fill="#cd2e42" d="M7,16.362c0-3.513,3.961-5.566,6.831-3.54L19,16.471V32L7,24.001L7,16.362z"></path><path fill="#fd3c4f" d="M32.5,26L19,16.47V32l10.763,7.175c1.658,1.105,3.818,1.105,5.476,0L46,32V16.471L32.5,26z"></path><path d="M58,26.001v-1.966c-2.343,1.492-5,2.718-5,7.808L53,45c0,2.017,1.201,3.745,2.921,4.535 C57.192,48.435,58,46.813,58,45L58,26.001z" opacity=".15"></path><path fill="#fff" d="M23.085,19.354L19,16.47v0l-5.169-3.649c-2.87-2.026-6.831,0.027-6.831,3.54l0,7.639 L7,35c0,0,0,0,0,0c2.762,0,5-2.239,5-5l0-10.42c0-0.811,0.914-1.285,1.577-0.817l2.541,1.793 C18.372,22.147,21.493,21.609,23.085,19.354z" opacity=".3"></path><line x1="10.5" x2="10.5" y1="19.5" y2="22.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
        </svg>
        </button>
        </a>
        <a href='https://github.com/sahil1476/'target="_blank" rel="noopener noreferrer">  
        <button class="button">
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="w-6 h-6 text-gray-800 dark:text-white"
  >
    <path
      clip-rule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      fill-rule="evenodd"
    ></path>
  </svg>
        </button>
        </a>
        <a href='https://notes-aplicationn.netlify.app/'target="_blank" rel="noopener noreferrer">  
        <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
        <linearGradient id="0TwvTgl96AQBADo69wgd-a_VTyfYNEku2Oc_gr1" x1="40" x2="40" y1="15" y2="53.168" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#0TwvTgl96AQBADo69wgd-a_VTyfYNEku2Oc_gr1)" points="37,24.009 40,22 43,24.009 43,19.504 43,14 40,14 37,14 37,19.504"></polygon><linearGradient id="0TwvTgl96AQBADo69wgd-b_VTyfYNEku2Oc_gr2" x1="22" x2="22" y1="15" y2="53.168" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#0TwvTgl96AQBADo69wgd-b_VTyfYNEku2Oc_gr2)" points="25,51 19,54 19,14 25,14"></polygon><linearGradient id="0TwvTgl96AQBADo69wgd-c_VTyfYNEku2Oc_gr3" x1="33" x2="33" y1="13" y2="55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#0TwvTgl96AQBADo69wgd-c_VTyfYNEku2Oc_gr3)" d="M20,54l-2,1V14c0-0.553,0.447-1,1-1h28c0.553,0,1,0.447,1,1v24h-2V15H20V54z"></path><g><linearGradient id="0TwvTgl96AQBADo69wgd-d_VTyfYNEku2Oc_gr4" x1="34" x2="34" y1="6.685" y2="57.315" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#0TwvTgl96AQBADo69wgd-d_VTyfYNEku2Oc_gr4)" d="M54.635,28.49L50,25.877v2.296l3.651,2.059C54.84,30.903,55,31.503,55,32 c0,0.495-0.16,1.093-1.346,1.766L16.352,54.798c-0.681,0.387-1.134,0.518-1.794,0.518c-1.287,0-1.558-0.971-1.558-1.785V10.47 c0-0.814,0.271-1.785,1.558-1.785c0.66,0,1.113,0.131,1.797,0.52L19.54,11h4.072L17.34,7.464c-0.822-0.468-1.61-0.779-2.782-0.779 C12.43,6.685,11,8.206,11,10.47V53.53c0,2.264,1.43,3.785,3.558,3.785c1.172,0,1.96-0.312,2.779-0.777l37.302-21.031 C55.223,35.175,57,34.167,57,32C57,29.827,55.221,28.821,54.635,28.49z"></path></g>
        </svg>
        </button>
        </a>
        
        </div>
    </div>       
</div>
      <div className="footer-bottom">
        <p> &copy; 2024 Sea World. All Rights Reserved.</p>
      </div>

    </div>  
    </footer>
  );
};

export default Footer;
