const fs = require('fs');

// =========================================================
// 1. SERVICES.HTML - Replace entire services grid section
// =========================================================
let services = fs.readFileSync('services.html', 'utf8');

// Find start and end markers
const gridStart = services.indexOf('<div class="services-grid">');
const gridEnd = services.indexOf('</div>', services.indexOf('<h3>Customized Solutions</h3>')) + 6;

if (gridStart !== -1 && gridEnd > gridStart) {
  const newGrid = `<div class="services-grid">
        <div class="service-card" style="box-shadow: var(--shadow-md);">
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
        </div>
      </div>`;

  services = services.substring(0, gridStart) + newGrid + services.substring(gridEnd);
  fs.writeFileSync('services.html', services);
  console.log('services.html: grid updated OK');
} else {
  console.log('services.html: grid markers not found. gridStart=' + gridStart + ' gridEnd=' + gridEnd);
}

// =========================================================
// 2. CONTACT.HTML
// =========================================================
let contact = fs.readFileSync('contact.html', 'utf8');

// Update page <h1>
contact = contact.replace('<h1>Contact Us</h1>', '<h1>Connect With Strativa Intelligence</h1>');
contact = contact.replace(
  'Get in touch with our team of lead analysts to discuss customized data solutions tailored just for you.',
  'If your organization is seeking reliable market intelligence or custom research insights, our team would be happy to discuss your requirements.'
);

// Find and replace the info block (from Let's Talk to closing </div>)
const infoStart = contact.indexOf('<h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Let\'s Talk.');
const infoEnd = contact.indexOf('</div>', contact.indexOf('Phone: 8007066042')) + 6;

if (infoStart !== -1 && infoEnd > infoStart) {
  const newInfo = `<h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Let's Talk.</h2>
          <p style="margin-bottom: 2rem;">For research inquiries and collaboration opportunities, please fill out the form specifying your interest or query, and our experts will get back to you within 24 hours.</p>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Contact Details</h4>
            <p class="text-light">Email: strativa.insights@gmail.com</p>
          </div>`;
  contact = contact.substring(0, infoStart) + newInfo + contact.substring(infoEnd);
  console.log('contact.html: info block updated OK');
} else {
  console.log('contact.html: info block not found. Start=' + infoStart + ' End=' + infoEnd);
}

fs.writeFileSync('contact.html', contact);

// =========================================================
// 3. REPORT.HTML
// =========================================================
let report = fs.readFileSync('report.html', 'utf8');

// Replace report header
const reportH1Start = report.indexOf('<h1 class="text-white"');
const reportH1End = report.indexOf('</p>', report.indexOf('Pages: 154')) + 4;

if (reportH1Start !== -1 && reportH1End > reportH1Start) {
  const newHeader = `<h1 class="text-white" style="margin-bottom: 1rem;">Strategic Intelligence Reports</h1>
      <p style="color: #cbd5e1; font-size: 1.125rem;">Published: March 2026 | Format: PDF | Pages: 120</p>`;
  report = report.substring(0, reportH1Start) + newHeader + report.substring(reportH1End);
  console.log('report.html: header updated OK');
} else {
  console.log('report.html: header not found');
}

// Replace report overview
const overviewStart = report.indexOf('<h2>Report Overview</h2>');
const overviewEnd = report.indexOf('</ul>', report.indexOf('Profiles of top 15')) + 5;

if (overviewStart !== -1 && overviewEnd > overviewStart) {
  const newOverview = `<h2>Report Overview</h2>
          <p>Our Strategic Intelligence Reports are personalized research studies designed specifically for organizations seeking deeper market understanding.</p>
          <p>These reports combine market analysis, competitor intelligence, and future trend evaluation to support high-level strategic planning and investment decisions.</p>

          <h3 class="mt-4">Organizations use these reports to support:</h3>
          <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 2rem;">
            <li class="mb-2">market entry strategies</li>
            <li class="mb-2">new product development</li>
            <li class="mb-2">industry expansion planning</li>
            <li class="mb-2">competitive positioning</li>
          </ul>`;
  report = report.substring(0, overviewStart) + newOverview + report.substring(overviewEnd);
  console.log('report.html: overview updated OK');
} else {
  console.log('report.html: overview not found');
}

fs.writeFileSync('report.html', report);

// =========================================================
// 4. REPORTS.HTML - Update listing card
// =========================================================
let reports = fs.readFileSync('reports.html', 'utf8');

const tagStart = reports.indexOf('<span class="report-tag">Technology</span>');
const cardEnd = reports.indexOf('</p>', reports.indexOf('competitive landscapes.')) + 4;

if (tagStart !== -1 && cardEnd > tagStart) {
  const newCard = `<span class="report-tag">Strategic Content</span>
            <span>Published: March 2026</span>
          </div>
          <h3 style="margin-top: 0.5rem;"><a href="report.html" class="text-dark">Strategic Intelligence Reports</a></h3>
          <p>Personalized research studies combining market analysis, competitor intelligence, and future trend evaluation for high-level strategic planning.</p>`;
  const blockStart = tagStart;
  reports = reports.substring(0, blockStart) + newCard + reports.substring(cardEnd);
  console.log('reports.html: card updated OK');
} else {
  console.log('reports.html: card not found');
}

fs.writeFileSync('reports.html', reports);
console.log('\nAll done!');
