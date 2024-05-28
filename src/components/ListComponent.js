import React from 'react';
import './ListComponent.css';

const ListComponent = () => {
    const data = [
        { name: "Lauren Vickers", target: 90, actual: 45, points: 69 },
        { name: "Shazia Darby", target: 80, actual: 43, points: 26 },
        { name: "Zara Cain", target: 85, actual: 81, points: 124 },
        { name: "Edna Bradbury Parsons", target: 80, actual: 91, points: 26 },
        { name: "Clair Newton", target: 80, actual: 81, points: 82 },
        { name: "April Bruce Kieran", target: 90, actual: 92, points: 26 },
        { name: "Timothy Bower", target: 80, actual: 81, points: 82 },
        { name: "Tracie Atkin Stanton", target: 80, actual: 81, points: 82 }
    ];

    return (
        <div className="container">
            <h1>table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Target Score</th>
                        <th>Actual Score</th>
                        <th>Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td className="target-score">{item.target}%</td>
                            <td className="actual-score">
                                <span className={`score ${item.actual >= 50 ? 'high' : 'low'}`}>
                                    {item.actual}%
                                </span>
                            </td>
                            <td className="total-points">{item.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListComponent;
