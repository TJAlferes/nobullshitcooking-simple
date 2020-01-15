import React from 'react';

import './disclaimer.css';

const Disclaimer = ({ oneColumnATheme }) => (
  <div className={`disclaimer one-column-a ${oneColumnATheme}`}>
    <h1>Disclaimer</h1>

    <p>The <b>nobullshitcooking.com</b> website does not contain any medical advice.</p>

    <p>The authors of this website are not doctors, nutritionists, or dieticians.</p>

    <p>The content of this website, be it text, graphic, image, audio, video, or otherwise,
    is intended for informational purposes only and does not constitute or replace
    professional medical advice, diagnosis, or treatment.</p>

    <p><b>nobullshitcooking.com</b> does not recommend or endorse any specific
    test, physician, product, procedure, opinion,
    or any other information provided on this website.
    Any information, procedure, or product on this website is not intended to
    diagnose, treat, cure, or prevent any disease.</p>

    <p><b>nobullshitcooking.com</b> does not endorse any drugs, medications, supplements, vitamins, or herbs
    nor do we condone the use of illegal drugs or using drugs for an unintended purpose.
    Before taking any drugs, medications, supplements, vitamins, or herbs,
    consult a physician for a thorough evaluation.</p>

    <p>Always consult your physician before using any product or engaging in any diet or exercise,
    especially if you are pregnant, nursing, taking medication, or have a medical condition.</p>

    <p>By using any content or purchasing any product from this website, you agree to these terms and conditions
    as well as understand that by using this website you are agreeing to abide by this contract.</p>

    <p id="final"><b>NO LIABILITY WILL BE ASSUMED FOR THE USE OF THIS WEBSITE'S CONTENT.</b></p>
  </div>
);

export default Disclaimer;