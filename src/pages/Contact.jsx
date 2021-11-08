import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-end my-5">
                    <div className="col-sm">
                        <img
                            className="img-fluid mb-4 mb-lg-0"
                            src="http://placehold.it/900x900"
                            alt="Headshot of Dr. Yesselmen"
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="img-fluid mb-4 mb-lg-0"
                            src="http://placehold.it/900x900"
                            alt="Headshot of Dr. Weitzel"
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="img-fluid mb-4 mb-lg-0"
                            src="http://placehold.it/900x900"
                            alt="Headshot of Dr. Yu"
                        />
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-sm">
                        <p><b>Joseph Yesselman</b></p>
                    </div>
                    <div className="col-sm">
                        <p><b>Derek Weitzel</b></p>
                    </div>
                    <div className="col-sm">
                        <p><b>Hongfeng Yu</b></p>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-sm">
                        <p>Assistant Professor of Chemistry</p>
                    </div>
                    <div className="col-sm">
                        <p>Research Assistant Professor of Computer Science and Engineering</p>
                    </div>
                    <div className="col-sm">
                        <p>Associate Professor of Computer Science and Engineering</p>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-sm">
                        <a href="mailto:jyesselm@unl.edu">jyesselm@unl.edu</a><br />
                        <a href="https://yesselmanlab.com/">Yesselman Lab Page</a>
                    </div>
                    <div className="col-sm">
                        <a href="mailto:dweitzel@unl.edu">dweitzel@unl.edu</a>
                    </div>
                    <div className="col-sm">
                        <a href="mailto:hfyu@unl.edu">hfyu@unl.edu</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
