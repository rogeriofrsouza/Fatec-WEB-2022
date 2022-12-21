let solver = require("./node_modules/javascript-lp-solver");
const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    orgim: '/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
const port = 50040;

app.get('/solver/:id', (req, res) => {
    let conta = req.params.id;
    conta = JSON.parse(conta);
    let resposta = resolve(conta);
    res.send(resposta);
})

app.listen(port, () => console.log(`http://localhost:${port}`));

function resolve(conta) {
    model = {
        "optimize": "profit",
        "opType": "max",
        "constraints": {
            "hours": { "max": conta.totalHours },
            "material": { "max": conta.totalMaterial }
        },
        "variables": {
            "x1": { "profit": conta.profit1, "x1": 1, "material": conta.material1, "hours": conta.hours1 },
            "x2": { "profit": conta.profit2, "x2": 1, "material": conta.material2, "hours": conta.hours2 },
            "x3": { "profit": conta.profit3, "x3": 1, "material": conta.material3, "hours": conta.hours3 },
            "x4": { "profit": conta.profit4, "x4": 1, "material": conta.material4, "hours": conta.hours4 }
        },
        "ints": { "x1": 1, "x2": 1, "x3": 1, "x4": 1 }
    };
    let solved = solver.Solve(model);
    
    return solved;
}
