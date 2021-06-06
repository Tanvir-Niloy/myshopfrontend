import React from "react";
import Layout from "../layout";

const PolicyComponent = (props) => {
  return (
          <div className="policy flex flex-col items-center justify-center my-32">
         <h1 style={{fontSize:30}}>Privacy Policy</h1>
         <div style={{marginTop:50,marginLeft:50,marginRight:50}}>
           <p>This Privacy Policy clarifies how we gather, utilize and (under specific conditions) uncover your own data. This Privacy Policy additionally clarifies the means we have taken to secure your own data. At long last, this Privacy Policy clarifies your alternatives with respect to the accumulation, utilize and divulgence of your own data. By going to the site specifically or through another site, you acknowledge the practices depicted in this Policy.</p>
           <br/>
           <p>Information security involves trust and your protection is essential to us. We should, along these lines, just utilize your name and other data which identifies with you in the way set out in this Privacy Policy. We will just gather data where it is fundamental for us to do as such and we will just gather data on the off chance that it is significant to our dealings with you.</p>
           <br/>
           <p>We will just keep your data for whatever length of time that we are either required to by law or as is pertinent for the reasons for which it was gathered.</p>
           <br/>
           <p>We will utilize the data you give to empower us to process your requests and to give you the administrations and data offered through our site and which you ask. Further, we will utilize the data you furnish to direct your record with us; confirm and do monetary exchanges in connection to installments you make; review the downloading of information from our site; enhance the design or potentially substance of the pages of our site and modify them for clients; distinguish guests on our site; do look into on our clients' socioeconomics; send you data we figure you may discover valuable or which you have asked for from us, including data about our items and administrations, if you have demonstrated that you have not protested being reached for these reasons. Subject to getting your assent we may get in touch with you by email with points of interest of different items and administrations. In the event that you favor not to get any showcasing interchanges from us, you can quit whenever.</p>
           <br/>
           <p>We may pass your name and deliver on to an outsider keeping in mind the end goal to make conveyance of the item to you (for instance to our messenger or provider). You should just submit to us the site data which is precise and not misdirecting and you should stay up with the latest and advise us of changes.</p>
           <br/>
           <p>which are open and those which are in no time to be dispatched and control your address subtle elements, bank subtle elements ( for discount purposes) and any bulletin to which you may have subscribed. You embrace to treat the individual access information privately and not make it accessible to unapproved outsiders. We can't accept any risk for abuse of passwords unless this abuse is our blame.
           <br/>
            We may utilize your own data for assessment and statistical surveying. Your points of interest are mysterious and might be utilized for factual purposes. You can quit this whenever. Any responses to overviews or conclusion surveys we may request that you finish won't be sent on to outsiders. Revealing your email address is just vital on the off chance that you might want to participate in rivalries. We spare the solutions to our studies independently from your email address.</p>
         </div>
        </div>
  );
};

const Policy = (props) => {
  return <Layout children={<PolicyComponent />} />;
};

export default Policy;
