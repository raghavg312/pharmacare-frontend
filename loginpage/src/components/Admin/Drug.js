import axios from "axios";
import { Link } from "react-router-dom";
import {
    Button
} from "reactstrap";
import baseUrl from "../api's/base_url";

const DrugAdmin = ({ drug, flag, deletionView, index }) => {
    const deleteDrugHandler = () => {
        axios.delete(baseUrl + "/drug/" + drug.drugId).then(
            (response) => {
                console.log(response);
                deletionView(drug.drugId);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{drug.drugId}</td>
            <td>{drug.drugName}</td>
            <td>{drug.expiryDate}</td>
            <td> {drug.drugQuantity}</td>
            <td>{drug.price} </td>
            {!flag ? (
                <>
                    <td>
                        <Link to={"/admin/update-drug/" + drug.drugId}>
                            <Button color="primary" className="mx-1">
                                update
                            </Button>
                        </Link>
                        <Button color="danger" onClick={deleteDrugHandler}>
                            delete
                        </Button>
                    </td>
                </>
            ) : (
                <td></td>
            )}
        </tr>
    );
};

export default DrugAdmin;