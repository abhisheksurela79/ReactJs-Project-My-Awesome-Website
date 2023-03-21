import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Abhishek</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to our leading tech company, where we provide innovative
            solutions to the tech problems people face every day. We are a team
            of experienced professionals who are passionate about leveraging
            technology to make life easier for everyone.
          </p>

          <p>
            Our goal is to increase problem-solving ability in children by
            providing them with access to cutting-edge technology and resources.
            We believe that empowering the next generation with the tools they
            need to solve problems will help create a brighter future for all.
          </p>
          <p>
            At our company, we are dedicated to delivering practical, effective
            solutions that address the most pressing tech issues of our time.
            From software glitches to hardware malfunctions, we have the
            expertise to help you overcome any obstacle.
          </p>
          <p>
            Our commitment to excellence is reflected in everything we do.
            Whether you're a parent looking to give your child a head start in
            tech, or a business owner seeking expert support, we are here to
            help. With our state-of-the-art facilities and expert staff, we are
            confident that we can help you achieve your goals and maximize your
            potential.
          </p>
          <p>
            So why wait? Visit us today and experience the difference that our
            leading tech company can make in your life. We look forward to
            serving you!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style= {{
                animationDelay: "0.3s",
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>

            <div style= {{
                animationDelay: "0.5s",
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>

            <div style= {{
                animationDelay: "0.7s",
            }}>
                <AiFillYoutube />
                <p>YouTube</p>
            </div>

            <div style= {{
                animationDelay: "1s",
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
