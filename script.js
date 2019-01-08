
var movies = [
    {   id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'harry.jpg'
    },
    {   id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawany',
        img:'lew.jpg'

    },
    {
        id: 3,
        title: 'Bękarty wojny',
        desc: 'Film o II wojne',
        img: 'wojna.jpg'
    },
    {
        id: 4,
         title: 'Włoska robota',
         desc: 'Film o złodziejach',
         img: 'robota.jpg'
    },
    {
        id: 5,
        title: 'Gladiator',
        desc: 'Film o imperium rzymskim',
        img: 'roma.jpg'
    }

];
var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
     React.createElement('img', {src: movie.img})
    );
});
var element = 
  React.createElement('div', {},
  React.createElement('h1', {}, 'Lista Filmów'),
  React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));