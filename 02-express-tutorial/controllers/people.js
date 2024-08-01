const { people } = require('../data');

const getPeople = (req, res) => {
    res.json(people);
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, name });
};

const getPerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const person = people.find((p) => p.id === idToFind);
    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({ success: false, message: "Person not found" });
    }
};

const updatePerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const { name } = req.body;
    const personIndex = people.findIndex((p) => p.id === idToFind);

    if (personIndex !== -1) {
        people[personIndex].name = name || people[personIndex].name;
        res.status(200).json({ success: true, person: people[personIndex] });
    } else {
        res.status(404).json({ success: false, message: "Person not found" });
    }
};

const deletePerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === idToFind);

    if (personIndex !== -1) {
        people.splice(personIndex, 1);
        res.status(200).json({ success: true, message: "Person deleted" });
    } else {
        res.status(404).json({ success: false, message: "Person not found" });
    }
};

module.exports = { getPeople, addPerson, getPerson, updatePerson, deletePerson };

