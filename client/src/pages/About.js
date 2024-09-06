import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout
      title={"About Us | DoGo - Your Trusted Source for Premium Dog Products"}
    >
      <div className="row abt_us ">
        <h1> About Us </h1>
        <p className="into_p">
          Welcome to DoGo! At DoGo, we are dedicated to providing the best
          products for your beloved canine companions. Our e-commerce platform
          is designed to offer a diverse selection of high-quality dog products,
          from nutritious food to engaging toys and essential accessories. Our
          mission is to enhance the lives of dogs and their owners by making
          top-tier pet products easily accessible.
        </p>
        <div className="abt_1">
          <div className="img_abt">
            <img
              src="images/abt_img2.png"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="txt_abt">
            <p className="text-justify mt-2">
              <b> Our Vision : </b> At DoGo our vision is to create a world
              where every dog receives the care, joy, and comfort they deserve.
              We believe that every dog should have access to the best products
              that promote their health, happiness, and overall well-being. Our
              goal is to be a trusted partner in your journey of providing the
              best for your furry friend.
            </p>
          </div>
        </div>
        <div className="abt_1">
          <div className="txt_abt">
            <p className="text-justify mt-2">
              <b>Our Promise :</b> At DoGo, we promise to always prioritize the
              well-being of your pet. We strive to be a brand you can trust,
              offering products that enhance your dog's life and make pet
              ownership more enjoyable. Thank you for choosing DoGo as your
              go-to destination for all things dog-related.
            </p>
          </div>
          <div className="img_abt">
            <img
              src="/images/abt_img3.png"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="abt_1">
          <div className="img_abt">
            <img
              src="images/abt_img1.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="txt_abt">
            <p className="text-justify mt-2">
              <b> Our Commitment : </b> At DoGo, we are deeply committed to
              ensuring top-notch quality by selecting products that meet high
              standards and partnering with trusted brands. Your satisfaction is
              our priority, supported by a dedicated customer service team that
              ensures a smooth shopping experience. We also focus on innovation,
              constantly exploring the latest trends and advancements to offer
              products that enhance your dog's well-being.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
