const Medicine = (prop) => {

    const medicines = prop.medicineList

    return (
        <>
            <div className="medicine">
                <table className="table table-borderless" style={{ width: "75%" }}>
                    <tbody>
                        {
                            medicines.map((med, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="col">{med.eye}:</th>
                                        <td>{med.name}</td>
                                        <td>{med.type}</td>
                                        <td>{med.amount}</td>
                                        <td>{med.duration}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Medicine;