"use client"
import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Page = () => {
  return (
    <>
      <section className="terms-conditions-banner banner-height">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl text-white mb-0 lh-sm">Policy</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="tabs">
        <div className="container-xl">
          <div className="tab-section">
          <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Terms & Conditions">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Terms & Conditions">
            Tab content for Profile
          </Tab>
        </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
