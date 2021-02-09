const express = require("express"),
  morgan = require("morgan");

const app = express();
app.use(express.static("public"));
app.use(morgan("common"));
const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
let users = [
  {
    id: 1,
    Username: "Alberto Serafini",
    Password: "1234",
    Email: "Alberto@gmail.com",
    Birthday: "02/04/1977",
    FavoriteMovies: [],
  },
  {
    id: 2,
    Username: "Julie Serafini",
    Password: "5678",
    Email: "Julie@gmail.com",
    Birthday: "9/05/1979",
    FavoriteMovies: [],
  },
  {
    id: 3,
    Username: "Dorothea Serafini",
    Password: "7777",
    Email: "Dorothea@gmai.com",
    Birthday: "11/16/1990",
    FavoriteMovies: [],
  },
];
let movies = [
  {
    id: 1,
    Title: "Silence of the Lambs",
    Description:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio:
        "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 2,
    Title: "Joker",
    Description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    Genre: {
      Name: "Drama",
      Description:
        "In film and television, drama is a genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. ... These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
    Director: {
      Name: "Todd Phillips",
      Bio:
        "Todd Phillips was born on December 20, 1970 in Brooklyn, New York City, New York, USA as Todd Bunzl. He is a producer and director, known for Joker (2019), Old School (2003) and Due Date (2010).",
      Birth: "1970",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 3,
    Title: "The Notebook",
    Description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    Genre: {
      Name: "Romance",
      Description:
        "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters and the journey that their love takes them through dating, courtship or marriage.",
    },
    Director: {
      Name: "Nick Cassavetes",
      Bio:
        "Nick Cassavetes was born in New York City, the son of actress Gena Rowlands and Greek-American actor and film director John Cassavetes. As a child, he appeared in two of his father's films: Husbands (1970) and A Woman Under the Influence (1974). After spending so much of his youth surrounded by the film industry, Cassavetes initially decided he did not want to go into the field. He instead attended Syracuse University on a basketball scholarship. His athletic career was effectively ended by an injury, and he decided to rethink his aspirations, ultimately deciding to attend his parents' alma mater, the American Academy of Dramatic Arts in New York. He has appeared in the films, Face/Off (1997), The Wraith (1986), Life (1999), Class of 1999 II: The Substitute (1994), Backstreet Dreams (1990) and The Astronaut's Wife (1999), among others. He has directed several films, including John Q (2002), Alpha Dog (2006), She's So Lovely (1997), Unhook the Stars (1996), The Notebook (2004), and My Sister's Keeper (2009). He also adapted the screenplay for Blow (2001) and wrote the dialogue for the Justin Timberlake music video, \"What Goes Around... Comes Around\". In 1985, Cassavetes married Isabelle Rafalovich. They had two daughters together, Virginia Cassavetes (Virginia Sara Cassavetes) (born in 1986) and Sasha Cassavetes (born in 1988), before divorcing. He then married Heather Wahlquist (Heather \"Queenie\" Wahlquist), who has appeared in several of his films, including a small role in The Notebook (2004) as Sara, a secondary character and best friend to the female lead Allie Hamilton, portrayed by Rachel McAdams. The movie is effectively a family project, as Cassavetes's own mother, Gena Rowlands, appears as the older, married Allie Calhoun.",
      Birth: "1959",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    Featured: true,
  },
  {
    id: 4,
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Description:
      "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure. Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.",
    },
    Director: {
      Name: "David Yates",
      Bio:
        "David Yates was born on October 8, 1963 in St. Helens, Merseyside, England. He is a director and producer, known for Harry Potter and the Deathly Hallows: Part 2 (2011), Harry Potter and the Order of the Phoenix (2007) and The Legend of Tarzan (2016).",
      Birth: "1963",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg",
    Featured: true,
  },
  {
    id: 5,
    Title: "Inception",
    Description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    Genre: {
      Name: "Action",
      Description:
        "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio:
        "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. At 7 years old, Nolan began making short movies ... See full bio »",
      Birth: "1970",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 6,
    Title: "2001: A Space Odyssey",
    Description:
      "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    Genre: {
      Name: "Sci-fi",
      Description:
        "Science fiction, abbreviation SF or sci-fi, a form of fiction that deals principally with the impact of actual or imagined science upon society or individuals.",
    },
    Director: {
      Name: "Stanley Kubrick",
      Bio:
        "Stanley Kubrick was born in Manhattan, New York City, to Sadie Gertrude (Perveler) and Jacob Leonard Kubrick, a physician. His family were Jewish immigrants (from Austria, Romania, and Russia). Stanley was considered intelligent, despite poor grades at school. Hoping that a change of scenery would produce better academic performance, Kubrick's ... See full bio",
      Birth: "1928",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 7,
    Title: "The Thing",
    Description:
      "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    Genre: {
      Name: "Horror",
      Description:
        "A horror film is one that seeks to elicit fear in its audience for entertainment purposes. Horror films additionally aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown and macabre. ... Horror may also overlap with the fantasy, supernatural fiction, and thriller genres.",
    },
    Director: {
      Name: "John Carpenter",
      Bio:
        "John Howard Carpenter was born in Carthage, New York, to mother Milton Jean (Carter) and father Howard Ralph Carpenter. His family moved to Bowling Green, Kentucky, where his father, a professor, was head of the music department at Western Kentucky University. He attended Western Kentucky University and then USC film school in Los Angeles. He began... See full bio",
      Birth: "1948",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 8,
    Title: "Rosemary's Baby",
    Description:
      "A young couple trying for a baby move into a fancy apartment surrounded by peculiar neighbors.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama: The drama genre features stories with high stakes and a lot of conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters.",
    },
    Director: {
      Name: "Roman Polanski",
      Bio:
        "Roman Polanski is a Polish film director, producer, writer and actor. Having made films in Poland, Britain, France and the USA, he is considered one of the few truly international filmmakers. Roman Polanski was born in Paris in 1933. His parents returned to Poland from France in 1936, three years before World War II began. On Germany's invasion in ... See full bio",
      Birth: "1933",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 9,
    Title: "Eyes Wide Shut",
    Description:
      "A New York City doctor embarks on a harrowing, night-long odyssey of sexual and moral discovery after his wife reveals a painful secret to him.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.",
    },
    Director: {
      Name: "Stanley Kubrick",
      Bio:
        "Stanley Kubrick was born in Manhattan, New York City, to Sadie Gertrude (Perveler) and Jacob Leonard Kubrick, a physician. His family were Jewish immigrants (from Austria, Romania, and Russia). Stanley was considered intelligent, despite poor grades at school. Hoping that a change of scenery would produce better academic performance, Kubrick's ... See full bio",
      Birth: "1928",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMjA5NTUwNjI1N15BMl5BanBnXkFtZTYwOTE1ODc5._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 10,
    Title: "The Tenant",
    Description:
      "A bureaucrat rents a Paris apartment where he finds himself drawn into a rabbit hole of dangerous paranoia.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.",
    },
    Director: {
      Name: "Roman Polanski",
      Bio:
        "Roman Polanski is a Polish film director, producer, writer and actor. Having made films in Poland, Britain, France and the USA, he is considered one of the few truly international filmmakers. Roman Polanski was born in Paris in 1933. His parents returned to Poland from France in 1936, three years before World War II began. On Germany's invasion in ... See full bio",
      Birth: "1933",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BYmVhMDQ1YWUtYjgxOS00NzYyLWI0ZGItNTg3ZjM0MmQ4NmIwXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_UY268_CR10,0,182,268_AL_.jpg",
    Featured: true,
  },
];

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my book club!");
});
app.get("/secreturl", (req, res) => {
  res.send("This is a secret url with super top-secret content.");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

app.get("/movies", (req, res) => {
  res.json(movies);
});
app.get("/movies/:Title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Title === req.params.Title;
    })
  );
});
app.get("/movies/director/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Director.Name === req.params.Name;
    })
  );
});

app.get("/movies/genres/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Genre.Name === req.params.Name;
    })
  );
});
//User endpoints
app.get("/users", function (req, res) {
  res.json(users);
});
//adds user
app.post("/users", (req, res) => {
  res.status(500).send("User added!");
});

//updates user information
app.put("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

app.get("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

//allows user to add movie to favorites
app.post("/users/:Username/favorites", (req, res) => {
  res.status(500).send("Succesfully added movie to favorites!");
});

//allows user to remove movie from favorites
app.delete("/users/:Username/favorites", (req, res) => {
  res.status(500).send("Successfully removed movie from favorites.");
});

//allows user to deregister
app.delete("/users/:Email", (req, res) => {
  res.status(500).send("User Deleted.");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
