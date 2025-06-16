document.addEventListener('DOMContentLoaded',function() {
    const urlparams = new URLSearchParams(window.location.search);
    const visaType = urlparams.get('type');
    if(visaType) {
        const selectedOption = document.getElementById(visaType);
        if(selectedOption) {
            const allOptions = document.querySelectorAll('.visa-option');
            allOptions.forEach(item=> {
                item.classList.remove('selected-visa');
            });
            selectedOption.classList.add('selected-visa');
            visaTypedescription(visaType);
        }
    }
    let visaTypes = document.querySelectorAll('.visa-option');
        visaTypes.forEach(option => {
            option.addEventListener('click', function() {
                let visatype = this.id;
                visaTypedescription(visatype);
            });
        });
});

function visaTypedescription(visatype){
    const visaDescription = document.querySelector('.main-content');
    let content='';
    switch(visatype) {
        case 'studentVisa':
            content = `<section class='descriptionContent'>
                            <h2>🎓 Your Complete Guide to Studying in Germany: Step-by-Step Student Visa Process (2025 Update)</h2>
                            <p>Germany is one of the top destinations for international students, offering high-quality education, affordable costs, and a welcoming culture. Whether you're aiming for a Bachelor's or Master's degree, here's a simple guide to help you apply for a student visa and move to Germany for your studies.</p>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">1. Choose Your Program & Get Admission</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Apply to a German university (public or private).</li>
                            <li>Choose English- or German-taught courses.</li>
                            <li>Get the official admission letter (Zulassungsbescheid).</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">2. Proof of Language Skills</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>English programs: IELTS (6.5+), TOEFL (85+).</li>
                            <li>German programs: TestDaF, Goethe (B1 to C1).</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">3. Proof of Funds (Blocked Account)</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;' >
                            <li>Open a blocked account in Germany with ~€11,904 for 1 year.</li>
                            <li>Or provide a scholarship, sponsor, or official financial guarantee.</li>
                            </ul>
                          

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">4. Health Insurance</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Required for visa and enrollment.</li>
                            <li>Travel insurance is accepted initially; switch to student health insurance after arrival.</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">5. Prepare Required Documents</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Filled visa form and passport (valid with 2 blank pages).</li>
                            <li>2 passport-size photos (as per biometric specs).</li>
                            <li>University admission letter.</li>
                            <li>Blocked account proof or other funding evidence.</li>
                            <li>Health insurance proof.</li>
                            <li>Academic certificates (with translations).</li>
                            <li>Proof of accommodation in Germany.</li>
                            <li>Motivation letter/SOP (if asked).</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">6. Apply Through the Digital Visa Portal</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Go to <a style='text-decoration: underline; color: blue;' href='https://digital.diplo.de'>digital.diplo.de</a>.</li>
                            <li>Create your account and fill the VIDEX form.</li>
                            <li>Upload all required documents.</li>
                            <li>Pay the VFS service charge (~₹900).</li>
                            <li>Book your biometric appointment at VFS.</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">7. Attend Visa Appointment</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Visit VFS/German Mission on your appointment day.</li>
                            <li>Submit original documents and give biometrics.</li>
                            <li>Visa fee is €75 (~₹6,800).</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;>8. Visa Processing Time</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Processing takes 6–12 weeks (sometimes faster).</li>
                            <li>Track updates via VFS or email.</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;>9. After Reaching Germany</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Register your address within 2 weeks (Meldebescheinigung).</li>
                            <li>Get a residence permit (Aufenthaltstitel) for the duration of your course.</li>
                            <li>Enroll at university and pay semester fee (~€150–350).</li>
                            </ul>

                            <h4 style="font-family: poppins; font-weight: 500 margin-bottom: 1%;">10. Optional: Stay Back After Studies</h4>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>Apply for 18-month Job Seeker Visa after graduation.</li>
                            <li>Find a job and switch to a work permit or EU Blue Card.</li>
                            </ul>

                            <h3>✅ Quick Checklist</h3>
                            <ul style='margin-left: 12px; padding-top: 2%; padding-left: 10%;'>
                            <li>University admission letter</li>
                            <li>Language test results</li>
                            <li>Blocked account or financial proof</li>
                            <li>Health insurance</li>
                            <li>Academic documents + SOP</li>
                            <li>Accommodation proof</li>
                            <li>Passport, photos, visa form</li>
                            <li>Digital visa portal registration</li>
                            <li>Visa appointment confirmation</li>
                            </ul>

                            <p style='padding-top: 2%'>With careful planning and the right documents, your dream to study in Germany can become a reality. From top universities to a vibrant international culture, Germany gives you a solid foundation for your career and personal growth. Start early and stay updated with the latest visa rules for a smooth process!</p>

                        </section>
                        `;
            break;
        case 'jobVisa':
            content = `<h2>Germany Provides The Best Opportunities For A Skilled Person</h2>
                       <p>Germany, the economic powerhouse of Europe, has long been recognized as a land of opportunities for skilled workers. With a rapidly aging population and a significant shortage in the labor market, the country has opened its doors wide for international talent, particularly in STEM (Science, Technology, Engineering, Mathematics), healthcare, and skilled trades. If you are a skilled professional from India, Germany can offer you a rewarding and stable future with world-class infrastructure, career growth, and a high standard of living.</p>
                       <h3>Why Germany is the Best for Skilled Professionals</h3>
                       <h4>✅ Strong Demand for Skilled Workers</h4>
                       <p style='padding-top: 2%; padding-bottom: 0px;'>Germany faces a shortage of over 1.7 million skilled workers in various sectors, as per the German Economic Institute (IW Köln).</p>
                       <p style='font-weight: 500; padding-top: 2%; padding-bottom: 0px'>Top in-demand fields:</p>
                       <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>IT and Software Development</li>
                        <li>Engineering (Mechanical, Civil, Electrical)</li>
                        <li>Nursing and Healthcare</li>
                        <li>Skilled trades like plumbing, electrical work, and carpentry</li>
                        <li>Research and Academia</li>
                        <li>Data Science and AI</li>
                      </ul>
                      <h4>✅ Attractive Salaries and Benefits</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                            <li>Competitive salaries (e.g., average IT salary: €55,000/year)</li>
                            <li>Paid holidays (20–30 days annually)</li>
                            <li>Free or heavily subsidized healthcare</li>
                            <li>Strong employee rights and protection</li>
                            <li>Opportunities to gain Permanent Residency (PR) and EU Blue Card</li>
                        </ul>

                        <h4>✅ High Quality of Life</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                            <li>Clean and safe cities</li>
                            <li>Excellent public transportation</li>
                            <li>World-class education and research facilities</li>
                            <li>Work-life balance and structured working hours (35–40 hrs/week)</li>
                        </ul>

                        <h4>✅ Key Benefits for Indians</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                            <li>No German language barrier initially in many IT and research roles</li>
                            <li>Large Indian diaspora with cultural communities across major cities</li>
                            <li>Affordable education and opportunities to settle with family</li>
                            <li>Pathway to Permanent Residency in 33 months or faster with Blue Card</li>
                        </ul>

                        <h3 style='padding-bottom: 0px; padding-top: 6%;'>Requirements to Work in Germany as a Skilled Professional</h3>
                        <p style='padding-top: 0.5%; padding-bottom: 0px;'>To legally live and work in Germany, Indian citizens must meet the following basic requirements:</p>

                        <h4>📝 Eligibility Checklist:</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                            <li>A recognized qualification (Bachelor’s/Master’s from a recognized university)</li>
                            <li>Work experience in the relevant field (2–5 years preferred)</li>
                            <li>A job offer or employment contract from a German company</li>
                            <li>Proof of sufficient funds (if applying for job seeker visa)</li>
                            <li>Health insurance (mandatory)</li>
                            <li>Basic knowledge of German (recommended; B1 level preferred for many roles)</li>
                            <li>Clear criminal record</li>
                            <li>Passport and biometric photos</li>
                        </ul>

                        <h3 style='padding-bottom: 0px; padding-top: 6%'>How to Move to Germany from India (Step-by-Step Process)</h3>

                        <h4 style="padding-bottom: 0px;">✈️ Option 1: Job Seeker Visa Route</h4>
                        <p style='padding-top: 1.6%; padding-bottom: 0px; margin-left: 12px;'>Ideal for professionals without a job offer but with skills in demand.</p>
                        <ul style='padding-top: 1%; margin-left: 14px; padding-bottom: 1%'>
                            <li>Check if your qualification is recognized at <a style='text-decoration: underline; color: blue;'href="https://anabin.kmk.org">anabin.kmk.org</a></li>
                            <li>Prepare documents (degree certificates, resume, SOP, proof of funds – around €5,500).</li>
                            <li>Book an appointment with the German consulate in India.</li>
                            <li>Apply for a Job Seeker Visa (valid 6 months).</li>
                            <li>Land in Germany and search for a job.</li>
                            <li>Once employed, convert visa to a Work Visa or EU Blue Card.</li>
                        </ul>

                        <h4>💼 Option 2: Direct Employment Visa</h4>
                        <p style='padding-top: 1.6%; padding-bottom: 0px; margin-left: 12px;'>If you already have a job offer from a German employer.</p>
                        <ul style='padding-top: 1%; margin-left: 14px; padding-bottom: 1%'>
                            <li>Employer provides a job contract.</li>
                            <li>Apply for a Work Visa or EU Blue Card at VFS Global in India.</li>
                            <li>Submit required documents including proof of qualifications, language skills, and health insurance.</li>
                            <li>Wait for visa approval (typically 4–12 weeks).</li>
                            <li>Travel to Germany and register your residence (Anmeldung).</li>
                            <li>Start working and later apply for Permanent Residency.</li>
                        </ul>

                        <h3 style='padding-bottom: 0px; padding-top: 6%'>Documents Required</h3>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                            <li>Valid Passport (minimum 6 months validity)</li>
                            <li>Job offer or employment contract</li>
                            <li>Degree certificates + transcripts</li>
                            <li>Proof of recognition (via Anabin or ZAB)</li>
                            <li>CV in German format</li>
                            <li>Cover letter or motivation letter</li>
                            <li>Proof of accommodation in Germany</li>
                            <li>Travel and health insurance</li>
                            <li>Language certificate (if applicable)</li>
                            <li>Proof of funds (for job seeker visa)</li>
                        </ul>
                        <p>Germany offers a structured, safe, and transparent system for skilled professionals to build their careers and lives. Whether you are a software developer, engineer, healthcare worker, or researcher, the country provides unmatched support, career growth, and the chance to live in one of the most advanced economies in the world.
                        </p>`
            break;
        case 'businessVisa':
            content = `<h2>🚀 Now You Can Start Your Business in Germany</h2>
                        <p style='font-family: poppins;'>Germany is one of the best countries in Europe for launching your own business, whether you're a freelancer, startup founder, or small business owner. With a strong economy, innovation-friendly ecosystem, and structured legal processes, Germany welcomes entrepreneurs from across the world.</p>

                        <h3>Why Germany is a Great Place to Start a Business</h3>

                        <h4>✅ Strategic & Economic Advantages</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Access to the EU market (27 countries, 450+ million people)</li>
                        <li>Stable political and legal environment</li>
                        <li>High purchasing power and demand for services</li>
                        <li>Government support for startups and digital innovation</li>
                        </ul>

                        <h4>✅ Wide Range of Business Types Allowed</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Freelancing (freier Beruf) — for creatives, consultants, IT professionals</li>
                        <li>Trade Business (Gewerbe) — for shops, restaurants, and services</li>
                        <li>Startup company (UG, GmbH) — limited liability business models</li>
                        <li>Branch of foreign company</li>
                        </ul>

                        <h4>✅ Supportive Startup Ecosystem</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Access to incubators and accelerators</li>
                        <li>State and EU grants for innovation and sustainability</li>
                        <li>Public-private funding options for early-stage startups</li>
                        <li>Large networking community (especially in Berlin, Munich, Hamburg)</li>
                        </ul>

                        <h3 style='padding-top: 6%; padding-bottom: 0.5%; margin-bottom: 1%; text-decoration: underline'>Basic Requirements to Start a Business</h3>
                        <p style='padding-top: 0%; padding-bottom: 0px; font-family: poppins;'>Foreign nationals (including Indian citizens) need to meet these conditions:</p>

                        <h4>📝 Eligibility Checklist:</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Valid passport and visa/residence permit allowing self-employment</li>
                        <li>Viable business idea and plan</li>
                        <li>Economic interest or regional demand for the business</li>
                        <li>Financial resources to fund your business</li>
                        <li>Proof of qualifications (if applicable)</li>
                        <li>Clear background and health insurance</li>
                        </ul>

                        <h3 style='padding-bottom: 0px; padding-top: 6%'>Step-by-Step: How to Start Your Business in Germany</h3>

                        <h4>🔍 1. Validate Your Business Idea</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Research your market and competition to ensure your business meets demand in Germany.</p>

                        <h4>📑 2. Prepare a Business Plan</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Include company concept, target group, financial forecasts, and operational steps.</p>

                        <h4>📝 3. Register Your Business (Gewerbeanmeldung)</h4>
                        <ul style='padding-top: 1%; margin-left: 14px; padding-bottom: 1.4%'>
                        <li>Apply at the local trade office (Gewerbeamt)</li>
                        <li>Freelancers register directly with the tax office (Finanzamt)</li>
                        <li>Pay a small registration fee (~€20–€60)</li>
                        </ul>

                        <h4>📊 4. Get a Tax Number</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Register with the Finanzamt to get a Steuernummer (tax number) for invoices and VAT.</p>

                        <h4>🏦 5. Open a Business Bank Account</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Separate your personal and business finances with a local German bank account.</p>

                        <h4>💼 6. Apply for Necessary Permits</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Depending on your field (e.g., food, tech, real estate), you might need special permissions.</p>

                        <h4>👥 7. Join Chamber of Commerce (IHK or HWK)</h4>
                        <p style='padding-top: 1.5%; padding-bottom: 1.4%; margin-left: 12px; font-family: poppins;'>Membership is mandatory for most businesses and offers networking and guidance.</p>

                        <h3 style='padding-bottom: 0px; padding-top: 6%;margin-bottom: 1%;'>Documents Required</h3>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Valid passport + visa/residence permit</li>
                        <li>Detailed business plan</li>
                        <li>Proof of funds or financing</li>
                        <li>Professional licenses (if applicable)</li>
                        <li>Proof of address in Germany</li>
                        <li>Resume/CV and qualifications</li>
                        <li>Registration form (Gewerbeanmeldung or tax registration form)</li>
                        </ul>

                        <h3 style='margin-bottom: 1%; margin-top:6%'>💡 Pro Tip:</h3>
                        <p style='padding-top: 0%; margin-bottom: 0px; font-family: poppins;'>If you're from India and don’t have a visa yet, apply for a <a style="color: rgb(12, 84, 171)" href='services.html?type=selfEmploymentVisa'>Self-Employment Visa</a> through the German consulate by showing your business plan and financial backing.</p>

                        <p style='padding-top: 2%; font-family: poppins;'>Germany is not only a country of innovation and engineering — it’s also a land of entrepreneurs. With careful planning, the right documents, and a growth mindset, you can launch and grow your business successfully in Germany.</p>
                        `
            break;
        case 'selfEmploymentvisa':
            content = `<h2>💼 This Is The Right Choice For Freelancers</h2>
                        <p style='font-family: poppins;'>Germany offers a welcoming environment for freelancers, consultants, and independent professionals. The Self-Employment Visa is the perfect opportunity if you wish to start your own practice, provide services, or run a small independent business.</p>

                        <h3>Why Choose the Self-Employment Route?</h3>

                        <h4>✅ Freedom & Flexibility</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Be your own boss and set your schedule</li>
                        <li>Offer services across multiple cities in Germany and the EU</li>
                        <li>Scale your business without employer restrictions</li>
                        </ul>

                        <h4>✅ Welcoming Freelance Professions</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>IT specialists & software developers</li>
                        <li>Designers, architects, and engineers</li>
                        <li>Writers, journalists, translators</li>
                        <li>Doctors, teachers, and therapists (with special licenses)</li>
                        </ul>

                        <h4>✅ Long-Term Stability</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Renewable visa leading to permanent residency</li>
                        <li>Option to bring family and apply for PR after a few years</li>
                        <li>Access to German healthcare, tax benefits, and pension schemes</li>
                        </ul>

                        <h3 style='padding-top: 6%; margin-bottom: 0%;padding-bottom: 0.5%; text-decoration: underline'>Basic Requirements</h3>
                        <p style='font-family: poppins; padding-top: 0.5%;'>To be eligible for the Self-Employment Visa in Germany, you must:</p>

                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Have a viable business or freelance plan</li>
                        <li>Demonstrate economic interest in your services</li>
                        <li>Show proof of clients (for freelancers)</li>
                        <li>Have sufficient funds to support yourself (~€3,000+)</li>
                        <li>Possess relevant qualifications or experience</li>
                        <li>Health insurance coverage</li>
                        </ul>

                        <h3 style='padding-top: 6%; padding-bottom: 0px;'>Application Process</h3>

                        <h4>📑 1. Prepare Your Documents</h4>
                        <ul style='padding-top: 1%; margin-left: 14px; padding-bottom: 1%'>
                        <li>Detailed business or freelance plan</li>
                        <li>Proof of qualifications and experience</li>
                        <li>Financial proof (bank statements, contracts, client letters)</li>
                        <li>Valid passport, biometric photo</li>
                        <li>Health insurance policy</li>
                        <li>Proof of accommodation in Germany</li>
                        </ul>

                        <h4>📝 2. Apply via German Consulate or Foreigners Office</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>If you're applying from outside Germany, contact your local German Embassy or VFS center. If you’re already in Germany, apply through your local immigration office (Ausländerbehörde).</p>

                        <h4>💬 3. Attend Visa Interview</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>Explain your business goals and economic value. They may assess your financial readiness and professional demand.</p>

                        <h4>📍 4. Visa Approval and Registration</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>Once approved, travel to Germany and register your address (Anmeldung). Receive your residence permit card linked to your freelance or business activity.</p>

                        <h3 style='padding-top: 6%; padding-bottom: 0;'>Documents Checklist</h3>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Valid passport</li>
                        <li>Biometric photos</li>
                        <li>Business/freelance plan</li>
                        <li>Proof of funds (~€3,000+)</li>
                        <li>Client contracts or letters of intent</li>
                        <li>Degree or certificate of qualifications</li>
                        <li>Health insurance (private or public)</li>
                        <li>Accommodation proof (rental contract or hotel booking)</li>
                        </ul>

                        <h3 style='margin-bottom: 1%; margin-top:6%'>💡 Good to Know:</h3>
                        <p style='font-family: poppins; padding-top: 1%'>If you're offering high-demand services like software development, UX design, or consultancy, you can get approved quickly — especially if you already have German clients lined up.</p>

                        <p style='font-family: poppins; padding-top: 2%;'>Germany empowers self-starters to take control of their careers. With a structured system, international access, and great quality of life, this visa can help you thrive both personally and professionally.</p>`;
            break;
        case 'opportunityCard' :
            content = `<h2>🛂 Germany’s Opportunity Card: The Fastest Way To Settle In Germany</h2>
                        <p style='font-family: poppins;'>The Opportunity Card (Chancenkarte) is a new residence permit introduced by Germany in 2024, designed for skilled professionals from non-EU countries. It allows you to enter Germany for up to 6 months to look for a job — even if you don’t have one yet!</p>

                        <h3>Why Choose the Opportunity Card?</h3>

                        <h4>✅ Search for Jobs While in Germany</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Stay up to 6 months in Germany without a job offer</li>
                        <li>Attend interviews, build networks, and explore job markets</li>
                        <li>Convert to a work visa or EU Blue Card once hired</li>
                        </ul>

                        <h4>✅ Earn While You Search</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Work part-time up to 20 hours/week during your stay</li>
                        <li>Take on trial jobs or internships (max 2 weeks per employer)</li>
                        </ul>

                        <h4>✅ Point-Based Eligibility System</h4>
                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Points are awarded for qualifications, experience, language skills, and age</li>
                        <li>You need at least 6 out of 14 points to qualify</li>
                        <li>Fair and flexible process for global talent</li>
                        </ul>

                        <h3 style='margin-bottom:0px;padding-top: 6%; padding-bottom: 0.5%; text-decoration: underline'>Who Can Apply?</h3>
                        <p style='font-family: poppins; padding-top: 1%; padding-bottom: 0px;'>You must meet the following criteria to apply for the Opportunity Card:</p>

                        <ul style='padding-top: 1%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Recognized university degree or vocational qualification</li>
                        <li>Minimum 2 years of work experience (related to your degree)</li>
                        <li>Basic German (A1) or English (B2) proficiency</li>
                        <li>Proof of sufficient funds (approx. €1,027/month for 6 months)</li>
                        <li>Health insurance coverage for your stay</li>
                        </ul>

                        <h3 style='padding-top: 6%; padding-bottom: 0px;'>Step-by-Step Application Process</h3>

                        <h4>📑 1. Gather Your Documents</h4>
                        <ul style='padding-top: 1%; margin-left: 14px; padding-bottom: 1%'>
                        <li>Passport and biometric photo</li>
                        <li>Degree certificate and work experience letters</li>
                        <li>Language certificate (German A1 or English B2)</li>
                        <li>Proof of funds (blocked account or sponsor)</li>
                        <li>Health insurance proof</li>
                        </ul>

                        <h4>📝 2. Apply at Your Local German Consulate or Embassy</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>Submit your application through VFS or directly at the German Embassy in India. Pay the visa fee (around €75).</p>

                        <h4>📬 3. Wait for Approval</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>Processing usually takes 6–8 weeks. Once approved, you’ll receive a visa sticker valid for entry and residence.</p>

                        <h4>📍 4. Travel & Register in Germany</h4>
                        <p style='font-family: poppins; padding-top: 1.5%; padding-bottom: 0;'>Register your address (Anmeldung) within 2 weeks of arrival. Begin your job search, attend interviews, and submit applications.</p>

                        <h3 style='padding-top: 6%; padding-bottom: 0px;'>Documents Checklist</h3>
                        <ul style='padding-top: 0%; margin-left: 12px; padding-bottom: 1%'>
                        <li>Valid passport (minimum 6 months validity)</li>
                        <li>Passport-size photo (biometric)</li>
                        <li>Degree and experience certificates</li>
                        <li>Language test results</li>
                        <li>Proof of funds (~€6,162 or blocked account)</li>
                        <li>Health insurance document</li>
                        <li>Visa application form</li>
                        </ul>

                        <h3 style='margin-bottom: 1%; margin-top:6%'>💡 Quick Tip:</h3>
                        <p style='font-family: poppins; padding-top:0.5%;'>Even if your degree is not recognized in Germany, you can still apply — just make sure to compensate with work experience, language skills, or other points on the scale.</p>

                        <p style='font-family: poppins; padding-top: 2%;'>Germany’s Opportunity Card gives you the chance to explore the country and secure a job — all without needing an offer beforehand. It’s the perfect entry point for skilled Indians ready to start a new chapter in Europe.</p>;`
            break;
        default:
            content = `<h2>Choose the visa type</h2>`;
            break;
    }
    visaDescription.innerHTML = content;
}