import React from 'react'

const NavBar = ({ dropDir }) => {
	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
      	<a class="navbar-brand" href="#">Navbar</a>
      	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
								<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="#">Browse all Destinations</a>
						</li>
						<li className={`nav-item ${dropDir}`}>
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Browse By Continent
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Asia</a>
								<a class="dropdown-item" href="#">Africa</a>
								<a class="dropdown-item" href="#">North America</a>
								<a class="dropdown-item" href="#">South America</a>
								<a class="dropdown-item" href="#">Antarctica</a>
								<a class="dropdown-item" href="#">Europe</a>
								<a class="dropdown-item" href="#">Australia</a>
								</div>
						</li>
						</ul>
						<button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Sign Up</button>
						<button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Login</button>
				</div>
      </nav>
		</>
	)
}

export default NavBar