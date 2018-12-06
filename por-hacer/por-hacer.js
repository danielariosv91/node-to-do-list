const fs = require('fs');

let listToDo = [];

const saveDb = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const loadDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const create = (description) => {
    loadDb();

    let toDo = {
        description,
        complete: false,
    };

    listToDo.push(toDo);

    saveDb();

    return toDo;
}

const getList = () => {
    loadDb();
    return listToDo;
}

const updateList = (description, complete = true) => {
    loadDb();

    let index = listToDo.findIndex(task => {
        return task.description === description;
    });

    if (index >= 0) {
        listToDo(index).complete = complete;
        saveDb();
        return true;
    } else {
        return false;
    }
}

const deleteList = (description) => {
    loadDb();

    console.log('param:' + description);

    let newList = listToDo.filter(task => {
        
        
    });

    // if (listToDo.length === newList.length) {
    //     return false;
    // }

    // listToDo = newList;
    // saveDb();

    // return true;
}

module.exports = {
    create,
    getList,
    updateList,
    deleteList
}