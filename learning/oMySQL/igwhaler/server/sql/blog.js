export const selectAll = 'SELECT * FROM websites';

export const insertItem = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)';

export const updateItem = 'UPDATE websites SET name = ?, url = ? WHERE Id = ?';

export const deleteItem = 'DELETE FROM websites WHERE Id = ?';
