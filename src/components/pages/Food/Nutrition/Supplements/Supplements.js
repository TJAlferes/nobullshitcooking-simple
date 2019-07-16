import React from 'react';

import LeftNav from '../../../../LeftNav/LeftNav';
import './supplements.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/supplements/';

const vitaminC = `${s3Path}vitamin-c-500-mg-75px.jpg`;
const vitaminD3 = `${s3Path}vitamin-d3-2000-iu-75px.jpg`;
const vitaminK2 = `${s3Path}vitamin-k2-90-mcg-75px.jpg`;
const iodine = `${s3Path}potassium-iodide-225-mcg-75px.jpg`;
const magnesium = `${s3Path}magnesium-200-mg-75px.jpg`;
const boron = `${s3Path}boron-3-mg-75px.jpg`;
const zinc = `${s3Path}zinc-30-mg-75px.jpg`;
const taurine = `${s3Path}taurine-1000-mg-75px.jpg`;
const pantothenicAcid = `${s3Path}vitamin-b5-500-mg-75px.jpg`;
const b50Complex = `${s3Path}vitamin-b-complex-75px.jpg`;

// TO DO: change the <a> to <NavLink> or <Link> that open a new browser tab

const Supplements = props => (
  <div className={`supplements two-column-a ${props.twoColumnATheme}`}>
    <LeftNav />
    <section>
      <h1>Supplements</h1>
      <h2>Daily</h2>
      <table className={`table-a ${props.tableATheme}`}>
        <thead>
          <tr><th>Supplement</th><th>Amount</th><th>Function</th><th>Price per day</th><th>Buy on Amazon</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="food/nutrition/micronutrients/vitamin-c">Vitamin C</a></td>
            <td>500 mg per day</td>
            <td>Preserve testosterone, recover muscle, reduce stress.</td>
            <td>6 cents</td>
            <td><a href="https://www.amazon.com/Nature-Made-Vitamin-Caplets-Count/dp/B018EAPQ38" target="_blank"><img src={vitaminC} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/vitamin-d3">Vitamin D3</a></td>
            <td>1000-2000 IU per day</td>
            <td>Improve mood, prevent disease. Take during winter months only.</td>
            <td>? cents</td>
            <td><a href="https://www.amazon.com/Nature-Made-Vitamin-Value-220-Count/dp/B004U3Y8NI" target="_blank"><img src={vitaminD3} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/vitamin-k2">Vitamin K2</a></td>
            <td>50-100 mcg per day</td>
            <td>Strengthen bones, prevent heart disease.</td>
            <td>21 cents</td>
            <td><a href="https://www.amazon.com/Jarrow-Formulas-MK-7-mcg-Count/dp/B0013OVVFA" target="_blank"><img src={vitaminK2} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/iodine">Iodine</a></td>
            <td>225 mcg per day</td>
            <td>Lose weight, maintain energy.</td>
            <td>? cents</td>
            <td><a href="https://www.amazon.com/Potassium-Plus-Iodine-180-Tablets/dp/B000MGWG8Q" target="_blank"><img src={iodine} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/magnesium">Magnesium</a></td>
            <td>200 mg per day</td>
            <td>Strengthen heart and lungs, uplift mood, improve sleep.</td>
            <td>4 cents</td>
            <td><a href="https://www.amazon.com/NOW-Magnesium-Citrate-200-Tablets/dp/B000BV1O26" target="_blank"><img src={magnesium} /></a></td>
          </tr>
        </tbody>
      </table>
      <h2>Weekly</h2>
      <table className={`table-a ${props.tableATheme}`}>
        <thead>
          <tr><th>Supplement</th><th>Amount</th><th>Function</th><th>Price per week</th><th>Buy on Amazon</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="food/nutrition/micronutrients/boron">Boron</a></td>
            <td>3 mg per week</td>
            <td>Increase concentration, preserve testosterone, strengthen bones.</td>
            <td>7 cents</td>
            <td><a href="https://www.amazon.com/NOW-Foods-1671-Boron-Capsules/dp/B00093D2NU" target="_blank"><img src={boron} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/zinc">Zinc</a></td>
            <td>50-100 mg per week</td>
            <td>Improve memory, maintain skin health, maintain sexual health.</td>
            <td>7 cents</td>
            <td><a href="https://www.amazon.com/Nature-Made-Zinc-Tabs-100/dp/B002FH90Q6" target="_blank"><img src={zinc} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/taurine">Taurine</a></td>
            <td>500-1000 mg per week</td>
            <td>Improve digestion, reduce stress.</td>
            <td>7 cents</td>
            <td><a href="https://www.amazon.com/NOW-Taurine-1000-250-Capsules/dp/B00663G4ZK" target="_blank"><img src={taurine} /></a></td>
          </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/vitamin-b">Pantothenic Acid</a></td>
            <td>500-1000 mg per week</td>
            <td>Maintain energy, improve thinking.</td>
            <td>7 cents</td>
            <td><a href="https://www.amazon.com/NOW-Pantothenic-Acid-500-Capsules/dp/B0013OUQEM" target="_blank"><img src={pantothenicAcid} /></a></td>
            </tr>
          <tr>
            <td><a href="food/nutrition/micronutrients/vitamin-b">B-50 Complex</a></td>
            <td>1 per week</td>
            <td>Numerous functions.</td>
            <td>7 cents</td>
            <td><a href="https://www.amazon.com/NOW-Vitamin-B-50-250-Tablets/dp/B0002I6PXG" target="_blank"><img src={b50Complex} /></a></td>
          </tr>
        </tbody>
      </table>
    </section>
	</div>
);

export default Supplements;