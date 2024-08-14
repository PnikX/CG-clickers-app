# Methodologies, Framework and Process Discussion

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Methodologies, Framework and Process Discussion</title>
</head>
<body>
    <h3>A. Waterfall</h3>
    <p>Steps/Phases involved in the SDLC:</p>
    <ul>
        <li>Requirements Analysis</li>
        <li>System Design</li>
        <li>Implementation</li>
        <li>Testing</li>
        <li>Deployment</li>
        <li>Maintenance</li>
    </ul>
    <h3>B. Agile (Scrum)</h3>
    <p>Steps/Phases involved in the SDLC:</p>
    <ul>
        <li>Product Backlog Creation</li>
        <li>Sprint Planning</li>
        <li>Sprint Execution</li>
        <li>Sprint Review</li>
        <li>Sprint Retrospective</li>
    </ul>
    <h3>C. DevOps</h3>
    <p>Steps/Phases involved in the SDLC:</p>
    <ul>
        <li>Continuous Development</li>
        <li>Continuous Testing</li>
        <li>Continuous Deployment</li>
        <li>Continuous Monitoring</li>
    </ul>
    <h2>Advantages and Disadvantages</h2>
    <h3>Waterfall</h3>
    <p>Advantages: Clear structure, easy to manage.</p>
    <p>Disadvantages: Inflexible, late testing.</p>
    <h3>Agile (Scrum)</h3>
    <p>Advantages: Flexibility, customer feedback.</p>
    <p>Disadvantages: Requires constant collaboration, can be chaotic.</p>
    <h3>DevOps</h3>
    <p>Advantages: Faster delivery, improved collaboration.</p>
    <p>Disadvantages: Requires cultural shift, complex toolchain.</p>
    <h2>Product Launch</h2>
    <p>The product goes live after thorough testing and stakeholder approval, typically at the end of a sprint in Agile or after the final phase in Waterfall.</p>
    <h1>Agile (Scrum) Methodology</h1>
</header>

<section id=\sdlc-steps\ <h2>1.1 Steps/Phases in SDLC:</h2>

<div class=\phase\ <h3>Requirement Gathering and Sprint Planning</h3>
<ul>
<li><strong>Who:</strong> Suresh (Business Analyst), John Templeton (Product Owner), Joy Kaluzny & Prakasan (Scrum Masters), Development Teams, Michael (DevOps), Ritu (Tester), Praveen (Release Engineer), Jigar (Platform Operations), Geetha (Production Monitoring Team)</li>
<li><strong>What:</strong> Requirements for the \Clickers App\ are gathered and broken down into smaller tasks organized into sprints.</li>
</ul>
</div>

<div class=\phase\ <h3>Sprint Execution (Development and Testing)</h3>
<ul>
<li><strong>Who:</strong> Development Teams, Ritu (Tester)</li>
<li><strong>What:</strong> Development Teams work on sprint tasks while Ritu tests features as they are developed.</li>
</ul>
</div>

<div class=\phase\ <h3>Daily Stand-ups</h3>
<ul>
<li><strong>Who:</strong> Joy Kaluzny & Prakasan (Scrum Masters), Development Teams, Ritu (Tester), Michael (DevOps), Praveen (Release Engineer), Jigar (Platform Operations), Geetha (Production Monitoring Team)</li>
<li><strong>What:</strong> Daily meetings to discuss progress and roadblocks.</li>
</ul>
</div>

<div class=\phase\ <h3>Sprint Review and Retrospective</h3>
<ul>
<li><strong>Who:</strong> Entire Scrum Team</li>
<li><strong>What:</strong> Review accomplishments and reflect on the sprint.</li>
</ul>
</div>

<div class=\phase\ <h3>Incremental Delivery and Deployment</h3>
<ul>
<li><strong>Who:</strong> Michael (DevOps), Praveen (Release Engineer)</li>
<li><strong>What:</strong> Completed features are deployed to staging or production after each sprint.</li>
</ul>
</div>
</section>

<section id=\advantages-disadvantages\ <h2>1.2 Advantages and Disadvantages:</h2>

<div class=\advantages\ <h3>Advantages:</h3>
<ul>
<li><strong>Flexibility:</strong> Easy incorporation of changes in the next sprint.</li>
<li><strong>Continuous Feedback:</strong> Early detection of issues through constant testing and reviews.</li>
<li><strong>Early Delivery:</strong> Features can go live before the entire product is completed.</li>
</ul>
</div>

<div class=\disadvantages\ <h3>Disadvantages:</h3>
<ul>
<li><strong>Scope Creep:</strong> Changes can lead to uncontrolled project growth if not managed properly.</li>
<li><strong>Demanding:</strong> Frequent meetings and tight deadlines may stress the team.</li>
</ul>
</div>
</section>

<section id=\product-go-live\ <h2>1.3 How and When the Product Goes Live:</h2>
<p>
The product can go live incrementally, with new features being added after each sprint, allowing for early and continuous release based on user feedback.
</p>
</section>
<header>
<h1>DevOps Methodology</h1>
</header>

<main>
<section id=\steps-phases-sdlc\ <h2>1.1 Steps/Phases in SDLC</h2>

<article>
<h3>Continuous Requirement Gathering and Planning</h3>
<ul>
<li><strong>Who:</strong> Suresh (Business Analyst), John Templeton (Product Owner), Development Teams, Michael (DevOps), Praveen (Release Engineer), Joy Kaluzny & Prakasan (Scrum Masters)</li>
<li><strong>What:</strong> Requirements for the \Clickers App\ are gathered and continuously refined based on feedback. Planning happens in smaller iterations, similar to Agile.</li>
</ul>
</article>

<article>
<h3>Continuous Integration and Development</h3>
<ul>
<li><strong>Who:</strong> Development Teams (Santosh, Manoj, JK, Gokul, Anas, Rashmi), Michael (DevOps)</li>
<li><strong>What:</strong> Developers continuously write and integrate code into a shared repository. Automated builds and tests are triggered upon code changes.</li>
</ul>
</article>

<article>
<h3>Continuous Testing</h3>
<ul>
<li><strong>Who:</strong> Ritu (Tester)</li>
<li><strong>What:</strong> Automated tests are run continuously on the integrated code to catch bugs early, with manual testing as needed.</li>
</ul>
</article>

<article>
<h3>Continuous Deployment</h3>
<ul>
<li><strong>Who:</strong> Michael (DevOps), Praveen (Release Engineer)</li>
<li><strong>What:</strong> The code is automatically deployed to various environments (development, testing, staging, production) using tools like Jenkins, Docker, or Kubernetes.</li>
</ul>
</article>

<article>
<h3>Continuous Monitoring and Feedback</h3>
<ul>
<li><strong>Who:</strong> Jigar (Platform Operations), Geetha (Production Monitoring Team)</li>
<li><strong>What:</strong> The deployed application is continuously monitored in production, allowing immediate feedback into the development process.</li>
</ul>
</article>
</section>

<section id=\advantages-disadvantages\ <h2>1.2 Advantages and Disadvantages</h2>
<h3>Advantages</h3>
<ul>
<li><strong>Speed:</strong> Faster release cycles and quicker time to market.</li>
<li><strong>Quality:</strong> Continuous testing and monitoring ensure high-quality releases.</li>
<li><strong>Collaboration:</strong> Fosters better collaboration between development, operations, and other teams.</li>
</ul>

<h3>Disadvantages</h3>
<ul>
<li><strong>Complexity:</strong> Complexity in setting up automation, tooling, and continuous processes.</li>
<li><strong>Cultural Shift:</strong> Requires significant change in mindset and culture within the organization.</li>
</ul>
</section>

<section id=\product-goes-live\ <h2>1.3 How and When the Product Goes Live</h2>
<p>The product is continuously deployed and goes live incrementally with new features and updates released as soon as they are ready, allowing for an agile response to user needs and market changes.</p>
</section>
</main>
</body>
</html>