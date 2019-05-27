import React from 'react';

import './nutrition.css';
import LeftNav from '../../../LeftNav/LeftNav';

const Nutrition = props => (
  <div className="nutrition">

    <LeftNav />
    
    <article>
      <h1>Vitamins, Minerals, and Micronutrients</h1>
      
      <p>Learn about: <select>
        <option id="opt01">Vitamin A (Retinoids and Carotenoids)</option>
        <option id="opt02">Vitamin B1 (Thiamin)</option>
        <option id="opt03">Vitamin B2 (Riboflavin)</option>
        <option id="opt04">Vitamin B3 (Niacin)</option>
        <option id="opt05">Vitamin B5 (Pantothenic Acid)</option>
        <option id="opt06">Vitamin B6 (Pyridoxine)</option>
        <option id="opt07">Vitamin B7 (Biotin)</option>
        <option id="opt08">Vitamin B9 (Folate)</option>
        <option id="opt09">Vitamin B12 (Cobalamin)</option>
        <option id="opt10">Vitamin C (Ascorbic Acid)</option>

        <option id="opt11">Vitamin F (Essential Fatty Acids)</option>
        <option id="opt12">Vitamin K1</option>
        <option id="opt13">Vitamin K2</option>
        <option id="opt14">Arsenic</option>
        <option id="opt15">Boron</option>
        <option id="opt16">Calcium</option>
        <option id="opt17">Chloride</option>
        <option id="opt18">Chromium</option>
        <option id="opt19">Copper</option>
        <option id="opt20">Iodine</option>
        
        <option id="opt21">Iron</option>
        <option id="opt22">Lithium</option>
        <option id="opt23">Magnesium</option>
        <option id="opt24">Manganese</option>
        <option id="opt25">Molybdenum</option>
        <option id="opt26">Nickel</option>
        <option id="opt27">Phosphorus</option>
        <option id="opt28">Potassium</option>
        <option id="opt29">Selenium</option>
        <option id="opt30">Silicon</option>
          
        <option id="opt31">Sodium</option>
        <option id="opt32">Strontium</option>
        <option id="opt33">Vanadium</option>
        <option id="opt34">Zinc</option>
        <option id="opt35">Choline</option>
        <option id="opt36">Extracellular Matrix Materials</option>
      </select></p>
      
      <div id="loaded">
        <img id="molecule" src="nobsctest/images/retinol.png" />
        <h2>Vitamin A (Retinoids and Carotenoids)</h2>
        <p id="description">Vitamin A. Get up to 3,000 micrograms (mcg) a day. (Source: U.S. Department of Health and Human Services)</p>
        <h3>Sources of Vitamin A</h3>
        <table>
          <thead>
            <tr><th>Food</th><th>Category</th><th>Serving</th><th>Micrograms (mcg)</th><th>% UL</th></tr>
          </thead>
          <tbody>
            <tr><td>Sweet Potato</td><td>Tuber</td><td>1 cup</td><td>1922</td><td>64</td></tr>
            <tr><td>Carrots</td><td>Root</td><td>1 cup</td><td>1020</td><td>34</td></tr>
            <tr><td>Spinach</td><td>Leafy Green</td><td>1 cup</td><td>943</td><td>31</td></tr>
            <tr><td>Kale</td><td>Leafy Green</td><td>1 cup</td><td>885</td><td>30</td></tr>
            <tr><td>Mustard Greens</td><td>Leafy Green</td><td>1 cup</td><td>866</td><td>29</td></tr>
            <tr><td>Collard Greens</td><td>Leafy Green</td><td>1 cup</td><td>722</td><td>24</td></tr>
            <tr><td>Swiss Chard</td><td>Leafy Green</td><td>1 cup</td><td>536</td><td>18</td></tr>
            <tr><td>Winter Squash</td><td>Squash</td><td>1 cup</td><td>535</td><td>18</td></tr>
            <tr><td>Romaine Lettuce</td><td>Leafy Green</td><td>2 cups</td><td>409</td><td>14</td></tr>
            <tr><td>Shrimp</td><td>Shellfish</td><td>4 oz</td><td>100</td><td>?</td></tr>
            <tr><td>Eggs, Organic</td><td>Egg</td><td>1 yolk</td><td>75</td><td>?</td></tr>
            <tr><td>Butter, Organic</td><td>Dairy</td><td>1 Tbsp</td><td>?</td><td>?</td></tr>
            <tr><td>Aged Cheese</td><td>Dairy</td><td>1 oz</td><td>73</td><td>?</td></tr>
            <tr><td>Salmon</td><td>Oily Fish</td><td>4 oz</td><td>?</td><td>?</td></tr>
            <tr><td>Yogurt, Greek</td><td>Dairy</td><td>1/2 cup</td><td>?</td><td>?</td></tr>
          </tbody>
        </table>
      </div>
    </article>

  </div>
);

export default Nutrition;