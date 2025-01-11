import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto py-7 md:py-12 lg:py-16">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
        FAQ
      </h1>
      {/* accourdion */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-white rounded-lg p-5">
        <div className="join join-vertical w-full col-span-1 md:col-span-1 lg:col-span-2 md:order-1 order-2">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium text-primary">
              1. What is the purpose of this website?
            </div>
            <div className="collapse-content text-secondary">
              <p>
                The purpose of this website is to create a user-friendly
                platform for managing volunteer activities. Users can create,
                update, or delete posts for volunteer needs and also sign up as
                volunteers for posts created by others, fostering community
                engagement and collaboration.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-primary">
              2. How can users create a volunteer need post?
            </div>
            <div className="collapse-content text-secondary">
              <p>
                Users can create a volunteer need post by registering on the
                platform and navigating to the "My profile &#8594; 'Add
                Volunteer Need post'" section. They need to fill out details
                such as the task description, required number of volunteers,
                date, and location. Once submitted, the post will be visible to
                others on the platform.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-primary">
              3. Can a user edit or delete their volunteer need post after
              publishing it?
            </div>
            <div className="collapse-content text-secondary">
              <p>
                Yes, users can edit or delete their posts. The platform provides
                an "Edit" option for updating details and a "Delete" button to
                remove a post permanently. These options are accessible in the
                My Profile &#8594; Manage my post or post management.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-primary">
              4. How can a user volunteer for a post?
            </div>
            <div className="collapse-content text-secondary">
              <p>
                Users can browse the list of available volunteer need posts and
                click on the "View Details" button for any post they are
                interested in then they will see all details about that post and
                a button named "Be A Volunteer". After confirming their
                participation, their details will be shared with the post
                creator, and they will be added as a volunteer.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-primary">
              5. Is there any way to track the volunteers for a post?
            </div>
            <div className="collapse-content text-secondary">
              <p>
                Yes, post creators can view a list of volunteers for their posts
                in "Manage my profile route". This list includes volunteer names
                and email to facilitate communication and coordination.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 md:order-2 order-1">
          <Lottie
            style={{ height: "300px", width: "100%" }}
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
