import 'bootstrap/dist/css/bootstrap.min.css';
import './NutritionLabel.css'

const NutritionLabel = (props) => {
    return(
        <div>
            {props.item && (
                <section className="performance-facts">
                    <header className="performance-facts__header">
                        <h1 className="performance-facts__title">{props.item.item}</h1>
                    </header>
                    <table className="performance-facts__table">
                        <thead>
                            <tr>
                                <th colSpan="3" className="small-info">
                                    Amount Per Serving
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2">
                                <b>Calories </b>
                                {props.item.calories}
                                </th>
                                <td>
                                    Calories from Fat {props.item.cal_fat}
                                </td>
                            </tr>
                            <tr className="thick-row">
                                <td colSpan="3" className="small-info">
                                <b>% Daily Value*</b>
                                </td>
                            </tr>
                        <tr>
                            <th colSpan="2">
                                <b>Total Fat </b>
                                {props.item.total_fat + 'g'}
                            </th>
                            <td>
                                <b>{Math.round(Number(props.item.total_fat)/65 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <td className="blank-cell">
                            </td>
                                <th>
                                    Saturated Fat {props.item.sat_fat + 'g'}
                                </th>
                            <td>
                                <b>{Math.round(Number(props.item.sat_fat)/20 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                                Trans Fat {props.item.trans_fat + 'g'}
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <b>Cholesterol </b>
                                {props.item.cholesterol + 'mg'}
                            </th>
                            <td>
                                <b>{Math.round(Number(props.item.cholesterol)/300 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <b>Sodium </b>
                                {props.item.sodium + 'mg'}
                            </th>
                            <td>
                                <b>{Math.round(Number(props.item.sodium)/2400 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <b>Total Carbohydrate </b>
                                {props.item.total_carb + 'g'}
                            </th>
                            <td>
                                <b>{Math.round(Number(props.item.total_carb)/300 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                                Dietary Fiber {props.item.fiber + 'g'}
                            </th>
                            <td>
                                <b>{Math.round(Number(props.item.fiber)/25 * 100)}%</b>
                            </td>
                        </tr>
                        <tr>
                            <td className="blank-cell">
                            </td>
                            <th>
                                Sugars {props.item.sugar + 'g'}
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr className="thick-end">
                            <th colSpan="2">
                                <b>Protein </b>
                                {props.item.protein + 'g'}
                            </th>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="performance-facts__table--grid">
                        <tbody>
                        <tr>
                            <td colSpan="2">
                                Vitamin A {props.item.vit_a + '%'}
                            </td>
                            <td>
                                Vitamin C {props.item.vit_c + '%'}
                            </td>
                        </tr>
                        <tr className="thin-end">
                            <td colSpan="2">
                                Calcium {props.item.calcium + 'g'}
                            </td>
                            {/* <td>
                                Iron
                                6%
                            </td> */}
                        </tr>
                        </tbody>
                    </table>

                    <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

                    <table className="performance-facts__table--small small-info">
                        <thead>
                        <tr>
                            <td colSpan="2"></td>
                            <th>Calories: </th>
                            <th>2,000</th>
                            <th>2,500</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th colSpan="2">Total Fat</th>
                            <td>Less than</td>
                            <td>65g</td>
                            <td>80g</td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Saturated Fat</th>
                            <td>Less than</td>
                            <td>20g</td>
                            <td>25g</td>
                        </tr>
                        <tr>
                            <th colSpan="2">Cholesterol</th>
                            <td>Less than</td>
                            <td>300mg</td>
                            <td>300 mg</td>
                        </tr>
                        <tr>
                            <th colSpan="2">Sodium</th>
                            <td>Less than</td>
                            <td>2,400mg</td>
                            <td>2,400mg</td>
                        </tr>
                        <tr>
                            <th colSpan="3">Total Carbohydrate</th>
                            <td>300g</td>
                            <td>375g</td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th colSpan="2">Dietary Fiber</th>
                            <td>25g</td>
                            <td>30g</td>
                        </tr>
                        </tbody>
                    </table>

                    <p className="small-info">
                        Calories per gram:
                    </p>
                    <p className="small-info text-center">
                        Fat 9
                        &bull;
                        Carbohydrate 4
                        &bull;
                        Protein 4
                    </p>
                </section>
            )}
        </div>
    )
}
export default NutritionLabel;