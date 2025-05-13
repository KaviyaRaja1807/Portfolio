import React, { useEffect, useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iswebOpen, setIsWebOpen] = useState(false);
  const [islandOpen, setIsLandOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const openwebPopup = (e) => {
    e.preventDefault();
    setIsWebOpen(true);
  };

  const closewebPopup = () => {
    setIsWebOpen(false);
  };
  const openlandPopup = (e) => {
    e.preventDefault();
    setIsLandOpen(true);
  };

  const closelandPopup = () => {
    setIsLandOpen(false);
  };
  const handleSend = () => {
    if (email) {
      alert(`Email sent to: ${email}`);
      // Here you can add your API call or other logic
    } else {
      alert("Please enter an email address");
    }
  };
  return (
    <>
      <div class="line-vertical"></div>
      <div class="line-horizontal"></div>
      <header>
        <div className="head-name">Kaviya Raja</div>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="mailto:rkaviya031@gmail.com" className="contact-btn">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero">
        <h1>Hi there! 👋</h1>
        <h1>I’m Kaviya raja</h1>
        <p>
          UX/UI Designer | 2+ Years of Experience in creating intuitive,
          user-centered solutions. Proficient in user research, wireframing,
          prototyping, and UI design using industry-standard tools such as
          Figma, Adobe XD, and Sketch. Adept at translating complex ideas into
          seamless user experiences that align with business goals and elevate
          customer satisfaction. A collaborative team player with a strong focus
          on usability, accessibility, and design innovation.
        </p>
        <p className="section-title">Let’s connect!</p>
      </section>

      <section className="grid">
        <div>
          <h3>Working History</h3>
          <div>
            <div className="text-base font-semibold">Jan 2024 – Present</div>
            <div className="text-base sub-head font-semibold">
              Associate UX/UI Designer | Foloosi Technologies | Chennai
            </div>
            <ul className="mt-2 text-lg font-extralight text-black">
              <li className="p-2">
                - Led the design and development of user-centric solutions for
                web and mobile applications.
              </li>
              <li className="p-2">
                - Created wireframes, prototypes, and high-fidelity mockups
                using tools such as Figma and Adobe XD, facilitating clear
                communication of design concepts to stakeholders.
              </li>
              <li className="p-2">
                - Collaborated with cross-functional teams, including developers
                and product managers, to ensure alignment on project goals and
                deliverables.
              </li>
              <li className="p-2">
                - Implemented iterative design processes, utilizing feedback
                loops to continuously refine and enhance product features based
                on user needs.
              </li>
              <li className="p-2">
                - Developed and maintained a comprehensive style guide and
                design system, ensuring consistency across all platforms and
                products
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="text-base font-semibold">Jan 2024 – Present</div>
            <div className="text-base sub-head font-semibold">
              Associate UX/UI Designer | Foloosi Technologies | Chennai
            </div>
            <ul className="mt-2 text-lg font-extralight text-black">
              <li className="p-2">
                - Assisted in the design and prototyping of web and mobile
                applications using Figma and sketch.
              </li>
              <li className="p-2">
                - Worked individually and collaboratively on projects focused on
                user research, interactive design, and rapid prototyping.
              </li>
              <li className="p-2">
                - Worked with a team of developers in an Agile environment to
                bring designs to light.
              </li>
              <li className="p-2">
                - Worked with Agile development teams, participating in daily
                stand-ups and sprint planning to align design work with
                development timelines
              </li>
              <li className="p-2">
                - Delivered design assets to developers and ensured the smooth
                implementation of designs in final products
              </li>
            </ul>
          </div>
          <h3 className="mt-3">Education</h3>
          <div className="mt-3 flex">
            <div className="w-2/4">
              <img src="/assets/images/clgicon.png" />
              <div>UI / UX Designer</div>
              <div>Designboat | Bangalore</div>
              <div>Mar 2022 </div>
            </div>
            <div className="w-2/4">
              <img src="/assets/images/sclicon.png" />
              <div>Bachelor of Commerce in Accounting & Finance</div>
              <div>Dr.MGR University | Chennai</div>
              <div>2018 - 2021 </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Design Skills</h3>
          <div>
            <ul className="list-type ml-3">
              <li className="py-1 design-list">User Interface Design</li>
              <li className="py-1 design-list">User experience Design </li>
              <li className="py-1 design-list">Interaction design </li>
              <li className="py-1 design-list">Mobile Apps Design </li>
              <li className="py-1 design-list">Web Design </li>
              <li className="py-1 design-list">
                Design system & Style Guides{" "}
              </li>
              <li className="py-1 design-list"> Usability Testing</li>
              <li className="py-1 design-list"> Responsive Design</li>
              <li className="py-1 design-list"> Visual Design</li>
              <li className="py-1 design-list">
                Design Collaboration & Presentation{" "}
              </li>
              <li className="py-1 design-list"> User - Centered design</li>
            </ul>
          </div>
          <h3 className="mt-5">Working tools</h3>
          <div>
            <div className="flex justify-around  mt-5 ">
              <img src="/assets/images/figma.png" alt="Figma" />
              <img src="/assets/images/adobexd.png" alt="Adobe XD" />
              <img src="/assets/images/sketch.png" alt="Sketch" />
            </div>
            <div className="flex justify-around  mt-5">
              <img src="/assets/images/zeplin.png" alt="Zeplin" />
              <img
                className="ml-7"
                src="/assets/images/bootstrap.png"
                alt="Bootstrap"
              />
              <img src="/assets/images/aftereffects.png" alt="After Effects" />
            </div>
            <div className="flex justify-around  mt-5">
              <img src="/assets/images/photoshop.png" alt="Photoshop" />
              <img src="/assets/images/illustrator.png" alt="Illustrator" />
              <img src="/assets/images/premierpro.png" alt="Premier Pro" />
            </div>
          </div>
          <h3 className="mt-5">Language Skills</h3>
          <div>
            <ul>
              <li className="py-1 design-list"> English</li>
              <li className="py-1 design-list"> Tamil</li>
              <li className="py-1 design-list"> Telugu</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="bg-cloud-img">
          <div className="flex justify-between">
            <div className="w-2/5 text-5xl font-medium">
              My <span className="spn-clr">Services</span>
            </div>
            <div className="w-3/5 font-medium text-xl opacity-100">
              I offer end-to-end UI/UX design services—from user research and
              wireframing to high-fidelity UI and usability testing. My focus is
              on crafting intuitive, accessible, and visually engaging digital
              experiences that solve real user problems.
            </div>
          </div>
          <div className="flex mt-5">
            <a href="" className="k-role" onClick={openPopup}>
              {" "}
              <img className="" src="/assets/images/uiux.png" alt="UI/UX" />
            </a>
            <a href="" className="k-role" onClick={openwebPopup}>
              <img src="/assets/images/webdesign.png" alt="" />
            </a>
            <a href="" className="k-role" onClick={openlandPopup}>
              <img src="/assets/images/landpage.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="text-6xl font-semibold mb-5 px-30">
          Have an Awsome Project Idea?{" "}
          <span style={{ color: "#ff7f50" }}>Let’s Discuss</span>
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
        />
        <button onClick={handleSend}> <a href="mailto:rkaviya031@gmail.com">
          Send
        </a></button>
      </section>

      <footer>
        <div class="scroll-wrapper">
          <div class="scroll-text">
            <div class="scroll-content">
              <span>UX Design</span>
              <span>App Design</span>
              <span>Dashboard</span>
              <span>Wireframe</span>
              <span>User Research</span>
              <span>UX Design</span>
              <span>App Design</span>
              <span>Dashboard</span>
              <span>Wireframe</span>
              <span>User Research</span>
            </div>
          </div>
        </div>
      </footer>
      <section class="footer">
        <h2 className="my-2">Thank You!</h2>
        <p className="my-2">
          Do you have a great idea and want to share?
          <br />
          Let’s make something amazing together.
        </p>
        <button>Get in touch with me</button>
      </section>
      {/* Modal popup */}
      {isOpen && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <img
              src="/assets/images/UiUXCaseStudy.png"
              alt="UI/UX Popup"
              className="popup-image"
            />
          </div>
        </div>
      )}
      {/* Modal popup */}
      {iswebOpen && (
        <div className="modal-overlay" onClick={closewebPopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closewebPopup}>
              ×
            </button>
            <img
              src="/assets/images/website.png"
              alt="UI/UX Popup"
              className="popup-image"
            />
          </div>
        </div>
      )}
      {/* Modal popup */}
      {islandOpen && (
        <div className="modal-overlay" onClick={closelandPopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closelandPopup}>
              ×
            </button>
            <img
              src="/assets/images/Landingpage.png"
              alt="UI/UX Popup"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
