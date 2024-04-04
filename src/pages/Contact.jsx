// import React from 'react'
import { ErrorMessage, Field, Formik, Form } from "formik";
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Tb24Hours } from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";
// import { Form } from "react-router-dom";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  };

  return (
    <div className="bg-[#F5F7FA]">
      <Navbar />
      <Banner title='contact' titleTwo='contact' />

      <div className="container py-16 px-4 lg:px-0">
        <div className="text-center lg:w-[53%] mx-auto">
          <h2 className="text-4xl font-medium tracking-tighter pb-5"><span className="text-[#7000FE]">Get in touch</span> with us</h2>
          <p className="text-xs font-light pb-12">Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-y-6 lg:gap-y-0 text-center">
          <div className="group cursor-context-menu">
            <div className="flex justify-center mb-5 ">
              <i className="text-5xl text-[#7000FE] group-hover:scale-90 transition duration-200"><GrMapLocation /></i>
            </div>
            <h2 className="font-medium">Address</h2>
            <p className="text-xs font-light pt-3 leading-[1.2rem]">Head Office: 785 15h Street, Office 478 <br />
              Berlin, De 81566 <br />
              Check Location </p>
          </div>
          <div className="group cursor-context-menu">
            <div className="flex justify-center mb-5 ">
              <i className="text-5xl text-[#7000FE] group-hover:scale-90 transition duration-200"><MdOutlineSupportAgent /></i>
            </div>
            <h2 className="font-medium">Get In Touch</h2>
            <p className="text-xs font-light pt-3 leading-[1.2rem]">Mobile: 9801234567 <br />
              Hotline: 9801234567 <br />
              Email: info@example.com </p>
          </div>
          <div className="group cursor-context-menu">
            <div className="flex justify-center mb-5 ">
              <i className="text-5xl text-[#7000FE] group-hover:scale-90 transition duration-200"><Tb24Hours /></i>
            </div>
            <h2 className="font-medium">Hour of operation</h2>
            <p className="text-xs font-light pt-3 leading-[1.2rem]">Sunday-Thursday: 9am - 5pm <br />
              Friday: 8am - 3pm <br />
              Saturday: close </p>
          </div>
        </div>

        <div className="container mx-auto border rounded-2xl mt-12 lg:mt-20">
          <div className="aspect-w-20 aspect-h-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6177377686895!2d85.32057797497369!3d27.66729622725774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d089fa474b%3A0x7541732c75a612d2!2sLagankhel%20Bus%20Station!5e0!3m2!1sen!2snp!4v1712119217439!5m2!1sen!2snp"
              className="rounded-2xl w-full md:h-[20rem]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>


        <div className="mt-16">
          <h2 className="text-center text-4xl font-medium tracking-tight mb-7">Send a <span className="text-[#7000FE]">message</span></h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          // onSubmit={onSubmit}
          >
            {() => (
              <Form className="grid lg:grid-cols-2 gap-6 lg:w-[70%] mx-auto ">
                <div className="col-span-2 lg:col-span-0">
                  <Field className='w-[100%] py-3 px-4 border shadow rounded-full' type="text" name="firstName" placeholder="First Name" />
                  <ErrorMessage className="text-red-600 px-4 pt-2" name="firstName" component="div" />
                </div>
                <div className="col-span-2 lg:col-span-0">
                  <Field className='w-[100%] py-3 px-4 border shadow rounded-full' type="text" name="lastName" placeholder="Last Name" />
                  <ErrorMessage className="text-red-600 px-4 pt-2" name="lastName" component="div" />
                </div>
                <div className="col-span-2">
                  <Field className='w-[100%] py-3 px-4 border shadow rounded-full' type="text" name="subject" placeholder="Subject" />
                  <ErrorMessage className="text-red-600 px-4 pt-2" name="subject" component="div" />
                </div>
                <div className="col-span-2">
                  <Field className='w-[100%] py-3 px-4 border shadow rounded-3xl'
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    rows="5"
                  />
                  <ErrorMessage className="text-red-600 px-4 pt-2" name="message" component="div" />
                </div>
                <div className="col-span-2">
                  <button className="flex gap-2 items-center justify-center py-3 px-5 bg-black w-[100%] mx-auto rounded-full text-white" type="submit">Submit <RxArrowTopRight /></button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact;