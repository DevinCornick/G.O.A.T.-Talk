const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const goat = {
    'michaeljordan':{
        'name': 'MICHAEL JORDAN',
        'givenName': 'Michael Jeffrey Jordan',
        'nicknames': '(Mike, Air Jordan, M.J., His Airness, Money, Black Cat, Mr. June, G.O.A.T., Superman, Captain Marvel, Black Jesus)',
        'position': 'Shooting Guard and Small Forward ▪ Shoots: Right',
        'heightWeight': '6-6, 198lb (198cm, 89kg)',
        'born': 'February 17, 1963 (Age: 59) in Brooklyn, New York',
        'college': 'UNC',
        'highSchool': 'Emsley A. Laney in Wilmington, North Carolina',
        'draft': 'Chicago Bulls, 1st round (3rd pick, 3rd overall), 1984 NBA Draft',
        'nbaDebut': 'October 26, 1984',
        'hallOfFame': 'Inducted as a Player in 2009',
        'careerLength': '15 years',
        'reference': 'https://www.basketball-reference.com/players/j/jordami01.html',
    },
    'kobebryant':{
        'name': 'KOBE BRYANT',
        'givenName': 'Kobe Bean Bryant',
        'nicknames': '(Black Mamba, KB24, Vino, Showboat, Little Flying Warrior, The Eighth Man, Lord of the Rings)',
        'position': 'Shooting Guard and Small Forward ▪ Shoots: Right',
        'heightWeight': '6-6, 212lb (198cm, 96kg)',
        'born': 'August 23, 1978, in Philadelphia, Pennsylvania',
        'died': 'January 26, 2020 (Aged 41-156d)',
        'notableRelatives': 'Father Joe Bryant; Uncle Chubby Cox',
        'highSchool': 'Lower Merion in Ardmore, Pennsylvania',
        'draft': 'Charlotte Hornets, 1st round (13th pick, 13th overall), 1996 NBA Draft',
        'nbadebut': 'November 3, 1996',
        'hallOfFame': 'Inducted as Player in 2020',
        'careerLength': '20 years',
        'reference': 'https://www.basketball-reference.com/players/b/bryanko01.html',
    },
    'lebronjames':{
        'name': 'LEBRON JAMES',
        'givenName': 'LeBron Raymone James',
        'nicknames': '(King James, LBJ, Chosen One, Bron-Bron, The Little Emperor, The Akron Hammer, L-Train)',
        'position': 'Small Forward, Power Forward, Point Guard, and Shooting Guard ▪ Shoots: Right',
        'heightWeight': '6-9, 250lb (206cm, 113kg)',
        'born': 'December 30, 1984, in Akron, Ohio',
        'highSchool': 'St. Vincent-St. Mary in Akron, Ohio',
        'recruitingRank': '2003 (1)',
        'draft': 'Cleveland Cavaliers, 1st round (1st pick, 1st overall), 2003 NBA Draft',
        'nbaDebut': 'October 29, 2003',
        'experience': '18 years',
        'reference': 'https://www.basketball-reference.com/players/j/jamesle01.html,'
    },
    'kevindurant':{
        'name': 'KEVIN DURANT',
        'givenName': 'Kevin Wayne Durant',
        'nicknames': '(Durantula, KD, Slim Reaper, Easy Money Sniper, The Servant, Green Room)',
        'position': 'Small Forward, Power Forward, and Shooting Guard ▪ Shoots: Right',
        'heightWeight': '6-10, 240lb (208cm, 108kg)',
        'born': 'September 29, 1988, in Washington, District of Columbia',
        'college': 'Texas',
        'highSchool': 'Montrose Christian School in Rockville, Maryland',
        'recruitingRank': '2006 (2)',
        'draft': 'Seattle SuperSonics, 1st round (2nd pick, 2nd overall), 2007 NBA Draft',
        'nbaDebut': 'October 31, 2007',
        'experience': '13 years',
        'reference': 'https://www.basketball-reference.com/players/d/duranke01.html',
    },
    'magicjohnson':{
        'name': 'MAGIC JOHNSON',
        'givenName': 'Earvin Johnson Jr.',
        'nicknames': '(Magic, Buck, E.J. the Deejay, Tragic, The Magic Man, Junior)',
        'position': 'Point Guard, Shooting Guard, and Power Forward ▪ Shoots: Right',
        'heightWeight': '6-9, 215lb (206cm, 97kg)',
        'born': 'August 14, 1959, in Lansing, Michigan',
        'college': 'Michigan State',
        'highSchool': 'Everett in Lansing, Michigan',
        'draft': 'Los Angeles Lakers, 1st round (1st pick, 1st overall), 1979 NBA Draft',
        'nbaDebut': 'October 12, 1979',
        'hallOfFame': 'Inducted as a Player in 2002',
        'careerLength': '13 years',
        'reference': 'https://www.basketball-reference.com/players/j/johnsma02.html',
    },
    'stephcurry':{
        'name': 'STEPH CURRY',
        'givenName':'Wardell Stephen Curry II',
        'nicknames':'(Steph, Baby-Faced Assassin, Chef Curry, The Human Torch, Threezus)',
        'Position': 'Point Guard ▪ Shoots: Right',
        'heightWeight': '6-2, 185lb (188cm, 83kg)',
        'born': 'March 14, 1988, in Akron, Ohio',
        'notableRelatives': 'Brother Seth Curry; Brother-in-law Damion Lee; Father Dell Curry',
        'college': 'Davidson',
        'highSchool': 'Charlotte Christian in Charlotte, North Carolina',
        'draft': 'Golden State Warriors, 1st round (7th pick, 7th overall), 2009 NBA Draft',
        'nbaDebut': 'October 28, 2009',
        'experience': '12 years',
        'reference': 'https://www.basketball-reference.com/players/c/curryst01.html',
    },
    'kareemabduljabaar':{
        'name': 'KAREEM ABDUL JABAAR',
        'givenName': 'Ferdinand Lewis Alcindor Jr.',
        'nicknames': '(Lew, Cap, Murdock, Big Fella)',
        'position': 'Center ▪ Shoots: Right',
        'heightWeight': '7-2, 225lb (218cm, 102kg)',
        'born': 'April 16, 1947, in New York, New York',
        'college': 'UCLA',
        'highSchool': 'Power Memorial in New York, New York',
        'draft': 'Milwaukee Bucks, 1st round (1st pick, 1st overall), 1969 NBA Draft',
        'nbaDebut': 'October 18, 1969',
        'hallOfFame': 'Inducted as a Player in 1995',
        'careerLength': '20 years',
        'Reference': 'https://www.basketball-reference.com/players/a/abdulka01.html',
    },
    'shaquilleoneal':{
        'name': 'SHAQUILLE O\'NEAL',
        'givenName': 'Shaquille Rashaun O\'Neal',
        'nicknames': '(Shaq, Diesel, The Big Aristotle, Superman, Shaq Fu, Shaq Daddy, Warrior)',
        'position': 'Center ▪ Shoots: Right',
        'heightWeight': '7-1, 325lb (216cm, 147kg)',
        'born': 'March 6, 1972, in Newark, New Jersey',
        'college': 'LSU',
        'highSchool': 'Cole in San Antonio, Texas',
        'draft': 'Orlando Magic, 1st round (1st pick, 1st overall), 1992 NBA Draft',
        'nbaDebut': 'November 6, 1992',
        'hallOfFame': 'Inducted as a Player in 2016',
        'careerLength': '19 years',
        'Reference': 'https://www.basketball-reference.com/players/o/onealsh01.html',
    },
    'timduncan':{
        'name': 'TIM DUNCAN',
        'givenName': 'Timothy Theodore Duncan',
        'nicknames': '(Timmy, The Big Fundamental, Groundhog Day, Old Man Riverwalk, The Stone Buddha)',
        'position': 'Center and Power Forward ▪ Shoots: Right',
        'heightWeight': '6-11, 250lb (211cm, 113kg)',
        'born': 'April 25, 1976, in St. Croix, U.S. Virgin Islands',
        'college': 'Wake Forest',
        'highSchool': 'Saint Dunstan\'s Episcopal in Saint Croix, U.S. Virgin Islands',
        'draft': 'San Antonio Spurs, 1st round (1st pick, 1st overall), 1997 NBA Draft',
        'nbaDebut': 'October 31, 1997',
        'hallOfFame': 'Inducted as a Player in 2020',
        'careerLength': '19 years',
        'reference': 'https://www.basketball-reference.com/players/d/duncati01.html',
    },
    'kevingarnett':{
        'name': 'KEVIN GARNETT',
        'givenName': 'Kevin Maurice Garnett',
        'nicknames': '(KG, The Big Ticket, The Kid)',
        'position': 'Power Forward, Center, and Small Forward ▪ Shoots: Right',
        'heightWeight': '6-11, 240lb (211cm, 108kg)',
        'born': 'May 19, 1976, in Greenville, South Carolina',
        'notableRelatives': 'Cousin Shammond Williams',
        'highSchools': 'Mauldin in Mauldin, South Carolina, Farragut Career Academy in Chicago, Illinois',
        'draft': 'Minnesota Timberwolves, 1st round (5th pick, 5th overall), 1995 NBA Draft',
        'nbaDebut': 'November 3, 1995',
        'hallOfFame': 'Inducted as a Player in 2020',
        'careerLength': '21 years',
        'reference': 'https://www.basketball-reference.com/players/g/garneke01.html',

    },
    'unknown':{
        'name': 'REALLY???',
        'givenName': 'unknown',
        'nicknames': 'unknown',
        'position': 'unknown',
        'heightWeight': 'unknown',
        'born': 'unknown',
        'college': 'unknown',
        'highSchool': 'unknown',
        'draft': 'unknown',
        'nbaDebut': 'unknown',
        'hallOfFame': 'unknown',
        'careerLength': 'unknown',
        'link': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const goatName =req.params.name.toLowerCase()
    if( goat[goatName] ){
        res.json(goat[goatName])
    }else{
        res.json(goat['unknown'])
    }
    res.json(goat)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on ${PORT}`)
})