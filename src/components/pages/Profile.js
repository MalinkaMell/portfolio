import React from 'react';
import './pages.css';

const Profile = () => {
  return (
    <div>
      <div className="row animated bounceInLeft">

        <div className="col-4 col-md-3 my-2">
          <img src="assets/images/profile-bw.jpg" className="rounded float-left img-fluid" alt="Irina Kudosova" />
        </div>
        <div className="col-8 col-md-4 my-2">
          <h3 className="text-uppercase ubuntu text-white font-weight-bold font-weight-light">
            Irina Kudosova
          </h3>
          <h6 className="white-90">Full Stack Developer</h6>
        </div>

        <div className="col-md-5">
          <address>
            <dl className="row  my-2">
              <dt className="text-white col-4">Name:</dt>
              <dd className="col-8">Irina Kudosova</dd>

              <dt className="text-white col-4">Location:</dt>
              <dd className="col-8">Phoenix, AZ 85308, US</dd>

              <dt className="text-white col-4">Phone:</dt>
              <dd className="col-8">
                <a className="white-90" href="Tel:+16024779497">+1 (602) 477-9497</a>
              </dd>

              <dt className="text-white col-4">Email:</dt>
              <dd className="col-8">
                <a className="white-90" href="Mailto:irinakudosova@gmail.com">irinakudosova@gmail.com</a>
              </dd>

              <dt className="text-white col-4">Website</dt>
              <dd className="col-8">
                <a className="white-90" target="_blank" rel="noopener noreferrer" href="https://malinkamell.github.io/">malinkamell.github.io</a>
              </dd>
            </dl>
          </address>
        </div>
      </div>
      <div className="row animated bounceInRight">
        <div className="col-12">
          <p>Full Stack Developer with international experience in Web Design and Development.</p>
          <p>Earned a certificate in Full Stack Development at the University of Arizona acquiring skills such as JavaScript, JQuery and ReactJS. </p>
          <p>Very goal-oriented and problem solver with an innate ability to think out of the box.</p>
          <p>Web design and development has always been my passion: I started as Lead Web Designer in the Italian leader gaming company realizing the first game portal with over 350,000 registered users. Then, I worked for four years with a US-based agency working on more than 30 web projects including a custom training portal.</p>
          <p>My passion and my positive work attitude in web complex backend make me a strong addition to a web development team.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;