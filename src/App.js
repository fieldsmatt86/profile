import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <html>
	<head>
		<title>Matthew Fields</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		{/* <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]--> */}
		<link rel="stylesheet" href="assets/css/main.css" />
		{/* <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]--> */}
	</head>
	<body>

		{/* <!-- Sidebar --> */}
			<section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><a href="#intro">Matthew Fields</a></li>
							<li><a href="#one">Projects</a></li>
							<li><a href="#two">Skills</a></li>
							<li><a href="#three">Get In Touch</a></li>

						</ul>
					</nav>
				</div>
			</section>

		{/* <!-- Wrapper --> */}
			<div id="wrapper">

				{/* <!-- Intro --> */}
					<section id="intro" class="wrapper style1 fullscreen fade-up">
						<div class="inner">
							<h1>MATTHEW FIELDS</h1>
							<p>Web Developer</p>
							<ul class="actions">
								<li><a href="#one" class="button scrolly">Projects</a></li>
							</ul>
						</div>
					</section>

				{/* <!-- One --> */}
					<section id="one" class="wrapper style2 spotlights">
				
						<section>
							<a href="http://198.211.107.160/#/" class="image"><img src="/IMG_3818.PNG" alt="" data-position="top center" /></a>
							<div class="content">
								<div class="inner">
									<h2>Live Life Headphones</h2>
									<p>Party promotion application built in React.</p>
									<ul class="actions">
										<li><a href="http://198.211.107.160/#/" class="button">LiveLifeHeadphones</a></li>
									</ul>
								</div>
							</div>
						</section>
					
					</section>

				{/* <!-- Two --> */}
					<section id="two" class="wrapper style3 fade-up">
						<div class="inner">
							<div class="features">
							
						
								<section>
									<span class="icon major fa-code"></span>
									<h3>HTML</h3>
								</section>
								<section>
									<span class="icon major fa-lock"></span>
									<h3>CSS</h3>
								</section>
								<section>
									<span class="icon major fa-cog"></span>
									<h3>JAVASCRIPT</h3>
								</section>
								<section>
									<span class="icon major fa-desktop"></span>
									<h3>REACT</h3>
								</section>
								<section>
									<span class="icon major fa-chain"></span>
									<h3>NODEjs</h3>
								</section>
								<section>
									<span class="icon major fa-diamond"></span>
									<h3>PostgreSQL</h3>
								</section>
								<section>
									<span class="icon major fa-diamond"></span>
									<h3>RestfulAPI</h3>
								</section>
								<section>
									<span class="icon major fa-diamond"></span>
									<h3>GIT</h3>
								</section>
							</div>
						
						</div>
					</section>

				{/* <!-- Three --> */}
					<section id="three" class="wrapper style1 fade-up">
						<div class="inner">
							<h2>Get in touch</h2>
							<p>I have a passion for learning and innovating and look forward to working with others that share the same drive.</p>
							<div class="split style1">
						
								<section>
									<ul class="contact">
									
										<li>
											<h3>Email</h3>
											<a href="#">fields.matt11@gmail.com</a>
										</li>
										
										<li>
											<h3>Social</h3>
											<ul class="icons">
												<li><a href="https://github.com/fieldsmatt86" class="fa-github"><span class="label">GitHub</span></a></li>
												<li><a href="https://www.linkedin.com/in/matthewfields11/" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>

			</div>

		{/* <!-- Footer --> */}
			<footer id="footer" class="wrapper style1-alt">
				<div class="inner">
					<ul class="menu">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>

		{/* <!-- Scripts --> */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			{/* <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]--> */}
			<script src="assets/js/main.js"></script>

	</body>
</html>
    );
  }
}

export default App;
