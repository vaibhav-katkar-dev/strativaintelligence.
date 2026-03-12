const fs = require('fs');
let html = fs.readFileSync('services.html', 'utf8');
const startIndex = html.indexOf('<div class="service-card"');
const endIndex = html.indexOf('</div>\n    </div>\n  </section>');
if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3>Market Research</h3>
          <p>Our market research services help organizations understand market size, customer demand, growth potential, and key drivers shaping industry development. Through detailed analysis, we provide insights that help businesses identify opportunities and make informed strategic decisions.</p>
        </div>

        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Industry Intelligence</h3>
          <p>Industry intelligence provides a deeper understanding of sector dynamics, regulatory developments, and market structure. Our analysis helps organizations stay informed about evolving industry conditions and emerging market opportunities.</p>
        </div>

        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3>Competitive Intelligence</h3>
          <p>Understanding competitors is essential for effective strategy. We provide competitive intelligence that analyzes competitor positioning, market strategies, product development, and industry influence to support smarter strategic planning.</p>
        </div>

        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Market Trend Analysis</h3>
          <p>Markets evolve continuously as technology, consumer behavior, and global economic conditions change. Our trend analysis identifies emerging patterns, innovation trends, and future growth opportunities that may shape industries over the coming years.</p>
        </div>
        
        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h3>Custom Research Reports</h3>
          <p>Every organization faces unique strategic questions. We offer custom research reports tailored to specific industries, markets, and business challenges. These projects are designed to provide targeted insights that address the exact needs of our clients.</p>
        </div>

        <div class="service-card" style="box-shadow: var(--shadow-md);">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3>Strategic Intelligence Reports</h3>
          <p>Personalized research studies designed for organizations seeking deeper market understanding. These reports combine market analysis, competitor intelligence, and future trend evaluation to support high-level strategic planning and investment decisions.</p>
        </div>\n      </div>\n    </div>\n  </section>`;
  html = html.substring(0, startIndex) + replacement + html.substring(endIndex + 29);
  fs.writeFileSync('services.html', html);
  console.log('Services matched and updated successfully');
} else {
  console.log('Could not match bounds in services.html');
}
