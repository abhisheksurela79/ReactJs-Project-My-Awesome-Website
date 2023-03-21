import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="" method="post">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Demo Demo"/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="demo.demo@demomail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message here"
              cols="30" rows="10"
              required
            />
          </div>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
