const { addNoteHandler,getAllNotesHandler,editNoteByidHandler, getNoteIdhandeler, deleteNoteByidHandler } = require('./handler');
const notes = require('./notes');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: {
              origin: ['*'],
            },
          },
        
    },

    {
      method:'GET',
      path: '/notes/{id}',
      handler: getNoteIdhandeler,
    },

    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },



    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByidHandler,
  },

  
  {
 
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByidHandler,
  },


];

module.exports = routes;