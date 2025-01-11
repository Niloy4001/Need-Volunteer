import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto py-16 md:py-24 space-y-16">
        {/* row 1 */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="md:order-2 order-1 flex justify-center items-center"><img src="https://i.ibb.co.com/1Kdmpyb/Tree-Plantation-Drive.jpg" alt="" /></div>
        <div className="md:order-1 order-2">
            <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">About Us</h1>
            <p>Connecting compassionate individuals with meaningful volunteering opportunities, empowering communities, and fostering a global network of changemakers to create a better world through collaboration, kindness, and impactful contributions.</p>
        </div>
      </div>
        {/* row 2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="flex justify-center items-center"><img src="https://i.ibb.co.com/Gn0hTr3/Free-Health-Camp.jpg" alt="" /></div>
        <div>
            <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text"> Our Mission: Helping Millions of People Grow Better</h1>
            <p>Our mission at Need Volunteer is to empower individuals and communities by facilitating impactful volunteering experiences. We believe that growth isn’t just about achieving personal milestones; it’s about creating collective progress. When people give back to society, they not only enrich the lives of others but also discover a sense of purpose and fulfillment within themselves.</p>
            <p>Through our platform, we strive to bridge gaps between societal needs and human potential. By connecting individuals with volunteering opportunities, we aim to address challenges in education, healthcare, poverty alleviation, environmental conservation, and much more. Our focus is to enable people to grow better by aligning their passions and skills with causes that need their support the most.</p>
            <p>At Need Volunteer, growth is a shared journey. We’re here to ensure that every individual has the chance to contribute, learn, and inspire. Together, we can create a ripple effect of positive change, nurturing better communities and a brighter future.

</p>
        </div>
      </div>
        {/* row 3 */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="md:order-2 order-1 flex justify-center items-center"><img src="https://i.ibb.co.com/1r4Rvkq/Clothing-Donation-Campaign.jpg" alt="" /></div>
        <div className="md:order-1 order-2">
            <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text"> Our Story</h1>
            <p>The story of Need Volunteer began with a simple idea: to make volunteering more accessible and impactful for everyone. It was founded on the belief that everyone has the potential to contribute to a better world, regardless of their background, skills, or location. The journey started with a small group of individuals who were passionate about addressing the challenges that communities face every day.</p>
            <p>Over the years, we realized that while many people are eager to help, they often struggle to find opportunities that match their interests and availability. This insight inspired us to create a platform where volunteers and organizations could connect seamlessly. What started as a local initiative has now grown into a global movement, enabling thousands of people to dedicate their time and energy to meaningful causes.</p>
            <p>Today, Need Volunteer is more than just a platform—it’s a community of changemakers united by a shared vision of a better, more compassionate world. Our story is a testament to the power of collaboration, determination, and the belief that even small acts of kindness can lead to monumental change.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
