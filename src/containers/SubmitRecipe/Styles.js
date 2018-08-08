import styled from 'styled-components';

const Styles = styled.div`
  /* General */
  main {position: relative; flex: 1; order: 2; min-width: 1200px; background-color: #eee;} /* Consider moving to css/primary.css */
  #page {width: 900px; margin: 12px auto 18px auto; padding: 10px; background-color: #fff;}
  #form {width: 880px;}
  label {display: block; margin: 14px auto 4px auto; font-size: 1.3rem; font-weight: 700; color: #777;}
  input {display: block; width: 100%; height: 31px; margin: 0 auto 0 auto; border: 1px solid #aaa; border-radius: 2px; padding: 3px 7px 3px 7px;}
  input:focus {background-color: #fdfdd5;}
  select:required {box-shadow: none;}

  /* Labels, Inputs, and Selects */
  #equipment_div, #ingredients_div, #subrecipes_div, #steps_div, .image_div {padding-top: 18px;}
  .red_style {font-size: 1.7rem; color: #333;}
  .manual_amount, .manual_amount_sub {display: inline; width: 70px; min-width: 70px; max-width: 70px; height: 25px; margin-right: 18px; margin-left: 4px;}
  .select_subrecipe {width: 233px; min-width: 233px; max-width: 233px; margin-right: 18px;}
  .manual_step {margin-right: 18px; margin-left: 4px;}
  .recipe_additions p {display: block; width: 100%; margin: 14px auto 4px auto; font-size: 1.3rem; font-weight: 700;}
  .recipe_additions label {display: inline-block;}
  .recipe_additions input {display: inline-block; width: 75%;}
  .recipe_additions div select {margin-right: 17px; margin-left: 3px;}

  /* Add & Remove Buttons */
  .remove_equipment_row_button, .remove_ingredient_row_button, .remove_subrecipe_row_button, .remove_step_row_button {background-image: linear-gradient(to bottom, #ffd6d6, #ffb7b7);
  border: 1px solid #aaa; border-radius: 2px; padding: 1px 2px;}
  #add_equipment_button, #add_ingredient_button, #add_subrecipe_button, #add_step_button {background-image: linear-gradient(to bottom, #d5fdd5, #acfbac);
  border: 1px solid #aaa; border-radius: 2px; padding: 1px 2px;}
  #add_equipment_button, #add_subrecipe_button {margin-top: 8px;}
  #add_ingredient_button, #add_step_button {margin-top: 10px;}
  #add_step_button {display: block;}

  /* Images Area */
  .submitted_image {width: 190px; margin: 0;}
  .image_feedback {display: block; width: 320px; margin: 20px auto 20px auto; border: 1px solid #ccc; border-radius: 4px; padding: 5px;
  font-family: Arial, sans-serif; font-size: 1.4rem; color: black; background-color: #eee;}
  #preview, #preview_e, #preview_i, #preview_c {display: block; width: 482px; height: 322px; border: 1px solid #aaa; overflow: hidden;}
  #submitted_image, #submitted_equipment_image, #submitted_ingredients_image, #submitted_cooking_image {border: 0; border-radius: 0;}

  /* Submit Button */
  #submit_button {display: block; width: 100%; height: 31px; margin: 48px auto 24px auto; border-style: solid; border-width: 1px; border-radius: 2px;
  border-top-color: #999; border-right-color: #777; border-bottom-color: #555; border-left-color: #777; padding-top: 1px;
  font-family: 'Play', sans-serif; font-size: 1.4rem; color: black; background-image: linear-gradient(to bottom, #b8dbfb, #68abe6);
  cursor: pointer; cursor: hand;}
  #submit_button:hover {background-image: linear-gradient(to bottom, #8cbeec, #4493d8);}
  #submit_button:active {background-image: linear-gradient(to bottom, #8cbeec, #4493d8);}
`;

export default Styles;