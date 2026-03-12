const fs = require('fs');

// 1. contact.html
let contact = fs.readFileSync('contact.html', 'utf8');

contact = contact.replace(/<h1>Contact Us<\/h1>/, '<h1>Connect With Strativa Intelligence</h1>');
contact = contact.replace(/<p>Get in touch with our team of lead analysts to discuss customized data solutions tailored just for you.<\/p>/, '<p>If your organization is seeking reliable market intelligence or custom research insights, our team would be happy to discuss your requirements.</p>');

contact = contact.replace(/<h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Let's Talk.<\/h2>\s*<p style="margin-bottom: 2rem;">Please fill out the form specifying your interest or query, and our experts\s*will get back to you within 24 hours.<\/p>\s*<div style="margin-bottom: 1.5rem;">\s*<h4 style="margin-bottom: 0.5rem; font-weight: 600;">Office Address<\/h4>\s*<p class="text-light">100 Market Research Blvd,<br>Suite 400<br>Pune, NY 10001<\/p>\s*<\/div>\s*<div style="margin-bottom: 1.5rem;">\s*<h4 style="margin-bottom: 0.5rem; font-weight: 600;">Contact Details<\/h4>\s*<p class="text-light">Email: info@strativaintelligence.com<br>Phone: 8007066042<\/p>\s*<\/div>/, `<h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Let's Talk.</h2>
          <p style="margin-bottom: 2rem;">For research inquiries and collaboration opportunities, please fill out the form specifying your interest or query, and our experts will get back to you within 24 hours.</p>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Contact Details</h4>
            <p class="text-light">Email: strativa.insights@gmail.com</p>
          </div>`);

fs.writeFileSync('contact.html', contact);
console.log('contact.html updated');

// 2. report.html
let report = fs.readFileSync('report.html', 'utf8');

report = report.replace(/<h1 class="text-white" style="margin-bottom: 1rem;">Global Artificial Intelligence Market Analysis & Forecast\s*2026-2032<\/h1>\s*<p style="color: #cbd5e1; font-size: 1.125rem;">Published: March 2026 \| Format: PDF \| Pages: 154<\/p>/, `<h1 class="text-white" style="margin-bottom: 1rem;">Strategic Intelligence Reports</h1>
      <p style="color: #cbd5e1; font-size: 1.125rem;">Published: March 2026 | Format: PDF | Pages: 120</p>`);

report = report.replace(/<h2>Report Overview<\/h2>\s*<p>This template page represents how a single report will look once you upload your content. The Artificial\s*Intelligence market is poised to experience massive shifts due to innovations in NLP, deep learning, and\s*robust neural architectures.<\/p>\s*<p>Our comprehensive study breaks down the historical performance, evaluates key growth drivers and\s*restraints, and provides highly reliable CAGR forecasts for the upcoming five fiscal years.<\/p>\s*<h3 class="mt-4">Key Highlights Include:<\/h3>\s*<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 2rem;">\s*<li class="mb-2">Breakdown of software, hardware, and services markets.<\/li>\s*<li class="mb-2">Geographical analysis covering North America, Europe, APAC, and RoW.<\/li>\s*<li class="mb-2">Profiles of top 15 leading corporations guiding the market forces.<\/li>\s*<\/ul>/, `<h2>Report Overview</h2>
          <p>Our Strategic Intelligence Reports are personalized research studies designed specifically for organizations seeking deeper market understanding.</p>
          <p>These reports combine market analysis, competitor intelligence, and future trend evaluation to support high-level strategic planning and investment decisions.</p>

          <h3 class="mt-4">Organizations use these reports to support:</h3>
          <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 2rem;">
            <li class="mb-2">market entry strategies</li>
            <li class="mb-2">new product development</li>
            <li class="mb-2">industry expansion planning</li>
            <li class="mb-2">competitive positioning</li>
          </ul>`);

fs.writeFileSync('report.html', report);
console.log('report.html updated');

// 3. reports.html
let reportsHtml = fs.readFileSync('reports.html', 'utf8');
reportsHtml = reportsHtml.replace(/<div class="report-meta mb-2">\s*<span class="report-tag">Technology<\/span>\s*<span>Published: March 2026<\/span>\s*<\/div>\s*<h3 style="margin-top: 0.5rem;"><a href="report.html" class="text-dark">Global Artificial Intelligence Market\s*Analysis & Forecast 2026-2032<\/a><\/h3>\s*<p>A comprehensive overview of AI adoption across sectors, analyzing growth drivers, restraints, and\s*competitive landscapes.<\/p>/, `<div class="report-meta mb-2">
            <span class="report-tag">Strategic Content</span>
            <span>Published: March 2026</span>
          </div>
          <h3 style="margin-top: 0.5rem;"><a href="report.html" class="text-dark">Strategic Intelligence Reports</a></h3>
          <p>Personalized research studies combining market analysis, competitor intelligence, and future trend evaluation for high-level strategic planning.</p>`);

fs.writeFileSync('reports.html', reportsHtml);
console.log('reports.html updated');
