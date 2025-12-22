<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Automotive Predictive Maintenance System</title>
  <script src="/_sdk/element_sdk.js"></script>
  <script src="/_sdk/data_sdk.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <style>
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      overflow-x: hidden;
    }

    html, body {
      height: 100%;
      width: 100%;
    }

    .main-wrapper {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* Hero Section */
    .hero {
      min-height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      max-width: 1200px;
      width: 100%;
      text-align: center;
      z-index: 2;
      position: relative;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .hero p {
      font-size: 1.5rem;
      margin: 0 0 3rem 0;
      opacity: 0.9;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .cta-button {
      display: inline-block;
      padding: 1.25rem 3rem;
      font-size: 1.125rem;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    .cta-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    /* Benefits Section */
    .benefits {
      padding: 6rem 2rem;
    }

    .benefits-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.75rem;
      font-weight: 700;
      text-align: center;
      margin: 0 0 4rem 0;
      letter-spacing: -0.01em;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .benefit-card {
      padding: 2.5rem;
      border-radius: 16px;
      transition: all 0.3s ease;
      border: 2px solid;
    }

    .benefit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .benefit-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
    }

    .benefit-card p {
      font-size: 1.125rem;
      margin: 0;
      line-height: 1.7;
      opacity: 0.85;
    }

    /* How It Works Section */
    .how-it-works {
      padding: 6rem 2rem;
    }

    .how-it-works-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-top: 4rem;
    }

    .step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 800;
      margin: 0 auto 1.5rem;
      border: 3px solid;
    }

    .step h3 {
      font-size: 1.375rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
    }

    .step p {
      font-size: 1.0625rem;
      line-height: 1.7;
      opacity: 0.85;
      margin: 0;
    }

    /* Demo and ROI Section */
    .demo-roi-section {
      padding: 6rem 2rem;
    }

    .demo-roi-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .action-buttons-container {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      margin-top: 3rem;
      flex-wrap: wrap;
    }

    .action-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3.5rem 5rem;
      border: 3px solid;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      background: transparent;
      min-width: 320px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .action-button:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
    }

    .action-icon {
      font-size: 5rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .action-text {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    .demo-card,
    .roi-card {
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
      border: 2px solid;
      transition: all 0.3s ease;
    }

    .card-icon {
      font-size: 4rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .demo-card h3,
    .roi-card h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      text-align: center;
    }

    .demo-card p,
    .roi-card p {
      text-align: center;
      opacity: 0.85;
      margin-bottom: 2rem;
      font-size: 1.0625rem;
    }

    .calculator-inputs {
      display: grid;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .input-group label {
      font-weight: 600;
      font-size: 1rem;
    }

    .input-group input {
      padding: 1rem;
      font-size: 1rem;
      border: 2px solid;
      border-radius: 10px;
      background: transparent;
      transition: all 0.3s ease;
    }

    .input-group input:focus {
      outline: none;
      transform: translateY(-2px);
    }

    .calculate-btn {
      width: 100%;
      padding: 1.25rem;
      font-size: 1.125rem;
      font-weight: 700;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 2rem;
    }

    .calculate-btn:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    .calculate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .roi-results {
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      display: none;
    }

    .roi-results.show {
      display: block;
    }

    .roi-amount {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 1rem 0;
    }

    .roi-description {
      font-size: 1.125rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    /* Forms Section */
    .forms-section {
      padding: 6rem 2rem;
    }

    .forms-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .forms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
      margin-top: 3rem;
    }

    .form-card {
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    }

    .form-card h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
    }

    .form-card p {
      opacity: 0.85;
      margin: 0 0 2rem 0;
      line-height: 1.6;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9375rem;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 0.875rem;
      font-size: 1rem;
      border: 2px solid;
      border-radius: 8px;
      background: transparent;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      transform: translateY(-1px);
    }

    .submit-btn {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-message {
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      margin-top: 1rem;
      display: none;
    }

    .success-message.show {
      display: block;
    }

    /* Technology Section */
    .technology-section {
      padding: 6rem 2rem;
    }

    .technology-container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .section-subtitle {
      font-size: 1.25rem;
      opacity: 0.85;
      margin: -2rem auto 3rem;
      max-width: 700px;
    }

    .tech-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
      margin-top: 3rem;
    }

    .tech-card {
      padding: 3rem 2.5rem;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid;
      text-align: center;
    }

    .tech-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
    }

    .tech-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .tech-card h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
    }

    .tech-card p {
      font-size: 1.125rem;
      opacity: 0.85;
      margin: 0 0 1.5rem 0;
      line-height: 1.6;
    }

    .learn-more {
      font-weight: 600;
      font-size: 1.125rem;
      display: inline-block;
    }

    /* Modal Styles */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      z-index: 1000;
      overflow-y: auto;
      padding: 2rem;
    }

    .modal.show {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .modal-content {
      max-width: 1200px;
      width: 100%;
      border-radius: 20px;
      margin: 2rem auto;
      max-height: 90%;
      overflow-y: auto;
      background-color: #f8f9fa !important;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2.5rem 3rem;
      border-bottom: 2px solid;
      background-color: #f8f9fa !important;
    }

    .modal-header h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0;
      color: #2c2c2c !important;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 3rem;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
      color: #2c2c2c !important;
    }

    .close-btn:hover {
      transform: rotate(90deg);
      background-color: rgba(0, 0, 0, 0.1);
    }

    .modal-body {
      padding: 3rem;
      background-color: #f8f9fa !important;
      color: #2c2c2c !important;
    }

    .modal-intro {
      font-size: 1.25rem;
      line-height: 1.7;
      margin-bottom: 3rem;
      opacity: 1;
      color: #2c2c2c !important;
    }

    /* Sensors Grid */
    .sensors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }

    .sensor-item {
      padding: 1.75rem;
      border-radius: 12px;
      border: 2px solid #00e5ff;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background-color: #ffffff !important;
    }

    .sensor-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .sensor-icon-img {
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }

    .sensor-item h4 {
      font-size: 1.125rem;
      font-weight: 700;
      margin: 0 0 0.75rem 0;
      line-height: 1.4;
      color: #2c2c2c !important;
    }

    .sensor-item p {
      font-size: 0.9375rem;
      line-height: 1.6;
      margin: 0;
      opacity: 1;
      color: #4a4a4a !important;
    }

    /* Facilities Grid */
    .facilities-grid {
      display: grid;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .facility-item {
      padding: 2rem;
      border-radius: 12px;
      border: 2px solid #00e5ff;
      transition: all 0.3s ease;
      background-color: #ffffff !important;
    }

    .facility-item:hover {
      transform: translateX(8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .facility-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .facility-header h4 {
      font-size: 1.375rem;
      font-weight: 700;
      margin: 0;
      color: #2c2c2c !important;
    }

    .facility-location {
      padding: 0.4rem 0.9rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      opacity: 1;
      background-color: #00e5ff;
      color: #ffffff !important;
    }

    .facility-item p {
      font-size: 1rem;
      line-height: 1.7;
      margin: 0.5rem 0;
      opacity: 1;
      color: #4a4a4a !important;
    }

    .facility-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .feature-tag {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8125rem;
      font-weight: 600;
      border: 2px solid #00e5ff;
      background-color: #e8f4f8;
      color: #2c2c2c !important;
    }

    /* Global Stats */
    .global-stats {
      padding: 3rem;
      border-radius: 16px;
      margin-top: 3rem;
      background-color: #e8f4f8 !important;
    }

    .global-stats h3 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 2rem 0;
      text-align: center;
      color: #2c2c2c !important;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      line-height: 1;
      color: #00e5ff !important;
    }

    .stat-label {
      font-size: 1.125rem;
      opacity: 1;
      font-weight: 600;
      color: #4a4a4a !important;
    }

    /* ML Models Grid */
    .ml-models-grid {
      display: grid;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .ml-model-item {
      padding: 2rem;
      border-radius: 12px;
      border: 2px solid #7c4dff;
      transition: all 0.3s ease;
      background-color: #ffffff !important;
    }

    .ml-model-item:hover {
      transform: translateX(8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .model-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .model-header h4 {
      font-size: 1.375rem;
      font-weight: 700;
      margin: 0;
      color: #2c2c2c !important;
    }

    .model-type {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      background-color: #7c4dff;
      color: #ffffff !important;
    }

    .ml-model-item p {
      font-size: 1rem;
      line-height: 1.7;
      margin: 0.75rem 0;
      opacity: 1;
      color: #4a4a4a !important;
    }

    /* Edge Benefits */
    .edge-benefits {
      padding: 3rem;
      border-radius: 16px;
      margin-top: 3rem;
      background-color: #e8f4f8 !important;
    }

    .edge-benefits h3 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 2rem 0;
      text-align: center;
      color: #2c2c2c !important;
    }

    .benefits-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .benefit-point {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .benefit-icon-small {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .benefit-point strong {
      display: block;
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      color: #2c2c2c !important;
    }

    .benefit-point p {
      font-size: 0.9375rem;
      line-height: 1.6;
      margin: 0;
      opacity: 1;
      color: #4a4a4a !important;
    }

    /* Footer CTA */
    .footer-cta {
      padding: 6rem 2rem;
      text-align: center;
    }

    .footer-cta-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .footer-cta h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 2rem 0;
      line-height: 1.2;
    }

    /* Hero Video Container */
    .hero-video-container {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      animation: fadeInUp 1s ease-out 0.5s forwards;
    }

    .video-wrapper {
      max-width: 900px;
      width: 100%;
      position: relative;
    }

    .video-placeholder {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 229, 255, 0.3);
      transition: all 0.4s ease;
      cursor: pointer;
    }

    .video-placeholder:hover {
      transform: scale(1.02);
      box-shadow: 0 30px 80px rgba(124, 77, 255, 0.4);
    }

    .video-caption {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.125rem;
      font-weight: 600;
      opacity: 0.9;
    }

    /* Vehicle Showcase - Background */
    .vehicle-showcase {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      flex-wrap: wrap;
      opacity: 0.15;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .vehicle-svg {
      width: 280px;
      height: 140px;
      filter: drop-shadow(0 10px 30px rgba(0, 229, 255, 0.3));
      transition: all 0.4s ease;
    }

    .vehicle-svg:hover {
      transform: translateY(-10px) scale(1.05);
      filter: drop-shadow(0 20px 50px rgba(124, 77, 255, 0.5));
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.25rem;
      }

      .hero p {
        font-size: 1.125rem;
      }

      .vehicle-showcase {
        gap: 1.5rem;
        margin-top: 3rem;
      }

      .vehicle-svg {
        width: 240px;
        height: 120px;
      }

      .section-title {
        font-size: 2rem;
      }

      .benefits-grid,
      .forms-grid {
        grid-template-columns: 1fr;
      }

      .steps {
        grid-template-columns: 1fr;
      }

      .footer-cta h2 {
        font-size: 1.875rem;
      }

      .roi-container {
        padding: 2rem;
      }

      .roi-amount {
        font-size: 2.5rem;
      }

      .tech-cards {
        grid-template-columns: 1fr;
      }

      .modal {
        padding: 1rem;
      }

      .modal-content {
        margin: 1rem auto;
      }

      .modal-header {
        padding: 1.5rem;
      }

      .modal-header h2 {
        font-size: 1.5rem;
      }

      .modal-body {
        padding: 1.5rem;
      }

      .sensors-grid {
        grid-template-columns: 1fr;
      }

      .benefits-list {
        grid-template-columns: 1fr;
      }

      .action-buttons-container {
        flex-direction: column;
        align-items: center;
      }

      .action-button {
        width: 100%;
        max-width: 400px;
      }
    }
  </style>
  <style>@view-transition { navigation: auto; }</style>
  <script src="https://cdn.tailwindcss.com" type="text/javascript"></script>
 </head>
 <body>
  <div class="main-wrapper"><!-- Hero Section -->
   <section class="hero" id="hero">
    <div class="hero-content">
     <h1 id="main-headline">Automotive Vehicle Maintenance System and Proactive Services</h1>
     <p id="hero-subheadline">Reduce downtime by 40%, cut maintenance costs by 30%, and enhance customer satisfaction with our proactive service platform</p><!-- Video Container -->
     <div class="hero-video-container">
      <div class="video-wrapper">
       <svg class="video-placeholder" viewbox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><defs>
         <lineargradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1f3a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0e27;stop-opacity:1" />
         </lineargradient>
         <filter id="videoGlow">
          <fegaussianblur stddeviation="4" result="coloredBlur" />
          <femerge>
           <femergenode in="coloredBlur" />
           <femergenode in="SourceGraphic" />
          </femerge>
         </filter>
        </defs> <!-- Video Background --> <rect width="800" height="450" fill="url(#videoGradient)" rx="20" /> <!-- Futuristic Car Dashboard --> <g transform="translate(50, 50)"><!-- Main Car Silhouette -->
         <path d="M 150 200 Q 180 150 250 140 L 450 140 Q 520 150 550 200 L 580 210 Q 585 210 585 215 L 585 250 Q 585 255 580 255 L 120 255 Q 115 255 115 250 L 115 215 Q 115 210 120 210 Z" fill="#00e5ff" opacity="0.3" stroke="#00e5ff" stroke-width="2" filter="url(#videoGlow)" /> <!-- Monitoring Points -->
         <circle cx="200" cy="180" r="8" fill="#00e5ff">
          <animate attributename="opacity" values="0.3;1;0.3" dur="2s" repeatcount="indefinite" />
         </circle>
         <circle cx="350" cy="160" r="8" fill="#7c4dff">
          <animate attributename="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatcount="indefinite" />
         </circle>
         <circle cx="500" cy="180" r="8" fill="#00e5ff">
          <animate attributename="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatcount="indefinite" />
         </circle> <!-- Data Lines -->
         <line x1="200" y1="180" x2="150" y2="100" stroke="#00e5ff" stroke-width="2" opacity="0.6">
          <animate attributename="opacity" values="0.2;0.8;0.2" dur="2s" repeatcount="indefinite" />
         </line>
         <line x1="350" y1="160" x2="350" y2="80" stroke="#7c4dff" stroke-width="2" opacity="0.6">
          <animate attributename="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.5s" repeatcount="indefinite" />
         </line>
         <line x1="500" y1="180" x2="550" y2="100" stroke="#00e5ff" stroke-width="2" opacity="0.6">
          <animate attributename="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatcount="indefinite" />
         </line> <!-- Info Panels -->
         <rect x="100" y="60" width="120" height="50" rx="8" fill="#1a1f3a" stroke="#00e5ff" stroke-width="2" opacity="0.9" />
         <text x="160" y="82" text-anchor="middle" fill="#00e5ff" font-size="12" font-weight="bold">
          ENGINE
         </text>
         <text x="160" y="98" text-anchor="middle" fill="#e8eaf6" font-size="10">
          Status: Optimal
         </text>
         <rect x="290" y="40" width="120" height="50" rx="8" fill="#1a1f3a" stroke="#7c4dff" stroke-width="2" opacity="0.9" />
         <text x="350" y="62" text-anchor="middle" fill="#7c4dff" font-size="12" font-weight="bold">
          SENSORS
         </text>
         <text x="350" y="78" text-anchor="middle" fill="#e8eaf6" font-size="10">
          30+ Active
         </text>
         <rect x="480" y="60" width="120" height="50" rx="8" fill="#1a1f3a" stroke="#00e5ff" stroke-width="2" opacity="0.9" />
         <text x="540" y="82" text-anchor="middle" fill="#00e5ff" font-size="12" font-weight="bold">
          AI ANALYSIS
         </text>
         <text x="540" y="98" text-anchor="middle" fill="#e8eaf6" font-size="10">
          Real-time
         </text>
        </g> <!-- Bottom Stats Bar --> <g transform="translate(0, 380)">
         <rect x="50" y="0" width="700" height="50" rx="10" fill="#1a1f3a" opacity="0.8" />
         <text x="120" y="25" fill="#00e5ff" font-size="14" font-weight="bold">
          UPTIME
         </text>
         <text x="120" y="40" fill="#e8eaf6" font-size="12">
          99.8%
         </text>
         <text x="300" y="25" fill="#7c4dff" font-size="14" font-weight="bold">
          PREDICTIONS
         </text>
         <text x="300" y="40" fill="#e8eaf6" font-size="12">
          1,247 Today
         </text>
         <text x="500" y="25" fill="#00e5ff" font-size="14" font-weight="bold">
          ALERTS
         </text>
         <text x="500" y="40" fill="#e8eaf6" font-size="12">
          3 Pending
         </text>
         <text x="650" y="25" fill="#7c4dff" font-size="14" font-weight="bold">
          SAVED
         </text>
         <text x="650" y="40" fill="#e8eaf6" font-size="12">
          $45K
         </text>
        </g> <!-- Play Button Overlay --> <circle cx="400" cy="225" r="50" fill="#00e5ff" opacity="0.2" /> <circle cx="400" cy="225" r="40" fill="#00e5ff" opacity="0.4" /> <polygon points="385,210 385,240 415,225" fill="#e8eaf6" />
       </svg>
       <div class="video-caption">
        Live Monitoring Dashboard Demo
       </div>
      </div>
     </div>
    </div><!-- Luxury Cars Background -->
    <div class="vehicle-showcase"><!-- Mercedes-Benz S-Class -->
     <svg class="vehicle-svg" viewbox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><defs>
       <lineargradient id="mercedesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#c0c0c0;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c0c0c0;stop-opacity:1" />
       </lineargradient>
      </defs> <!-- Mercedes Body --> <path d="M 100 140 Q 110 110 150 105 L 350 105 Q 390 110 400 140 L 420 145 L 420 165 L 80 165 L 80 145 Z" fill="url(#mercedesGradient)" stroke="#888" stroke-width="2" /> <!-- Windows --> <path d="M 160 105 L 175 125 L 240 125 L 255 105" fill="rgba(100,100,100,0.4)" stroke="#666" stroke-width="1.5" /> <path d="M 265 105 L 280 125 L 340 125 L 355 105" fill="rgba(100,100,100,0.4)" stroke="#666" stroke-width="1.5" /> <!-- Wheels --> <circle cx="140" cy="165" r="25" fill="#333" stroke="#666" stroke-width="3" /> <circle cx="140" cy="165" r="12" fill="#888" /> <circle cx="360" cy="165" r="25" fill="#333" stroke="#666" stroke-width="3" /> <circle cx="360" cy="165" r="12" fill="#888" /> <!-- Mercedes Star --> <circle cx="410" cy="130" r="8" fill="#c0c0c0" stroke="#888" stroke-width="1" /> <path d="M 410 124 L 410 136 M 405 128 L 415 132 M 405 132 L 415 128" stroke="#333" stroke-width="1.5" />
     </svg><!-- BMW 7 Series -->
     <svg class="vehicle-svg" viewbox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><defs>
       <lineargradient id="bmwGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#2d2d44;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
       </lineargradient>
      </defs> <!-- BMW Body --> <path d="M 95 135 Q 105 105 145 100 L 355 100 Q 395 105 405 135 L 425 140 L 425 165 L 75 165 L 75 140 Z" fill="url(#bmwGradient)" stroke="#444" stroke-width="2" /> <!-- Windows --> <path d="M 155 100 L 170 120 L 235 120 L 250 100" fill="rgba(150,150,180,0.3)" stroke="#555" stroke-width="1.5" /> <path d="M 260 100 L 275 120 L 340 120 L 355 100" fill="rgba(150,150,180,0.3)" stroke="#555" stroke-width="1.5" /> <!-- Wheels --> <circle cx="135" cy="165" r="26" fill="#222" stroke="#555" stroke-width="3" /> <circle cx="135" cy="165" r="13" fill="#666" /> <circle cx="365" cy="165" r="26" fill="#222" stroke="#555" stroke-width="3" /> <circle cx="365" cy="165" r="13" fill="#666" /> <!-- BMW Kidney Grille --> <rect x="405" y="125" width="15" height="20" rx="7" fill="none" stroke="#888" stroke-width="2" /> <rect x="405" y="148" width="15" height="12" rx="6" fill="none" stroke="#888" stroke-width="2" />
     </svg><!-- Dodge Challenger -->
     <svg class="vehicle-svg" viewbox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><defs>
       <lineargradient id="dodgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#8b0000;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#ff0000;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b0000;stop-opacity:1" />
       </lineargradient>
      </defs> <!-- Dodge Body --> <path d="M 90 145 Q 100 115 140 110 L 360 110 Q 400 115 410 145 L 430 150 L 430 170 L 70 170 L 70 150 Z" fill="url(#dodgeGradient)" stroke="#660000" stroke-width="2" /> <!-- Windows --> <path d="M 150 110 L 165 130 L 230 130 L 245 110" fill="rgba(50,50,50,0.5)" stroke="#440000" stroke-width="1.5" /> <path d="M 255 110 L 270 130 L 335 130 L 350 110" fill="rgba(50,50,50,0.5)" stroke="#440000" stroke-width="1.5" /> <!-- Wheels --> <circle cx="130" cy="170" r="28" fill="#1a1a1a" stroke="#660000" stroke-width="3" /> <circle cx="130" cy="170" r="14" fill="#333" /> <circle cx="370" cy="170" r="28" fill="#1a1a1a" stroke="#660000" stroke-width="3" /> <circle cx="370" cy="170" r="14" fill="#333" /> <!-- Racing Stripe --> <rect x="240" y="110" width="20" height="60" fill="rgba(255,255,255,0.3)" />
     </svg><!-- Audi A8 -->
     <svg class="vehicle-svg" viewbox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><defs>
       <lineargradient id="audiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#34495e;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
       </lineargradient>
      </defs> <!-- Audi Body --> <path d="M 92 138 Q 102 108 142 103 L 358 103 Q 398 108 408 138 L 428 143 L 428 168 L 72 168 L 72 143 Z" fill="url(#audiGradient)" stroke="#1a252f" stroke-width="2" /> <!-- Windows --> <path d="M 152 103 L 167 123 L 232 123 L 247 103" fill="rgba(120,140,160,0.3)" stroke="#1a252f" stroke-width="1.5" /> <path d="M 257 103 L 272 123 L 337 123 L 352 103" fill="rgba(120,140,160,0.3)" stroke="#1a252f" stroke-width="1.5" /> <!-- Wheels --> <circle cx="132" cy="168" r="27" fill="#1a1a1a" stroke="#34495e" stroke-width="3" /> <circle cx="132" cy="168" r="13" fill="#555" /> <circle cx="368" cy="168" r="27" fill="#1a1a1a" stroke="#34495e" stroke-width="3" /> <circle cx="368" cy="168" r="13" fill="#555" /> <!-- Audi Rings --> <circle cx="400" cy="135" r="6" fill="none" stroke="#888" stroke-width="1.5" /> <circle cx="410" cy="135" r="6" fill="none" stroke="#888" stroke-width="1.5" />
     </svg>
    </div>
   </section><!-- Benefits Section -->
   <section class="benefits" id="benefits">
    <div class="benefits-container">
     <h2 class="section-title" id="benefits-title">Why Leading Manufacturers Choose Us</h2>
     <div class="benefits-grid">
      <div class="benefit-card"><span class="benefit-icon">💰</span>
       <h3 id="benefit-1-title">Reduce Operational Costs</h3>
       <p id="benefit-1-desc">Save 25-35% on warranty claims and service costs through predictive interventions before failures occur</p>
      </div>
      <div class="benefit-card"><span class="benefit-icon">⚡</span>
       <h3 id="benefit-2-title">Minimize Vehicle Downtime</h3>
       <p id="benefit-2-desc">Prevent unexpected breakdowns with real-time monitoring and proactive maintenance scheduling</p>
      </div>
      <div class="benefit-card"><span class="benefit-icon">📈</span>
       <h3 id="benefit-3-title">Boost Customer Loyalty</h3>
       <p id="benefit-3-desc">Deliver exceptional ownership experience with predictive care that keeps vehicles running smoothly</p>
      </div>
     </div>
    </div>
   </section><!-- How It Works Section -->
   <section class="how-it-works" id="how-it-works">
    <div class="how-it-works-container">
     <h2 class="section-title" id="how-it-works-title">How Our System Works</h2>
     <div class="steps">
      <div class="step">
       <div class="step-number">
        1
       </div>
       <h3 id="step-1-title">Data Collection</h3>
       <p id="step-1-desc">IoT sensors continuously monitor critical vehicle components and performance metrics in real-time</p>
      </div>
      <div class="step">
       <div class="step-number">
        2
       </div>
       <h3 id="step-2-title">AI Analysis</h3>
       <p id="step-2-desc">Machine learning algorithms analyze patterns and predict potential failures before they happen</p>
      </div>
      <div class="step">
       <div class="step-number">
        3
       </div>
       <h3 id="step-3-title">Proactive Alerts</h3>
       <p id="step-3-desc">Automated notifications sent to service centers and vehicle owners with recommended actions</p>
      </div>
      <div class="step">
       <div class="step-number">
        4
       </div>
       <h3 id="step-4-title">Scheduled Service</h3>
       <p id="step-4-desc">Seamless service booking and parts ordering to resolve issues before they impact the driver</p>
      </div>
     </div>
    </div>
   </section><!-- Technology Deep Dive Section -->
   <section class="technology-section" id="technology-section">
    <div class="technology-container">
     <h2 class="section-title">Our Technology Stack</h2>
     <p class="section-subtitle">Explore the sensors and AI models powering our predictive maintenance system</p>
     <div class="tech-cards">
      <div class="tech-card" onclick="showTechDetails('sensors')">
       <div class="tech-icon">
        🔬
       </div>
       <h3>IoT Sensors Network</h3>
       <p>30+ specialized sensors monitoring every critical component</p><span class="learn-more">Learn More →</span>
      </div>
      <div class="tech-card" onclick="showTechDetails('ml-models')">
       <div class="tech-icon">
        🤖
       </div>
       <h3>Edge AI Models</h3>
       <p>Advanced ML algorithms running on edge devices for real-time analysis</p><span class="learn-more">Learn More →</span>
      </div>
      <div class="tech-card" onclick="showTechDetails('facilities')">
       <div class="tech-icon">
        🏭
       </div>
       <h3>Our Facilities</h3>
       <p>State-of-the-art testing and manufacturing centers worldwide</p><span class="learn-more">Learn More →</span>
      </div>
     </div>
    </div>
   </section><!-- Demo and ROI Section -->
   <section class="demo-roi-section" id="demo-roi-section">
    <div class="demo-roi-container">
     <h2 class="section-title">Get Started &amp; Calculate Savings</h2>
     <div class="action-buttons-container"><button class="action-button" onclick="openDemoModal()"> <span class="action-icon">📅</span> <span class="action-text">Schedule a Demo</span> </button> <button class="action-button" onclick="openROIModal()"> <span class="action-icon">💰</span> <span class="action-text">Calculate Your Savings</span> </button>
     </div>
    </div>
   </section><!-- Demo Modal -->
   <div class="modal" id="demo-modal-new">
    <div class="modal-content">
     <div class="modal-header">
      <h2>Schedule a Demo</h2><button class="close-btn" onclick="closeModal('demo-modal-new')">×</button>
     </div>
     <div class="modal-body">
      <p class="modal-intro">See our system in action with a personalized demonstration</p>
      <form id="demo-form-inline" onsubmit="handleDemoSubmit(event)">
       <div class="form-group"><label for="demo-company-inline">Company Name *</label> <input type="text" id="demo-company-inline" required>
       </div>
       <div class="form-group"><label for="demo-name-inline">Contact Name *</label> <input type="text" id="demo-name-inline" required>
       </div>
       <div class="form-group"><label for="demo-email-inline">Email *</label> <input type="email" id="demo-email-inline" required>
       </div>
       <div class="form-group"><label for="demo-phone-inline">Phone</label> <input type="tel" id="demo-phone-inline">
       </div>
       <div class="form-group"><label for="demo-fleet-inline">Fleet Size</label> <select id="demo-fleet-inline"> <option value="">Select fleet size</option> <option value="1-50">1-50 vehicles</option> <option value="51-200">51-200 vehicles</option> <option value="201-1000">201-1000 vehicles</option> <option value="1000+">1000+ vehicles</option> </select>
       </div><button type="submit" class="submit-btn" id="demo-submit-btn-inline">Request Demo</button>
       <div class="success-message" id="demo-success-inline">
        ✓ Demo request submitted successfully!
       </div>
      </form>
     </div>
    </div>
   </div><!-- ROI Calculator Modal -->
   <div class="modal" id="roi-modal-new">
    <div class="modal-content">
     <div class="modal-header">
      <h2>Calculate Your Potential Savings</h2><button class="close-btn" onclick="closeModal('roi-modal-new')">×</button>
     </div>
     <div class="modal-body">
      <p class="modal-intro">Discover how much you could save with our predictive maintenance system</p>
      <div class="calculator-inputs">
       <div class="input-group"><label for="maintenance-cost">Current Annual Maintenance Cost ($)</label> <input type="number" id="maintenance-cost" placeholder="e.g., 500000" min="0">
       </div>
       <div class="input-group"><label for="vehicle-count">Number of Vehicles in Fleet</label> <input type="number" id="vehicle-count" placeholder="e.g., 1000" min="1">
       </div>
       <div class="input-group"><label for="downtime-hours">Average Downtime Hours per Vehicle/Year</label> <input type="number" id="downtime-hours" placeholder="e.g., 48" min="0">
       </div>
      </div><button class="calculate-btn" id="calculate-btn" onclick="calculateROI()">Calculate Savings</button>
      <div class="roi-results" id="roi-results">
       <h3>Your Estimated Annual Savings</h3>
       <div class="roi-amount" id="roi-amount">
        $0
       </div>
       <p class="roi-description">Based on 30% reduction in maintenance costs and 40% reduction in downtime</p>
      </div>
     </div>
    </div>
   </div><!-- Sensors Detail Modal -->
   <div class="modal" id="sensors-modal">
    <div class="modal-content">
     <div class="modal-header">
      <h2>IoT Sensors Network</h2><button class="close-btn" onclick="closeModal('sensors-modal')">×</button>
     </div>
     <div class="modal-body">
      <p class="modal-intro">Our comprehensive sensor network monitors 30+ critical parameters across all vehicle systems, providing real-time data for predictive analysis.</p>
      <div class="sensors-grid">
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="#1a1f3a" stroke="#00e5ff" stroke-width="3" /> <circle cx="100" cy="100" r="60" fill="none" stroke="#00e5ff" stroke-width="2" opacity="0.5" /> <path d="M 100 40 L 100 80 M 100 120 L 100 160" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" /> <path d="M 40 100 L 80 100 M 120 100 L 160 100" stroke="#00e5ff" stroke-width="4" stroke-linecap="round" /> <circle cx="100" cy="100" r="15" fill="#00e5ff">
          <animate attributename="opacity" values="0.5;1;0.5" dur="2s" repeatcount="indefinite" />
         </circle> <text x="100" y="190" text-anchor="middle" fill="#00e5ff" font-size="14" font-weight="bold">
          OIL
         </text>
        </svg>
        <h4>🔧 Engine Oil Pressure Sensor</h4>
        <p>Monitors oil pressure to detect pump failures and oil leaks before engine damage occurs</p>
       </div>
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="80" height="120" rx="10" fill="#1a1f3a" stroke="#7c4dff" stroke-width="3" /> <rect x="70" y="60" width="60" height="80" rx="5" fill="#7c4dff" opacity="0.3" /> <line x1="80" y1="70" x2="120" y2="70" stroke="#7c4dff" stroke-width="3" /> <line x1="80" y1="90" x2="120" y2="90" stroke="#7c4dff" stroke-width="3" /> <line x1="80" y1="110" x2="120" y2="110" stroke="#7c4dff" stroke-width="3" /> <line x1="80" y1="130" x2="120" y2="130" stroke="#7c4dff" stroke-width="3" /> <circle cx="100" cy="100" r="8" fill="#7c4dff">
          <animate attributename="r" values="6;10;6" dur="1.5s" repeatcount="indefinite" />
         </circle> <text x="100" y="190" text-anchor="middle" fill="#7c4dff" font-size="14" font-weight="bold">
          TEMP
         </text>
        </svg>
        <h4>🌡️ Engine Temperature Sensor</h4>
        <p>Tracks coolant temperature to prevent overheating and identify cooling system issues</p>
       </div>
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="60" width="100" height="80" rx="8" fill="#1a1f3a" stroke="#00e5ff" stroke-width="3" /> <rect x="30" y="90" width="20" height="20" fill="#00e5ff" /> <rect x="150" y="90" width="20" height="20" fill="#7c4dff" /> <line x1="70" y1="100" x2="130" y2="100" stroke="#00e5ff" stroke-width="4">
          <animate attributename="x2" values="70;130;70" dur="2s" repeatcount="indefinite" />
         </line> <text x="100" y="190" text-anchor="middle" fill="#00e5ff" font-size="14" font-weight="bold">
          BATTERY
         </text>
        </svg>
        <h4>⚡ Battery Voltage Sensor</h4>
        <p>Measures battery health and charging system performance to prevent unexpected failures</p>
       </div>
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" fill="none" stroke="#00e5ff" stroke-width="3" /> <circle cx="100" cy="100" r="50" fill="none" stroke="#00e5ff" stroke-width="2" /> <circle cx="100" cy="100" r="30" fill="none" stroke="#00e5ff" stroke-width="2" /> <line x1="100" y1="30" x2="100" y2="50" stroke="#7c4dff" stroke-width="3">
          <animatetransform attributename="transform" type="rotate" from="0 100 100" to="360 100 100" dur="2s" repeatcount="indefinite" />
         </line> <circle cx="100" cy="100" r="10" fill="#7c4dff">
          <animate attributename="r" values="8;12;8" dur="0.5s" repeatcount="indefinite" />
         </circle> <text x="100" y="190" text-anchor="middle" fill="#00e5ff" font-size="14" font-weight="bold">
          VIBRATION
         </text>
        </svg>
        <h4>📳 Vibration Sensor (Engine)</h4>
        <p>Detects abnormal engine vibrations indicating bearing wear or misalignment</p>
       </div>
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M 60 100 L 80 100 L 80 60 L 120 60 L 120 100 L 140 100" fill="none" stroke="#7c4dff" stroke-width="3" /> <path d="M 50 100 L 150 100" stroke="#00e5ff" stroke-width="4" /> <circle cx="70" cy="100" r="5" fill="#7c4dff">
          <animate attributename="cx" values="70;130;70" dur="2s" repeatcount="indefinite" />
         </circle> <path d="M 140 90 L 160 100 L 140 110 Z" fill="#00e5ff" /> <text x="100" y="190" text-anchor="middle" fill="#7c4dff" font-size="14" font-weight="bold">
          AIR FLOW
         </text>
        </svg>
        <h4>💨 Mass Air Flow Sensor</h4>
        <p>Monitors air intake to optimize fuel efficiency and detect filter blockages</p>
       </div>
       <div class="sensor-item">
        <svg class="sensor-icon-img" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="50" width="60" height="100" rx="5" fill="#1a1f3a" stroke="#00e5ff" stroke-width="3" /> <rect x="75" y="60" width="50" height="70" fill="#00e5ff" opacity="0.3">
          <animate attributename="height" values="70;40;70" dur="2s" repeatcount="indefinite" />
          <animate attributename="y" values="60;90;60" dur="2s" repeatcount="indefinite" />
         </rect> <circle cx="100" cy="140" r="5" fill="#7c4dff" /> <line x1="100" y1="145" x2="100" y2="160" stroke="#7c4dff" stroke-width="3" /> <text x="100" y="190" text-anchor="middle" fill="#00e5ff" font-size="14" font-weight="bold">
          FUEL
         </text>
        </svg>
        <h4>🛢️ Fuel Pressure Sensor</h4>
        <p>Tracks fuel system pressure to identify pump degradation and injector issues</p>
       </div>
       <div class="sensor-item">
        <h4>🌊 Coolant Level Sensor</h4>
        <p>Monitors coolant levels to detect leaks and prevent overheating damage</p>
       </div>
       <div class="sensor-item">
        <h4>🔥 Exhaust Gas Temperature Sensor</h4>
        <p>Measures exhaust temps to optimize emissions and detect catalytic converter issues</p>
       </div>
       <div class="sensor-item">
        <h4>🎯 Oxygen Sensor (O2)</h4>
        <p>Monitors air-fuel mixture for optimal combustion and emissions control</p>
       </div>
       <div class="sensor-item">
        <h4>⚙️ Transmission Temperature Sensor</h4>
        <p>Tracks transmission fluid temperature to prevent overheating and premature wear</p>
       </div>
       <div class="sensor-item">
        <h4>🔄 Transmission Pressure Sensor</h4>
        <p>Monitors hydraulic pressure to detect clutch wear and valve body issues</p>
       </div>
       <div class="sensor-item">
        <h4>🎚️ Throttle Position Sensor</h4>
        <p>Tracks throttle response to identify electronic control issues</p>
       </div>
       <div class="sensor-item">
        <h4>🛞 Tire Pressure Monitoring Sensor</h4>
        <p>Monitors individual tire pressure to prevent blowouts and optimize fuel economy</p>
       </div>
       <div class="sensor-item">
        <h4>🛑 Brake Pad Wear Sensor</h4>
        <p>Measures brake pad thickness to schedule replacements before safety is compromised</p>
       </div>
       <div class="sensor-item">
        <h4>💧 Brake Fluid Level Sensor</h4>
        <p>Detects brake fluid leaks and monitors fluid condition</p>
       </div>
       <div class="sensor-item">
        <h4>🔊 Wheel Speed Sensor (ABS)</h4>
        <p>Monitors wheel rotation for ABS function and detects bearing wear</p>
       </div>
       <div class="sensor-item">
        <h4>🎢 Suspension Position Sensor</h4>
        <p>Tracks suspension travel to identify shock absorber degradation</p>
       </div>
       <div class="sensor-item">
        <h4>🔊 Acoustic Emission Sensor</h4>
        <p>Detects unusual sounds indicating bearing failures or component wear</p>
       </div>
       <div class="sensor-item">
        <h4>📡 Crankshaft Position Sensor</h4>
        <p>Monitors engine timing and detects misfires or timing chain issues</p>
       </div>
       <div class="sensor-item">
        <h4>📡 Camshaft Position Sensor</h4>
        <p>Tracks valve timing to optimize performance and detect timing problems</p>
       </div>
       <div class="sensor-item">
        <h4>💨 Turbocharger Boost Pressure Sensor</h4>
        <p>Monitors boost pressure to detect turbo failures and optimize performance</p>
       </div>
       <div class="sensor-item">
        <h4>🌡️ Differential Temperature Sensor</h4>
        <p>Tracks differential oil temperature to prevent gear damage</p>
       </div>
       <div class="sensor-item">
        <h4>🔋 Alternator Output Sensor</h4>
        <p>Monitors charging system output to predict alternator failures</p>
       </div>
       <div class="sensor-item">
        <h4>💧 Oil Quality Sensor</h4>
        <p>Analyzes oil condition to optimize change intervals and detect contamination</p>
       </div>
       <div class="sensor-item">
        <h4>🌡️ Cabin Air Quality Sensor</h4>
        <p>Monitors HVAC system performance and filter condition</p>
       </div>
       <div class="sensor-item">
        <h4>⚡ Starter Motor Current Sensor</h4>
        <p>Detects starter degradation before complete failure occurs</p>
       </div>
       <div class="sensor-item">
        <h4>🔊 Knock Sensor</h4>
        <p>Detects engine knock to prevent damage and optimize fuel timing</p>
       </div>
       <div class="sensor-item">
        <h4>📏 Steering Angle Sensor</h4>
        <p>Monitors steering system health and detects power steering issues</p>
       </div>
       <div class="sensor-item">
        <h4>🔋 Hybrid Battery Cell Voltage Sensor</h4>
        <p>Tracks individual cell health in hybrid/EV batteries to predict failures</p>
       </div>
       <div class="sensor-item">
        <h4>🌡️ Power Electronics Temperature Sensor</h4>
        <p>Monitors inverter and converter temperatures in electric vehicles</p>
       </div>
      </div>
     </div>
    </div>
   </div><!-- Facilities Detail Modal -->
   <div class="modal" id="facilities-modal">
    <div class="modal-content">
     <div class="modal-header">
      <h2>Our Global Facilities</h2><button class="close-btn" onclick="closeModal('facilities-modal')">×</button>
     </div>
     <div class="modal-body">
      <p class="modal-intro">Our world-class facilities combine cutting-edge research, advanced manufacturing, and rigorous testing to deliver the most reliable predictive maintenance solutions in the automotive industry.</p>
      <div class="facilities-grid">
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇺🇸 Silicon Valley R&amp;D Center</h4><span class="facility-location">San Jose, California, USA</span>
        </div>
        <p><strong>Focus:</strong> AI/ML Research &amp; Development</p>
        <p><strong>Size:</strong> 150,000 sq ft | <strong>Team:</strong> 200+ Engineers</p>
        <p><strong>Capabilities:</strong> Advanced algorithm development, neural network training, edge computing optimization, and prototype testing</p>
        <div class="facility-features"><span class="feature-tag">AI Research Lab</span> <span class="feature-tag">Supercomputing Cluster</span> <span class="feature-tag">Innovation Hub</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇩🇪 Munich Engineering Center</h4><span class="facility-location">Munich, Bavaria, Germany</span>
        </div>
        <p><strong>Focus:</strong> Automotive Systems Integration</p>
        <p><strong>Size:</strong> 200,000 sq ft | <strong>Team:</strong> 300+ Engineers</p>
        <p><strong>Capabilities:</strong> Vehicle integration testing, OEM partnerships, European compliance certification, and sensor calibration</p>
        <div class="facility-features"><span class="feature-tag">Test Track</span> <span class="feature-tag">Climate Chambers</span> <span class="feature-tag">EMC Lab</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇯🇵 Tokyo Innovation Lab</h4><span class="facility-location">Tokyo, Japan</span>
        </div>
        <p><strong>Focus:</strong> Sensor Technology &amp; Miniaturization</p>
        <p><strong>Size:</strong> 100,000 sq ft | <strong>Team:</strong> 150+ Engineers</p>
        <p><strong>Capabilities:</strong> MEMS sensor development, IoT device prototyping, wireless communication systems, and quality assurance</p>
        <div class="facility-features"><span class="feature-tag">Clean Room</span> <span class="feature-tag">Sensor Fab</span> <span class="feature-tag">5G Testing</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇨🇳 Shanghai Manufacturing Plant</h4><span class="facility-location">Shanghai, China</span>
        </div>
        <p><strong>Focus:</strong> High-Volume Sensor Production</p>
        <p><strong>Size:</strong> 500,000 sq ft | <strong>Team:</strong> 800+ Staff</p>
        <p><strong>Capabilities:</strong> Automated sensor assembly, quality control systems, supply chain management, and Asia-Pacific distribution</p>
        <div class="facility-features"><span class="feature-tag">ISO 9001 Certified</span> <span class="feature-tag">Automated Lines</span> <span class="feature-tag">24/7 Production</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇮🇳 Bangalore Software Center</h4><span class="facility-location">Bangalore, Karnataka, India</span>
        </div>
        <p><strong>Focus:</strong> Cloud Platform &amp; Data Analytics</p>
        <p><strong>Size:</strong> 120,000 sq ft | <strong>Team:</strong> 400+ Developers</p>
        <p><strong>Capabilities:</strong> Cloud infrastructure development, big data analytics, mobile app development, and customer support systems</p>
        <div class="facility-features"><span class="feature-tag">DevOps Center</span> <span class="feature-tag">Data Science Lab</span> <span class="feature-tag">24/7 Support</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇬🇧 Cambridge Research Institute</h4><span class="facility-location">Cambridge, England, UK</span>
        </div>
        <p><strong>Focus:</strong> Advanced Materials &amp; Battery Tech</p>
        <p><strong>Size:</strong> 80,000 sq ft | <strong>Team:</strong> 100+ Scientists</p>
        <p><strong>Capabilities:</strong> Battery health monitoring research, materials science, electrochemistry, and EV-specific sensor development</p>
        <div class="facility-features"><span class="feature-tag">Battery Lab</span> <span class="feature-tag">Materials Testing</span> <span class="feature-tag">University Partnership</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇰🇷 Seoul Testing Facility</h4><span class="facility-location">Seoul, South Korea</span>
        </div>
        <p><strong>Focus:</strong> Extreme Conditions Testing</p>
        <p><strong>Size:</strong> 180,000 sq ft | <strong>Team:</strong> 120+ Technicians</p>
        <p><strong>Capabilities:</strong> Environmental stress testing, vibration analysis, thermal cycling, and long-term durability validation</p>
        <div class="facility-features"><span class="feature-tag">Vibration Lab</span> <span class="feature-tag">Thermal Testing</span> <span class="feature-tag">Durability Track</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇨🇦 Toronto Cybersecurity Center</h4><span class="facility-location">Toronto, Ontario, Canada</span>
        </div>
        <p><strong>Focus:</strong> Vehicle Cybersecurity &amp; Data Privacy</p>
        <p><strong>Size:</strong> 60,000 sq ft | <strong>Team:</strong> 80+ Security Experts</p>
        <p><strong>Capabilities:</strong> Penetration testing, encryption development, secure firmware updates, and compliance certification</p>
        <div class="facility-features"><span class="feature-tag">Security Operations</span> <span class="feature-tag">Threat Analysis</span> <span class="feature-tag">Privacy Compliance</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇧🇷 São Paulo Service Center</h4><span class="facility-location">São Paulo, Brazil</span>
        </div>
        <p><strong>Focus:</strong> Latin America Operations &amp; Training</p>
        <p><strong>Size:</strong> 90,000 sq ft | <strong>Team:</strong> 150+ Staff</p>
        <p><strong>Capabilities:</strong> Regional distribution, technician training programs, customer support, and field service coordination</p>
        <div class="facility-features"><span class="feature-tag">Training Academy</span> <span class="feature-tag">Parts Warehouse</span> <span class="feature-tag">Service Hub</span>
        </div>
       </div>
       <div class="facility-item">
        <div class="facility-header">
         <h4>🇦🇺 Melbourne Fleet Testing Center</h4><span class="facility-location">Melbourne, Victoria, Australia</span>
        </div>
        <p><strong>Focus:</strong> Real-World Fleet Validation</p>
        <p><strong>Size:</strong> 250,000 sq ft | <strong>Team:</strong> 100+ Technicians</p>
        <p><strong>Capabilities:</strong> Large-scale fleet testing, outback conditions simulation, mining vehicle applications, and long-distance monitoring</p>
        <div class="facility-features"><span class="feature-tag">Fleet Operations</span> <span class="feature-tag">Harsh Environment</span> <span class="feature-tag">Remote Monitoring</span>
        </div>
       </div>
      </div>
      <div class="global-stats">
       <h3>Global Presence by the Numbers</h3>
       <div class="stats-grid">
        <div class="stat-item">
         <div class="stat-number">
          10
         </div>
         <div class="stat-label">
          Global Facilities
         </div>
        </div>
        <div class="stat-item">
         <div class="stat-number">
          2,500+
         </div>
         <div class="stat-label">
          Team Members
         </div>
        </div>
        <div class="stat-item">
         <div class="stat-number">
          1.5M+
         </div>
         <div class="stat-label">
          Square Feet
         </div>
        </div>
        <div class="stat-item">
         <div class="stat-number">
          50+
         </div>
         <div class="stat-label">
          Countries Served
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div><!-- ML Models Detail Modal -->
   <div class="modal" id="ml-models-modal">
    <div class="modal-content">
     <div class="modal-header">
      <h2>Edge AI &amp; Machine Learning Models</h2><button class="close-btn" onclick="closeModal('ml-models-modal')">×</button>
     </div>
     <div class="modal-body">
      <p class="modal-intro">Our edge computing architecture runs sophisticated ML models directly on vehicle hardware, enabling real-time predictions without cloud dependency.</p>
      <div class="ml-models-grid">
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🔮 Anomaly Detection Model</h4><span class="model-type">Unsupervised Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Isolation Forest &amp; Autoencoder Neural Networks</p>
        <p><strong>Purpose:</strong> Identifies unusual patterns in sensor data that deviate from normal operating conditions</p>
        <p><strong>Edge Processing:</strong> Real-time anomaly scoring with 50ms latency</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>📈 Time Series Forecasting Model</h4><span class="model-type">Deep Learning</span>
        </div>
        <p><strong>Algorithm:</strong> LSTM (Long Short-Term Memory) Networks</p>
        <p><strong>Purpose:</strong> Predicts component failure timelines based on historical degradation patterns</p>
        <p><strong>Edge Processing:</strong> Processes 1000+ data points per second locally</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🎯 Classification Model</h4><span class="model-type">Supervised Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Random Forest &amp; Gradient Boosting (XGBoost)</p>
        <p><strong>Purpose:</strong> Classifies failure types and severity levels for prioritized maintenance</p>
        <p><strong>Edge Processing:</strong> 95%+ accuracy with minimal computational overhead</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>📊 Regression Model</h4><span class="model-type">Supervised Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Support Vector Regression (SVR) &amp; Neural Networks</p>
        <p><strong>Purpose:</strong> Estimates remaining useful life (RUL) of critical components</p>
        <p><strong>Edge Processing:</strong> Continuous RUL updates every 5 minutes</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🔊 Signal Processing Model</h4><span class="model-type">Feature Engineering</span>
        </div>
        <p><strong>Algorithm:</strong> Fast Fourier Transform (FFT) &amp; Wavelet Analysis</p>
        <p><strong>Purpose:</strong> Extracts frequency domain features from vibration and acoustic sensors</p>
        <p><strong>Edge Processing:</strong> Real-time spectral analysis for bearing fault detection</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🧠 Ensemble Model</h4><span class="model-type">Meta-Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Stacking Ensemble with Multiple Base Models</p>
        <p><strong>Purpose:</strong> Combines predictions from multiple models for higher accuracy</p>
        <p><strong>Edge Processing:</strong> Weighted voting system optimized for edge deployment</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🔄 Online Learning Model</h4><span class="model-type">Adaptive Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Incremental Learning with Mini-Batch Updates</p>
        <p><strong>Purpose:</strong> Continuously adapts to vehicle-specific driving patterns and conditions</p>
        <p><strong>Edge Processing:</strong> Model updates without cloud connectivity required</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🖼️ Lightweight CNN Model</h4><span class="model-type">Deep Learning</span>
        </div>
        <p><strong>Algorithm:</strong> MobileNet-based Convolutional Neural Network</p>
        <p><strong>Purpose:</strong> Processes sensor data patterns for complex failure mode recognition</p>
        <p><strong>Edge Processing:</strong> Optimized for ARM processors with quantization</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>📈 Trend Analysis Model</h4><span class="model-type">Statistical Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Exponential Smoothing &amp; ARIMA</p>
        <p><strong>Purpose:</strong> Identifies gradual degradation trends in component performance</p>
        <p><strong>Edge Processing:</strong> Low-power statistical computations for battery efficiency</p>
       </div>
       <div class="ml-model-item">
        <div class="model-header">
         <h4>🎛️ Multi-Task Learning Model</h4><span class="model-type">Deep Learning</span>
        </div>
        <p><strong>Algorithm:</strong> Shared Neural Network Architecture</p>
        <p><strong>Purpose:</strong> Simultaneously predicts multiple failure types from shared sensor inputs</p>
        <p><strong>Edge Processing:</strong> Efficient resource utilization through parameter sharing</p>
       </div>
      </div>
      <div class="edge-benefits">
       <h3>Why Edge Computing?</h3>
       <div class="benefits-list">
        <div class="benefit-point"><span class="benefit-icon-small">⚡</span>
         <div><strong>Ultra-Low Latency</strong>
          <p>Predictions in milliseconds without cloud round-trip delays</p>
         </div>
        </div>
        <div class="benefit-point"><span class="benefit-icon-small">🔒</span>
         <div><strong>Data Privacy</strong>
          <p>Sensitive vehicle data processed locally, not transmitted to cloud</p>
         </div>
        </div>
        <div class="benefit-point"><span class="benefit-icon-small">📡</span>
         <div><strong>Offline Operation</strong>
          <p>Continuous monitoring even without internet connectivity</p>
         </div>
        </div>
        <div class="benefit-point"><span class="benefit-icon-small">💰</span>
         <div><strong>Reduced Costs</strong>
          <p>Minimal data transmission costs and cloud computing expenses</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div><!-- Contact Forms Section -->
   <section class="forms-section" id="forms-section">
    <div class="forms-container">
     <h2 class="section-title">Additional Support</h2>
     <div class="forms-grid"><!-- Contact Form -->
      <div class="form-card">
       <h3>Contact Us</h3>
       <p>Have questions? Our team is here to help</p>
       <form id="contact-form" onsubmit="handleContactSubmit(event)">
        <div class="form-group"><label for="contact-company">Company Name *</label> <input type="text" id="contact-company" required>
        </div>
        <div class="form-group"><label for="contact-name">Your Name *</label> <input type="text" id="contact-name" required>
        </div>
        <div class="form-group"><label for="contact-email">Email *</label> <input type="email" id="contact-email" required>
        </div>
        <div class="form-group"><label for="contact-message">Message *</label> <textarea id="contact-message" required></textarea>
        </div><button type="submit" class="submit-btn" id="contact-submit-btn">Send Message</button>
        <div class="success-message" id="contact-success">
         ✓ Message sent successfully!
        </div>
       </form>
      </div><!-- Case Study Form -->
      <div class="form-card">
       <h3>Share Your Success</h3>
       <p>Already using our system? Share your results</p>
       <form id="case-study-form" onsubmit="handleCaseStudySubmit(event)">
        <div class="form-group"><label for="case-company">Company Name *</label> <input type="text" id="case-company" required>
        </div>
        <div class="form-group"><label for="case-name">Contact Name *</label> <input type="text" id="case-name" required>
        </div>
        <div class="form-group"><label for="case-email">Email *</label> <input type="email" id="case-email" required>
        </div>
        <div class="form-group"><label for="case-results">Your Results &amp; Experience *</label> <textarea id="case-results" required placeholder="Tell us about the improvements you've seen..."></textarea>
        </div><button type="submit" class="submit-btn" id="case-submit-btn">Submit Case Study</button>
        <div class="success-message" id="case-success">
         ✓ Case study submitted successfully!
        </div>
       </form>
      </div>
     </div>
    </div>
   </section><!-- Footer CTA -->
   <section class="footer-cta" id="footer-cta">
    <div class="footer-cta-container">
     <h2 id="footer-cta-text">Ready to revolutionize your vehicle maintenance strategy?</h2><button class="cta-button" id="footer-button" onclick="scrollToForms()">Contact Our Team</button>
    </div>
   </section>
  </div>
  <script>
    const defaultConfig = {
      background_color: "#f5f5f0",
      surface_color: "#ffffff",
      text_color: "#2c2c2c",
      primary_action_color: "#00e5ff",
      secondary_action_color: "#7c4dff",
      font_family: "Inter",
      font_size: 16,
      main_headline: "Automotive Vehicle Maintenance System and Proactive Services",
      hero_subheadline: "Reduce downtime by 40%, cut maintenance costs by 30%, and enhance customer satisfaction with our proactive service platform",
      cta_button_text: "Schedule a Demo",
      benefits_title: "Why Leading Manufacturers Choose Us",
      benefit_1_title: "Reduce Operational Costs",
      benefit_1_desc: "Save 25-35% on warranty claims and service costs through predictive interventions before failures occur",
      benefit_2_title: "Minimize Vehicle Downtime",
      benefit_2_desc: "Prevent unexpected breakdowns with real-time monitoring and proactive maintenance scheduling",
      benefit_3_title: "Boost Customer Loyalty",
      benefit_3_desc: "Deliver exceptional ownership experience with predictive care that keeps vehicles running smoothly",
      how_it_works_title: "How Our System Works",
      step_1_title: "Data Collection",
      step_1_desc: "IoT sensors continuously monitor critical vehicle components and performance metrics in real-time",
      step_2_title: "AI Analysis",
      step_2_desc: "Machine learning algorithms analyze patterns and predict potential failures before they happen",
      step_3_title: "Proactive Alerts",
      step_3_desc: "Automated notifications sent to service centers and vehicle owners with recommended actions",
      step_4_title: "Scheduled Service",
      step_4_desc: "Seamless service booking and parts ordering to resolve issues before they impact the driver",
      footer_cta_text: "Ready to revolutionize your vehicle maintenance strategy?",
      footer_button_text: "Contact Our Team"
    };

    let allSubmissions = [];

    const dataHandler = {
      onDataChanged(data) {
        allSubmissions = data;
      }
    };

    // Initialize Data SDK
    async function initDataSDK() {
      if (window.dataSdk) {
        const result = await window.dataSdk.init(dataHandler);
        if (!result.isOk) {
          console.error("Failed to initialize Data SDK");
        }
      }
    }

    initDataSDK();

    function scrollToForms() {
      document.getElementById('forms-section').scrollIntoView({ behavior: 'smooth' });
    }

    function showTechDetails(type) {
      if (type === 'sensors') {
        document.getElementById('sensors-modal').classList.add('show');
      } else if (type === 'ml-models') {
        document.getElementById('ml-models-modal').classList.add('show');
      } else if (type === 'facilities') {
        document.getElementById('facilities-modal').classList.add('show');
      }
      document.body.style.overflow = 'hidden';
    }

    function openDemoModal() {
      document.getElementById('demo-modal-new').classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function openROIModal() {
      document.getElementById('roi-modal-new').classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('show');
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });

    async function calculateROI() {
      const maintenanceCost = parseFloat(document.getElementById('maintenance-cost').value) || 0;
      const vehicleCount = parseInt(document.getElementById('vehicle-count').value) || 0;
      const downtimeHours = parseFloat(document.getElementById('downtime-hours').value) || 0;

      if (maintenanceCost === 0 || vehicleCount === 0) {
        return;
      }

      const calculateBtn = document.getElementById('calculate-btn');
      calculateBtn.disabled = true;
      calculateBtn.textContent = 'Calculating...';

      // Calculate savings (30% maintenance reduction + downtime cost savings)
      const maintenanceSavings = maintenanceCost * 0.30;
      const downtimeCostPerHour = 150; // Average cost per hour
      const downtimeSavings = vehicleCount * downtimeHours * 0.40 * downtimeCostPerHour;
      const totalSavings = maintenanceSavings + downtimeSavings;

      // Save to Canva Sheet
      if (window.dataSdk && allSubmissions.length < 999) {
        const roiData = {
          submission_type: "ROI Calculation",
          company_name: "",
          contact_name: "",
          email: "",
          phone: "",
          fleet_size: "",
          message: "",
          current_maintenance_cost: maintenanceCost,
          vehicles_count: vehicleCount,
          avg_downtime_hours: downtimeHours,
          calculated_savings: totalSavings,
          timestamp: new Date().toISOString()
        };

        await window.dataSdk.create(roiData);
      }

      // Display results
      document.getElementById('roi-amount').textContent = '$' + Math.round(totalSavings).toLocaleString();
      document.getElementById('roi-results').classList.add('show');

      calculateBtn.disabled = false;
      calculateBtn.textContent = 'Recalculate Savings';
    }

    async function handleDemoSubmit(event) {
      event.preventDefault();

      if (allSubmissions.length >= 999) {
        showLimitWarning('demo-success-inline');
        return;
      }

      const submitBtn = document.getElementById('demo-submit-btn-inline');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      const formData = {
        submission_type: "Demo Request",
        company_name: document.getElementById('demo-company-inline').value,
        contact_name: document.getElementById('demo-name-inline').value,
        email: document.getElementById('demo-email-inline').value,
        phone: document.getElementById('demo-phone-inline').value,
        fleet_size: document.getElementById('demo-fleet-inline').value,
        message: "",
        current_maintenance_cost: 0,
        vehicles_count: 0,
        avg_downtime_hours: 0,
        calculated_savings: 0,
        timestamp: new Date().toISOString()
      };

      if (window.dataSdk) {
        const result = await window.dataSdk.create(formData);
        if (result.isOk) {
          document.getElementById('demo-form-inline').reset();
          showSuccessMessage('demo-success-inline');
        }
      }

      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Demo';
    }

    async function handleContactSubmit(event) {
      event.preventDefault();

      if (allSubmissions.length >= 999) {
        showLimitWarning('contact-success');
        return;
      }

      const submitBtn = document.getElementById('contact-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const formData = {
        submission_type: "Contact Form",
        company_name: document.getElementById('contact-company').value,
        contact_name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: "",
        fleet_size: "",
        message: document.getElementById('contact-message').value,
        current_maintenance_cost: 0,
        vehicles_count: 0,
        avg_downtime_hours: 0,
        calculated_savings: 0,
        timestamp: new Date().toISOString()
      };

      if (window.dataSdk) {
        const result = await window.dataSdk.create(formData);
        if (result.isOk) {
          document.getElementById('contact-form').reset();
          showSuccessMessage('contact-success');
        }
      }

      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }

    async function handleCaseStudySubmit(event) {
      event.preventDefault();

      if (allSubmissions.length >= 999) {
        showLimitWarning('case-success');
        return;
      }

      const submitBtn = document.getElementById('case-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      const formData = {
        submission_type: "Case Study",
        company_name: document.getElementById('case-company').value,
        contact_name: document.getElementById('case-name').value,
        email: document.getElementById('case-email').value,
        phone: "",
        fleet_size: "",
        message: document.getElementById('case-results').value,
        current_maintenance_cost: 0,
        vehicles_count: 0,
        avg_downtime_hours: 0,
        calculated_savings: 0,
        timestamp: new Date().toISOString()
      };

      if (window.dataSdk) {
        const result = await window.dataSdk.create(formData);
        if (result.isOk) {
          document.getElementById('case-study-form').reset();
          showSuccessMessage('case-success');
        }
      }

      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Case Study';
    }

    function showSuccessMessage(elementId) {
      const successMsg = document.getElementById(elementId);
      successMsg.classList.add('show');
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    }

    function showLimitWarning(elementId) {
      const successMsg = document.getElementById(elementId);
      successMsg.textContent = '⚠ Maximum submission limit reached. Please contact support.';
      successMsg.classList.add('show');
      setTimeout(() => {
        successMsg.classList.remove('show');
        successMsg.textContent = '✓ Submitted successfully!';
      }, 5000);
    }

    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;
      
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const surfaceColor = config.surface_color || defaultConfig.surface_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;

      // Apply colors
      document.body.style.backgroundColor = backgroundColor;
      document.body.style.color = textColor;
      
      document.getElementById('hero').style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${surfaceColor} 100%)`;
      document.getElementById('benefits').style.backgroundColor = surfaceColor;
      document.getElementById('how-it-works').style.backgroundColor = backgroundColor;
      document.getElementById('technology-section').style.backgroundColor = surfaceColor;
      document.getElementById('demo-roi-section').style.backgroundColor = backgroundColor;
      document.getElementById('forms-section').style.backgroundColor = surfaceColor;
      document.getElementById('footer-cta').style.backgroundColor = backgroundColor;

      const benefitCards = document.querySelectorAll('.benefit-card');
      benefitCards.forEach(card => {
        card.style.backgroundColor = backgroundColor;
        card.style.borderColor = primaryActionColor;
        card.style.color = textColor;
      });

      const actionButtons = document.querySelectorAll('.action-button');
      actionButtons.forEach(btn => {
        btn.style.borderColor = primaryActionColor;
        btn.style.color = textColor;
        btn.style.backgroundColor = 'transparent';
      });

      const techCards = document.querySelectorAll('.tech-card');
      techCards.forEach(card => {
        card.style.backgroundColor = backgroundColor;
        card.style.borderColor = primaryActionColor;
        card.style.color = textColor;
      });

      const modalContents = document.querySelectorAll('.modal-content');
      modalContents.forEach(modal => {
        modal.style.backgroundColor = surfaceColor;
        modal.style.color = textColor;
      });

      const modalHeaders = document.querySelectorAll('.modal-header');
      modalHeaders.forEach(header => {
        header.style.borderColor = primaryActionColor;
        header.style.color = textColor;
      });

      const modalBodies = document.querySelectorAll('.modal-body');
      modalBodies.forEach(body => {
        body.style.color = textColor;
      });

      const modalIntros = document.querySelectorAll('.modal-intro');
      modalIntros.forEach(intro => {
        intro.style.color = textColor;
      });

      const sensorH4 = document.querySelectorAll('.sensor-item h4');
      sensorH4.forEach(h4 => {
        h4.style.color = textColor;
      });

      const sensorP = document.querySelectorAll('.sensor-item p');
      sensorP.forEach(p => {
        p.style.color = textColor;
      });

      const facilityH4 = document.querySelectorAll('.facility-item h4');
      facilityH4.forEach(h4 => {
        h4.style.color = textColor;
      });

      const facilityP = document.querySelectorAll('.facility-item p');
      facilityP.forEach(p => {
        p.style.color = textColor;
      });

      const mlModelH4 = document.querySelectorAll('.ml-model-item h4');
      mlModelH4.forEach(h4 => {
        h4.style.color = textColor;
      });

      const mlModelP = document.querySelectorAll('.ml-model-item p');
      mlModelP.forEach(p => {
        p.style.color = textColor;
      });

      const benefitPointP = document.querySelectorAll('.benefit-point p');
      benefitPointP.forEach(p => {
        p.style.color = textColor;
      });

      const benefitPointStrong = document.querySelectorAll('.benefit-point strong');
      benefitPointStrong.forEach(strong => {
        strong.style.color = textColor;
      });

      const statLabels = document.querySelectorAll('.stat-label');
      statLabels.forEach(label => {
        label.style.color = textColor;
      });

      const edgeBenefitsH3 = document.querySelectorAll('.edge-benefits h3');
      edgeBenefitsH3.forEach(h3 => {
        h3.style.color = textColor;
      });

      const globalStatsH3 = document.querySelectorAll('.global-stats h3');
      globalStatsH3.forEach(h3 => {
        h3.style.color = textColor;
      });

      const closeButtons = document.querySelectorAll('.close-btn');
      closeButtons.forEach(btn => {
        btn.style.color = textColor;
        btn.style.backgroundColor = 'transparent';
      });

      const sensorItems = document.querySelectorAll('.sensor-item');
      sensorItems.forEach(item => {
        item.style.backgroundColor = backgroundColor;
        item.style.borderColor = primaryActionColor;
        item.style.color = textColor;
      });

      const mlModelItems = document.querySelectorAll('.ml-model-item');
      mlModelItems.forEach(item => {
        item.style.backgroundColor = backgroundColor;
        item.style.borderColor = primaryActionColor;
        item.style.color = textColor;
      });

      const modelTypes = document.querySelectorAll('.model-type');
      modelTypes.forEach(type => {
        type.style.backgroundColor = primaryActionColor;
        type.style.color = backgroundColor;
      });

      const edgeBenefits = document.querySelectorAll('.edge-benefits');
      edgeBenefits.forEach(benefit => {
        benefit.style.backgroundColor = surfaceColor;
        benefit.style.borderColor = primaryActionColor;
      });

      const facilityItems = document.querySelectorAll('.facility-item');
      facilityItems.forEach(item => {
        item.style.backgroundColor = backgroundColor;
        item.style.borderColor = primaryActionColor;
        item.style.color = textColor;
      });

      const facilityLocations = document.querySelectorAll('.facility-location');
      facilityLocations.forEach(loc => {
        loc.style.backgroundColor = primaryActionColor;
        loc.style.color = backgroundColor;
      });

      const featureTags = document.querySelectorAll('.feature-tag');
      featureTags.forEach(tag => {
        tag.style.borderColor = primaryActionColor;
        tag.style.color = textColor;
      });

      const globalStats = document.querySelectorAll('.global-stats');
      globalStats.forEach(stats => {
        stats.style.backgroundColor = surfaceColor;
      });

      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(num => {
        num.style.color = primaryActionColor;
      });

      const stepNumbers = document.querySelectorAll('.step-number');
      stepNumbers.forEach(num => {
        num.style.backgroundColor = surfaceColor;
        num.style.color = primaryActionColor;
        num.style.borderColor = primaryActionColor;
      });

      const ctaButtons = document.querySelectorAll('.cta-button');
      ctaButtons.forEach(btn => {
        btn.style.backgroundColor = primaryActionColor;
        btn.style.color = backgroundColor;
      });

      document.querySelector('.calculate-btn').style.backgroundColor = primaryActionColor;
      document.querySelector('.calculate-btn').style.color = backgroundColor;
      document.querySelector('.roi-results').style.backgroundColor = surfaceColor;

      const formCards = document.querySelectorAll('.form-card');
      formCards.forEach(card => {
        card.style.backgroundColor = surfaceColor;
        card.style.color = textColor;
      });

      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.style.borderColor = primaryActionColor;
        input.style.color = textColor;
      });

      const submitBtns = document.querySelectorAll('.submit-btn');
      submitBtns.forEach(btn => {
        btn.style.backgroundColor = primaryActionColor;
        btn.style.color = backgroundColor;
      });

      const successMessages = document.querySelectorAll('.success-message');
      successMessages.forEach(msg => {
        msg.style.backgroundColor = surfaceColor;
        msg.style.color = primaryActionColor;
      });

      // Apply fonts
      document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
      
      // Apply font sizes
      document.querySelector('.hero h1').style.fontSize = `${baseSize * 2.1875}px`;
      document.querySelector('.hero p').style.fontSize = `${baseSize * 0.9375}px`;
      document.querySelectorAll('.section-title').forEach(el => {
        el.style.fontSize = `${baseSize * 1.71875}px`;
      });
      document.querySelectorAll('.benefit-card h3').forEach(el => {
        el.style.fontSize = `${baseSize * 0.9375}px`;
      });
      document.querySelectorAll('.benefit-card p').forEach(el => {
        el.style.fontSize = `${baseSize * 0.703125}px`;
      });
      document.querySelectorAll('.step h3').forEach(el => {
        el.style.fontSize = `${baseSize * 0.859375}px`;
      });
      document.querySelectorAll('.step p').forEach(el => {
        el.style.fontSize = `${baseSize * 0.6640625}px`;
      });
      document.querySelector('.footer-cta h2').style.fontSize = `${baseSize * 1.5625}px`;

      // Apply text content
      document.getElementById('main-headline').textContent = config.main_headline || defaultConfig.main_headline;
      document.getElementById('hero-subheadline').textContent = config.hero_subheadline || defaultConfig.hero_subheadline;
      document.getElementById('benefits-title').textContent = config.benefits_title || defaultConfig.benefits_title;
      document.getElementById('benefit-1-title').textContent = config.benefit_1_title || defaultConfig.benefit_1_title;
      document.getElementById('benefit-1-desc').textContent = config.benefit_1_desc || defaultConfig.benefit_1_desc;
      document.getElementById('benefit-2-title').textContent = config.benefit_2_title || defaultConfig.benefit_2_title;
      document.getElementById('benefit-2-desc').textContent = config.benefit_2_desc || defaultConfig.benefit_2_desc;
      document.getElementById('benefit-3-title').textContent = config.benefit_3_title || defaultConfig.benefit_3_title;
      document.getElementById('benefit-3-desc').textContent = config.benefit_3_desc || defaultConfig.benefit_3_desc;
      document.getElementById('how-it-works-title').textContent = config.how_it_works_title || defaultConfig.how_it_works_title;
      document.getElementById('step-1-title').textContent = config.step_1_title || defaultConfig.step_1_title;
      document.getElementById('step-1-desc').textContent = config.step_1_desc || defaultConfig.step_1_desc;
      document.getElementById('step-2-title').textContent = config.step_2_title || defaultConfig.step_2_title;
      document.getElementById('step-2-desc').textContent = config.step_2_desc || defaultConfig.step_2_desc;
      document.getElementById('step-3-title').textContent = config.step_3_title || defaultConfig.step_3_title;
      document.getElementById('step-3-desc').textContent = config.step_3_desc || defaultConfig.step_3_desc;
      document.getElementById('step-4-title').textContent = config.step_4_title || defaultConfig.step_4_title;
      document.getElementById('step-4-desc').textContent = config.step_4_desc || defaultConfig.step_4_desc;
      document.getElementById('footer-cta-text').textContent = config.footer_cta_text || defaultConfig.footer_cta_text;
      document.getElementById('footer-button').textContent = config.footer_button_text || defaultConfig.footer_button_text;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (value) => {
              config.surface_color = value;
              window.elementSdk.setConfig({ surface_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
              config.primary_action_color = value;
              window.elementSdk.setConfig({ primary_action_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ["main_headline", config.main_headline || defaultConfig.main_headline],
        ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
        ["cta_button_text", config.cta_button_text || defaultConfig.cta_button_text],
        ["benefits_title", config.benefits_title || defaultConfig.benefits_title],
        ["benefit_1_title", config.benefit_1_title || defaultConfig.benefit_1_title],
        ["benefit_1_desc", config.benefit_1_desc || defaultConfig.benefit_1_desc],
        ["benefit_2_title", config.benefit_2_title || defaultConfig.benefit_2_title],
        ["benefit_2_desc", config.benefit_2_desc || defaultConfig.benefit_2_desc],
        ["benefit_3_title", config.benefit_3_title || defaultConfig.benefit_3_title],
        ["benefit_3_desc", config.benefit_3_desc || defaultConfig.benefit_3_desc],
        ["how_it_works_title", config.how_it_works_title || defaultConfig.how_it_works_title],
        ["step_1_title", config.step_1_title || defaultConfig.step_1_title],
        ["step_1_desc", config.step_1_desc || defaultConfig.step_1_desc],
        ["step_2_title", config.step_2_title || defaultConfig.step_2_title],
        ["step_2_desc", config.step_2_desc || defaultConfig.step_2_desc],
        ["step_3_title", config.step_3_title || defaultConfig.step_3_title],
        ["step_3_desc", config.step_3_desc || defaultConfig.step_3_desc],
        ["step_4_title", config.step_4_title || defaultConfig.step_4_title],
        ["step_4_desc", config.step_4_desc || defaultConfig.step_4_desc],
        ["footer_cta_text", config.footer_cta_text || defaultConfig.footer_cta_text],
        ["footer_button_text", config.footer_button_text || defaultConfig.footer_button_text]
      ]);
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9afe1f70a5357819',t:'MTc2NjA1NTI3My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
