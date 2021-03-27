import React, { Component } from 'react'
import "./profile.scss"

export class Profile extends Component {
  render() {
    return (
      <>
        <div class="profile-main">
          <div class="profile-header">
            <div class="user-detail">
              <div class="user-image">
              </div>
              <div class="user-data">
                <h2>User Name</h2>
                <span class="post-label">Skill1</span>
                <span class="post-label">Skill2</span>
                <span class="post-label">Skill3</span>
                <p>Brif intro of user</p>
              </div>
            </div>
            <div class="tab-panel-main">
              <ul class="tabs">
                <li class="tab-link">Quality1</li>
                <li class="tab-link">Quality1</li>
                <li class="tab-link">Quality1</li>
              </ul>
              <div id="Basic-detail" class="tab-content current">
                <div class="skill-box">
                  <ul>
                    <li><strong>My Core Skills:</strong></li>
                    <li>Main skill1<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li>Main skill2<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li>Main skill3<i class="fa fa-star" aria-hidden="true"></i></li>
                  </ul>
                </div>
                <div class="bio-box">
                  <div class="heading">
                    <p>Professional Bio
							<label>2 Months at gym</label></p>
                  </div>
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
						</div>
                </div>
                <div class="detail-box">
                  <p>Detail</p>
                  <ul class="ul-first">
                    <li>Birth date</li>
                    <li>City</li>
                    <li>Country</li>
                    <li>Contact No</li>
                  </ul>
                  <ul class="ul-second">
                    <li>8 March 1997</li>
                    <li>Jamanagar</li>
                    <li>California</li>
                    <li>9900990087</li>
                  </ul>
                </div>
              </div>
              <div id="Edu-detail" class="tab-content">
                <div class="Edu-box-main">
                  <h2><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education</h2>
                  <div class="Edu-box">
                    <h5><span>Graphic designer</span>
                        2005 - 2007 | Infoway Corporation</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div class="Edu-box">
                    <h5><span>Web designer</span>
                          2007 - 2009 | Light Corporation</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div id="Portfolio" class="tab-content">
                <div class="portfolio-box">
                  <div class="portfolio-img-box">
                    <h3>Web Design</h3>
                  </div>
                  <div class="portfolio-img-box">
                    <h3>Web development</h3>
                  </div>
                  <div class="portfolio-img-box">
                    <h3>SEO</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </>
    )
  }
}

export default Profile
