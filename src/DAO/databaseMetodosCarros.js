import Database from "../infra/configDB.js";

class databaseMetodosCarros {
  static createTableCarros() {
    const carros = `CREATE TABLE IF NOT EXISTS carros(
            id   INTEGER PRIMARY KEY AUTOINCREMENT,
            modelo VARCHAR,
            preco   INT
        )`;
    return new Promise((resolve, reject) => {
      Database.run(carros, (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve("tabela criada com sucesso");
        }
      });
    });
  }
  static inserirCarro(carros) {
    const query = "INSERT INTO carros VALUES (?,?,?)";
    const body = Object.values(carros);
    return new Promise((resolve, reject) => {
      Database.run(query, [...body], (e) => {
        if (e) {
          reject(e);
        } else {
          resolve({
            message: "novo carro na garagem",
          });
        }
      });
    });
  }
  static updateCarro(carro, id) {
    const query = ` UPDATE carro SET (modelo,preco) = (?,?) WHERE id = ?`;
    const body = Object.values(carro);
    return new Promise((resolve, reject) => {
      Database.run(query, [carro.modelo, carro.preco, id], (e, result) => {
        if (e) {
          reject(e);
        } else {
          resolve({
            message: "modelo atualizado",
          });
        }
      });
    });
  }
  static selecionarCarro(id) {
    const query = `SELECT * FROM carro WHERE id = ?`;
    return new Promise((resolve, reject) => {
      Database.get(query, id, (e, result) => {
        if (e) {
          reject(e);
        } else {
          resolve(result);
        }
      });
    });
  }
  static selecionarCarro(){
    const query = `SELECT * FROM carro`
    return new Promise((resolve, reject) => {
        Database.all(query, (e, rows) => {
            if (e) {
                reject(e)
            }else{
                resolve({rows:rows});
            }
        })
    })
  }
  static deleteCarro(id){
    const query = `DELETE FROM carro WHERE id = ?`
    return new Promise((resolve, reject) => {
        Database.run(query, id, (e) => {
            if (e) {
                reject(e)
            }else
            resolve ({message:"carro deletado"})
        })
    })
  }
}

export default databaseMetodosCarros
