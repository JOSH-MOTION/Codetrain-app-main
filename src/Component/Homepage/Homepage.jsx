import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";



function Homepage() {
  return (
    
      <>
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <img src="./Burger1.jpeg" alt="" className="straight_pic" />
              </Col>
              <Col sm={4}>
                <h2 className="straightprint">
                  Straight to the Points:
                  <br />
                  McDelivery® in the
                  <br />
                  App
                </h2>
                <p>
                  The McDonald’s app is now the only place you’ll earn
                  <br />
                  MyMcDonald’s Rewards points on every McDelivery
                  <br />
                  order. Plus, you can get those free McDonald’s rewards
                  <br />
                  you earn delivered, too. Just order, relax and enjoy—
                  <br />
                  we’ll bring your faves to you.*
                </p>
                <p className="straight_sml">
                  *At participating McDonald's. Only in the app. App
                  registration required. Must be opted
                  <br className="straight_sml" />
                  into MyMcDonald's Rewards.
                </p>
                <Button variant="warning" className="Straight_button">
                  Earn Points on McDelivery
                </Button>
              </Col>
            </Row>
          </Container>
        </div>


        <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger2.jpeg" alt="" className="Fries_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Fries_print">Free Fries Now. Free McDonald’s Later.*</h2>
              <p>
                Get Free Large Fries with a $1 minimum purchase
                <br />
                when you download the McDonald’s app & join
                <br />
                MyMcDonald’s Rewards. Then, unlock free McDonald’s
                <br />
                faves only in the app with 1500 points after your first
                <br />
                purchase as a MyMcDonald’s Rewards member.
              </p>
              <p className="Fries_sml">
                *Offer valid 1x thru the last day of the month for first time
                app users at participating
                <br />
                McDonald's. May take up to 48 hours to appear in your deals.
                Excludes delivery. Excludes
                <br />
                tax. Free MyMcDonald’s Rewards points valid 1x thru 12/31/23 for
                first time MyMcDonald’s
                <br />
                Rewards users. Program available only at participating
                McDonald’s. McD app download
                <br />
                and registration required.
              </p>
              <Button variant="warning" className="Fries_buton">
                Get Yours
              </Button>
            </Col>
          </Row>
        </Container>
      </div>  



      <div>
      <div>
        <Container className="McYourStory">
          <Row>
            <Col sm={8}>
              <img src="./Girl.jpeg" alt="" className="Story_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Story_print">Your Story Deserves a Hollywood Ending</h2>
              <p>
                Latinos have stories to tell, yet they make up less than
                <br />
                1% of the ones told in Hollywood. As a champion of the
                <br />
                Hispanic community McDonald’s wants to help
                <br />
                change that. With <span className="span">Spotlight Dorado</span>,McDonald’s is
                <br />
                giving aspiring Latino filmmakers a chance to
                <br />
                participate in a short film competition. Aspiring
                <br />
                filmmakers will bring their vision to life having their
                <br />
                story produced into a short film with invaluable
                <br />
                mentorship from renowned industry leaders and a<br />
                chance to showcase their film in film festivals around
                <br />
                the country.
              </p>
              <Button variant="warning" className="Story_bton">
                Learn More About Spotlight Dorado
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    <div className="black">
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <img src="./Animate.jpeg" alt="" className="Donalds_Bur" />
              </Col>
              <Col sm={4}>
                <h2 className="Donalds_prin">
                  McDonald’s Black and
                  <br />
                  Positively Golden
                  <br />
                  Scholarship Program
                  <br />
                  Awards $1,000,000 in
                  <br />
                  Scholarships
                </h2>
                <p>
                  McDonald’s Black and Positively Golden Scholarship
                  <br />
                  Program awards $1,000,000 in scholarships to
                  <br />
                  students attending Historically Black Colleges and
                  <br />
                  Universities (HBCUs) in partnership with the Thurgood
                  <br />
                  Marshall College Fund (TMCF). Apply now through
                  <br />
                  March 27th at TMCF.org.
                </p>
                <Button variant="warning" className="Donalds_buton">
                  Apply Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="order">
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger3.jpeg" alt="" className="Order_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Order_print">
                Order McDelivery®
                <br />
                Now*
              </h2>
              <p>
                Get all your McDonald’s favorites delivered right to
                <br />
                your doorstep with McDelivery® on Uber Eats,
                <br />
                DoorDash or Grubhub.
              </p>
              <p className="Order_sml">
                At participating McDonald’s. Prices may be higher than at
                restaurants. Delivery/service
                <br />
                fees apply
              </p>
              <Button variant="warning" className="butom">
                Order McDelivery Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    <div className="deals">
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger4.jpeg" alt="" className="Deals_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Deals_print">Deals for Days</h2>
              <p>
                Get{" "}
                <a href="https://www.mcdonalds.com/us/en-us/deals.html">
                  exclusive deals
                </a>{" "}
                on your McDonald’s favorites in <br />
                the app with contactless Mobile Order & Pay* and
                <br />
                convenient Drive Thru or Curbside pickup.
              </p>
              <p className="Deals_sml">
                *Mobile Order & Pay at participating McDonald’s.
              </p>
              <Button variant="warning" className="Deals_butom">
                Get App Deals
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col" sm="3">
            <h6>About Us</h6>
            <br />
            <p>
              About Us Overview
              <br />
              Our History
              <br />
              Leadership Team
              <br />
              Values In Action
              <br />
              Franchise Info
              <br />
              Recalls & Alerts
              <br />
              Real Estate
              <br />
              Accessibility
              <br />
              Investor Relations
              <br />
              News & Notifications
            </p>
          </div>
          <div className="col" sm="3">
            <h6>Services</h6>
            <br />
            <p>
              Services Overview
              <br />
              Wi-Fi
              <br />
              PlayPlaces & Parties
              <br />
              McDelivery®
              <br />
              Mobile Order & Pay
              <br />
              Trending Now
              <br />
              McDonald’s Merchandise
              <br />
              Family Fun Hub
              <br />
              MyMcDonald's Rewards
              <br />
              McCafé®
            </p>
          </div>
          <div className="col" sm="3">
            <h6>Community</h6>
            <br />
            <p>
              Community
              <br />
              HACER® Scholarships for
              <br />
              Hispanic Students
              <br />
              Ronald McDonald House
              <br />
              Charities
              <br />
              McDonald’s Asian Pacific
              <br />
              American
              <br />
              McDonald’s International
              <br />
              Black and Positively
              <br />
              Golden
              <br />
              McDonald’s LGBTQ+
            </p>
          </div>
          <div className="col" sm="3">
            <h6>Contact Us</h6>
            <br />
            <p>
              Contact Us
              <br />
              Gift Card FAQs
              <br />
              Donations
              <br />
              Employment
              <br />
              Customer Feedback
              <br />
              Frequently Asked
              <br />
              Questions
            </p>
          </div>
        </div>
      </div>

      <div>
        <section className="all">
          <a href="https://www.facebook.com/McDonalds/">
            <img src="./facebook.png" alt="" className="fe" />
          </a>

          <a href="https://twitter.com/mcdonalds">
            <img src="./twitter.png" alt="" className="twi" />
          </a>

          <a href="https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w">
            <img src="./youtube.png" alt="" className="twi" />
          </a>

          <a href="https://www.instagram.com/mcdonalds/">
            <img src="./instagram.png" alt="" className="twi" />
          </a>

          <a href="https://mcdonalds.tumblr.com/">
            <img src="./tumblr.png" alt="" className="twi" />
          </a>

          <a href="https://open.spotify.com/user/mcdonalds">
            <img src="./spotify.png" alt="" className="twi" />
          </a>
        </section>
        <section>
          <a href="https://open.spotify.com/user/mcdonalds">
            <img src="./app_store.png" alt="" className="store" />
          </a>
        </section>
        <section>
          <a href="https://open.spotify.com/user/mcdonalds">
            <img src="./google_play.png" alt="" className="spot" />
          </a>
        </section>
      </div>
      <hr />

      <div>
        <section className="all">
          <p id="private">Privacy (Updated)</p>

          <p id="note">California Privacy Notice</p>

          <p id="term">Terms & Conditions</p>

          <p id="access">Accessibility</p>

          <img src="./MMM.jpeg" alt="" className="mmmm" />

          <p id="reserve">
            © 2017 - 2022 McDonald's. All Rights<br/><span>Reserved</span>
          </p>
        </section>
      </div>

        <section className="all">
          <p id="info">Do Not Sell or Share My Personal Information</p>

          <p id="cooky">Cookies Settings</p>
        </section>
    </div>
      </>
    );
  }





export default Homepage;