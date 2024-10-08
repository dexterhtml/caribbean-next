"use client"
import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Page = () => {
  function handleScrollIntoView(element: React.MouseEvent<HTMLElement>): void {
    const targetElement = document.querySelector(
      `#${element.currentTarget.getAttribute("data-id")}`
    );
    if (targetElement) {
      targetElement.setAttribute("style", "scroll-margin-top:150px;");
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
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
            defaultActiveKey="terms-conditions"
            id="uncontrolled-tab-example"
            className="mb-5"
            >
              <Tab eventKey="terms-conditions" title="Terms & Conditions">
                <div className="row gx-5">
                    <div className="col-xl-4 col-md-12">
                      <div className="left-side-col">
                        <ol className="content-stick-scroll">
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content0"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Our Service Usage
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content1"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                                Device Details
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content2"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Eligibility
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content3"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Account Registration
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content4"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Account Security
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content5"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Compliance with Laws
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content6"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               User-Generated Content
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content7"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                              Prohibited Uses
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content8"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Third Party Services
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content9"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Liability Limitation
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content10"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Warranty Disclaimer
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content11"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Intellectual Property Rights of Caribbean Bingo
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content12"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Virtual Items
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content13"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               License to use the Services
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content14"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Winnings, Account Funds, Payments, Prize Forfeiture
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content15"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Skill Matching
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content16"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Indemnification
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content17"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Terms and termination
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content18"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Agreement to Arbitrate/Class Action Waiver
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content19"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Terms or Services Modifications
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content20"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Governing Law and Jurisdiction
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content21"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               No Waiver and Force Majeure
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content22"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Survival
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content23"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Rights Assignment
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content24"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Notification Procedures
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content25"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Entire Agreement and Severability of Clauses
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content26"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Language
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="click-btn"
                                data-id="content27"
                                data-value={150}
                                onClick={(e) => {
                                  handleScrollIntoView(e);
                                }}
                              >
                               Contact Us
                              </button>
                            </li>
                        </ol>
                      </div>
                    </div>
                    <div className="col-xl-8 col-md-12">
                      <div className="right-side-col">
                         <div id="content0" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">1. Hipster ipsum tattooed brunch I'm baby.</h2>
                            <div className="content-desc mb-3 pb-1">
                              Caribbean Bean consists of an online arena for mobile games, cash competitions, and cash tournaments, with several applications, tools, and related services that we may elaborate on from time to time. Features and competitions may require you to register with the Caribbean by creating an account and providing us with certain details about yourself.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            Caribbean Bean consists of an online arena for mobile games, cash competitions, and cash tournaments, with several applications, tools, and related services that we may elaborate on from time to time. Features and competitions may require you to register with the Caribbean by creating an account and providing us with certain details about yourself.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            Competitors proficient in using their relevant skills and knowledge will get the highest scores and be declared winners. Caribbean Bean has a matchmaking skill policy in determining how players are clubbed in competitions. To know more about the skill matching policy and its effect on gameplay, please see here. This service should not be used for gambling in any form.
                            </div>
                            <div className="content-desc">
                              By using Caribbean's Services, you acknowledge and confirm that your engagement is purely personal and a pastime. It is not a business attachment nor an act to foster gambling.
                            </div>
                         </div>
                         <div id="content1" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">2. Device Details</h2>
                            <div className="content-desc mb-3 pb-1">
                              Our Caribbean Bingo service requires you to make sure  to update the device according to the service upgrade.ave an online connection with our servers. We may ask for details to be provided by you or your internet-enabled device to enable the services. This includes the hardware system, internet connection, internet connection data, and information associated with the functioning of the Services (from any device that logs in the Services through your account). ​
                            </div>
                            <div className="content-desc">
                              We do not assure the functioning of services on all devices. You need to own the appropriate device compatible to connect to the Services. The device should be updated as per the service upgrade.
                            </div>
                         </div>
                         <div id="content2" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">3. Eligibility</h2>
                            <div className="content-desc mb-3 pb-1">
                              The services provided by Caribbean are intended for use by individuals who are 18 years of age or older. They should be legally capable of entering into a binding contract under the laws of the jurisdiction. Use of services by those under eighteen (18) years of age are forbidden, unlawful, and under the violation of these terms. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              If we notice that any of you are or might be under eighteen (18) yrs age, we reserve the right to eliminate your account. We will also delete any content or other information you have submitted to the Services. We will restrict you to use or access the Services (or any part or features) by barring you.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              When you access or use the Services, you guarantee that:
                            </div>
                            <p className="content-desc mb-2">
                              a. You are an individual who is 18 years of age or above. You should have an email address and additional information should be submitted while creating the account.
                            </p>
                            <p className="content-desc mb-2">
                              b. You have the legal authority to contract with Caribbean Bingo.
                            </p>
                            <p className="content-desc mb-2">
                              c. You are physically located in a region (you selected to participate in a competition) that is legal according to the laws of the jurisdiction.
                            </p>
                            <p className="content-desc mb-2">
                              d. You will be bound by these Terms and all prevailing laws without exception. Caribbean Bingo reserves the right to verify that users under 18 years of age do not use the Services. At any point, we have the right to demand for age verification if necessary. 
                            </p>
                            <div className="content-desc mt-3 pt-1 mb-3 pb-1">
                            If you do not fit any of the definitions included within the descriptions, you are not allowed to access or use any of the services. We also have the right to suspend or close your user account, with or without a warning.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            In making a deposit or enrolling in a cash contest, you also assert that you do not fall under the backup withholding tax because:
                            </div>
                            <p className="content-desc mb-2">
                              a. You fall within the category of exempt from backup withholding 
                            </p>
                            <p className="content-desc mb-2">
                              b. You have been advised that you are not subject to backup withholding by the Internal Revenue Service (IRS).
                            </p>
                         </div>
                         <div id="content3" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">4. Account Registration</h2>
                            <div className="content-desc mb-3 pb-1">
                              Registration for access to particular Services may be required. Participants who subscribe and get an account will be required to provide information, like:
                            </div>
                            <p className="content-desc mb-2">
                                a. Creating a unique username and password
                            </p>
                            <p className="content-desc mb-2">
                                b. Contact information such as name, phone number and email address
                            </p>
                            <p className="content-desc mb-2">
                                c. Payment and billing information
                            </p>
                            <p className="content-desc mb-2">
                                d. Any other information that is required on the account registration form. Only one account can be established, maintained, used and controlled within the platform.
                            </p>
                            <div className="content-desc mb-3 pb-1 mt-3 pt-1">
                              Only one individual is allowed to own, maintain, use, and control the account on the Services.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              The creation of your account and the security of your login credentials is your responsibility. Don’t share your login information with anyone. By creating an account, you consent to immediately alerting us of any loss of password or suspected illegal activity in your account. 
                            </div>
                            <div className="content-desc">
                              Regardless of whether the acts were made by you or an unauthorized third party who obtained access to your account, you are still totally responsible for anything that is done in relation to your account.
                            </div>
                         </div>
                         <div id="content4" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">5. Account Security</h2>
                            <div className="content-desc mb-3 pb-1">
                              You, being the account holder, need to comply with these Terms. You cannot share the benefits of your account with anyone else. You cannot allow anyone else to: 
                            </div>
                            <p className="content-desc mb-2"> 
                              a. Use your account
                            </p>
                            <p className="content-desc mb-2">
                              b. Use remote services that use your credentials
                            </p>
                            <p className="content-desc mb-0">
                              c. Claim the prizes from your account.
                            </p>
                            <div className="content-desc mt-3 pt-1">
                              Your account and the prizes you won by participating in the tournaments are not subject to any kind of transfer to other persons or accounts.
                            </div>
                            <div className="content-desc mt-3 pt-1">
                              We have the right to check information, including name, address, age, payment method, and withdrawal, you provide when you register. We may request documents to confirm this information. These documents can be an ID card or the residence permit, utility bill, or proof of the payment method.
                            </div>
                            <div className="content-desc mt-3 pt-1">
                              Documents should be certified by a Notary Public. If you fail to provide copies of any documents, Caribbean has the right to close your account and withhold any funds present. 
                            </div>
                            <div className="content-desc mt-3 pt-1 mb-3 pb-1">
                              These Terms and Conditions contain provisions for the Account Holder to:
                            </div>
                            <p className="content-desc mb-2">
                              a. Immediately register or provide the Operator with any necessary current, verified and complete registration data.
                            </p>
                            <p className="content-desc mb-2">
                             b. Provide additional information in light of fraud prevention efforts.
                            </p>
                            <p className="content-desc mb-2">
                             c. Adhere to any other terms and procedures that we implement.
                            </p>
                            <div className="content-desc mt-3 pt-1">
                              You grant us permission to use the information and data you submit to third-party providers for age verification and identification. You agree that all information and data you provide will be truthful, accurate, and verifiable in all respects.
                            </div>
                         </div>
                         <div id="content5" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">6. Compliance with Laws</h2>
                            <div className="content-desc mb-3 pb-1">
                              You agree that there are numerous laws that govern the participation in most contests or games in which entry fees are charged. Betting Laws are created for each state, country, territory or other similar jurisdiction. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              We don’t provide Cash Competitions to clients in any region where the services are either illegal or non-compliant with any of its Gaming Laws (“Prohibited Jurisdictions”). If you are in a Prohibited Jurisdiction then you cannot play Cash Competitions. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Among the Prohibited Jurisdictions in the United States are South Carolina, Arizona, Iowa, and Louisiana. Other Prohibited Jurisdictions for card-based games are Indiana, Maine, and Montana. 
                            </div>
                            <div className="content-desc">
                              Additional Prohibited Jurisdictions may be added at any time, at our sole discretion, and these lists can be changed. Additionally, Caribbean Bingo has technical precautions to prevent your use of the Services from Prohibited Jurisdiction. We also have the right to track the location from which you use the Services.
                            </div>
                         </div>
                         <div id="content6" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">7. Compliance with Laws</h2>
                            <div className="content-desc mb-3 pb-1">
                              Users can upload, post, transmit, and share content through these Services. By extracting parts of the users' generated User Content, new User Content can be produced independently or in collaboration with other users. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            The User Content can contain Caribbean Bingo’s information and contents but not in the case of official verification or their endorsement. Our beliefs and viewpoints are not reflected in the opinions shared by other users on the Services. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            You agree to abide by the rules set forth in these Terms in order to use features that allow you to interact with other users or upload or transmit User Content through the Services.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Caribbean will remove, correct, or not publish the User’s Content even if it has been submitted for any purpose or requirement, under these Terms, or for any other purpose if only Caribbean thinks it is necessary.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            When you upload or post any User Content through the Services, you represent, affirm, and agree to provide Caribbean Bingo with all the necessary rights on a trust basis, in a royalty-free, sub-licensable, transferable, perpetual, non-revisable, non-exclusive, and international manner. 
                            </div>
                            <div className="content-desc">
                              These details will be used to host, save, copy, adapt, modify, transform, cut, suit, and spread User Content. It will also be used to create and disseminate any related User Content whether mononymous or featuring entities’ names, voices or images, in any format, medium and technology, present or future, for the purpose of Caribbean Bingo Inc. 's business operations or related services.
                            </div>
                         </div>
                         <div id="content7" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">8. Prohibited Uses</h2>
                            <div className="content-desc mb-3 pb-1">Under no circumstances may You (or any third party) perform, submit, upload, or in any manner transmit or permit the transmission or submission of any content or user submissions (including User Content) via the Services that:</div>
                            <p className="content-desc mb-2">
                                a. Is or could reasonably be considered illegal, violent, threatening, abusive, invasive of a person’s privacy, self-harming, harassing, defamatory, libelous, untrue, misleading, false, deceptive, fraudulent, deceptive, obscene, indecent or sexually explicit. Or in any other way impermissible, as the Caribbean may determine at its sole discretion.
                            </p>
                            <p className="content-desc mb-2">
                              b. Violates or misappropriates intellectual property or any other rights of any third party.
                            </p>
                            <p className="content-desc mb-2">
                            c. Violates any right of privacy, negatively affects individuals or institutions, or rights of any kind of law or contractual structure, including but not limited to data protection, anti-spam and privacy laws.
                            </p>
                            <p className="content-desc mb-2">
                            d. Any commercial use is covered that is not explicitly allowed by the Caribbean.
                            </p>
                            <p className="content-desc mb-2">
                          e. Any other materials that contain harmful, destructive or potentially harmful programs, codes, files or devices that are created or used for damaging, eliminating, distorting or restraining the availability of any software or hardware resources. Or for obtaining unauthorized access to any system, data, data, keys, passwords, or particulars of Caribbean, its Users or any other person or entity. In case such actions result in the system being taken down by Caribbean Bingo.
                            </p>
                            <p className="content-desc mb-2">
                          f. Requests being made, using, launching or processing an automated system, including the machine learning systems, systems intended for “searching,” obtaining “copying” offline functions, and, so on, to be able to access the Services in a totality such that it sends more server request messages than a human being would be able to produce during the same time frame.
                            </p>
                            <p className="content-desc mb-0">
                            g. Deletes, breaches, obscures, or modifies any copyright or other proprietary notices on, in, or otherwise related to the Services. This could include any copyright, trademark, patent, trade secret, mask work right, moral right, privacy right, right of publicity, trade dress and service mark right, goodwill, and third-party rights. Any content that you use or make available through the Services—whether through uploading or otherwise—is entirely your responsibility.
                            </p>
                            <div className="content-desc mt-4 pt-1">
                            There’ll be a violation to criminal and civil laws by any attempt to knowingly harm the Services or interfere with the proper running of any competition. In the event that such an attempt is undertaken, Caribbean reserves the right to sue you for damages and other remedies to the fullest extent allowed by law.
                            </div>
                         </div>
                         <div id="content8" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">9. Third Party Services</h2>
                            <div className="content-desc mb-3 pb-1">
                              You employ these Third-Party Services at your own risk, and your use of them is governed by the terms stated there. You understand that by using Third-Party Services, Caribbean Bingo is not liable in any way, either directly or indirectly. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              You should contact these third parties in case of issues or grievances you may have with such Third-Party Services. You acknowledge that any information you subsequently provide is governed by the terms of service and privacy policy of the third party, not by our terms or privacy policy, when you click on these links. We disclaim all liability for the privacy, security, safety, or content of any third-party services.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              In case you downloaded the software using Apple Store and/or you are one of those using this software or the INTERNET RESOURCE over your iOS-based gadget, then it is assumed that you have reviewed, comprehended and do not dispute the notice below. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              These Terms make up a binding agreement between you and Caribbean Bingo, and not with Apple Inc. Apple will not be liable for the provision of the Services and their content. Apple is not obliged to provide any maintenance, technical support or any form of services in relation to the Services.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            Apple will not be liable for any such claims, obligations or liabilities that arise under any such content, whether by you or third party, related to these Services or any purchase or use of the Service.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            Whenever you are making use of the Services, you also agree to adhere to the relevant service agreements that belong to certain third parties.
                            </div>
                         </div>
                         <div id="content9" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">10. Liability Limitation</h2>
                            <div className="content-desc mb-3 pb-1">When you use Services, you acknowledge and agree that Caribbean Bingo’s liability regarding the use of Services is governed by the following provisions.</div>
                            <div className="content-desc mb-3 pb-1">Under no circumstance shall Caribbean itself, its parents, or their subsidiaries or affiliated enterprises or any trust officers, managers, employees, agents, or even personal representatives or executives thereof (“Caribbean Entities and Individuals”) be liable to you or any person for any type of loss or damage.</div>
                            <div className="content-desc mb-3 pb-1">The Caribbean Entities and Individuals will not in any circumstances be held accountable for any loss or damage, including, for example, loss of use, data or profits, or any damages, without limitation, loss of use or injury or death to any person; as a result of using any Services. There are some states where the Law does not permit exclusion or limitation of consequential loss and in that case, such limitation or exclusion will not apply to you. In these states, our liability will be limited as allowed by law in such cases.</div>
                            <div className="content-desc mb-3 pb-1">Under no circumstances shall the total liability of Caribbean Bingo Entities and Individuals to you or any third parties for all damages shall exceed one hundred U.S. Dollars ($100). </div>
                            <div className="content-desc mb-3 pb-1">No liability for any damage to your and any third parties’ hardware, computer software, shall be taken up by the Caribbean Bingo Entities and Individuals. 
This includes other technologies, not limited to loss due to security breaches or virus infection, bug, tampering, fraud, error, delay in operation or transmission or computer line network failure or any other technical or other malfunctions. 
</div>
                            <div className="content-desc mb-3 pb-1">If any of the Services does not help meet your expectations, the only solution you have is to refuse access and withdraw from the provided services.</div>
                            <div className="content-desc mb-3 pb-1">You acknowledge that by using the Services, you might be giving up your right to pursue claims that are currently unidentified or unfounded. Claims that the creditor or releasing party did not know about or suspect to exist in their favor at the time the release was executed are not covered by a general release.</div>
                            <div className="content-desc">There is a significant impact on his or her settlement with the debtor or released party if they had understood. As a result, you consent to forego the benefit of any legislation that would otherwise restrict your ability to waive such claims, including, if relevant, section 1542 of the California Civil Code.</div>
                         </div>
                         <div id="content9" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">11. Warranty Disclaimer</h2>
                            <div className="content-desc mb-3 pb-1">You understand and accept that using the Services is entirely at your own risk. By using the Services, you understand and accept the risk that any information you send or receive could not be secure and could be intercepted or later obtained by unauthorized parties. </div>
                            <div className="content-desc mb-3 pb-1">Without any express or implied guarantees of any kind, including but not limited to implied warranties of merchantability, fitness for a specific purpose, or non-infringement, the Services are offered on a "as is" and "as available" basis. Although the Caribbean works hard to maintain its services, all internet services have problems.</div>
                            <div className="content-desc mb-3 pb-1">Furthermore, Caribbean bears no liability whatsoever for the games you play or your device, including any communication or other faults in said games or device. In the event that you participate in competitions, such errors may be tallied as losses.</div>
                            <div className="content-desc mb-3 pb-1">Caribbean makes no warranties about the Services, Website, or any service or content made available through the Services. Caribbean disclaims all warranties and guarantees regarding protection against malware on computers. Caribbean makes no claims or guarantees regarding the continuity or error-free nature of the Services. Caribbean makes no guarantees about the fairness of any tournaments you enter or about the honesty of other players.</div>
                            <div className="content-desc mb-3 pb-1">Some legal systems exclude or limit the exclusion of liability for latent defects or other warranties. So do refer to related laws as the disclaimer for such warranties may not be legally effective under this agreement in such jurisdictions of law. In those respects, Caribbean’s liability shall be limited as the Law stipulates. There may be other disclaimers that form part of the Services, and those shall be taken into account accordingly.</div>
                            <div className="content-desc mb-3 pb-1">If any of these disclaimers impose more limitations on how you use the Services or the material on them, then those more limitations will be in effect. </div>
                            <div className="content-desc">Both claims made by third parties and claims between the parties shall be subject to this liability limitation. The limits above will only apply to you to the extent that applicable law permits them to, in the event that applicable law prohibits all or any portion of the limitations from applying to you.</div>
                         </div>
                         <div id="content9" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">12. Intellectual Property Rights of Caribbean Bingo</h2>
                            <div className="content-desc mb-3 pb-1">All title, ownership, and intellectual property rights pertaining to the applications, website, images, texts, graphics, illustrations, trademarks, service marks, trade dress, copyrights, photographs, sound, video and music recordings, logos, designs, virtual items and any part, which provide services to Caribbean or other third-party companies, are owned by Caribbean, their respective owners. </div>
                            <div className="content-desc mb-3 pb-1">The user of the Service shall not copy, reproduce, post, or use any above or similar content, without any permission from Caribbean (its licensor). Nothing in this Agreement is a license or permission by the Caribbean.</div>
                            <div className="content-desc mb-3 pb-1">If you wish, you can provide suggestions or complaints about the Caribbean, or request information that you believe will help to improve its functionality, thereby making use of its resources (or “feedback”). </div>
                            <div className="content-desc mb-3 pb-1">There is a clear understanding that the Caribbean is not under any compulsion to do things that come with fiduciary-like duties. However, if you decide to provide Feedback, you hereby represent and warrant. </div>
                            <p className="content-desc mb-2">
                              Here are some rules for feedback:
                            </p>
                            <p className="content-desc mb-2">
 a. You are entitled to give out such Feedback
                            </p>
                            <p className="content-desc mb-2">
 b. The Feedback should not be from any party’s rights violation of any kind. 
                            </p>
                            <p className="content-desc mb-2">
 c. Your Feedback should not contain any information that is confidential or proprietary to a third-party.  
                            </p>
                            <p className="content-desc mb-2">
                              On submitting any feedback to the company, you also: 
                            </p>
                            <p className="content-desc mb-2">
a. Agree to the following statements that there’s no implied or express agreement of confidentiality as far as the Feedback is concerned.
                            </p>
                            <p className="content-desc mb-2">
b. Are prepared to note that the company might have something similar or the same as the Feedback, which is already under deliberation or in development.
                            </p>
                            <p className="content-desc mb-2">
c. Authorize for an irrevocable license that covers areas such as but not restricted to usage, amendment, preparation of works. These are not original, publication, transfer, information of the feedback. Feedback is non-exclusive and royalty free and is granted to us on a worldwide, perpetual basis. 
                            </p>
                            <p className="content-desc mb-0">
d. Irrevocably gives up or causes to give up any such moral rights or collective rights that are associated with and would restrict the contents of such Feedback.     
                            </p>
                            <div className="content-desc mb-3 pb-1">The present clauses as for feedback will stay in effect after any account or Service termination.</div>
                         </div>
                         <div id="content10" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">13. Virtual Items</h2>
                            <div className="content-desc mb-3 pb-1">
                              One of the features of the Services is the ability to acquire virtual in-game currency. This currency includes chips, virtual coins, points, credits, virtual bonuses, and collectibles- all of which could be used as "Virtual Items." 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Virtual items can be acquired through the Services or by winning. We grant you a license to use Virtual Items for personal use through the Services. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Below are the restrictions and additional terms outlined in more detail for use of Virtual Items.
                            </div>
                            <p className="content-desc mb-2">a. Virtual items are not exchangeable or cashable for "real world" money, products, or any other financial item from the Caribbean or any other third party. </p>
                            <p className="content-desc mb-2">b. You acknowledge that the Virtual Items that appear or originate in any of our services, as well as any other characteristics linked to an account or saved on the services, are not yours.</p>
                            <p className="content-desc mb-2">c. When you purchase Virtual Items, it's final and cannot be returned, transferred, or exchanged until Caribbean decides otherwise. </p>
                            <p className="content-desc mb-3 pb-1">d. Virtual Items may only be exchanged, bought, sold, or transferred in accordance with the terms specified within the Services. </p>
                            <div className="content-desc mb-3 pb-1">Unless specifically permitted by the Caribbean, you are not permitted to try to sell, gift, or trade anything that appears or originates in the Services in the "real world."</div>
                            <div className="content-desc mb-3 pb-1">The Caribbean does not have any obligation to refund under any circumstances. Money will not be paid for the Virtual Items that have not been used if an account has been closed (voluntarily or involuntarily). </div>
                            <div className="content-desc mb-3 pb-1">In the event the account is closed, even due to the fault of Caribbean and in its sole discretion or the website where the Services are rendered goes offline, then all Virtual Items shall also be forfeited. </div>
                            <div className="content-desc">If the account is removed, or Virtual Items could be compromised and refunded, or certain portions of the Virtual Items are removed, no refunds will be made, and no Virtual Items will be delivered to your possession, nor will they be exchanged for money or any other form of gift certificate.</div>
                         </div>
                         <div id="content11" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">14. License to use the Services</h2>
                            <div className="content-desc mb-3 pb-1">
                              Installing and accessing the Services on a device that you own or control gives you a personal, non-exclusive, limited, non-transferable, non-assignable, non-sub licensable, limited license that is subject to these terms. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Users can only use the license to services for accessing and using the Services in line with these terms. Users cannot network the software across devices.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              The source code of the Services, or their structural framework, should not be created, attempted, permitted, or assisted by others. You cannot authorize the other party or person to:
                            </div>
                            <p className="content-desc mb-2">a. Reverse-engineer, decompile, disassemble, re-engineer services</p>
                            <p className="content-desc mb-2">b. Derivative works of the Services may not be created</p>
                            <p className="content-desc mb-2">c. The Services may not be used, in whole or in part, for any purpose other than those expressly provided herein</p>
                            <p className="content-desc mb-3 pb-1">d. Disabling or evading any access control or related device, process, or procedure established with respect to the Services are prohibited.</p>
    
                            <div className="content-desc mb-3 pb-1">The source code of the Services, or their structural framework, should not be created, attempted, permitted, or assisted by others. You cannot authorize the other party or person to:</div>
                            <div className="content-desc">
                              You are liable for every use of the Services that is under your possession or control.
                            </div>
                         </div>
                         <div id="content12" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">15. Winnings, Account Funds, Payments, Prize Forfeiture</h2>
                            <div className="content-desc mb-3 pb-1">
                              All fees and expenses for any Services where fees are applicable (“Tariffs”) should be disclosed to you before you can participate in the competition or a tournament. By signing for a particular event, be ready to incur such expenses as Entrance Fees. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            All Tariffs should be paid in advance and cannot be returned. You are responsible and accountable for all the changes and disturbances that have occurred under your name in your account. This includes all unauthorized changes, deposits and withdrawals. We reserve the right to amend the cost of any services anytime for any reason. However, no previous charges or withdrawn amount will be altered.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            We may ask you to pay Sales Tax, Value Added Tax, and Goods and Services Tax in accordance with the relevant law. As related to each withdrawal or replenishment transaction, taxes will be estimated and charged separately. So, kindly be prepared to pay higher amounts.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            You undertake to pay us all including the relevant taxes charges on any Fees that arise out of the use of the Account and paid for using a valid credit card or other payment method in favor of the Company to pay for the aforementioned services in accordance with price schemes current at the time an obligation to pay arises, including applicable taxes incurred herewith.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              If you have any problems with the accounting records, except for those related to charges to your account, you undertake to inform the Company in writing of any such problems not later than thirty days after such an entry to the account statement is made. You further agree that any disputes concerning the problems or discrepancies so mentioned should be resolved within the same period of the thirty (30) days.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            You agree not to reverse any transaction or commencement of transaction in your account resulting in â€˜chargebacksâ€; â€˜feebacksâ€™ or FRAUDULENT transactions for any kind of payment. In the event of any such claim, charge, dispute and/or request for any payment or refund, you shall indemnify us against the following Costs and Expenses: losses, damages, proceedings, claims or penalties (including legal costs and expenses) even if the same were not incurred by us;
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              You agree that if for any reason a charge you authorize us to make to your credit card or other payment method cannot be charged or is returned to us unpaid, we may suspend or terminate your account, and you shall immediately pay the amount of such charge through the alternative method for which you have been provided.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Should you decide to play games for Real Money, you can request cash withdrawal at any time. Please be informed that funds requested may take not more than ninety (90) days. But, we reserve the right to either hold your account till any fraud or abuse is cleared and confirmed. Your documents are validated (if applicable) in compliance with applicable laws.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              It is indicated in our policies and procedures that competitors who play for Real Money must claim any winning prize within sixty (60) days from winning the competition. If they don’t, the Caribbean could forfeit your prize. If you claim your prize within sixty (60) days we have no obligation. In case you miss the 60-day deadline to claim your prize, you need to understand that the Caribbean has no further legal obligation to you. Also, at Caribbean’s sole discretion, the prize may be given to someone else.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              If you want to close your account, the funds in your account will be forfeited. Any request for withdrawal of funds should be made before the account is closed. We have the right to deactivate your account because of the following conditions: fraudulent action, illegal activities, or cheating (where all these actions are considered so at our sole discretion), the funds in your account could get seized and absolutely no chances for any returns to you will be provided.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              The right to impose a maintenance fee of $2.00, €2.00, or £2.00 per month, depending on the applicable jurisdiction (or any amount in the applicable currency up to the equivalent thereof, the “Monthly Maintenance Fee”) is reserved by us if your account becomes inactive. This means that you have not entered at least one competition or tournament for six (6) consecutive months or longer. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                              Every month that your account is inactive, the Monthly Maintenance Fee will be taken out of it. If you have no cash in your account, the Monthly Maintenance Fee will not be taken out of it. ​
                            </div>
                            <div className="content-desc mb-3 pb-1">All fees are final, nonrefundable, and not refundable unless mandated by law.</div>
                            <div className="content-desc mb-3 pb-1">Caribbean Bingo maintains the right to stop holding tournaments whenever it wants. All entrance costs will be reimbursed to you in the event of a cancellation, unless otherwise specified in these Terms or the applicable competition regulations.</div>
                            <div className="content-desc">Any attempt to commit fraud by using credit cards or other payment methods, or any inability on your part to comply with valid charges or requests for payment, will result in the immediate termination of your account, the forfeiture of any winnings, and the filing of civil and criminal lawsuits.</div>
                         </div>
                         <div id="content13" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">16. Skill Matching</h2>
                            <div className="content-desc mb-3 pb-1">
                              Caribbean pairs users with other players that have comparable skill levels through talent matching.
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            We attempt to match you with opponents who are close to your skill level because it is not enjoyable for either player to be paired with an expert or beginner. 
                            </div>
                            <div className="content-desc mb-3 pb-1">
                            Each game's skill levels are established independently, and they are revised following each competition. We match you based on a number of criteria, such as the following:
                            </div>
                            <p className="content-desc mb-2">a. Number of paid competitions that were held.</p>
                            <p className="content-desc mb-2">b. Scores and outcomes from earlier competitions. We will either raise your skill level or put you up against tougher opponents if you defeat players with comparable skill levels, and vice versa.</p>
                            <p className="content-desc mb-2">c. Duration of gameplay for the game.</p>
                            <p className="content-desc mb-3 pb-1">d. Performance in tournaments with varying entry prices.</p>
                            <div className="content-desc mb-3 pb-1">With the increase in your skills, your competition becomes difficult. Not all rivals possess your exact skill set. In most cases, players of slightly higher or slightly lower skill will often oppose you.</div>
                            <div className="content-desc mb-3 pb-1">Winning means progressing and hence rising right along with the difficulty of the competitors. The measures include only assisting individual players in the game, after the completion of their beginner levels. </div>
                            <div className="content-desc mb-3 pb-1">The games have undergone an audit by an outside auditor, and although it did not disclose the specific results. It is generally highlighted that there are no bots playing. </div>
                            <div className="content-desc mb-3 pb-1">Similar is the situation with the games: their main purpose is to be a source of relaxation and break, not an income maker. It is improbable that one would constantly be victorious and, even though success is for a short while, most times will not be the case.</div>
                            <div className="content-desc mb-3 pb-1"><b>A Note:</b> Sometimes players can be matched with residents of different jurisdictions. However, the currency used in such games does not interfere with the prize distribution policy made. The player’s skill and their geographical location are mainly the determining factors used to decide these matters.</div>
                         </div>
                         <div id="content14" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">17. Indemnification</h2>
                            <div className="content-desc mb-3 pb-1">This term agrees with you to defend, indemnify, and hold Caribbean, its affiliates, officers, directors, agents, partners and employees from any loss. </div>
                            <div className="content-desc mb-3 pb-1">These losses include damage, claim, liability, cost, demand, and expense (including attorney's fees) as incurred, including, but not limited to:</div>
                            <p className="content-desc mb-2">a. Any data or work transmission or reception carried out by you</p> 
                            <p className="content-desc mb-2">b. Any breach of these conditions (and in particular the breach of any of the above representations or warranties by you).</p> 
                            <p className="content-desc mb-2">c. Any violation by you of any third party rights, including but not limitation to: any rights of privacy and rights to the intellectual property use.</p> 
                            <p className="content-desc mb-2">d. All breaches by you of any law, rule, or regulation of any jurisdiction and also affecting you or any pictures of the Caribbean.</p> 
                            <p className="content-desc mb-2">e. Any complaints for which sanctions have been considered evident or presented by any kind of article. It can be in connection with the use of the Services, the development of your project, account, content or any form of artwork, images or similar communication in relation to your account.</p> 
                            <p className="content-desc mb-2">f. Any use of the Service by any third party that inappropriately utilizes your username, password, or security credential.</p> 
                            <p className="content-desc mb-0">g. The adjudication of any other claim made by any other person in the context of utilizing these services.</p> 
                         </div>
                         <div id="content15" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">18. Terms and termination</h2>
                            <div className="content-desc mb-3 pb-1">Caribbean maintains the right, with or without prior warning, to alter, suspend, quit, or cease the Services for any reason, either temporarily or permanently. </div>
                            <div className="content-desc mb-3 pb-1">You acknowledge that Caribbean will not be responsible for any changes, halts, or cancellations of the Services, either to you or to any third party.</div>
                            <div className="content-desc mb-3 pb-1">We make no guarantees regarding the availability of the Services at all times, on any given day, or on our ability to provide the Services for a specific amount of time. We might update and modify the Services without informing you. </div>
                            <div className="content-desc mb-3 pb-1">We reserve the right, at our sole discretion and without prior notice, to change or discontinue the Services. Examples of such circumstances include ending a competition or other Services for technical reasons (like internet or company-related technical issues) or in order to better serve our users. </div>
                            <div className="content-desc mb-3 pb-1">YOU AGREE AND CONSENT THAT WE RESERVE THE RIGHT TO TERMINATE THE SERVICES WHOLE OR IN PART AT OUR SOLE DISCRETION AND WITHOUT PRIOR NOTICE TO YOU. ALL RISK OF LOSS CONNECTED WITH THE TERMINATION OF THE SERVICES IS ASSUMED BY YOU.</div>
                            <div className="content-desc mb-3 pb-1">As stated below, these Terms take effect on the day you accept them. By emailing terms- (require support email), or by following the instructions on the website or apps, you can cancel your account at any time, for any reason. </div>
                            <div className="content-desc mb-3 pb-1">You shall cease using the Services and your account promptly upon account termination. All licenses and rights granted to you under these terms automatically expire upon termination of your account.</div>
                         </div>
                         <div id="content16" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">19. Agreement to Arbitrate/Class Action Waiver</h2>
                            <div className="content-desc mb-3 pb-1">It is important that you carefully read this section, as it could have a significant impact on your legal rights, including the ability to file a lawsuit in court.</div>
                            <div className="content-desc mb-3 pb-1">You agree that the procedures outlined in this section will be followed to resolve any claim or disagreement at law or equity that has occurred or may arise between you and the Caribbean.</div>
                            <div className="content-desc mb-3 pb-1">When it comes to the official documents, they shall be sent to the address found in the “contacting us” section (in case it is Caribbean that is being served) or your email address as stated by you (in case it is you who is being served). </div>
                            <div className="content-desc mb-3 pb-1">Any notice from us to you will be considered received twenty-four hours after we transmit the email. Alternatively, the user can receive address-based notifications through regular mail, if connected to some of the user accounts, in addition to email. </div>
                            <div className="content-desc mb-3 pb-1">Such latter situation notwithstanding, it shall be deemed that the date of mailing determines the three (3) days in which such a notice may be returned even if we receive the same.</div>
                            <div className="content-desc mb-3 pb-1">It is your obligation to see to that your contact details are correct at all times.</div>
                            <div className="content-desc mb-3 pb-1">You and Caribbean will attempt to resolve any disagreement in an unstructured way within a period of sixty (60) days from the date of the notice of such dispute. This notice should be accompanied by evidence of the link between you and the Caribbean and the reasons for the conflict attributed in the notice. It should also have a request for the relief being demanded, if any by you or us. </div>
                            <div className="content-desc mb-3 pb-1">The parties will, in this period, do as much as is possible to resolve the dispute, claim or difference of views. Any limitation periods shall be suspended for the 60-day pre-litigation process in case of this kind of disputes.</div>
                            <div className="content-desc mb-3 pb-1">Stating claims prematurely without first pursuing those shall get sanctions, especially on fees for arbitration. Both parties should be patient and hold back if it so requires without any attempts to solve the dispute. </div>
                            <div className="content-desc mb-3 pb-1">If any disagreement is not resolved within that time frame, you agree that all disputes or claims that are existing or may come up in the future between you and Caribbean, will be resolved by resort to arbitration, and binding arbitration shall be in effect. </div>
                            <div className="content-desc">In cases such as these, US-located participants have the Federal Arbitration Act as the controlling body regarding the understanding and application of this arbitration agreement. </div>
                         </div>
                         <div id="content17" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">20. Terms or Services Modifications</h2>
                            <div className="content-desc mb-3 pb-1">We reserve the right, at our sole discretion, to change or update any portion of these Terms, as well as any document referred at any time and without giving previous notice. </div>
                            <div className="content-desc mb-3 pb-1">You agree that we may send you notice at the email address linked to your account or by posting notice on the Services so that it may be accessed through a link from the home page, informing you of any revised or new Terms. </div>
                            <div className="content-desc mb-3 pb-1">All such modifications take effect as soon as we post them or at any later time that may be indicated in the notice of updated Terms. Your continued use of the Services following such notification signifies that you agree to the amended terms. </div>
                            <div className="content-desc mb-3 pb-1">We have the right to at any time, temporarily or permanently, with or without notice, in whole or in part to: </div>
                            <p className="content-desc mb-2">a. Discontinue providing or supporting the Services or any particular game or part of the Services.</p>
                            <p className="content-desc mb-2">b. To discontinue your right to use the Services or any part.</p>
                            <p className="content-desc mb-2">c. Modify or discontinue the Services.</p>
                            <p className="content-desc mb-2">d. Modify or delete any of the information available in the Services shall be modified or deleted.</p>
                            <p className="content-desc mb-2">e. Limit the use of the services to any person in one or more geographical locations in whole or in part. If we do so, then we also have the right to impose charges for the use of the Services.</p>
                            <p className="content-desc mb-2">f. Adjust the fees associated with the use of the Services, including charges already paid to us.</p>
                            <p className="content-desc mb-3 pb-1">g. Make use of this opportunity for both such changes and introduce more changes to the services for a specific number of users or on a global level. </p>
                            <div className="content-desc mb-3 pb-1">Under these circumstances, Caribbean has no responsibility or obligation to provide refunds, other benefits or any compensation to players. Even for discontinuation of any elements of the Services or purchased virtual goods, we take no responsibility. </div>
                            <div className="content-desc mb-3 pb-1">You also agree that we shall not be responsible to you or to any third person for any such modifications, suspensions or terminations as a whole or in part of the services. Your further use of the Services following such variations shall be considered as your consent to such an amendment.</div>
                         </div>
                         <div id="content18" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">21. Governing Law and Jurisdiction</h2>
                            <div className="content-desc mb-3 pb-1">When any disagreement happens, which includes submissions to impose arbitration, and you are within the U.S., utilizing our services, the governing laws will be of the state of New York, in the U.S..</div>
                            <div className="content-desc mb-3 pb-1">The rules shall be in New York, the U.S., without any application to any conflicts of law principles or rules thereof. In case there exist any disputes not solved by arbitration, then you agree to the jurisdiction and venue of the state and federal courts in New York County, New York, U.S., and waive all possible objections including lack of personal jurisdiction and improper laying of venue in the interested courts due to;</div>
                            <p className="content-desc mb-2">a. Inconvenient forum and </p>
                            <p className="content-desc mb-3 pb-1">b. Any other reason available or any challenge of transfer or change of a case to another court. </p>
                            <div className="content-desc">If not, with regards to any dispute these terms shall be governed by the laws of the State of Israel and nobody is ready to abrogate them. You also accept to subject yourself to Tel Aviv, Israel, personal jurisdiction only.</div>
                         </div>
                         <div id="content19" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">22. No Waiver and Force Majeure</h2>
                            <div className="content-desc mb-3 pb-1">Failure to enforce rights with regard to the above-mentioned terms and conditions will not be legally recognized by the Caribbean unless there is a written agreement between the two parties. </div>
                            <div className="content-desc">Caribbean disclaims all liability for any failure to perform because of circumstances beyond the reasonable control.</div>
                         </div>
                         <div id="content20" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">23. Survival</h2>
                            <div className="content-desc mb-3 pb-1">The following terms and conditions will remain in effect even after your account is terminated:</div>
                            <p className="content-desc mb-2">a. Compliance with laws, </p>
                            <p className="content-desc mb-2">b. Prohibited uses, </p>
                            <p className="content-desc mb-2">c. Limitation of liability, </p>
                            <p className="content-desc mb-2">d. Winnings</p>
                            <p className="content-desc mb-2">e. Account funds and payments, </p>
                            <p className="content-desc mb-2">f. Prize forfeiture,</p>
                            <p className="content-desc mb-2">g. Indemnity, </p>
                            <p className="content-desc mb-2">h. Caribbean’s intellectual property rights, </p>
                            <p className="content-desc mb-2">i. Term and termination, </p>
                            <p className="content-desc mb-2">j. Agreement to arbitrate/class action waiver, and</p>
                            <p className="content-desc mb-3 pb-1">k. Governing law</p>
                            <div className="content-desc">By their very nature, these terms and conditions should survive account termination.</div>
                         </div>
                         <div id="content21" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">24. Rights Assignment</h2>
                            <div className="content-desc mb-3 pb-1">It is strictly forbidden for you to pledge, transfer, or assign any part of your rights or responsibilities under these Terms. This includes your account. </div>
                            <div className="content-desc">Without informing you or getting your permission, Caribbean may assign, sub-license, transfer, or pledge in any of its rights and responsibilities under these Terms to any successor, subsidiary, or affiliate of its choosing, or to any other third party.</div>
                         </div>
                         <div id="content22" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">25. Notification Procedures</h2>
                            <div className="content-desc mb-3 pb-1">Caribbean Bingo may notify you by email, written or hard copy notice. We may also post such notice on the Services, as we determine in our sole discretion, whether required by law, for marketing purposes, or for other business-related purposes. </div>
                            <div className="content-desc">Caribbean retains the right to choose how and when to notify you; but, as stated in these Terms or Caribbean’s Privacy Policy, you may choose not to receive notifications from Caribbean in certain situations.</div>
                         </div>
                         <div id="content23" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">26. Entire Agreement and Severability of Clauses</h2>
                            <div className="content-desc mb-3 pb-1">The complete agreement between you and Caribbean is included in the Terms that are displayed on this website and the policies and agreements that are referenced above, as updated. </div>
                            <div className="content-desc">The remaining portions of these terms will continue in full force and effect. If a court of law finds any part to be invalid or unenforceable, it will be construed in a manner that aligns with the original intentions of the parties, as per the relevant law.</div>
                         </div>
                         <div id="content24" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">27. Language</h2>
                            <div className="content-desc">You understand that all connected documents, including the Privacy Policy and other rules, have been created in English, including these Terms. In the event that these Terms are translated into another language, the English version will always take precedence.</div>
                         </div>
                         <div id="content25" className="blog-post-content mb-4 pb-1">
                            <h2 className="blog-content-title mb-3 pb-1">28. Contact Us</h2>
                            <div className="content-desc">Please email us at (require email id), if you have any issues concerning these Terms or Caribbean’s services in general. Caribbean may ask for further information from you, depending on the nature of your query, to enable proper processing of your inquiry.</div>
                         </div>
                      </div>
                    </div>
                </div>
              </Tab>
              <Tab eventKey="privacy-policy" title="Privacy Policy">
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
